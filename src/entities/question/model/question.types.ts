import { Control } from 'react-hook-form';

export interface IQuestion {
  id: number;
  type: 'checkbox' | 'radio' | 'long' | 'short';
  text: string;
  variants?: string[];
}

export interface IQuestionProps {
  control: Control<any>;
  question?: IQuestion;
}
