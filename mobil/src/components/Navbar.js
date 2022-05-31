import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import globalStyles from "../styles/global";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navbar}>
      <Pressable
        style={styles.navbarItem}
        onPress={() => navigation.navigate("Home")}
      >
        <SimpleLineIcons
          name="home"
          size={20}
          color={globalStyles.color.button}
        />
        <Text>Home</Text>
      </Pressable>
      <Pressable
        style={styles.navbarItem}
        onPress={() => navigation.navigate("Menu")}
      >
        <Feather name="search" size={20} color="black" />
        <Text>Search</Text>
      </Pressable>
      <Pressable
        style={styles.CartScreen}
        onPress={() => navigation.navigate("Cart")}
      >
        <FontAwesome name="shopping-cart" size={24} color="#fff" />
      </Pressable>
      <Pressable
        style={styles.navbarItem}
        onPress={() => navigation.navigate("Order")}
      >
        <MaterialCommunityIcons
          name="note-text-outline"
          size={20}
          color="black"
        />
        <Text>Order</Text>
      </Pressable>
      <Pressable
        style={styles.navbarItem}
        // onPress={() => navigation.navigate("Home")}
      >
        <MaterialCommunityIcons name="account" size={20} color="black" />
        <Text>Account</Text>
      </Pressable>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 50,
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: globalStyles.color.border,
    // position: absolute,
    left: 0,
    bottom: 0,
  },
  navbarItem: {
    alignItems: "center",
    padding: 10,
    zIndex: 99999,
  },
  CartScreen: {
    width: 50,
    height: 50,
    backgroundColor: globalStyles.color.button,
    borderRadius: 50 / 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 20,
    shadowColor: globalStyles.color.button,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navbarMiddle: {
    width: 70,
    height: 60,
    borderRadius: 60 / 2,
    backgroundColor: globalStyles.color.border,
    position: "relative",
    bottom: 20,
  },
});
