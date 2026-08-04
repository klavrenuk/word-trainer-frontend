'use client'

import { useState } from 'react'

import { Word, StartGame } from '@/features/words-study'
import CardContainer from '@/shared/components/cards/CardContainer'

const WidgetLearn = () => {
  const [isGame, setIsGame] = useState<boolean>(false)
  return (
    <div>
      {
        !isGame && <CardContainer>
          <div className="flex justify-center">
            <StartGame />
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
