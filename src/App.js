import "./App.css";
import Nav from "./componets/Nav/Nav";
import ContentContauner from "./componets/Content/ContentContauner";
import DialogContainer from "./componets/Dialog/DialogContainer";
import {  Route } from "react-router-dom";
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <Nav />
      <div className="wrapper-content">
        <Route path="/profile/:userId?" render={() => <ContentContauner />} />
        <Route path="/dialogs" render={() => <DialogContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
};

export default App;
