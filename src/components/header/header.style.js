import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;

  .search-and-input {
    display: flex;
    flex: 1;
    position: relative;
    /* 
    .search-icon {
      margin-right: 1rem;
      color: gray;
    } */

    .seach-input {
      outline: none;
      border: none;
      transition: all 0.5s;
      background: transparent;
    }
  }
`;
