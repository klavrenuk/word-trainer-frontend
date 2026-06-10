import CardResults from '@/widgets/results/ui/card'

import { MOCS_RESULTS } from '@/mocs/page-results'

const Results = () => {
    return (
        <div className='flex items-center justify-center'>
            <CardResults wordsLearned={MOCS_RESULTS.wordsLearned} />
        </div>
    )
}

export default Results
