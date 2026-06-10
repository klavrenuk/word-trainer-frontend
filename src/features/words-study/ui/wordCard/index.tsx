interface Props {
    word: string
}

const WordCard = ({ word }: Props) => {
    return (
        <button className='w-[300px] h-[100px] flex items-center justify-center text-black rounded-2xl bg-white text-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-100 cursor-pointer'>
            {word}
        </button>
    )
}

export default WordCard
