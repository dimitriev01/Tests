import { Alert, Box, Button, Typography, } from "@mui/material"
import { Question, questions, } from "entities/question"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useAppDispatch, useAppSelector } from "shared/lib/hooks"
import { TypeInputs } from "../model/form-stage.types"
import { nextStage, setAnswer, setQuestion, } from "entities/test-system"
import { Timer, } from "entities/timer"
import { ProgressBar } from "entities/progress-bar"

export const FormStage = () => {
  const dispatch = useAppDispatch()
  const { stage, question } = useAppSelector((state) => state.testSystemReducer)
  const { timer } = useAppSelector((state) => state.timerReducer)

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

  const onSubmit = handleSubmit((data: TypeInputs) => {
    dispatch(setAnswer(data.answer))
    dispatch(nextStage())
  })

  useEffect(() => {
    reset()
    dispatch(setQuestion())
  }, [stage])

  if (!question) return null

  return (
    <Box
      component={'section'}
      sx={{
        p: {
          xs: 2,
          md: 3,
        }
      }}
      boxShadow={1}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 2,
          marginBottom: 2,
          flexWrap: 'wrap',
          width: '100%',
        }}
      >
        <Typography variant="h1" component="h1"
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem',
            }
          }}>
          Тестирование
        </Typography>
        <Timer expirationTime={timer} />
      </Box>
      <Box mb={2}>
        <ProgressBar curStage={stage} totalStage={questions.length} />
      </Box>
      <form onSubmit={onSubmit}>
        <Question control={control} question={question} />
        {errors.answer &&
          <Alert variant='outlined' severity="error" sx={{ my: 2 }}>
            {errors.answer.message}
          </Alert>}
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant='contained'>
            Ответить
          </Button>
        </Box>
      </form>
    </Box>
  )
}