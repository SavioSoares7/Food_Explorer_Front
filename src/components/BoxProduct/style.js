import styled from "styled-components";

export const ContainerProduct = styled.div`
  max-width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;

  background-color: ${({ theme }) => theme.COLORS.BG_DARK};
  padding: 56px 40px 40px 40px;

  border-radius: 8px;
  border: 1px solid #000;

  > h6 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
  }
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.FT_GRAY_200};
  }
  > span {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.FT_BLUE_LIGHT};
  }
  > div {
    display: flex;
    align-items: center;
    gap: 40px;
    > div {
      display: flex;
      align-items: center;
      gap: 18px;
      > span {
        font-weight: 700;
        font-size: 20px;
      }
      > button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.FT_WHITE};
      }
    }
  }
`;
