import React from 'react'
import './fav.scss'
import { connect } from 'react-redux'
import { asyncLoad } from '../../redux/tasks/task.actions'
import { getJWT } from '../../redux/tasks/task.utils'
import {TenToShow} from './favs.utils'
import './favourites.styles.css' 
import FormInput from '../../Components/form-input/form-input.component'
import CollectionItem from '../../Components/collection-item/collection-item.component'
import CustomButton from '../../Components/custom-button/custom-button.component'
import CollectionOverview from '../../Components/collection-overview/collection.overview'
import { ThreeArray } from '../../Components/Image-With-spinner/image.utils'
class Favourites extends React.Component{
    constructor(props){
        super(props)
        this.state={
            page:1
        }
    }
  handleChange =async () => {
 
    await this.setState({ page: this.state.page+1 });
    
    await this.props.LOAD_DATA(getJWT())
    
  };
    render(){
    return(<div>
            {this.props.favourites?ThreeArray(TenToShow(this.state.page,this.props.favourites)).map((elem,index)=><CollectionOverview key={`${index}${Math.random()}`} item={elem}/>):null}
            <CustomButton type="submit" onChange={this.handleChange}>MORE IMAGES</CustomButton>
           </div>)
    }
}
const mapStateToProps= (state)=>({
  favourites:state.task.tasks
})
const mapDispatchToProps=(dispatch)=>({
    LOAD_DATA:(token)=>dispatch(asyncLoad(token))
})
export default connect(mapStateToProps,mapDispatchToProps)(Favourites)