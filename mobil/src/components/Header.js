import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View ,Image} from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Entypo name="menu" size={25} color="black" />
      <View style={styles.address}>
        <Entypo name="location-pin" size={15} color="black" />
        <Text>Address</Text>
      </View>
      <Image
        source={{
          uri: "https://picsum.photos/200",
          width: 35,
          height: 35,
        }}
        style={{
          borderRadius: 35 / 2,
        }}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
