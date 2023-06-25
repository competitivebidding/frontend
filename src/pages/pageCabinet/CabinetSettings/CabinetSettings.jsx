import React, {useEffect} from 'react';
import cls from './CabinetSettings.module.scss'
import {FormInput} from "../FormInput/FormInput";
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_ADDRESS} from "@/components/server/userProfile";
import {GET_PROFILE_QUERY, UPDATE_PROFILE, UPDATE_USER_ADDRESS} from "@/components/server/userProfile";

export const CabinetSettings = () => {
    const [isEditable, setIsEditable] = React.useState(false)
    const [userInfo, setUserInfo] = React.useState(null)
    const [address, setAddress] = React.useState('')

    const {data: profile, refetch} = useQuery(GET_PROFILE_QUERY)
    const {data: userAddress} = useQuery(GET_USER_ADDRESS)

    const [updateProfile] = useMutation(UPDATE_PROFILE)
    const [updateAddress] = useMutation(UPDATE_USER_ADDRESS)

    const submit = (e) => {
        e.preventDefault()
        setIsEditable(false)
        Promise.all([updateProfile({
            variables: {
                updateUserInput: {
                    firstname: userInfo.firstname,
                    lastname: userInfo.lastname,
                    patronymic: userInfo.patronymic
                },

            }
        }), updateAddress({
            variables: {
                input: {
                    address
                }
            }
        })]).then(refetch)
    }

    const handleChangeUserInfo = (field) => {
        setUserInfo(prev => ({...prev, ...field}))
    }

    useEffect(() => {
        if (profile) {
            setUserInfo(profile.getProfile)
        }
        if (userAddress) {
            setAddress(userAddress.getUserAddress.address)
        }
    }, [profile, userAddress])

    return (
       <>
           {userInfo && <div className={cls.settings}>
               <div className={cls.wrapper}>
                   <form onSubmit={submit} className={cls.form}>
                       <div className={cls.wrapper}>
                           <div className={cls.body}>
                               <FormInput
                                   label={'Name'}
                                   disabled={!isEditable}
                                   value={userInfo.firstname ? userInfo.firstname : ''}
                                   onChange={(v) => handleChangeUserInfo({firstname: v})}
                               />
                               <FormInput
                                   label={'Lastname'}
                                   disabled={!isEditable}
                                   value={userInfo.lastname ? userInfo.lastname : ''}
                                   onChange={(v) => handleChangeUserInfo({lastname: v})}
                               />
                               <FormInput
                                   label={'Patronymic'}
                                   disabled={!isEditable}
                                   value={userInfo.patronymic ? userInfo.patronymic : ''}
                                   onChange={(v) => handleChangeUserInfo({patronymic: v})}
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
                                   className={cls.full}/>
                           </div>
                       </div>
                       {isEditable ? <div className={cls.wrapper}>
                           <div className={cls.body}>
                               <button type='submit' className={cls.form__button}>Save</button>
                           </div>
                       </div> :
                           <div className={cls.body}>
                               <button onClick={() => setIsEditable(true)} className={cls.form__button}>Edit</button>
                           </div>
                       }
                   </form>
               </div>
           </div>}
       </>
    );
}

