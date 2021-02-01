import "./App.css";
import Header from "./componets/Header/Header";
import Nav from "./componets/Nav/Nav";
import Content from "./componets/Content/Content";
import Dialog from "./componets/Dialog/Dialog";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    
      <div className="wrapper">
        <Header />
        <Nav />
        <div className="wrapper-content">
          <Route
            path="/content"
            render={() => (
              <Content
                contentState={props.state.contentState}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialog
                dialogState={props.state.dialogState}
                dispatch={props.dispatch}
              />
            )}
          />
        </div>
      </div>
    
  );
};

export default App;
