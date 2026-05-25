import { useMemo } from "react"
import CardMetric from "@/shared/components/cards/CardMetric";

import { MOC_StartData, indicators } from '../constatns'

export default function Home() {
  const filteredIndicators = useMemo(() => {
    return indicators.map((indicator) => {
      return {
        ...indicator,
        value: MOC_StartData[indicator.key as keyof typeof MOC_StartData] ?? indicator.value,
      }
    })
  }, [])

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
