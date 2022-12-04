import styled from "styled-components";

export const Container = styled.section`
  max-width: 1180px;
  margin: 0 auto;

  > table {
    border-collapse: collapse;
    > thead {
      > tr {
        > th {
          text-align: start;
          padding: 30px;
          border: 1px solid ${({ theme }) => theme.COLORS.FT_GRAY};
        }
      }
    }
    > tbody {
      > tr {
        > td {
          padding: 30px;
          border: 1px solid ${({ theme }) => theme.COLORS.FT_GRAY};
        }
      }
    }
  }
`;
