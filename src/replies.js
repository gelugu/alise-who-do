exports.welcome = () => {
  return {
    response: {
      text: "Привет",
      tts: "Привет, я помогу вам в решении бытовых споров. Что нужно сделать?",
      end_session: false,
    },
    version: "1.0",
  };
};

exports.reply = (command, state) => {
  console.log(`state: ${JSON.stringify(state)}`);

  const hisAnswers = [
    "Здадача для настоящего мужчины",
    "Не рожал - значит сделает",
    "Конечно, он",
    "Это явно не для неё",
    "Тут нужна... мужчина",
  ];
  const herAnswers = [
    "Задача для настоящей леди",
    "Это точно женская работа",
    "Дамы вперёд!",
    "Она справится",
  ];

  const isHe = Math.floor(Math.random() * 100) % 2 == 0;

  let answer = "";

  if (isHe) {
    // let currentHisAnswers = hisAnswers
    // if (state.lastHisAnswer) {
    //   console.log("if")
    //   currentHisAnswers = hisAnswers.filter(a => a !== state.lastHisAnswer)
    // }
    answer = getRandomAnswer(hisAnswers);
    state["lastHisAnswer"] = answer
  }
  else {
    // let currentHerAnswers = herAnswers
    // if (state.lastHerAnswer) {
    //   currentHerAnswers = herAnswers.filter(a => a !== state.lastHerAnswer)
    // }
    answer = getRandomAnswer(herAnswers);
    state["lastHerAnswer"] = answer
  }

  return {
    response: {
      text: `${isHe ? "Он" : "Она"}`,
      tts: answer,
      end_session: false,
    },
    version: "1.0",
    session_state: state,
  };
};

const getRandomAnswer = (array) => {
  const size = array.length;

  const number = getRandomInt(size);

  return array[number];
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
