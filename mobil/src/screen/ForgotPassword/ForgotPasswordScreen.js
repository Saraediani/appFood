import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>FORGOT PASSWORD</Text>
        <Text>Enter your email to request a password reset</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
        />
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>SEND NOW</Text>
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
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F4F7FE",
    padding: 20,
  },
  header: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  form: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  input: {
    width: "90%",
    backgroundColor: "#F8F8F8",
    color: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#dadae8",
    padding: 10,
    marginBottom: 30,
  },
  signupButton: {
    width: "90%",
    backgroundColor: "#FE7F5E",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#dadae8",
  },
  signupButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    textAlign: "center",
  },
  footerLink: {
    color: "#FE7F5E",
  },
});
