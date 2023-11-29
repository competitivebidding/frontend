import React, {forwardRef, useEffect, useState} from 'react';
import cls from './UserHistoryPopup.module.scss'
import {Portal} from "@shared/ui/portal";
import {useQuery} from "@apollo/client";
import {GET_ALL_MY_PAY_OPERATIONS} from "@shared/schemas/tokens/tokens";
import {toDate} from "@shared/utils/timeHelpers";

export const UserHistoryPopup = forwardRef(({buttonRef}:{buttonRef: React.RefObject<HTMLDivElement>}, ref)=> {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const { data } = useQuery(GET_ALL_MY_PAY_OPERATIONS);

    useEffect(() => {
        if (buttonRef && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                top: rect.bottom + window.scrollY,
                left: rect.left + window.scrollX,
            });
        }
    }, [buttonRef]);

    return (
        <Portal container={document.body}>
            <div className={cls.history} ref={ref} style={{transform: `translate(${position.left}px, ${position.top}px)`}}>
                <ul className={cls.history__list}>
                    <h4 className={cls['history__list-title']} >История покупки валюты</h4>
                    {data?.getAllMyPayOperation.map(operation => (
                        <li key={operation.id} className={cls['history__list-item']}>
                            <p>{toDate(operation.createAt)}</p>
                            <p>{operation.amount} ROTO</p>
                        </li>
                    )).reverse()}
                </ul>
            </div>
        </Portal>
    );
} )