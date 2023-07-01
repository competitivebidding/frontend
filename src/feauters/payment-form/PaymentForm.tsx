import * as React from 'react';
import './PaymentForm.scss'
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_PAYMENT, UPDATE_USER_PAYMENT} from "shared/schemas/user/userProfile";
import {AppModal} from "@/shared/ui/modal/AppModal";
import {FormInput} from "shared/ui/form-input/FormInput";
import {useTranslation} from "react-i18next";
import {FC} from "react";

interface IPaymentsForm {
    onClose: (value: boolean) => void
}

export const PaymentForm: FC<IPaymentsForm> = ({onClose}) => {
    const {t} = useTranslation('cabinet')

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
        <AppModal title={'Payment info-tabs'} onClose={onClose}>
            <form onSubmit={handlePaymentsUpdate} className="payment-card">
                <FormInput
                    className={'payment-card__input'}
                    mask={"9999 9999 9999 9999"}
                    onChange={setCardNumber}
                    value={cardNumber}
                    label={'Bank card number'}
                    placeholder={"XXXX XXXX XXXX XXXX"}
                    pattern={'[0-9 ]{19}'}
                    type={'tel'}
                />
                <FormInput
                    className={'payment-card__input'}
                    mask={"99/9999"}
                    onChange={setCardDate}
                    value={cardDate}
                    label={'VALID THRU'}
                    placeholder={"MM / YYYY"}
                    pattern={'\\d{2}\\/\\d{4}'}
                    type={'tel'}
                />
                <FormInput
                    className={'payment-card__input'}
                    mask={null}
                    onChange={setCardHolder}
                    value={cardHolder}
                    label={'Cardholder name'}
                    placeholder={"FIRSTNAME LASTNAME"}
                    type={'text'}
                />

                <div className="payment-card__input">
                    <button type='submit' className="form__button">{t('save')}</button>
                </div>
            </form>
        </AppModal>
    );
};

