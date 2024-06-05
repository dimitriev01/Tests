import { Box, Button, Container, Typography } from "@mui/material"
import { FormStage } from "widgets/form-stage"
import { useAppDispatch, useAppSelector } from "shared/lib/hooks"
import { nextStage, } from "entities/test-system"
import { questions } from "entities/question"
import './styles/styles.scss'
import { formatTime } from "shared/lib/helpers"

export const App = () => {
  const dispatch = useAppDispatch()
  const { stage } = useAppSelector((state) => state.testSystemReducer)
  const { timer } = useAppSelector((state) => state.timerReducer)

  const onClickStartTest = () => {
    dispatch(nextStage())
  }

  return (
    <Container maxWidth="lg" component={'main'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        {stage > 0 && timer > 0 && stage <= questions.length ?
          <FormStage /> :
          timer <= 0 || stage > questions.length ?
            <Typography
              variant="h3"
              component="h3"
              sx={{
                textAlign: 'center',
                fontSize: {
                  xs: '1.5rem',
                  sm: '2rem',
                  md: '2.5rem'
                }
              }}>
              Тестирование закончено, спасибо!
            </Typography> :
            <Box
              sx={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                sx={{
                  fontSize: {
                    xs: '1.5rem',
                    sm: '2rem',
                    md: '2.5rem',
                  }
                }}>
                После нажатия на кнопку начнется отчет времени. Тест на {formatTime(timer)} минут
              </Typography>
              <div>
                <Button variant='contained' onClick={onClickStartTest}>Начать тестирование</Button>
              </div>
            </Box>
        }
      </Box>
    </Container>
  )
}

