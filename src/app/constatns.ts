import type { Indicator } from './types';

import { FaLeaf, FaClock } from 'react-icons/fa';

export const indicators: Indicator[] = [
    {
        key: 'learned',
        title: 'Выучено слов',
        value: 0,
        icon: FaLeaf,
        color: 'green' as const,
    },
    {
        key: 'mistakes',
        title: 'Ошибок',
        value: 0,
        icon: FaClock,
        color: 'blue' as const,
    },
]
