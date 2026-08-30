import CardMetric from "@/shared/components/cards/CardMetric";

import { indicators } from '../constatns'

import { fetchUserStatistics } from '@/entities/statistics'

import type { UserStatistics } from '@/types/statistics'
import type { Indicator } from '@/app/types'


export default async function Home() {
  const userStatistics:UserStatistics = await fetchUserStatistics()

  console.log('userStatistics', userStatistics)

  const filteredIndicators = indicators.map((indicator:Indicator) => {
    const key = indicator.key
    const value = userStatistics[key]

    return {
      ...indicator,
      value: value
    }
  })

  console.log('filterIndi', filteredIndicators)

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredIndicators.map((indicator) => (
          <CardMetric
            key={indicator.key}
            title={indicator.title}
            value={indicator.value}
            icon={indicator.icon}
            color={indicator.color}
          />
        ))}
      </div>
    </div>
  );
}
