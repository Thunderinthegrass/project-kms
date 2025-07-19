const ADD_NEW_NEWS_TEXT = "ADD-NEW-NEWS-TEXT";
const ADD_NEWS = "ADD-NEWS";

export const addNewNewsTextActionCreator = (news) => ({type: ADD_NEW_NEWS_TEXT, news: news});
export const addNewsActionCreator = () => ({type: ADD_NEWS});

let initialState = {
      newNewsText: "",
      news: [
        { id: 1, news: "Новость" },
        { id: 2, news: "Новость" },
        { id: 3, news: "Новость" },
      ]
    };

const newsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_NEWS_TEXT:
      state.newNewsText = action.news;
      return {...state};
    case ADD_NEWS:
      const newNews = {
        id: state.news.length + 1,
        news: state.newNewsText,
      }
      let stateCopy = {...state};
      stateCopy.news = [...state.news];
      stateCopy.news.push(newNews);

      stateCopy.newNewsText = "";
      return stateCopy;
    default: return state;
  }
}

export default newsReduser;


