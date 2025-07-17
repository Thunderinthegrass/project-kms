// import React from "react";
// import { addNewNewsTextActionCreator, addNewsActionCreator } from "../../redux/news-reduser";
// import News from "./News";
// import StoreContext from "../../StoreContext";

// const NewsContainer = (props) => {
// // debugger

//   return (
//     <StoreContext.Consumer>
//       {
//         (store) => {
//           const updateNewNewsText = (text) => {
//             store.dispatch(addNewNewsTextActionCreator(text));
//           }

//           const addNews = () => {
//             store.dispatch(addNewsActionCreator());
//           }
//           return <News newsPage={store.getState().newsPage} updateNewNewsText={updateNewNewsText} addNews={addNews} />
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

// export default NewsContainer;