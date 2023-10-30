import React, {FC} from 'react';
import scss from "@widgets/group-subscribers/GroupSubscribers.module.scss";
import {AppModal} from "@shared/ui/modal/AppModal";
import {useTranslation} from "react-i18next";

interface ConfirmModalProps {
 isOpen: boolean,
    onCancel: () => void,
    onConfirm: () => void,
    title: string,
    onClose: (isOpen: boolean) => void
};

export const ConfirmModal: FC<ConfirmModalProps> = ({isOpen, onCancel, onConfirm, title, onClose}) => {
 const { t } = useTranslation('messagesPage')

 return (
        <AppModal
            isOpen={isOpen}
            onClose={onClose}
        >
         <div className={scss.modalGroup__container}>
          <div className={scss.modalGroup__title}>{t(title)}?</div>
          <div className={scss.modalGroup__button}>
           <button className={`${scss.modalGroup__agreement}`} onClick={onConfirm}>
            {t('Yes')}
           </button>
           <button className={`${scss.modalGroup__agreement}`} onClick={onCancel}>
            {t('No')}
           </button>
          </div>
         </div>
        </AppModal>
    );
};