import type { Indicator } from './types';

import { FaLeaf, FaClock } from 'react-icons/fa';

export const MOC_StartData = {
    words: 247,
    time: 1840,
}

export const indicators: Indicator[] = [
    {
        key: 'words',
        title: 'Выучено слов',
        value: 0,
        icon: FaLeaf,
        color: 'green' as const,
    },
    {
        key: 'time',
        title: 'Время изучения',
        value: 0,
        icon: FaClock,
        color: 'blue' as const,
    },
]