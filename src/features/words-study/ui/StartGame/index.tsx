import { Button } from 'antd'

interface Props {
  startGame: () => void
}

const StartGame = ({startGame}: Props) => {
  return (
    <div>
      <Button type='primary' onClick={startGame}>Start</Button>
    </div>
  )
}

export default StartGame
