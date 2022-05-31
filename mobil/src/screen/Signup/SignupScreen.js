import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import styles from "./SignupScreen.Style";
import axios from "../../api/axios";
import { AuthContainer, Container } from "../../styles/Global.styles";

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("zakaria");
  const [lastName, setLastName] = useState("el arfaoui");
  const [email, setEmail] = useState("efdf@gmail.com");
  const [phone, setPhone] = useState("0643433434");
  const [password, setPassword] = useState("dafdfdfa");

  const handelSubmit = async () => {
    const user = { firstName, lastName, email, phone, password };
    try {
      const { data } = await axios.post("/register", user);
      data?.error === false && navigation.navigate("Login");
    } catch (error) {
      error?.response?.data?.message
        ? Alert.alert("Invalid input", error?.response?.data?.message, [
            { text: "OK" },
          ])
        : console.error(error?.message);
    }
  };

  return (
    <AuthContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>SIGN UP</Text>
          <Text>Complete this step for best adjustment</Text>
        </View>
        <View style={styles.form}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            placeholder="First Name"
            style={styles.input}
            value={firstName}
            onChangeText={(value) => setFirstName(value)}
          />
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            value={lastName}
            onChangeText={(value) => setLastName(value)}
          />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            placeholder="Phone"
            keyboardType="phone-pad"
            style={styles.input}
            value={phone}
            onChangeText={(value) => setPhone(value)}
          />
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
          <TouchableOpacity style={styles.signupButton} onPress={handelSubmit}>
            <Text style={styles.signupButtonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            I already have a account ?
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.footerLink}> Sign in</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </ScrollView>
    </AuthContainer>
  );
};

export default SignupScreen;
