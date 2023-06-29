import React from 'react'

import { useMutation, useQuery } from '@apollo/client'
import { UserInfoLoader } from '@/shared/ui/loader/UserInfoLoader'
import { UserName } from '@/shared/ui/info-tabs/ui/user-name/UserName'
import { UserEmail } from '@/shared/ui/info-tabs/ui/user-email/UserEmail'
import { UserPhone } from '@/shared/ui/info-tabs/ui/user-phone/UserPhone'
import { UserInst } from '@/shared/ui/info-tabs/ui/user-instagram/UserInst'
import { PaymentForm } from '@/feauters/payment-form/PaymentForm'
import { UserPaymentsInfo } from '@/shared/ui/info-tabs/ui/user-payment-info/UserPaymentsInfo'
import { UserCountry } from '@/shared/ui/info-tabs/ui/user-country/UserCountry'
import { UserSettings } from '@/shared/ui/info-tabs/ui/user-settings/UserSettings'
import { UserInfoLevel } from '@/shared/ui/info-tabs/ui/user-verification/UserInfoLevel'
import { GET_PROFILE_QUERY, UPDATE_PROFILE } from '@/shared/schemas/user/userProfile'
import './UserInfoCabinet.scss'

export const UserInfoCabinet = () => {
	const [modalIsOpen, setModalIsOpen] = React.useState(false)
	const [userData, setUserData] = React.useState(null)

	const { data, error, loading, refetch } = useQuery(GET_PROFILE_QUERY)

	const [update] = useMutation(UPDATE_PROFILE)

	const updateProfile = (data) => {
		update({
			variables: {
				updateUserInput: { ...data },
			},
		}).then(() => refetch())
	}

	React.useEffect(() => {
		if (!loading) {
			setUserData(data.getProfile)
		}
	}, [data])



	return (
		<>
			{loading && <UserInfoLoader />}
			<>
				<article className="user-info">
					<UserSettings id={userData && userData.id} avatarUrl={userData && userData.avatarUrl} />
					<UserInfoLevel field={userData && userData} />
					<UserName field={userData && userData.username} handleUpdate={updateProfile} />
					<UserEmail field={userData && userData.email} handleUpdate={updateProfile} />
					<UserPhone field={userData && userData.phone} handleUpdate={updateProfile} />
					<UserInst field={userData && userData.instagram} handleUpdate={updateProfile} />
					<UserPaymentsInfo onOpen={setModalIsOpen} />
					<UserCountry />
				</article>
				{modalIsOpen && <PaymentForm onClose={setModalIsOpen} />}
			</>
		</>
	)
}
