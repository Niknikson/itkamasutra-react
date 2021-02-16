import "./App.css";
import Nav from "./componets/Nav/Nav";
import React from 'react'
import ContentContainer from "./componets/Content/ContentContauner";
import DialogContainer from "./componets/Dialog/DialogContainer";
import {  Route, withRouter } from "react-router-dom";
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Header/login/Login";
import { initializedThunk } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Prelouder from "./componets/Prelouder/Prelouder";




class App extends React.Component {

  componentDidMount() {
    this.props.initializedThunk();
  }

  render() {
    if (!this.props.initialized) {
      return <Prelouder />
    }

    return (
      <div className="wrapper">
        <HeaderContainer />
        <Nav />
        <div className="wrapper-content">
          <Route path="/profile/:userId?" render={() => <ContentContainer />} />
          <Route path="/dialogs" render={() => <DialogContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};
  


export default compose(
  withRouter,
  connect(mapStateToProps, { initializedThunk })
)(App);

