'use client'

import { useState } from 'react'

import { Word, StartGame } from '@/features/words-study'
import CardContainer from '@/shared/components/cards/CardContainer'

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
        isGame && <Word />
      }
    </div>
  )
}

export default WidgetLearn
