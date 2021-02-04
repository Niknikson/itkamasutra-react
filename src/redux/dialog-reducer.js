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
      //stateCopy.newMessageText = action.newMText;
      return {
        ...state,
        newMessageText: action.newMText,
      }

    case ADD_MESSAGE:
      // let newMessage = {
      //   id: 5,
      //   message: stateCopy.newMessageText,
      // }
      //   stateCopy.messageData.push(newMessage);
      //   stateCopy.newMessageText = "";
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







// if (action.type === "ADD-MESSAGE") {
//     let newMessage = state.newMessageText
//       state.newMessageText = "";
//   state.messageData.push({ id: 6, message: newMText });

// } else if (action.type === "UP-DATE-NEW-MESSAG") {
//   state.newMessageText = action.newMText;
// }