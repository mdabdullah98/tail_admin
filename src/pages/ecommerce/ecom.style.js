import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 1.8rem auto;
  div:nth-child(1) {
    width: 70%;
    height: 20rem;
  }
  div:nth-child(2) {
    width: 25rem;
    height: 20rem;
  }

  @media screen and (max-width: 1250px) {
    flex-direction: column;

    div:nth-child(1) {
      width: 100%;
    }
    div:nth-child(2) {
      width: 100%;
    }
  }
`;
