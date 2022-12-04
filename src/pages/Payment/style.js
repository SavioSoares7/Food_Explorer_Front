import styled from "styled-components";

export const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ContainerPayment = styled.div`
  p {
    text-align: start;
    margin-top: -90px;
    margin-bottom: 50px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
  }
  @media (max-width: 900px) {
    > p {
      margin-top: 30px;
    }
  }
`;
export const ContainerProduct = styled.div`
  > p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }
`;
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
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS.FT_GRAY};
  text-align: center;
`;

export const PaymentCash = styled.div`
  text-align: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    font-size: 104px;
  }
  > p {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    font-size: 24px;
    margin-top: 40px;
  }
`;
export const PaymentPix = styled.div`
  > svg {
    font-size: 250px;
  }
`;
export const PaymentCard = styled.div`
  padding: 0px;
  box-sizing: border-box;
  text-align: start;
  max-width: 530px;
  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  > a {
    justify-content: center;
  }
`;
export const PaymentAccepted = styled.div`
  text-align: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    font-size: 104px;
  }
  > p {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    font-size: 24px;
    margin-top: 40px;
  }
`;
export const PaymentFinished = styled.div`
  text-align: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    font-size: 104px;
  }
  > p {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.FT_GRAY};
    font-size: 24px;
    margin-top: 40px;
  }
`;
