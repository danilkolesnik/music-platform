import React from 'react';
import styles from './track.module.scss';
import Image from 'next/image';

const Track = ({name, coverSrc}) => {
  return (
    <div className={styles.trackWrapper}>
      <div className={styles.trackImageWrapper}>
        <Image fill src={coverSrc} alt="cover"></Image>
      </div>
      <div className={styles.trackInfoWrapper}>
        <h1 className={styles.trackCaption}>{name}</h1>
      </div>
    </div>
  );
}

export default Track