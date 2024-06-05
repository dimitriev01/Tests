import { TextField } from "@mui/material"
import { IQuestionProps } from "entities/question"
import { Controller } from "react-hook-form"

export const LongField = (props: IQuestionProps) => {
  const { control, } = props

  return (
    <Controller
      name="answer"
      control={control}
      rules={{ required: 'Нужно ввести ответ' }}
      render={({ field }) =>
        <TextField {...field}
          fullWidth
          multiline
          maxRows={6}
        />
      }
    />
  )
}