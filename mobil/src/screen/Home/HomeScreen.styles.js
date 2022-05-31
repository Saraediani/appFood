import styled from "styled-components/native";

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
  border: 1px #dadae8;
  border-radius: 10px;
  padding: 5px;
`;

export const SearchInput = styled.TextInput`
  color: #000;
  flex: 1;
`;

export const Heading = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const HeadingTitle = styled.Text`
  font-size: 16px;
`;

export const HeadingLink = styled.Text`
  font-size: 13px;
  color: orange;
`;

export const NearbyPlaceItem = styled.View`
  padding: 5px;
  flex-direction: row;
  align-items: center;
  background-color: #e5e5e5;
  margin-bottom: 10px;
  border-radius: 10px;
`;
