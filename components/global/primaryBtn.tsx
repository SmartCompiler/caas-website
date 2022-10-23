import React from 'react'

interface primBtnInterface {
    classNames?: string,
    onClickHandler?: (e: React.MouseEvent)=>void,
    text: string,
    link?: string|false
}
export default function PrimaryBtn({classNames, onClickHandler, text, link = false}: primBtnInterface) {

  const ButtonTag = link ? `a` : 'button'

  const attrs = getAttribute(link)

  return (
    <ButtonTag 
        {...attrs}
        className={'bg-primary px-1 py-2 rounded-sm border-transparent transition-all border-2 hover:bg-bg_dark hover:border-primary ' + classNames}
        onClick={ e => onClickHandler ? onClickHandler(e) : null }
        >
            { text }
    </ButtonTag>
  )
}

function getAttribute(link: primBtnInterface['link']){
  const anchorAttrs = {
    href: link,
    target: '_blank'
  }

  const buttonAttrs = {}

  return link ? anchorAttrs : buttonAttrs
}