import React from "react";
import s from "./NewsItem.module.css";

const NewsItem = (props) => {
  // debugger
  return (
  <div className={s.newsItem}>
    <span>{props.id}</span>
    <p>{props.news}</p>
  </div>)
}

export default NewsItem;