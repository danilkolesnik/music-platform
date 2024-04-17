import React from 'react'
import styles from "./profile.module.scss";
import ProfileBanner from '@/components/Profile/Banner/ProfileBanner';
import ProfileInformation from '@/components/Profile/Information/ProfileInformation';

const page = () => {
  return (
    <div className={styles.pageContent}>
      <ProfileBanner />
      <ProfileInformation />
    </div>
  )
}

export default page