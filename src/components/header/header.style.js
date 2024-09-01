import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 1.5rem 1rem;
  display: flex;
  flex: 1;
  align-items: center;

  .search-and-input {
    display: flex;
    flex: 1;
    .seach-input {
      outline: none;
      border: none;
      transition: all 0.5s;
      background: transparent;
    }
  }

  .avatar-dropdown {
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  @media screen and (max-width: 624px) {
    .search-and-input {
      display: none;
    }
  }

  @media screen and (max-width: 400px) {
    .avatar-text {
      display: none;
    }
  }
`;
