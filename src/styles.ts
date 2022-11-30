import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 45% 55%;
  row-gap: 40px;
  width: 100%;
  height: 100%;

  h2 {
    font-size: 1.5rem;
    font-family: "Roboto" sans-serif;
    font-weight: 700;
    color: #192a56;
    margin-bottom: 8px;
  }
  span {
    font-size: 1rem;
    font-family: "Roboto" sans-serif;
    margin-bottom: 10px;
    color: #fff;
  }
  i {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  /** Breakpoint Desktop */
  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
  }
`;
export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row: 1;
  width: 100%;
  height: 100%;
  background-color: #e72e4b;

  -webkit-box-shadow: 1px 7.5px 19px 15.5px #ddd;
  -moz-box-shadow: 1px 7.5px 19px 15.5px #ddd;
  box-shadow: 1px 7.5px 19px 15.5px #ddd;

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row: 1;
    width: 100%;
    height: 100%;
    grid-column: 1;

    h2{
      font-size: 5rem;
      font-weight: 700;
    }
    
  }
`;
