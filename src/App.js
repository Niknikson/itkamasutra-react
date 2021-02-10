import "./App.css";
import Nav from "./componets/Nav/Nav";
import ContentContauner from "./componets/Content/ContentContauner";
import DialogContainer from "./componets/Dialog/DialogContainer";
import {  Route } from "react-router-dom";
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Header/login/Login";


const App = (props) => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <Nav />
      <div className="wrapper-content">
        <Route path="/profile/:userId?" render={() => <ContentContauner />} />
        <Route path="/dialogs" render={() => <DialogContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
};

export default App;
