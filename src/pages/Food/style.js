import styled from "styled-components";

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  > img {
    border-radius: 50%;
    width: 300px;
    height: 300px;
  }
  > div {
    max-width: 800px;
    > h2 {
      font-size: 40px;
      margin-bottom: 8px;
      font-family: "Poppins";
    }
    > p {
      font-weight: 100;
      font-size: 24px;
      font-family: "Poppins";
    }
    > ul {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-top: 60px;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 30px;
      margin-top: 30px;

      > span {
        font-size: 32px;
        font-weight: bold;
        color: ${({ theme }) => theme.COLORS.FT_BLUE_LIGHT};
      }
      > div {
        display: flex;
        gap: 20px;
        > button {
          background-color: transparent;
          border: 0;
          color: ${({ theme }) => theme.COLORS.FT_WHITE};
          display: flex;
        }
      }
    }
  }
`;
