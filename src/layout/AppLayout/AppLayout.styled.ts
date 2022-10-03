import styled from "styled-components";


export const AppLayoutStyled = styled.main`

  height: 100vh;
  min-height: 100vh;

  width: 100vw;
  min-width: 100vw;

  nav {
    width: 100%;
    height: 6%;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      color: white;
      font-size: 2rem;
    }
  }
  
  section {
    width: 100%;
    height: 94%;
  }

`