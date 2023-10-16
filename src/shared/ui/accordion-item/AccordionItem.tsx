import React, { useState } from 'react'
import cls from './AccordionItem.module.scss'
interface IAccordionItemProps {
  isClicked: boolean
  title: string
  describe: string
}

function AccordionItem({ isClicked, title, describe }: IAccordionItemProps) {
  const [open, setOpen] = useState(isClicked)

  return (
    <div className={cls.accordion__item}>
      <div className={cls['accordion__title--button']}>
        <div className={cls.accordion__title}>
          <h3>{title}</h3>
        </div>
        <button
          className={cls.accordion__button}
          style={{ transform: open ? 'rotate(0deg)' : '' }}
          onClick={() => setOpen(!open)}
        ></button>
      </div>
      {open && <div className={cls.accordion__content}>{describe}</div>}
    </div>
  )
}

export default AccordionItem
