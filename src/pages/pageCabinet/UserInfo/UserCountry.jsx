import * as React from 'react';
import {DropDown} from "../DropDown/DropDown";
import JP from '@/assets/cabinet/dropdown/JP.svg'
import RU from '@/assets/cabinet/dropdown/RU.svg'
import UA from '@/assets/cabinet/dropdown/UA.svg'
import US from '@/assets/cabinet/dropdown/US.svg'
import info from '@/assets/cabinet/info.svg'
import icon from '@/assets/cabinet/icons/global-search.svg'
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER_ADDRESS, UPDATE_USER_ADDRESS} from "../../../components/server/userProfile";



export const UserCountry = () => {
    const [country, setCountry] = React.useState(null)
    const {data, loading, refetch} = useQuery(GET_USER_ADDRESS)
    const [update] = useMutation(UPDATE_USER_ADDRESS)

    const dropDownData = [
        {title: <img src={JP} key={'a'} />, val: 'Japan'},
        {title: <img src={UA} key={'b'} />, val: 'Ukraine'},
        {title: <img src={RU} key={'c'} />, val: 'Russian Federation'},
        {title: <img src={US} key={'d'} />, val: 'United States of America'},
    ]

    const findFlag = (address) => {
        const c = dropDownData.find(obj => obj.val === address)
        return c ? c.title : ''
    }

    const updateAddress = (data) => {
        setCountry(data)
        update({
            variables: {
                input: {
                    country: data.val
                }
            }
        })
    }

    React.useEffect(() => {
        if (!loading) {
            setCountry({title: findFlag(data.getUserAddress.country), val: data.getUserAddress.country})
        }
    }, [data])

    console.log(country)

    return (
        <div className="cabinet-block user-info__item">
            <div className="item-top">
                <div className="item-top__image">
                    <img src={icon} alt=""/>
                </div>
                <div className="item-top__info">
                    <div className="item-top__content">
                        <p className="item-top__content-title">Country</p>
                        <span className="item-top__content-subtitle">{country && country.val}</span>
                    </div>
                    <div>
                        <DropDown data={dropDownData} current={country} onChange={updateAddress}/>
                    </div>
                </div>
            </div>
            <div className="item-bottom">
                <div className="item-bottom__content">
                    <p>The country was set automatically
                    </p>
                    <i>
                        <img src={info} alt=""/>
                    </i>
                </div>
            </div>
        </div>
    );
}