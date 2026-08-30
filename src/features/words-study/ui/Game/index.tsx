import { useState, useEffect } from 'react'

import { fetchGame } from '@/entities/game'

import type { GameWord } from '@/features/words-study'

import { Word } from '@/features/words-study'

const Game = () => {
  const [counter, setCounter] = useState<number>(0)
  const [words, setWords] = useState<GameWord[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
    if (isLoading) {
      fetchGame()
        .then(res => {
          console.log('res', res)
          setIsLoading(false)
        })
    }
  }, [isLoading])

  return (
    <section>
      <h3>Осталось </h3>
      <div>
        <Word />
      </div>
    </section>
  )
}

export default Game
