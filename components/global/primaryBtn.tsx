import React from 'react'

interface primBtnInterface {
    classNames?: string,
    onClickHandler?: (e: React.MouseEvent)=>void,
    text: string
}
export default function PrimaryBtn({classNames, onClickHandler, text}: primBtnInterface) {
  return (
    <button 
        className={'bg-primary px-1 py-2 rounded-sm border-transparent transition-all border-2 hover:bg-bg_dark hover:border-primary ' + classNames}
        onClick={ e => onClickHandler ? onClickHandler(e) : null }
        >
            { text }
    </button>
  )
}
