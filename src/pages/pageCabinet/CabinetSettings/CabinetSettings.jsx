import React, {useEffect} from 'react';
import cls from './CabinetSettings.module.scss'
import {FormInput} from "../FormInput/FormInput";
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_ADDRESS} from "@/components/server/userProfile";
import {GET_PROFILE_QUERY, UPDATE_PROFILE} from "../../../components/server/userProfile";

export const CabinetSettings = (props) => {
    const [isEditable, setIsEditable] = React.useState(false)
    const [userInfo, setUserInfo] = React.useState(null)

    const {data: profile, refetch} = useQuery(GET_PROFILE_QUERY)

    const [update] = useMutation(UPDATE_PROFILE)

    const toggleEditable = () => {
        setIsEditable(!isEditable)
    }
    const submit = (e) => {
        e.preventDefault()
        update({
            variables: {
                updateUserInput: {
                    firstname: userInfo.firstname,
                    lastname: userInfo.lastname,
                    patronymic: userInfo.patronymic
                },

            }
        }).then(refetch)
    }

    const handleChangeUserInfo = (field) => {
        setUserInfo(prev => ({...prev, ...field}))
    }



    useEffect(() => {
        if (profile) {
            setUserInfo(profile.getProfile)
        }
    }, [profile])
    return (
       <>
           {userInfo && <div className={cls.settings}>
               <div className={cls.wrapper}>
                   <form onSubmit={submit} className={cls.form}>
                       <div className={cls.wrapper}>
                           <div className={cls.title}><h3>Personal Info</h3><i>
                               <button onClick={toggleEditable}>EDIT</button>
                           </i></div>
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
                           <div className={cls.title}><h3>Address</h3></div>
                           <div className={cls.body}>
                               <FormInput label={'Address'} disabled={!isEditable}/>
                           </div>
                       </div>
                       {isEditable && <div className={cls.wrapper}>
                           <div className={cls.body}>
                               <button type='submit' className={cls.form__button}>Save</button>
                           </div>
                       </div>}
                   </form>
               </div>
           </div>}
       </>
    );
}

