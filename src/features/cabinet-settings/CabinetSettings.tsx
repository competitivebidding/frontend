import React, { FormEvent, FormEventHandler, useState } from 'react'
import cls from './CabinetSettings.module.scss'
import { useMutation, useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'

import {
  EditProfileDocument,
  GetProfileDocument,
  GetUserAddressDocument,
  UpdateUserAddressDocument,
} from '@shared/lib/types/__generated-types__/graphql'
import FormInput from '@shared/ui/form-input/FormInput'

interface IProfileInfo {
  firstname?: string
  lastname?: string
  patronymic?: string
}

export const CabinetSettings = () => {
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [userInfo, setUserInfo] = useState<IProfileInfo | undefined>(undefined)
  const [address, setAddress] = useState<string | null | undefined>(undefined)

  const [updateProfile] = useMutation(EditProfileDocument)
  const [updateAddress] = useMutation(UpdateUserAddressDocument, { refetchQueries: [GetUserAddressDocument] })
  const { t } = useTranslation('cabinetPage')

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsEditable(false)
    Promise.all([
      updateProfile({
        variables: {
          updateUserInput: {
            firstname: userInfo?.firstname,
            lastname: userInfo?.lastname,
            patronymic: userInfo?.patronymic,
          },
        },
      }),
      updateAddress({
        variables: {
          input: {
            address,
          },
        },
      }),
    ])
  }

  const handleChangeUserInfo = (field: typeof userInfo) => {
    setUserInfo((prev) => ({ ...prev, ...field }))
  }

  return (
    <>
      {userInfo && (
        <div className={cls.settings}>
          <div className={cls.wrapper}>
            <form onSubmit={submit} className={cls.form}>
              <div className={cls.wrapper}>
                <div className={cls.body}>
                  <FormInput
                    label={'Name'}
                    disabled={!isEditable}
                    value={userInfo.firstname ? userInfo.firstname : ''}
                    onChange={(v) => handleChangeUserInfo({ firstname: v })}
                  />
                  <FormInput
                    label={'Lastname'}
                    disabled={!isEditable}
                    value={userInfo.lastname ? userInfo.lastname : ''}
                    onChange={(v: string) => handleChangeUserInfo({ lastname: v })}
                  />
                  <FormInput
                    label={'Patronymic'}
                    disabled={!isEditable}
                    value={userInfo.patronymic ? userInfo.patronymic : ''}
                    onChange={(v) => handleChangeUserInfo({ patronymic: v })}
                  />
                </div>
              </div>
              <div className={cls.wrapper}>
                <div className={cls.body}>
                  <FormInput
                    label={'Address'}
                    disabled={!isEditable}
                    value={address || ''}
                    onChange={setAddress}
                    className={cls.full}
                  />
                </div>
              </div>
              {isEditable ? (
                <div className={cls.wrapper}>
                  <div className={cls.body}>
                    <button type="submit" className={cls.form__button}>
                      {t('Save')}
                    </button>
                  </div>
                </div>
              ) : (
                <div className={cls.body}>
                  <button onClick={() => setIsEditable(true)} className={cls.form__button}>
                    {t('Edit')}
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  )
}
