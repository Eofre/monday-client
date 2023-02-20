import { EducationalBlock } from "../types/types";

const modules: EducationalBlock[] = [
  {
    id: 1,
    title: "Weekday",
    description: "All days of the week",
    words: [
      {
        term: "Monday",
        definition: "Понедельник",
        transcription: `ˈmʌndeɪ`,
      },
      {
        term: "Tuesday",
        definition: "Вторник",
        transcription: `ˈtuːzdeɪ`,
      },
      {
        term: "Wednesday",
        definition: "Среда",
        transcription: `ˈwenzdeɪ`,
      },
      {
        term: "Thursday",
        definition: "Четверг",
        transcription: `ˈθɜːrzdeɪ`,
      },
      {
        term: "Friday",
        definition: "Пятница",
        transcription: `ˈfraɪdeɪ`,
      },
      {
        term: "Saturday",
        definition: "Суббота",
        transcription: `ˈsætərdeɪ`,
      },
      {
        term: "Sunday",
        definition: "Воскресенье",
        transcription: `ˈsʌndeɪ`,
      },
    ],
  },
  {
    id: 2,
    title: "Gustures 2",
    description: "Gestures for all occasions",

    words: [
      {
        term: "Let me think a bit",
        definition: "Дайти мне подумать секундочку",
        transcription: ``,
      },
      {
        term: "No way",
        definition: "Ни за что!",
        transcription: ``,
      },

      {
        term: "I don't care",
        definition: "Мне все равно!",
        transcription: `keə`,
      },
      {
        term: "Thank God",
        definition: "Слава Богу!",
        transcription: `ɡɒd`,
      },
      {
        term: "I see! That makes sense",
        definition: "Я вас понимаю! Я согласен!",
        transcription: `ˈsiː ðæt ˈmeɪks sɛns`,
      },
      {
        term: "Nothing special. So-so",
        definition: "Ничего особенного. Так себе",
        transcription: `ˈnʌθɪŋ ˈspɛʃ(ə)l ˈsəʊ ˈsəʊ`,
      },
    ],
  },
  {
    id: 3,
    title: "Daily routine",
    description: "Daily routine: in the morning",

    words: [
      {
        term: "Wake up at 9",
        definition: "Просыпаться в 9",
        transcription: ``,
      },
      {
        term: "Lie in bed for 5 minutes",
        definition: "Лежать в кровати в течение 5 минут",
        transcription: `lai min.itz`,
      },
      {
        term: "Get up",
        definition: "Вставать",
        transcription: ``,
      },
      {
        term: "Oversleep",
        definition: "Проспать",
        transcription: `əʊvəˈsliːp`,
      },
      {
        term: "Make my bed",
        definition: "Заправлять кровать",
        transcription: ``,
      },
      {
        term: "Blow-dry my hair",
        definition: "Сущить волосы",
        transcription: `bləʊ`,
      },
      {
        term: "Brush my hair",
        definition: "Расчесывать волосы",
        transcription: ``,
      },
      {
        term: "Feed pets",
        definition: "Кормить домашних животных",
        transcription: ``,
      },
      {
        term: "Have a shower",
        definition: "Принимать душ",
        transcription: `ˈʃaʊə`,
      },
      {
        term: "Shave",
        definition: "Бриться",
        transcription: `ʃeɪv`,
      },
      {
        term: "Put on make-up",
        definition: "Краситься",
        transcription: ``,
      },
      {
        term: "Go to work by bus",
        definition: "Ехать на работы на автобусе",
        transcription: `ˈwɜːk`,
      },
    ],
  },
  // {
  //   id: 5,
  //   title: "Weekday",
  //   description: "All days of the week",
  //   languageDefinition: "русский",
  //   languageTerm: "английкий",
  //   words: [
  //     {
  //       term: "Monday",
  //       definition: "Понедельник",
  //       transcription: `ˈmʌndeɪ`,
  //     },
  //     {
  //       term: "Tuesday",
  //       definition: "Вторник",
  //       transcription: `ˈtuːzdeɪ`,
  //     },
  //   ],
  //   isFavorite: false,
  // },
  {
    id: 6,
    title: "Daily routine 2",
    description: "Daily routine: in the afternoon; in the evening; at night",

    words: [
      {
        term: "Have a nap",
        definition: "Вздремнуть",
        transcription: ``,
      },
      {
        term: "Have a snack",
        definition: "Перекусить",
        transcription: ``,
      },
      {
        term: "Have a break",
        definition: "Сделать перерыв",
        transcription: ``,
      },
      {
        term: "Have lunch",
        definition: "Обедать",
        transcription: ``,
      },
      {
        term: "Make lunch",
        definition: "Готовить обед",
        transcription: ``,
      },
      {
        term: "Have a bath",
        definition: "Принимать ванну",
        transcription: ``,
      },
      {
        term: "Get home late",
        definition: "Приходить домой поздно",
        transcription: ``,
      },
      {
        term: "Get home early",
        definition: "Приходить домой рано",
        transcription: ``,
      },
      {
        term: "Call somebody",
        definition: "Звонить кому-нибудь",
        transcription: ``,
      },
      {
        term: "Talk with my friends on the phone",
        definition: "Разговаривтаь с друзьями по телефону",
        transcription: ``,
      },
      {
        term: "Fall asleep",
        definition: "Засыпать",
        transcription: ``,
      },
      {
        term: "Hang out with my friends",
        definition: "Зависать с друзьями",
        transcription: ``,
      },
    ],
  },
  {
    id: 7,
    title: "Gestures 1",
    description: "жесты",

    words: [
      {
        term: "Shut up",
        definition: "Заткнись!",
        transcription: `ʃʌt ʌp`,
      },
      {
        term: "What time is it?",
        definition: "Который сейчас час?",
        transcription: ``,
      },
      {
        term: "Call me",
        definition: "Позвони мне",
        transcription: `kɔːl miː`,
      },
      {
        term: "Text me",
        definition: "Напиши мне",
        transcription: ``,
      },
      {
        term: "That's really strange",
        definition: "Это действительно странно",
        transcription: `ðæt ˈrɪəlɪ streɪnʤ`,
      },
      {
        term: "Let's have a break",
        definition: "Давайте сделаем перерыв",
        transcription: ``,
      },
    ],
  },
];

export default modules;
