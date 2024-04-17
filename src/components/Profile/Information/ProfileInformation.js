import React from 'react'
import styles from './profileInfo.module.scss';
import edit from '@/assets/icons/edit.svg';
import Image from 'next/image';
import Track from '@/components/Track/Track';

import coverMockup from '@/assets/images/cover-mockup.jpg';
import coverMockup2 from '@/assets/images/cover-mockup2.png';

const ProfileInformation = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.profileBioContainer}>
        <h1 className={styles.text_caption}>DISSEMBLINGDEAD</h1>
        <p className={styles.text_realName}>Daniel</p>
        <span className={styles.badge}>60HZ SOCIETY</span>
        <ul className={styles.statsList}>
          <li>
            <span>16</span>
            <h6>tracks</h6>
          </li>
          <li>
            <span>385</span>
            <h6>Followers</h6>
          </li>
          <li>
            <span>9</span>
            <h6>Following</h6>
          </li>
          <li>
            <span>2458</span>
            <h6>Total plays</h6>
          </li>
        </ul>
        <div className={styles.edit}>
          <Image width={22} src={edit} alt="edit"></Image>
        </div>
      </div>
      <div className={styles.profileStatsContainer}>
        <h1 className={styles.text_caption}>Tracks</h1>
        <div className={styles.tracksContainer}>
          <Track name={"SYMBOLIC"} coverSrc={coverMockup} />
          <Track name={"REMIND ME THAT SUNSET WITH YOUR SMILE"} coverSrc={coverMockup2}/>
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;