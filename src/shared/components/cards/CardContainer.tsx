import {ReactNode} from 'react'

interface Props {
  children: ReactNode
}

const CardContainer = ({children}: Props) => {
  return (
    <div className="px-4 py-5 bg-white">
      {children}
    </div>
  )
};

export default CardContainer;
