import styled from "styled-components/native";

export const Order = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
`;

export const OrderInfo = styled.View`
  flex: 1;
  height: 100%;
  position: relative;
`;

export const Title = styled.Text`
  font-weight: bold;
  margin-bottom: 5;
`;

export const Item = styled.Text`
  font-size: 12px;
`;

export const Price = styled.Text`
  position: absolute;
  right: 5;
  top: 5;
`;

export const OrderAgain = styled.Text`
  position: absolute;
  right: 5px;
  bottom: 5px;
  color: orange;
  font-size: 15px;
`;

export const Filter = styled.View`
flex-direction: row;
align-items: center;
justify-content: space-around;
height: 40px;
margin-bottom: 10px;
`

export const FilterItem = styled.Text`

`;