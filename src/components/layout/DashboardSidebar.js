import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "@/module/LogoutButton";
import styles from "@/layout/DashboardSidebar.module.scss";


const DashboardSidebar = async ({children , role , email}) => {

     return (
          <div className={styles.container}>
               <div className={styles.sidebar}>
                    <CgProfile/>
                    <p>{email}</p>
                    <span></span>
                    <div>
                         <Link href="/dashboard">حساب کاربری</Link>
                         <Link href="/dashboard/my-profiles">آگهی های من</Link>
                         <Link href="/dashboard/add">ثبت آگهی</Link>
                         {role === "ADMIN" ? <Link href="/admin">در انتظار تایید</Link>: null}
                    </div>
                    
                    <LogoutButton/>
               </div>
               <div className={styles.main}>
                    {children}
               </div>
          </div>
     );
}

export default DashboardSidebar;
