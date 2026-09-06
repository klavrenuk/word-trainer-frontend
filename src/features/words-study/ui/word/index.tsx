import { WordCard } from '@/features/words-study'

import type { GameWord } from '@/features/words-study'

interface Props {
  word: GameWord

  next: (selectedWord: GameWord, isRightAnswer: boolean) => void
}

const Word = ({ word, next }: Props) => {
  const getRandomWord = (): string => {
    const consonants = 'bcdfghjklmnpqrstvwxyz'
    const vowels = 'aeiou'
    let word = ''

    for (let i = 0; i < 12; i++) {
      const alphabet = i % 2 === 0 ? consonants : vowels
      const randomIndex = Math.floor(Math.random() * alphabet.length)
      word += alphabet[randomIndex]
    }

    return word
  }

  const onSelectWord = (selectedWord: string) => {
    if (selectedWord !== word.word) {
      next(word, false)
    } else {
      next(word, true)
    }
  }

  if (!word) {
    return
  }

  const wrongWord = getRandomWord()

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex justify-center text-4xl'>
        <h3>{word.translation}</h3>
      </div>

      <div className='flex items-center gap-4 justify-center'>
        <WordCard
          word={word.word}
          next={onSelectWord}
        />
        <WordCard
          word={wrongWord}
          next={onSelectWord}
        />
      </div>
    </div>
  )
}

export default Word
