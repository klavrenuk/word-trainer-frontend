import CardResults from '@/features/results/ui/card'

import { MOCS_RESULTS } from '@/mocs/page-results'

const Results = () => {
    return (
        <div className="flex items-center justify-center">
            Page result

            <CardResults wordsLearned={MOCS_RESULTS.wordsLearned} />
        </div>
    )
}

export default Results