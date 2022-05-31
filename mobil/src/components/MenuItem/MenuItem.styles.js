import styled from "styled-components/native";

export const Item = styled.View`
  margin: 10px;
  position: relative;
  padding: 5px;
`;

export const Info = styled.View`
  padding: 10px 0;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const Description = styled.Text`
  font-weight: 100;
  font-size: 12px;
`;

export const Price = styled.Text`
  font-size: 16px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  top: 15px;
  border-radius: 20px;
  padding: 3px 5px;
  text-align: center;
`;

export const Rating = styled.View``;

export const AddToCart = styled.Pressable`
  width: 70px;
  padding: 5px 0px;
  background-color: orange;
  border-radius: 20px;
  margin: 0 10px;
`;

export const AddToCartText = styled.Text`
  text-align: center;
  color: #fff;
`;
