import React from "react";
import s from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem";
import { Field, Form } from "react-final-form";

const showError = (error) => {
  alert(error);
}

const required = value => (value ? undefined : showError('Required'))
const mustBeNumber = value => (isNaN(value) ? showError('Must be a number') : undefined)
// const minValue = min => value =>
//   isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

const NewsForm = (props) => {
  const onSubmit = (value) => {
    console.log('newsFinalFormData: ', value);
    props.addNews(value.newsItem);
  }

  return (
    <Form
     onSubmit={onSubmit}
     render={({handleSubmit, submitting}) => {
      return (
        <form onSubmit={handleSubmit}>
          <div className="inputWrapper">
            <Field
              name="newsItem"
              placeholder="введите новость"
              component="textarea"
              validate={composeValidators(required, mustBeNumber)}
            />
          </div>
          <button type="submit" disabled={submitting}>Отправить новость</button>
        </form>
      )
     }}
    />
  )
}

const News = (props) => {

  const newsElements = props.newsPage.news.map(news => <NewsItem id={news.id} news={news.news} />)

  // const onUpdateNewNewsText = (e) => {
  //   let text = e.target.value;
  //   props.updateNewNewsText(text)
  //   console.log(props.newsPage.newNewsText)
  // }

  // const onAddNews = () => {
  //   props.addNews();
  // }

  return (
    <div>
      <div className={s.newsPage}>
        <h1 className={s.newsTitle}>Страница новостей</h1>
        <div className={s.newsWrapper}>
          {newsElements}
        </div>
        {/* <textarea name="" id="" onChange={onUpdateNewNewsText} placeholder="Введите текст новости" value={props.newsPage.newNewsText}></textarea>
        <button onClick={onAddNews}>Добавить новость</button> */}
        <NewsForm addNews={props.addNews} />
      </div>
    </div>
  )
}

export default News;