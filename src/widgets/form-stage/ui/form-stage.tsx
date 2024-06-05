import { Box, Button, FormHelperText } from "@mui/material"
import { Question, } from "entities/question"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "shared/lib/hooks"
import { TypeInputs } from "../model/form-stage.types"
import { nextStage, setAnswer, setQuestion } from "entities/test-system"

export const FormStage = () => {
  const dispatch = useAppDispatch()
  const { stage, question, } = useAppSelector((state) => state.testSystemReducer)

  const defaultValues = {
    answer: question?.type === 'radio' || question?.type === 'checkbox' ? [] : '',
  };

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeInputs>({
    defaultValues: defaultValues,
    mode: 'onChange',
  })

  useEffect(() => {
    reset()
    dispatch(setQuestion())
  }, [stage])

  const onSubmit = handleSubmit((data: TypeInputs) => {
    dispatch(setAnswer(data.answer))
    dispatch(nextStage())
  })

  if (!question) return null

  return (
    <form onSubmit={onSubmit}>
      <Question control={control} question={question} />
      {errors.answer && <FormHelperText error>{errors.answer.message}</FormHelperText>}
      <Box sx={{ mt: 2 }}>
        <Button type="submit" variant='contained'>
          Ответить
        </Button>
      </Box>
    </form>
  )
}