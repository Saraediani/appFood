import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  header: {
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
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
  label: {
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 5,
    opacity: 0.6,
  },
  input: {
    width: "90%",
    backgroundColor: "#F8F8F8",
    color: "#000",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#dadae8",
    padding: 10,
    marginBottom: 10,
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
    marginTop: 10,
  },
  footerText: {
    textAlign: "center",
  },
  footerLink: {
    color: "#FE7F5E",
  },
});

export default styles;
