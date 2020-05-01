import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Header from './Components/header/header.component'
import { connect } from 'react-redux'
import HomePage from './Pages/Homepage/homepage';
import SignUpPage from './Pages/SignUp/signup.component';
import Favourites from './Pages/Favourites/favourites.component';
import SignInPage from './Pages/SignIn/signInAndSignUp.component';
const App= (props)=> { 
 return (<div style={{size: '100%'}}>
    <Header/>
    <Switch>
      <Route exact path='/' render={()=>props.currentUser?<HomePage/>:<Redirect to='/signin'/>}/>
      <Route exact path='/favourites' render={()=>props.currentUser?<Favourites></Favourites>:<Redirect to='/signin'/>}/>
      <Route exact path='/signin' render={()=>props.currentUser?<Redirect to='/'/>:<SignInPage/>}/>}
      <Route exact path='/signup' render={()=>props.currentUser?<Redirect to='/'/>:<SignUpPage/>}/>}
      {/* <Route exact path='/tasks/update' component={} /> */}

    </Switch>
    </div>
  );
}
const mapStateToProps=(state)=>({
  currentUser: state.user
})

export default connect(mapStateToProps,null)(App);
