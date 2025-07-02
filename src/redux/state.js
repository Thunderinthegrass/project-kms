export const store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Александр" },
        { id: 2, name: "Федор" },
        { id: 3, name: "Селиван" },
        { id: 4, name: "Дед Вовка" },
      ],
      messages: [
        { id: 1, message: "На болоте туман" },
        { id: 2, message: "В урочище ясно" },
        { id: 3, message: "Изба стоит" },
      ],
    },
    profilePage: {
      newPostText: "",
      posts: [
        { id: 1, message: "Пост", likes: 15 },
        { id: 2, message: "Пост", likes: 17 },
        { id: 3, message: "Пост", likes: 12 },
        { id: 4, message: "Пост", likes: 20 },
      ],
    },
    friendsPage: {
      friends: [
        { id: 1, name: "Митя", imgPath: "https://avatars.dzeninfra.ru/get-zen_doc/62191/pub_5d46ef138da1ce00af96680b_5d472c4ae6cb9b00ad5bdddb/scale_1200" },
        { id: 2, name: "Мотя", imgPath: "https://avatars.dzeninfra.ru/get-zen_doc/1866101/pub_6503e42bffb3f010e7c18488_6503e889f277c224a7deeed4/scale_1200" }
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('ggg');
  },
  addPost() {
    let postId = this._state.profilePage.posts.length + 1;
    let newPost = {
      id: postId,
      message: this._state.profilePage.newPostText,
      likes: 10
    }

    this._state.profilePage.posts.push(newPost);

    this._state.profilePage.newPostText = "";

    console.log(this._state.profilePage.posts);

    this._callSubscriber(this._state);
  
  },
  addNewPostText(text) {
    this._state.profilePage.newPostText = text;

    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}

window.store = store;
