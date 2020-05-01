import React from 'react'
import { compose } from 'redux';
import WithSpinner from '../with-spinner/with-spinner.component'
import { connect } from 'react-redux';
import CollectionItem from '../collection-item/collection-item.component';
import { TenToShow } from '../../Pages/Favourites/favs.utils';
import {ThreeArray} from './image.utils'
import CustomButton from '../custom-button/custom-button.component';
import CollectionOverview from '../collection-overview/collection.overview';
class ImageComponentSpinner extends React.Component {
        constructor(props)
        {
            super(props)
        }
       render(){ return(<div style={{marginTop:'2rem',textAlign:'center'}}>
                    {this.props.list.length>0?ThreeArray(TenToShow(this.props.page,this.props.list)).map(elem=><CollectionOverview key = {Math.random()}item={elem}/>):<div>LIST EMPTY !</div>}}
                    <CustomButton  onClick={this.props.handleChange} type="submit">MORE IMAGES</CustomButton>
        </div>) }  
}
const mapStateToProps=(state)=>({
    isLoading:state.image.isLoading,
    list:state.image.list
})

const ImageComponentWithSpinner=compose(
    connect(mapStateToProps,null),
  WithSpinner
)(ImageComponentSpinner)
export default ImageComponentWithSpinner