import { FormLabel } from "@mui/material";
import { IQuestion, IQuestionProps } from "../model/question.types";
import { CheckboxFields, LongField, RadioFields, ShortField } from "./fields";
import { filtredCheckboxQuestions, filtredLongQuestions, filtredRadioQuestions, filtredShortQuestions, } from "../model/question.constants";

export const Question = (props: IQuestionProps) => {
  const { control, question } = props

  const renderQuestionByFiltredStage = () => {
    const checkQuestionType = (questions: IQuestion[], component: JSX.Element) => {
      return questions.some((q) => q === question) ? component : null;
    };

    return (
      checkQuestionType(filtredLongQuestions, <LongField control={control} />) ||
      checkQuestionType(filtredCheckboxQuestions, <CheckboxFields control={control} question={question} />) ||
      checkQuestionType(filtredRadioQuestions, <RadioFields control={control} question={question} />) ||
      checkQuestionType(filtredShortQuestions, <ShortField control={control} />)
    );
  };

  return <>
    <FormLabel component="h3" sx={{ mb: 2, fontSize: 'large' }}>
      {question?.text}
    </FormLabel>
    {renderQuestionByFiltredStage()}
  </>
}