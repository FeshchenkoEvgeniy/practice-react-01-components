import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px;
  width: 250px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px grey;
  border: 1px solid black;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const SpanIsOnline = styled.span`
  background-color: ${props => {
    return props.isActive ? 'green' : 'red';
  }};
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
