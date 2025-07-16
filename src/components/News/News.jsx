import React from "react";
import s from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem";

const News = (props) => {

  const newsElements = props.newsPage.news.map(news => <NewsItem id={news.id} news={news.news} />)

  const onUpdateNewNewsText = (e) => {
    let text = e.target.value;
    props.updateNewNewsText(text)
    console.log(props.newsPage.newNewsText)
  }

  const onAddNews = () => {
    props.addNews();
  }

  return (
    <div>
      <div className={s.newsPage}>
        <h1 className={s.newsTitle}>Страница новостей</h1>
        <div className={s.newsWrapper}>
          {newsElements}
        </div>
        <textarea name="" id="" onChange={onUpdateNewNewsText} placeholder="Введите текст новости" value={props.newsPage.newNewsText}></textarea>
        <button onClick={onAddNews}>Добавить новость</button>
      </div>
    </div>
  )
}

export default News;