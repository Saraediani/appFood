import { Image } from "react-native";
import React, { useState } from "react";
import {
  AddToCart,
  AddToCartText,
  Description,
  Info,
  Item,
  Name,
  Price,
} from "./MenuItem.styles";
import { API_BASE_URL } from "../../api/axios";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useCart from "../../hooks/useCart";

const MenuItem = ({ item }) => {
  const { cart, addToCart } = useCart();
  
  console.log(cart);

  return (
    <Item
      style={{
        flex: 1 / 2,
      }}
    >
      <Image
        source={{
          uri: `${API_BASE_URL}/uploads/${item.images[0]}`,
          width: "100%",
          height: 150,
        }}
        style={{ borderRadius: 20 }}
      />
      <Info>
        <Name>{item.name}</Name>
        <Description>
          {item.description.length <= 45
            ? meal.description
            : `${item.description.slice(0, 45)}...`}
        </Description>
      </Info>
      <Price
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 6,
        }}
      >
        {item.price}
      </Price>
      <AddToCart onPress={() => addToCart(item)}>
        <AddToCartText>Add</AddToCartText>
      </AddToCart>
    </Item>
  );
};

export default MenuItem;
