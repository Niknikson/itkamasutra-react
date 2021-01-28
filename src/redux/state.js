let rerenderEntireTree = () => {

}
  
let state = { 
  contentState: {
        newPostText : [''],
        postData : [
        { id: 1, message: 'Hello', lickesCount: 23 },
        { id: 2, message: 'How are you my freand', lickesCount: 49 },
        ]
    },
    
    dialogState : {
            dialogsData : [
            { id: 1, name: 'Nick' },
            { id: 2, name: 'Kris' }
          ],
             messageData : [
            { id: 1, message: 'Hello' },
            { id: 2, message: 'How are you' }
          ]
    }
};

export const addPosts = () => {
  let newPost = {
    id: 3,
    message: state.contentState.newPostText,
    lickesCount: 0
  };
  state.contentState.postData.push(newPost);
  state.contentState.newPostText = '';
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.contentState.newPostText = newText;
  rerenderEntireTree(state);
}; 

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;