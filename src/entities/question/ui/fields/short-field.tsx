import { TextField } from "@mui/material"
import { IQuestionProps } from "entities/question"
import { Controller } from "react-hook-form"

export const ShortField = (props: IQuestionProps) => {
  const { control, } = props

  return (
    <Controller
      name="answer"
      control={control}
      rules={{
        required: 'Нужно ввести ответ',
        maxLength: { value: 50, message: 'Ответ должен быть не более 50 символов' },
      }}
      render={({ field }) =>
        <TextField
          {...field}
          fullWidth
          inputProps={{ maxLength: 50 }}
        />
      }
    />
  )
}