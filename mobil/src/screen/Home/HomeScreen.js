import { EvilIcons, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import PopularRestaurants from "../../components/PopularRestaurants";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout"
import globalStyles from "../../styles/global";
import { Heading, HeadingLink, HeadingTitle, Search, SearchInput, NearbyPlaceItem } from "./HomeScreen.styles";
const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const { auth } = useAuth()
  const logout = useLogout();
const signOut = async () => {
    await logout();
  };

  const renderItem = ({ item }) => <PopularRestaurants item={item} />;

  return (
    <>
      <Header />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Search>
          <EvilIcons
            name="search"
            size={20}
            color="black"
            style={{ marginRight: 5 }}
          />
          <SearchInput
            placeholder="Find your food"
            onChangeText={(value) => setSearch(value)}
          />
          <Ionicons
            name="filter-outline"
            size={20}
            color="black"
            style={{ marginLeft: "auto" }}
          />
        </Search>
        <Heading>
          <HeadingTitle>Nearby Place</HeadingTitle>
          <Pressable>
            <HeadingLink>See All</HeadingLink>
          </Pressable>
        </Heading>
        <View style={styles.nearbyPlace}>
          <NearbyPlaceItem>
            <Image
              source={{
                uri: "https://picsum.photos/200",
                width: 60,
                height: 60,
              }}
              style={{ borderRadius: 10, marginRight: 10 }}
            />
            <View>
              <Text>Name</Text>
              <Text>Address</Text>
            </View>
          </NearbyPlaceItem>
          <NearbyPlaceItem>
            <Image
              source={{
                uri: "https://picsum.photos/200",
                width: 60,
                height: 60,
              }}
              style={{ borderRadius: 10, marginRight: 10 }}
            />
            <View>
              <Text>Name</Text>
              <Text>Address</Text>
            </View>
          </NearbyPlaceItem>
          <NearbyPlaceItem>
            <Image
              source={{
                uri: "https://picsum.photos/200",
                width: 60,
                height: 60,
              }}
              style={{ borderRadius: 10, marginRight: 10 }}
            />
            <View>
              <Text>Name</Text>
              <Text>Address</Text>
            </View>
          </NearbyPlaceItem>
        </View>
        <Heading>
          <HeadingTitle>Popular Restaurants</HeadingTitle>
          <Pressable>
            <HeadingLink>See All</HeadingLink>
          </Pressable>
        </Heading>
        <FlatList
          style={styles.popularRestaurant}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
        />
      </ScrollView>
      <Navbar navigation={navigation} />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  nearbyPlace: {
    marginBottom: 10,
  },
});
