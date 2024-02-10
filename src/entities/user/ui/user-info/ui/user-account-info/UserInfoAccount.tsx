import React, { useState } from 'react';
import userImg from '@assets/imgPartnerProgram/logo.svg';
import phone from '@assets/imgPartnerProgram/phone.svg';
import email from '@assets/imgPartnerProgram/sms.svg';
import hat from '@assets/imgPartnerProgram/magic-trick-dynamic-premium.png';
import card from '@assets/imgPartnerProgram/card.svg';
import { TooltipButton } from '@/shared/ui/tooltip-button/TooltipButton';
import cls from './UserInfoAccount.module.scss';
import { useTranslation } from 'react-i18next'
import {UserSettings} from "@shared/ui/info-tabs/ui/user-settings/UserSettings";
import NickName from "@shared/ui/info-tabs/ui/user-nickName/NickName";
import UserEmail from "@shared/ui/info-tabs/ui/user-email/UserEmail";
import {UserPhone} from "@shared/ui/info-tabs/ui/user-phone/UserPhone";
import {useMutation, useQuery} from "@apollo/client";
import {GetProfileDocument} from "@shared/lib/types/__generated-types__/graphql";
import {UPDATE_PROFILE} from "@shared/schemas/user/userProfile";
import UserInst from "@shared/ui/info-tabs/ui/user-instagram/UserInst";

interface IUserInfoAccountProps {
  id: number;
}

export const UserInfoAccount = ({ id }: IUserInfoAccountProps) => {
  const { t } = useTranslation('partnerPage')

  const [update] = useMutation(UPDATE_PROFILE)
  const { data, loading, refetch } = useQuery(GetProfileDocument, {canonizeResults: true, })


  const updateProfile = (data: any) => {
    update({
      variables: {
        updateUserInput: { ...data },
      },
    }).then(() => refetch())
  }


  return (
      <article className={'user-info'}>
        <UserSettings id={data?.getProfile.id} avatarUrl={data?.getProfile.avatarUrl} />
        <NickName field={data?.getProfile.username} handleUpdate={updateProfile} />
        <UserEmail field={data?.getProfile.email} handleUpdate={updateProfile} />
        <UserPhone field={data?.getProfile.phone} handleUpdate={updateProfile} />
          <UserInst field={data?.getProfile.instagram} handleUpdate={updateProfile} />
      </article>
  );
};
