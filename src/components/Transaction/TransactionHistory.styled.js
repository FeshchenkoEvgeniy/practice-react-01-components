import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
`;

export const TableHead = styled.thead`
  background-color: blue;
  color: white;
`;

export const TableHeadTR = styled.tr`
  width: 350px;
  height: 200px;
`;

export const TableBodyTR = styled.tr`
  &:nth-child(even) {
    background-color: yellow;
  }
`;
