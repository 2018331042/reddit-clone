import { NextPage } from "next";
import React from "react";
import styles from "../styles/Home.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
const Header: NextPage = () => {
  return (
    <div className={styles.navBar}>
      <div
        style={{
          display: "flex",
          flex: "5",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <div>
          <img
            src="/logos/reddit-logo.svg"
            alt="reddit"
            height={100}
            width={100}
          />
        </div>
        <div className={styles.navBarHomeIconName}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <HomeIcon />
            <div className={styles.homeIconName}>Home</div>
          </div>
          <ExpandMoreIcon />
        </div>
        <form className={styles.navForm}>
          <SearchIcon />
          {/* <input
            className={styles.navFormInput}
            type="text"
            placeholder="Search"
          /> */}
          <button type="submit" hidden />
        </form>
      </div>
      <div>Login</div>
    </div>
  );
};

export default Header;
