import styled from "styled-components/native";

export const Items = styled.ScrollView`
  flex: 1;
`;

export const Item = styled.View`
  flex-direction: row;
  padding: 10px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const ItemInfo = styled.View`
  position: relative;
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 16px;
`;

export const Description = styled.Text``;

export const Price = styled.Text`
  font-size: 18px;
  position: absolute;
  left: 0;
  bottom: 0;
`;

export const Quantity = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
`;

export const QuantityText = styled.Text`
  font-size: 16px;
`;

export const Separate = styled.View`
  width: 90%;
  background-color: gray;
  height: 1px;
  margin: 10px auto;
`;

export const PaymentInfo = styled.View`
  padding: 0 10px;
  margin: 10px 0;
`;

export const PaymentPrice = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const PaymentDiscount = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Checkout = styled.Pressable`
  width: 250px;
  background-color: orange;
  padding: 15px 0;
  border-radius: 10px;
  margin: 0 auto 10px;
`;

export const CheckoutText = styled.Text`
  color: #fff;
  text-align: center;
`;
