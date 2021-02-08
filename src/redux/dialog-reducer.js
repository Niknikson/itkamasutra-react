const ADD_MESSAGE = "ADD-MESSAGE";
const UP_DATE_NEW_MESSAGE = "UP-DATE-NEW-MESSAG";

let initialState =  {
      newMessageText: [""],
      dialogsData: [
        { id: 1, name: "Nick" },
        { id: 2, name: "Kris" },
      ],
      messageData: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Hello" },
        { id: 4, message: "Hello" },
      ],
    }
  

const dialogsReducer = (state = initialState, action) => {
 
  switch (action.type) {

    case UP_DATE_NEW_MESSAGE:
      return {
        ...state,
        newMessageText: action.newMText,
      }
    case ADD_MESSAGE:
      let newMText = state.newMessageText
      return{
        ...state,
        newMessageText: "",
        messageData: [...state.messageData, { id: 5, message: newMText }],
      };

    default:
      return state;
  }
}
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const upDateNewMessageActionCreator = (text) => {
  return {
    type: UP_DATE_NEW_MESSAGE,
    newMText: text,
  };
};


export default dialogsReducer;
