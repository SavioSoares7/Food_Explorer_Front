import styled from "styled-components";

export const BoxInfo = styled.div`
  max-width: 1120px;
  margin: 192px auto;
  background-color: ${({ theme }) => theme.COLORS.BG_SECONDARY};
  height: 260px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    margin-bottom: 150px;
  }

  > div {
    > span {
      font-family: "Poppins";
      font-weight: 500;
      font-size: 40px;
    }
    > p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: ${({ theme }) => theme.COLORS.FT_GRAY};
    }
  }

  @media (max-width: 990px) {
    > img {
      display: none;
    }
    > div {
      text-align: center;
    }
  }
`;
