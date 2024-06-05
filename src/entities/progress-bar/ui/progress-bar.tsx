import { LinearProgress } from "@mui/material"

export const ProgressBar = (props: IProgressBarProps) => {
  const { curStage, totalStage } = props

  const progress = (curStage * 100) / totalStage;

  return (
    <LinearProgress variant='determinate' value={progress} />
  )
}