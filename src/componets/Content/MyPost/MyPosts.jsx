import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';
import Button from '@material-ui/core/Button';
import useStyles  from "./styles";
import { Field, reduxForm } from 'redux-form';


const MyPost = (props) => {
    const classes = useStyles()

    let postElement = props.postData.map((p) => <Post message={p.message} key={p.id} lickesCount={p.lickesCount} />)
  
    // let newPostElement = React.createRef()
    // let addPost = () => {props.addPost();}
    // let onPostChange = () => { let text = newPostElement.current.value; props.onPostChange(text); }
    
    const addPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.myPost}>
            <div>My Post</div>
            <div>
                <AddPostReduxForm onSubmit={addPost} />
            </div>
            {/* <div>
                <p><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} name="" id="" cols="15" rows="5" className={s.textarea}></textarea></p>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={addPost}>
                    Add
                   </Button>
            </div> */}
            <div className={s.post}>
                {postElement}
            </div>
        </div>
    );
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field component={'textarea'} name={'newPostBody'} placeholder={'Typ your post'} />
            </div>
            <div>
                <button>Add</button>
            </div>
        </form >
    )
}

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm)

export default MyPost;
