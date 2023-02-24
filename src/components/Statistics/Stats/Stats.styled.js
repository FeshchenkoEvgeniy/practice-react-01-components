import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
  display: flex;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  border-radius: 4px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
