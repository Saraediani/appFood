import { Text, View, Image } from "react-native";
import React from "react";
import Header from "../../components/Header"
import { Filter, Item, Order, OrderAgain, OrderInfo, Price, Title } from "./OrderScreen.styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Navbar from "../../components/Navbar";
// import Header from "../../components/Header";
const OrderScreen = () => {
  return (
    <>
      <Header />
      <View>
        <Filter>
          <Text>Completed Order</Text>
          <Text>Pending Order</Text>
        </Filter>
      </View>
      <Order>
        <Image
          source={{
            uri: "https://picsum.photos/200",
            width: 80,
            height: 80,
          }}
          style={{ borderRadius: 10, marginRight: 10 }}
      />
      <OrderInfo>
        <Title>4 item from KFC</Title>
        <Item>Pizza, Chicken tiriaky</Item>
        <Price>$59</Price>
        <OrderAgain>Order Again</OrderAgain>
      </OrderInfo>
      </Order>
      <Navbar />
    </>
  );
};

export default OrderScreen;
