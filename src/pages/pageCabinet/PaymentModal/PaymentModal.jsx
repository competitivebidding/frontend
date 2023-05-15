import * as React from 'react';
import './PaymentModal.scss'
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_PAYMENT, UPDATE_USER_PAYMENT} from "../../../components/server/userProfile";
import InputMask from 'react-input-mask'

export const PaymentModal = ({onClose}) => {
    const [cardNumber, setCardNumber] = React.useState("")
    const [cardDate, setCardDate] = React.useState("")
    const [cardHolder, setCardHolder] = React.useState("")
    const [cvv, setCvv] = React.useState("")

    const [update] = useMutation(UPDATE_USER_PAYMENT)
    const {refetch} = useQuery(GET_USER_PAYMENT)

    const handlePaymentsUpdate = (e) => {
        e.preventDefault()
        const year = cardDate.substring(cardDate.indexOf('/') + 1).trim()
        const month = cardDate.substring(0, cardDate.indexOf('/')).trim()
        const firstname = cardHolder.substring(0, cardHolder.indexOf(' '))
        const lastname = cardHolder.substring(cardHolder.indexOf(' ') + 1, cardHolder.length - 1)
        update({
            variables: {
                input: {
                    number: cardNumber,
                    firstname,
                    lastname,
                    cvv: cvv,
                    month,
                    year
                }
            }
        }).then(() => {
            refetch()
            onClose(false)
        })
    }

    return (
        <div className="payment-modal">
            <div className="modal-overlay" onClick={() => onClose(false)}></div>
            <div className="modal-window">
                <div className="modal-window__title">
                    Платёжные данные
                </div>
                <div className="modal-window__body">
                    <form onSubmit={handlePaymentsUpdate} className="payment-card">
                        <div className="payment-card__label">
                            <span>Номер банковской карты</span>
                            <InputMask
                                mask="9999 9999 9999 9999"
                                placeholder="XXXX XXXX XXXX XXXX"
                                maskChar=""
                                value={cardNumber}
                                onChange={(e) =>setCardNumber(e.target.value)}
                            >
                                {(inputProps) =>
                                    <input {...inputProps}
                                        required
                                           pattern={'[0-9 ]{19}'}
                                        className="payment-card__input"
                                        type='tel'
                                    />}
                            </InputMask>
                        </div>
                        <div className="payment-card__label">
                            <span>VALID THRU</span>
                            <InputMask
                                mask="99/9999"
                                placeholder="MM / YYYY"
                                required
                                maskChar=" "
                                value={cardDate}
                                className="payment-card__input"
                                onChange={(e) =>setCardDate(e.target.value)}
                            >
                                {(inputProps) =>
                                    <input {...inputProps}
                                           required
                                           pattern={'\\d{2}\\/\\d{4}'}
                                           className="payment-card__input"
                                           type='tel'
                                    />}
                            </InputMask>
                        </div>
                        <div className="payment-card__label">
                            <span>Имя владельца</span>
                                <input
                                   required
                                   type='text'
                                   placeholder={'FIRSTNAME LASTNAME'}
                                   value={cardHolder}
                                   className="payment-card__input"
                                   onChange={(e) => setCardHolder(e.target.value)}
                                />
                        </div>
                        <div className="payment-card__label">
                            <button type='submit' className="modal-window__button">Сохранить</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};