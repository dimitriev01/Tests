import { Checkbox, FormControlLabel, FormGroup, } from "@mui/material"
import { IQuestionProps } from "entities/question"
import { Controller, } from "react-hook-form"

export const CheckboxFields = (props: IQuestionProps) => {
  const { control, question } = props

  return (
    <Controller
      name="answer"
      control={control}
      rules={{
        required: 'Выберите хотя бы один вариант',
      }}
      render={({ field }) => (
        <FormGroup >
          {question.variants?.map((variant) =>
            <FormControlLabel
              key={variant}
              value={variant}
              control={
                <Checkbox
                  onChange={(e) => {
                    const updatedValue = e.target.checked
                      ? [...(field.value || []), e.target.value]
                      : (field.value || []).filter((val: any) => val !== e.target.value);
                    field.onChange(updatedValue);
                  }}
                  value={variant}
                />
              }
              label={variant}
            />
          )}
        </FormGroup>
      )}
    />
  )
}