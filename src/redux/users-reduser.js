

let initialState = {
  users: [
    {
      id: 1,
      name: "Дед Вовка",
      location: {
        country: "Болото",
        locality: "Район бывшего поселка Кретово",
        address: "Здание универмага",
      },
      characteristic: {age: 72},
    },
    {
      id: 2,
      name: "Охотник Селиван",
      location: {
        country: "Болото",
        locality: "Лесное урочище Волчья сыть",
        address: "Где ночь застанет",
      },
      characteristic: {age: 48},
    },
  ],
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReduser;
