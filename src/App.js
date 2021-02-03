import "./App.css";
import Header from "./componets/Header/Header";
import Nav from "./componets/Nav/Nav";
import Content from "./componets/Content/Content";
import DialogContainer from "./componets/Dialog/DialogContainer";
import {  Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Nav />
      <div className="wrapper-content">
        <Route path="/content" render={() => <Content  />} />
        <Route path="/dialogs" render={() => <DialogContainer  />} />
      </div>
    </div>
  );
};

export default App;
