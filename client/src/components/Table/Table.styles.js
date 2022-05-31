import styled from "styled-components";

export const StyledTable = styled.table`
  min-width: 100%;
  border-collapse: collapse;
  text-align: left;
  & tbody {
    & tr {
      border-left: 1px solid ${({ theme }) => theme.color.border};
      border-right: 1px solid ${({ theme }) => theme.color.border};
      border-radius: 5px 5px 0 0;
    }
  }
  & thead {
    & tr {
      border-left: 1px solid ${({ theme }) => theme.color.border};
      border-right: 1px solid ${({ theme }) => theme.color.border};
    }
  }
  & tfoot {
    & tr {
      border: 1px solid ${({ theme }) => theme.color.border};
      height: 80px;
    }
  }
`;

export const Th = styled.th`
  height: 40px;
  min-width: 60px;
  padding: 0 20px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;
export const Td = styled.td`
  color: #fff;
  height: 50px;
  padding: 0 20px;
  border-top: 1px solid ${({ theme }) => theme.color.border};
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
`;

export const DeleteButton = styled.button`
  all: unset;
`;

export const Caption = styled.caption`
  text-align: right;
    /* display: flex;
    align-items: center; */
  position: relative;
`;

export const Search = styled.input`
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: 5px;
  &::placeholder {
    color: ${({ theme }) => theme.color.primaryText};
  }
`;

export const Filter = styled.button`
  all: unset;
  margin-left: auto;
  cursor: pointer;
  &:hover {
    border-radius: 50%;
    background-color: "#fff";
  }
`;
