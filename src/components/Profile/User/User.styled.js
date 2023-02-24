import styled from 'styled-components';

export const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
`;
export const ContainerCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const TitleText = styled.p`
font-weight: 700;
margin: 5px 0;
` 
export const Text = styled.p`
font-weight: 400;
font-size: small;
color: #B7B7B7;
&:not(:last-child){
    margin-bottom: 5px;
}
`