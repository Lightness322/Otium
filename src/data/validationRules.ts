export const validationRules = {
  nickname: {
    required: "Необходимо заполнить!",
    minLength: {
      value: 4,
      message: "Минимум 4 символа",
    },
    maxLength: {
      value: 20,
      message: `Максимум 20 символов`,
    },
  },
  email: {
    required: "Необходимо заполнить!",
    pattern: {
      value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/i,
      message: "Неправильный формат почты",
    },
  },
  password: {
    required: "Необходимо заполнить!",
    minLength: {
      value: 6,
      message: "Минимум 6 символов",
    },
    pattern: {
      value: /(?=.*[A-Za-zА-Яа-я])(?=.*[0-9])/gim,
      message: "Пароль должен состоять из чисел и букв",
    },
  },
};
