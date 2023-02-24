import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 15px;
    padding: 5px 0px;
    background-color: #d9d9d9;
    border-top: 1px solid gray;
`
export const ListItem = styled.li`
padding: 5px;
display: flex;
flex-direction: column;
align-items: center;
`
export const TextSpan = styled.span`
font-size: x-small;
`
export const BoldSpan = styled.span`
font-weight: bold;
margin-top: 4px;
font-size: x-small;
`