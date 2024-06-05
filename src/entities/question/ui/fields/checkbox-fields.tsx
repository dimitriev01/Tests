import { Checkbox, FormControlLabel, FormGroup, } from "@mui/material"
import { IQuestionProps } from "entities/question"
import { Controller, ControllerRenderProps, } from "react-hook-form"

export const CheckboxFields = (props: IQuestionProps) => {
  const { control, question } = props

  const onChangeCheckboxHandler = (e: React.ChangeEvent<HTMLInputElement>, field: ControllerRenderProps<any, "answer">) => {
    const updatedValue = e.target.checked
      ? [...(field.value || []), e.target.value]
      : (field.value || []).filter((val: any) => val !== e.target.value);
    field.onChange(updatedValue);
  }

  if (!question) return null

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
                  onChange={(e) => onChangeCheckboxHandler(e, field)}
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