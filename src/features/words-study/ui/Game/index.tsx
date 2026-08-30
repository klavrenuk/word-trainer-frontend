import { useState, useEffect } from 'react'

import { fetchGame } from '@/entities/game'

import type { GameWord } from '@/features/words-study'

import { Word } from '@/features/words-study'

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const [words, setWords] = useState<GameWord[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)


  useEffect(() => {
    if (isLoading) {
      fetchGame()
        .then(res => {
          console.log('res', res)
          setWords(res?.items || [])
          setIsLoading(false)
        })
    }
  }, [isLoading])

  const nextWord = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const currentWord = words[currentIndex]

  return (
    <section>
      <h3>Осталось </h3>
      <div>
        <Word word={currentWord} next={nextWord} />
      </div>
    </section>
  )
}

export default Game
