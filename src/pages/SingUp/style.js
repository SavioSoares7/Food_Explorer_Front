import styled from "styled-components";

export const Container = styled.main`
  padding: 50px;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;

  > div {
    flex: 2;
    > h1 {
      font-size: 52px;
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;

    > div {
      > h1 {
        margin-bottom: 30px;
      }
    }
  }
`;

export const FormSingUp = styled.form`
  max-height: 600px;

  flex: 1;
  padding: 64px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};

  > h5 {
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;

    margin-bottom: 32px;
  }

  > a {
    margin-top: 32px;
    display: block;
    text-align: center;
  }
  @media (max-width: 450px) {
    min-height: 700px;
    margin-bottom: 10px;
  }
`;
