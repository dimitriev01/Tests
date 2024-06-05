import { IQuestion } from 'entities/question';

export interface ITestSystemState {
  question: IQuestion | null;
  stage: number;
  answers: Record<string, any>;
}
