import React from 'react';
import style from './banner.module.scss';
import Image from 'next/image';
import bannerMockup from '@/assets/images/banner-mockup.jpg';
import avatarMockup from '@/assets/images/avatar-mockup.jpg';

const ProfileBanner = () => {
  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerImageWrapper}>
        <Image fill src={bannerMockup} alt="banner"></Image>
        <div className={style.avatarImageWrapper}>
          <Image fill src={avatarMockup} alt="avatar"></Image>
        </div>
      </div>
    </div>
  );
}

export default ProfileBanner