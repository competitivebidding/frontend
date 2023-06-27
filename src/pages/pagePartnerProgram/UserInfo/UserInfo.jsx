import React from 'react';

import './UserInfo.scss'

import UserInfoButtons from './UserInfoComponents/UserInfoButtons';
import UserInfoAccount from './UserInfoComponents/UserInfoAccount';
import ForPartners from "@/pages/pagePartnerProgram/UserInfo/UserInfoComponents/ForPartners";

import { useQuery } from '@apollo/client'
import { GET_PROFILE_QUERY } from '../../../shared/schemas/user/userProfile'


const UserInfo = () => {

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

export default UserInfo;
