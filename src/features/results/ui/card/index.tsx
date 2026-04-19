interface Props {
    wordsLearned: number
}

const CardResults = ({wordsLearned}:Props) => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center gap-2">
                <span></span>
                <h6 className="text-xl text-white font-semibold">Результаты</h6>
                <span className="text-white text-sm">Мой прогресс</span>
            </div>            
        </div>
    )
}

export default CardResults