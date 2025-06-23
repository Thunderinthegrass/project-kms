import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
    {id: 1, name: "Александр"},
    {id: 2, name: "Федор"},
    {id: 3, name: "Селиван"},
    {id: 4, name: "Дед Вовка"},
  ]

const messagesData = [
    {id: 1, message: "На болоте туман"},
    {id: 2, message: "В урочище ясно"},
    {id: 3, message: "Изба стоит"},
  ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
