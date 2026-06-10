import IndicatorWordsLearned from '../indicatorWordsLearned'

interface Props {
    wordsLearned: number
}

const CardResults = ({wordsLearned}:Props) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center gap-2">
                <span></span>
                <h6 className="text-xl text-white font-semibold">Результаты</h6>
                <span className="text-white text-sm">Мой прогресс</span>
            </div>    

            <IndicatorWordsLearned wordsLearned={wordsLearned} />        
        </div>
    )
}

export default CardResults