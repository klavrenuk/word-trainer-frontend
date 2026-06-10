import { WordCard } from '@/features/words-study'

const Word = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-center text-4xl'>
                <h3>Word</h3>
            </div>

            <div className='flex items-center gap-4 justify-center'>
                <WordCard word='Item1' />
                <WordCard word='Item2' />
            </div>
        </div>
    )
}

export default Word
