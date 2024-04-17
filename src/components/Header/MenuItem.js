import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";

const MenuItem = ({ iconSrc, alt, label }) => {
  return (
    <div className={styles.headerMenu_wrapper}>
      <div className={styles.headerMenu_icon}>
        <Image fill src={iconSrc} alt={alt}></Image>
      </div>
      <p>{label}</p>
    </div>
  );
};

export default MenuItem;
