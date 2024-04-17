import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/icons/main-logo.svg";
import upload from "@/assets/icons/upload.svg";
import message from "@/assets/icons/message.svg";
import profile from "@/assets/icons/profile.svg";
import styles from "./header.module.scss";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image fill src={logo} alt="logo"></Image>
        </div>
      </Link>
      <nav className={styles.headerMenu}>
        <ul>
          <li>
            <Link href="/upload">
              <MenuItem iconSrc={upload} alt="upload" label="Upload" />
            </Link>
          </li>
          <li>
            <Link href="/chat">
              <MenuItem iconSrc={message} alt="messages" label="Messages" />
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <MenuItem iconSrc={profile} alt="profile" label="Profile" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
