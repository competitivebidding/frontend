
import * as React from 'react';
import './PaymentModal.scss'

export const PaymentModal = () => {
    return (
        <div className="modal-overlay">
            <div className="modal-window">

                <div className="modal-window__title">
                    Платёжные данные
                </div>
                <div className="modal-window__body">
                    <div className="payment-card">
                        <div className="payment-card__label">
                            <span>Номер банковской карты</span>
                            <input type="tel" className="payment-card__input"/>
                        </div>
                        <div className="payment-card__label">
                            <span>VALID THRU</span>
                            <input type="tel" className="payment-card__input"/>
                        </div>
                        <div className="payment-card__label">
                            <span>Имя владельца</span>
                            <input type="tel" className="payment-card__input"/>
                        </div>
                    </div>
                </div>
                <div className="modal-window__footer">
                    <button className="modal-window__button">Сохранить</button>
                </div>
            </div>
        </div>
    );
};