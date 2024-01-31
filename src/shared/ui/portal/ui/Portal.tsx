import React, {FC} from 'react';
import {createPortal} from "react-dom";

interface IPortal {
    children: React.ReactNode,
    container: Element | DocumentFragment
}

export const Portal: FC<IPortal> = ({children, container}) => {
    return createPortal(children, container)
};

