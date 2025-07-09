import React from "react";
import s from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem";

const News = (props) => {
// debugger
  const newsElements = props.newsPage.news.map(news => <NewsItem id={news.id} news={news.news} />)

  const updateNewNewsText = () => {
    
  }

  return (
    <div>
      <div className={s.newsPage}>
        <h1 className={s.newsTitle}>Страница новостей</h1>
        <div className={s.newsWrapper}>
          {newsElements}
        </div>
        <textarea name="" id="" onChange={updateNewNewsText} placeholder="Введите текст новости"></textarea>
        <button>Добавить новость</button>
      </div>
    </div>
  )
}

export default News;