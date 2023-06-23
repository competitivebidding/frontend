import React from 'react'

import { useMutation, useQuery } from '@apollo/client'
import { UserInfoLoader } from '../UserInfoLoader/UserInfoLoader'
import { UserName } from './UserName'
import { UserEmail } from './UserEmail'
import { UserPhone } from './UserPhone'
import { UserInst } from './UserInst'
import { PaymentForm } from '../PaymentForm/PaymentForm'
import { UserPaymentsInfo } from './UserPaymentsInfo'
import { UserCountry } from './UserCountry'
import { UserSettings } from './UserSettings'
import { UserInfoLevel } from './UserInfoLevel'
import { GET_PROFILE_QUERY, UPDATE_PROFILE } from '../../../components/server/userProfile'
import './UserInfo.scss'

const UserInfo = () => {
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

	console.log(data)



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

export default UserInfo
