import { IconType } from 'react-icons';

interface Props {
    title: string;
    value: string | number;
    icon: IconType;
    color?: 'green' | 'blue' | 'purple';
}

const CardMetric = ({ title, value, icon: Icon, color = 'blue' }: Props) => {
    const colorClasses = {
        green: 'text-green-500',
        blue: 'text-blue-500',
        purple: 'text-purple-500',
    };

    return (
        <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-3 shadow-sm border border-gray-700">
            <Icon className={`w-6 h-6 ${colorClasses[color]}`} />
            <div>
                <p className="text-gray-400 text-sm">{title}</p>
                <p className="text-xl font-bold text-gray-100">{value}</p>
            </div>
        </div>
    );

}

export default CardMetric