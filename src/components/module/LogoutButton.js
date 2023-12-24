"use client";
import { useState } from "react";
import { signOut } from "next-auth/react";
import { GiExitDoor } from "react-icons/gi";
import Loader from "@/module/Loader";
import { secondaryColor } from "@/app/variables.module.scss";
import styles from "@/module/LogoutButton.module.scss";

const LogoutButton = () => {

     const [loading, setLoading] = useState(false);
     const signout = () => {
          setLoading(true)
          signOut()
          return
     }

     return (
          <>
            {loading ? 
               <div className={styles.loader} onClick={signout}>
                    <Loader loading={loading} color={secondaryColor}/>
               </div>
               :
               <button className={styles.button} onClick={signout}>
                    <GiExitDoor/>
                    خروج
               </button>
            }
          </>
        

          
     );
}

export default LogoutButton;
