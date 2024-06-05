import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITestSystemState } from './test-system.types';
import { questions } from 'entities/question';
import { localStorageAnswerKey, localStorageStageKey } from './test-system.contants';

const initialState: ITestSystemState = {
  stage: JSON.parse(localStorage.getItem(localStorageStageKey) ?? '0'),
  question: null,
  answers: {},
};

export const testSystemSlice = createSlice({
  name: 'testSystemSlice',
  initialState,
  reducers: {
    setQuestion: state => {
      state.question = questions.find(q => q.id === state.stage) || null;
    },
    setAnswer: (state, action: PayloadAction<string | string[]>) => {
      state.answers[state.stage] = action.payload;
      localStorage.setItem(`${localStorageAnswerKey}${state.stage}`, action.payload.toString());
    },
    nextStage: state => {
      const incrementedStage = state.stage + 1;
      state.stage = incrementedStage;
      localStorage.setItem(localStorageStageKey, incrementedStage.toString());
    },
  },
});

export const { nextStage, setAnswer, setQuestion } = testSystemSlice.actions;

export default testSystemSlice.reducer;
