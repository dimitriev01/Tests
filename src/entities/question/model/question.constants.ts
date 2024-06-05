import { IQuestion } from './question.types';

export const questions: IQuestion[] = [
  {
    type: 'checkbox',
    text: 'Вопрос 1: Какие цвета тебе нравятся?',
    variants: ['Красный', 'Синий', 'Зеленый', 'Другой'],
    id: 1,
  },
  {
    type: 'radio',
    text: 'Вопрос 2: Какое твое любимое животное?',
    variants: ['Собака', 'Кошка', 'Птичка'],
    id: 2,
  },
  {
    type: 'long',
    text: 'Вопрос 3: Чем ты сегодня занимался?',
    id: 3,
  },
  {
    type: 'short',
    text: 'Вопрос 4: Как тебя зовут?',
    id: 4,
  },
];

export const filtredCheckboxQuestions = questions.filter(q => q.type === 'checkbox');
export const filtredShortQuestions = questions.filter(q => q.type === 'short');
export const filtredLongQuestions = questions.filter(q => q.type === 'long');
export const filtredRadioQuestions = questions.filter(q => q.type === 'radio');
