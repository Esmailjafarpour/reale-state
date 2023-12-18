"use client";

import { signOut } from "next-auth/react";
import { GiExitDoor } from "react-icons/gi";
import styles from "@/module/LogoutButton.module.scss";

const LogoutButton = () => {
     return (
          <button className={styles.button} onClick={signOut}>
               <GiExitDoor/>
               خروج
          </button>
     );
}

export default LogoutButton;
