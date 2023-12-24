import DashboardCard from "@/module/DashboardCard";
import styles from "@/template/MyProfilePage.module.scss";

const MyProfilePage = ({profiles}) => {
     return (
          <div className={styles.content}>
               {profiles.length ? null : <div className={styles.message}><p className={styles.text}>هیچ آگهی جهت نمایش وجود ندارد</p></div>}
               {profiles.map((item) => <DashboardCard key={item._id} data={JSON.parse(JSON.stringify(item))}/> )}
          </div>
     );
}

export default MyProfilePage;
