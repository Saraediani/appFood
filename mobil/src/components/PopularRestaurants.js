import React from "react";
import { StyleSheet, View, Text , Image} from "react-native";

const PopularRestaurants = ({ item}) => (
  <View style={styles.popularRestaurantItem}>
    <Image
      source={{
        uri: item.image,
        width: "100%",
        height: 150,
      }}
      style={{ borderRadius: 10, marginRight: 10 }}
    />
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <Text>{item.name}</Text>
      <Text>{item.rating}</Text>
    </View>
  </View>
);

export default PopularRestaurants;

const styles = StyleSheet.create({
  popularRestaurant: {
    // flexDirection: "row",
    borderEndColor: "red",
  },
  popularRestaurantItem: {
    width: 150,
    marginRight: 20,
  },
});
