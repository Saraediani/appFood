import { useState, useEffect } from "react";

import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

const PersistLogin = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (err) {
        console.error(err);
      }
    };

    !auth?.accessToken && verifyRefreshToken()
  }, []);

  return (
    <>{!rememberMe ? <Outlet /> : isLoading ? <LoadingScreen /> : <Outlet />}</>
  );
};

export default PersistLogin;
