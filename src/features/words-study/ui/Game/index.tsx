import { useState, useEffect } from 'react'

import { fetchGame } from '@/entities/game'

import type { GameWord } from '@/features/words-study'

import { Word } from '@/features/words-study'

import styles from './styles.module.scss'

console.log('styles', styles)

const Game = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const [words, setWords] = useState<GameWord[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [wrongWords, setWrongWords] = useState<GameWord[]>([])

  useEffect(() => {
    if (isLoading) {
      fetchGame().then(res => {
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

  const onNextWord = (selectedWord: GameWord, isRightAnswer: boolean) => {
    console.log('onNextWord')
    if (!isRightAnswer) {
      setWrongWords(list => [...list, selectedWord])
    }

    nextWord()
  }

  const showInfo = () => {
    console.log('showInfo')
    console.log('incorrectList', wrongWords)
  }

  return (
    <section className={styles.game}>
      <h3 className={styles.title}>Осталось {words?.length - currentIndex}</h3>

      <a onClick={showInfo}>show info</a>

      <section className={styles.containerWords}>
        <Word
          word={currentWord}
          next={onNextWord}
        />
      </section>
    </section>
  )
}

export default Game
