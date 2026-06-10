interface Props {
    wordsLearned: number
}

const IndicatorWordsLearned = ({wordsLearned}:Props) => {
    return (
        <div className="relative">
            <div>
                <svg width="400" height="400" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#333" stroke-width="12" />
                    <circle cx="100" cy="100" r="90" fill="none" stroke="#7A4FF1" stroke-width="12"
                        stroke-dasharray="565.48" stroke-dashoffset="141.37" transform="rotate(-90 100 100)" />
                </svg>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center">
                <h5 className="text-base text-gray-300">Слов изучено</h5>
                <h6 className="text-4xl font-bold text-white">{ wordsLearned }</h6>
            </div>
        </div>
    )
}

export default IndicatorWordsLearned