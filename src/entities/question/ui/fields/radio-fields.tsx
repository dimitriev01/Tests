import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { IQuestionProps, } from "entities/question"
import { Controller } from "react-hook-form"

export const RadioFields = (props: IQuestionProps) => {
  const { control, question } = props

  return (
    <Controller
      name="answer"
      control={control}
      rules={{ required: 'Выберите хотя бы один вариант', }}
      render={({ field }) => (
        <RadioGroup
          {...field}
          value={field.value}
        >
          {question.variants?.map((variant) =>
            <FormControlLabel
              key={variant}
              value={variant}
              control={<Radio />}
              label={variant}
            />
          )}
        </RadioGroup>
      )}
    />
  )
}