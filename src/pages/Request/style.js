import styled from "styled-components";

export const Container = styled.section`
  max-width: 1180px;
  margin: 0 auto;

  > table {
    border-collapse: collapse;
    > thead {
      > tr {
        th {
          padding: 20px;
          border: 1px solid ${({ theme }) => theme.COLORS.BG_GRAY};
        }
      }
    }
    > tbody {
      > tr {
        > td {
          border: 1px solid #ccc;
          text-align: center;
          padding: 20px;
        }
        > td {
          > select {
            background-color: transparent;
            color: ${({ theme }) => theme.COLORS.FT_WHITE};
            padding: 20px;
            border-radius: 5px;

            > option {
              color: #000;
            }
          }
        }
      }
    }
  }
`;
