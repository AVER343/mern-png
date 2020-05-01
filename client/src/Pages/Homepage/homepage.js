import React from 'react'
import './homepage.styles.css'
import { Redirect, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import { asyncLoad } from '../../redux/tasks/task.actions'

import ImageComponentWithSpinner from '../../Components/Image-With-spinner/image.component.spinner'
import { ImageLoad } from '../../redux/image/image.actions'
import { getJWT } from '../../redux/tasks/task.utils'
class HomePage  extends React.Component{
    constructor(props)
 {
   super(props)
   this.state={
     page:1
   }
 }
 async componentDidMount(){
   await this.props.LOAD_FAVS_DATA(getJWT())
  await this.props.LOAD_IMAGE_DATA(getJWT())
}
handleChange=()=>{
  
    this.setState({ page: this.state.page+1});
}
    render(){
            return(this.props.currentUser?<div ><ImageComponentWithSpinner handleChange={this.handleChange} page={this.state.page}/></div>:
                <h1 className="center" style={{textAlign:'center'}}>    
                    LOGIN TO  CONTINUE !
                </h1>)
            }
}
const mapStateToProps=(state)=>({
    currentUser:state.user
})
const mapDispatchToProps= dispatch=>({
  LOAD_IMAGE_DATA:(token)=>dispatch(ImageLoad(token)),
  LOAD_FAVS_DATA:(token)=>dispatch(asyncLoad(token))
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomePage))