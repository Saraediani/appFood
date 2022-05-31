import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import styles from "./SigninScreen.Style";
import axios from "../../api/axios";
import jwtDecode from "jwt-decode";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";


const SigninScreen = ({ navigation }) => {
  const { setAuth } = useAuth();
  const {setCart} = useCart()

  const [email, setEmail] = useState("efdf@gmail.com");
  const [password, setPassword] = useState("dafdfdfa");

  const handelSubmit = async () => {
    const user = { email, password };
    try {
      const { data } = await axios.post("/login", user, {
        withCredentials: true,
      });
      const { accessToken } = data;
      const payload = jwtDecode(accessToken);
      const { _id, email, firstName, lastName, role, cart } = payload;

      setAuth({ _id, email, firstName, lastName, role, accessToken, cart });
      setCart(cart);
      navigation.navigate("Menu");
    } catch (error) {
      error?.response?.data?.message
        ? Alert.alert("Invalid input", error?.response?.data?.message, [
            { text: "OK" },
          ])
        : console.error(error?.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SIGN IN</Text>
        <Text>Complete this step for best adjustment</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          keyboardType="visible-password"
          style={styles.input}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
        <View>
          <Text style={{ fontSize: 10, textAlign: "right" }}>
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity style={styles.signupButton} onPress={handelSubmit}>
          <Text style={styles.signupButtonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          I don't have a account ?
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.footerLink}> Sign Up</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </View>
  );
};

export default SigninScreen;
