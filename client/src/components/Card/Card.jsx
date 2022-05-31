import { Body, Footer, Header, StyledCard } from "./Card.styles";

const Card = ({title,value, children}) => {
  return (
    <StyledCard>
      <Header>
        <span>{title}</span>
      </Header>
      <Body>
        <h3>{value}</h3>
        {children}
      </Body>
      {/* <Footer>
        <span>see all orders</span>
      </Footer> */}
    </StyledCard>
  );
};

export default Card;
