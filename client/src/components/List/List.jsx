import React, { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useGlobalContext from "../../hooks/useGlobalContext";
import Modal from "../Modal";
import Table from "../Table/Table";
import { AddButton, Header, StyledList, Title } from "./List.styles";

const List = ({ title, route, children }) => {
  const { openModal, isSidebarOpen, isModalOpen } = useGlobalContext();
  const axiosPrivate = useAxiosPrivate();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [headers, setHeaders] = useState({});
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [initialRoute, setInitialRoute] = useState(route);
  const [currentUrl, setCurrentUrl] = useState(
    `${initialRoute}?page=${currentPage}`
  );

  console.log('-----------------------------------------------------------------------------------------');
  console.log(currentUrl, "first currentUrl");
  console.log(initialRoute, "first initialRoute");
  console.log(currentPage, "first currentPage");
  console.log('-----------------------------------------------------------------------------------------');
  
  
  useEffect(() => {
    setCurrentPage((prev) => 0);
    setInitialRoute(prev => route);
    console.log('useEff route');
  }, [route]);

  useEffect(() => {
setCurrentUrl((prev) => `${initialRoute}?page=${currentPage}`);
  }, [initialRoute, currentPage])
  
  console.log(currentUrl, "2 currentUrl");
  console.log(initialRoute, "2 initialRoute");
  console.log(currentPage, "2 currentPage");
  console.log('-----------------------------------------------------------------------------------------');

  // useEffect(() => {
  //   setCurrentUrl(`${route}`);
  // }, [currentPage]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    getData(currentUrl, controller, isMounted);

    return () => {
      isMounted = false;
      setIsLoading(false);
      controller.abort();
    };
  }, [currentUrl, isModalOpen, currentPage]);

  const getData = async (url, signalController, isMounted) => {
    try {
      const { data } = await axiosPrivate.get(`/${url}`, {
        signal: signalController.signal,
      });
      if (isMounted) {
        setData(data.data);
        const tableHeaders = Object.keys(data.data[0]);
        tableHeaders.shift();
        setHeaders((prev) => tableHeaders);
        setNumberOfPages(data.numberOfPages);
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // const handelDelete = async (id) => {
  //   try {
  //     await axiosPrivate.delete(`/${route}/${id}`);
  //     const dataList = data.filter((data) => data._id !== id);
  //     setData(dataList);
  //   } catch (error) {
  //     if (error.response) {
  //       console.log(error.response.data.message);
  //     } else {
  //       console.log(error.message);
  //     }
  //   }
  // };

  // const pagination = (url, page) => {
  //   setIsLoading(true);
  //   if (currentUrl.includes("page")) {
  //     let splitString = currentUrl.split("/");
  //     let index = splitString.findIndex((str) => str.includes("page"));
  //     splitString[index] = `?${url}`;
  //     const newUrl = splitString.join("/");
  //     setCurrentUrl((prev) => newUrl);
  //     setCurrentPage((prev) => page);
  //   } else {
  //     setCurrentUrl((prev) => `${prev}?${url}`);
  //     setCurrentPage((prev) => page);
  //   }
  // };

  const filter = (filter, value) => {
    setIsLoading(true);
    if (currentUrl.includes(filter)) {
      let splitString = currentUrl.split("&");
      let index = splitString.findIndex((str) => str.includes(filter));
      splitString[index] = `${filter}=${value}`;
      const newUrl = splitString.join("&");
      setCurrentUrl((prev) => newUrl);
      setIsLoading(false);
    } else {
      setCurrentUrl((prev) => `${currentUrl}&${filter}=${value}`);
      console.log(currentUrl);
      setIsLoading(false);
    }
  };


  return (
    <StyledList isSidebarOpen={isSidebarOpen}>
      <Header>
        <Title>{title}</Title>
        <AddButton onClick={openModal}>
          <BsPlusLg />
        </AddButton>
      </Header>
      <Modal backgroundColor="#141c26">{children}</Modal>
      {headers.length > 0 && (
        <Table
          headers={headers}
          tableData={data}
          isLoading={isLoading}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          // handelDelete={handelDelete}
          filter={filter}
        />
      )}
    </StyledList>
  );
};

export default List;
