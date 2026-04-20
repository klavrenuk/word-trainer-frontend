import { IconType } from 'react-icons';

export interface Indicator {
  key: string;
  title: string;
  value: string | number;
  icon: IconType;
  color: 'green' | 'blue' | 'purple';
}