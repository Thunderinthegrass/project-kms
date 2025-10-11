// import React from "react";
import { addNewNewsTextActionCreator, addNewsActionCreator } from "../../redux/news-reduser";
import News from "./News";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newsPage: state.newsPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewNewsText: (text) => {
      dispatch(addNewNewsTextActionCreator(text))
    },
    addNews: (news) => {
      dispatch(addNewsActionCreator(news));
    }
  }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News);

export default NewsContainer;