import React from 'react';
import { connect } from 'react-redux';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-styles.styles';
import { isPresent } from '../../redux/image/image.utils';
import { SAVING_FAV, asyncDelete } from '../../redux/tasks/task.actions';
function toDataURL(url) {
  return fetch(url).then((response) => {
          return response.blob();
      }).then(blob => {
          return URL.createObjectURL(blob);
      });
}
const download=async (image)=>{
  const a = document.createElement("a");
  a.href = await toDataURL(image.download_url);
  a.download = image.download_url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
const CollectionItem = (props) => {
  return (
    <CollectionItemContainer style={{ marginLeft:'10px'}} width={`${(props.item.width)/11}`} height={`${(props.item.height)/10}`} >
        <BackgroundImage className='image' author={props.author}width={`${(props.item.width)/6}`} height={`${(props.item.height)/6}`}  imageUrl={props.item.download_url} alt="image" />
      <CollectionFooterContainer>
      </CollectionFooterContainer>
      {isPresent(props.item,props.list)?
      <AddButton onClick={() =>props.DELETING(props.item._id)} inverted>
      -FAVOURITES
      </AddButton>:<AddButton onClick={() =>props.SAVING(props.item)} inverted>
     +FAVOURITES
      </AddButton>}
      <AddButton onClick={() =>download(props.item)}>DOWNLOAD</AddButton>
      <NameContainer className="text">{props.item.author} - {props.item.width} X {props.item.height}</NameContainer>
      
    </CollectionItemContainer>
  );
};
const mapStateToProps=state=>({
  list:state.task.tasks
})
const mapDispatchToProps = dispatch => ({
  SAVING: item => dispatch(SAVING_FAV(item)),
  DELETING:id=>dispatch(asyncDelete(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionItem);
