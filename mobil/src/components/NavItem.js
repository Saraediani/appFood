import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NavItem = () => {
  return (
    <View style={styles.navbarItem}>
      <SimpleLineIcons
        name="home"
        size={20}
        color={globalStyles.color.button}
      />
      <Text>Home</Text>
    </View>
  );
};

export default NavItem;

const styles = StyleSheet.create({
  navbarItem: {
    alignItems: "center",
  },
});
