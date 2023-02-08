import { LearnModule } from "../types/types";

const modules: LearnModule[] = [
  {
    id: 1,
    title: "Weekday",
    description: "All days of the week",
    languageDefinition: "русский",
    languageTerm: "английкий",
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
    isFavorite: true,
  },
  {
    id: 2,
    title: "Gustures 2",
    description: "Gestures for all occasions",
    languageDefinition: "русский",
    languageTerm: "английкий",
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
        transcription: `[ˈnʌθɪŋ ˈspɛʃ(ə)l ˈsəʊ ˈsəʊ`,
      },
    ],
    isFavorite: true,
  },
  {
    id: 3,
    title: "DAILY ROUTINE: IN THE MORNING",
    description: ":)",
    languageDefinition: "русский",
    languageTerm: "английкий",
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
    isFavorite: true,
  },
  {
    id: 5,
    title: "Weekday",
    description: "All days of the week",
    languageDefinition: "русский",
    languageTerm: "английкий",
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
    ],
    isFavorite: false,
  },
  // {
  //   id: 6,
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
];

export default modules;
