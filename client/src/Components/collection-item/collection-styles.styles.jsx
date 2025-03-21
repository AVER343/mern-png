import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CollectionItemContainer = styled.div`
  width: ${({width})=>`${width}px`};;
  display: flex;
  flex-direction: column;
  height: ${({height})=>`${height}px`};
  align-items: center;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }
    .text{
      display:block;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: relative;
  top: 0px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
width: 100%;
opacity: 0.7;
position: relative;
top: 0px;
display:none;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
  
`;
