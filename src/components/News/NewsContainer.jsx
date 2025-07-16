import React from "react";
import { addNewNewsTextActionCreator, addNewsActionCreator } from "../../redux/news-reduser";
import News from "./News";

const NewsContainer = (props) => {
// debugger

  const updateNewNewsText = (text) => {
    props.store.dispatch(addNewNewsTextActionCreator(text));
  }

  const addNews = () => {
    props.store.dispatch(addNewsActionCreator());
  }

  return (
    <News newsPage={props.store.getState().newsPage} updateNewNewsText={updateNewNewsText} addNews={addNews} />
  )
}

export default NewsContainer;