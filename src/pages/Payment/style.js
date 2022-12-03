import styled from "styled-components";

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
`;

export const ContainerPayment = styled.div`
  p {
    text-align: start;
    margin-bottom: 50px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
  }
`;
export const ContainerProduct = styled.div``;
export const ContainerBuy = styled.div`
  display: flex;
  align-items: center;
  > button {
    border: 1px solid ${({ theme }) => theme.COLORS.FT_GRAY};
    font-weight: 400;
    font-size: 16px;
    padding: 12px 14px 12px 14px;
    height: 81px;
    width: 265px;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.FT_WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
  }
`;
export const ContainerPay = styled.div`
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.COLORS.FT_GRAY};

  text-align: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    font-size: 104px;
  }
  > p {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    font-size: 24px;
  }
`;
