import React from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingScreen from "../LoadingScreen";
import Pagination from "../Pagination/Pagination";
import Star from "../Star/Star";
import { Caption, DeleteButton, StyledTable, Td, Th } from "./Table.styles";

const Table = function ({
  headers,
  tableData,
  isLoading,
  numberOfPages,
  currentPage,
  setCurrentPage,
  handelDelete,
  filter,
}) {
  return !isLoading ? (
    <StyledTable>
      <Caption>
        {/* <Search type="search" PlaceHolder="Quick Search" /> */}
        {/* <Filter onClick={openDropdown}>
          <BsFilter size={32} />
        </Filter> */}
        <select
          name="city"
          id="city"
          onChange={(e) => filter(e.target.name, e.target.value)}
        >
          <option defaultValue>City</option>
          <option value="essaouira">essaouira</option>
          <option value="el jadida">el jadida</option>
          <option value="yooussoufia">yooussoufia</option>
        </select>
        <select
          name="rating"
          id="rating"
          onChange={(e) => filter(e.target.name, e.target.value)}
        >
          <option defaultValue>Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {/* <FilterInput name="cuisine" id="cuisine">
          <option defaultValue>Cuisine</option>
          <option value="morocco">morocco</option>
          <option value="french">french</option>
        </FilterInput> */}
        {/* <Dropdown>
          <h4>Filter</h4>
            <div>
              <label htmlFor="city">City:</label>
              <select name="city" id="city">
                <option value="casa">Casa</option>
                <option value="fes">Fes</option>
              </select>
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <select name="rating" id="rating">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
        </Dropdown> */}
      </Caption>
      <thead>
        <tr>
          {headers.map((label, index) => {
            return (
              <Th key={index}>
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </Th>
            );
          })}
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item) => {
          return (
            <tr key={item._id}>
              {headers.map((label, index) => {
                if (label === "rating") {
                  return (
                    <Td key={index}>
                      <Star rate={item[`${label}`]} />
                    </Td>
                  );
                }
                return <Td key={index}>{item[`${label}`]}</Td>;
              })}
              <Td>
                <Link to={`${item._id}`}>
                  <FaEye />
                </Link>
                <Link to={`update/${item._id}`}>
                  <FaEdit />
                </Link>
                <DeleteButton onClick={() => handelDelete(item._id)}>
                  <FaEdit />
                </DeleteButton>
              </Td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <Td colSpan={5}>
            <Pagination
              numberOfPages={numberOfPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Td>
        </tr>
      </tfoot>
    </StyledTable>
  ) : (
    <LoadingScreen />
  );
};

export default Table;
