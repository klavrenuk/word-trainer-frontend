import { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

const Card = ({children}: Props) => {
    return (
        <div className="flex flex-col w-[400px] p-6 sm:p-8 md:p-10 bg-gradient-to-br from-slate-50 to-gray-100">
            { children }
        </div>
    )
}

export default Card