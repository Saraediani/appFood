import { View, Text, Image, Pressable, FlatList } from "react-native";
import  { useState, useEffect} from "react";
import {
  Checkout,
  CheckoutText,
  Description,
  Item,
  ItemInfo,
  Items,
  Minus,
  Name,
  PaymentDiscount,
  PaymentInfo,
  PaymentPrice,
  Plus,
  Price,
  Quantity,
  QuantityText,
  Separate,
} from "./CartScreen.styles";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../components/Header";
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import useCart from "../../hooks/useCart"
import { API_BASE_URL } from "../../api/axios";

const CartScreen = () => {

  const { cart } = useCart();
  console.log('====================================');
  console.log(cart)
  console.log('====================================');

  // const renderItem = ({ item }) => {
  //   console.log(item);
  //   // <Item
  //   //   style={{
  //   //     shadowColor: "#000",
  //   //     shadowOffset: {
  //   //       width: 0,
  //   //       height: 5,
  //   //     },
  //   //     shadowOpacity: 0.34,
  //   //     shadowRadius: 6.27,

  //   //     elevation: 10,
  //   //   }}
  //   // >
  //   //   <Image
  //   //     source={{
  //   //       uri: `${API_BASE_URL}/uploads/${item.images[0]}`,
  //   //       width: 80,
  //   //       height: 80,
  //   //     }}
  //   //     style={{ borderRadius: 10, marginRight: 10 }}
  //   //   />
  //   //   <ItemInfo>
  //   //     <Name>{item.name}</Name>
  //   //     <Description>{item.description}</Description>
  //   //     <Price>{item.price}</Price>
  //   //   </ItemInfo>
  //   // </Item>;
  // };
  
  return (
    <>
      <Header />
      <Items>
      {/* <FlatList data={cart} renderItem={renderItem} /> */}
        
      </Items>
      <Separate />
      <PaymentInfo>
        <PaymentDiscount>
          <Text>Discount</Text>
          <Text>0%</Text>
        </PaymentDiscount>
        <PaymentPrice>
          <Text>Total Price</Text>
          <Text>400 MAD</Text>
        </PaymentPrice>
      </PaymentInfo>
      <Checkout>
        <CheckoutText>Checkout</CheckoutText>
      </Checkout>
    </>
  );
};

export default CartScreen;
