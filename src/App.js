
import './App.css';
import Header from './componets/Header/Header';
import Nav from './componets/Nav/Nav';
import Content from './componets/Content/Content';
import Dialog from './componets/Dialog/Dialog';
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <div className='wrapper-content'>
          <Route path="/content" render={() => < Content
            contentState={props.state.contentState}
            addPosts={props.addPosts}
            updateNewPostText={props.updateNewPostText}
          />} />
          <Route path="/dialogs" render= { () => <Dialog dialogState={props.state.dialogState}  /> } />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
