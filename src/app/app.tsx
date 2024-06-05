import { Box, Button, Container } from "@mui/material"
import { FormStage } from "widgets/form-stage"
import { useAppDispatch, useAppSelector } from "shared/lib/hooks"
import { nextStage, } from "entities/test-system"
import './styles/styles.scss'

export const App = () => {
  const dispatch = useAppDispatch()
  const { stage } = useAppSelector((state) => state.testSystemReducer)

  const onClickStartTest = () => {
    dispatch(nextStage())
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        {stage ?
          <FormStage /> :
          <Box sx={{ textAlign: 'center' }}>
            <Button variant='contained' onClick={onClickStartTest}>Начать тестирование</Button>
          </Box>}
      </Box>
    </Container>
  )
}

