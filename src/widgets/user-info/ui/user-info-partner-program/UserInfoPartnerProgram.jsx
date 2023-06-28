import React from 'react';

import './UserInfoPartnerProgram.scss'

import UserInfoButtons from '../user-info-buttons/UserInfoButtons';
import UserInfoAccount from '../user-account-info/UserInfoAccount';
import { ForPartners } from "@/widgets/user-info";

import { useQuery } from '@apollo/client'
import { GET_PROFILE_QUERY } from '@/shared/schemas/user/userProfile'


const UserInfoPartnerProgram = () => {

	const [userData, setUserData] = React.useState(null)
	const [isLoaded, setIsLoaded] = React.useState(false)

	const { data, error, loading, refetch } = useQuery(GET_PROFILE_QUERY)

	React.useEffect(() => {
		if (!loading && data?.getProfile) {
			setUserData(data.getProfile)
			setIsLoaded(!isLoaded)
		}
	}, [data])


	return (
		<>
			{
				!isLoaded
					?
					<h2>Loading...</h2>
					:
					<section className='block'>
						<UserInfoButtons />
						<UserInfoAccount id={userData?.id} />
						<ForPartners />
					</section>}
		</>
	);
}

export default UserInfoPartnerProgram;
