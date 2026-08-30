'use client'

import { useState } from 'react'

import CardContainer from '@/shared/components/cards/CardContainer'
import { StartGame, Game } from '@/features/words-study'

const WidgetLearn = () => {
  const [isGame, setIsGame] = useState<boolean>(false)

  const onSwitchGame = () => setIsGame(!isGame)

  return (
    <div>
      {
        !isGame && <CardContainer>
          <div className="flex justify-center">
            <StartGame startGame={onSwitchGame} />
          </div>
        </CardContainer>
      }

      {
        isGame && <Game />
      }
    </div>
  )
}

export default WidgetLearn
