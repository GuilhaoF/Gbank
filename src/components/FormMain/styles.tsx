import styled from "styled-components";

export const FormPage = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1024px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100vh;
    grid-row: 1;
    grid-column: 2;
  }

  
`;

export const TitleForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin: auto;
  margin-bottom: 20px;

  @media only screen and(min-width:1024px){
        width: 90%;
        margin: auto;
        margin-bottom: 20px;
    }

  input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    padding: 30px;
    outline: none;
    font-weight: 300;
    border: none;
    background-color: #dcdde1;
    color: #000;
    margin-bottom: 2px;
    text-align: center;

    -webkit-box-shadow: 1px 1px 32px 15.5px #ddd;
    -moz-box-shadow: 1px 1px 32px 15.5px #ddd;
    box-shadow: 1px 1px 32px 15.5px #ddd;

    @media only screen and(min-width:1024px){
       width: 100%;
       height: 50px;
       border-radius: 10px;
       outline: none;
       font-weight: 300;
    }

    &:active {
      border: 2px solid #273c75;
    }
    &:focus {
      border: 2px solid #273c75;
    }
    
  }
`;
export const FormButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 4px;

`;
export const ButtonEnter = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 40px;
  background-color: #012169;
  border: none;
  color: #fff;
  border-radius: 20px;

  &:hover {
  }

  
`;
