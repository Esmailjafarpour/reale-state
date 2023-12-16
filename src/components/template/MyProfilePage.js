import DashboardCard from "@/module/DashboardCard";
import styles from "@/template/MyProfilePage.module.scss";

const MyProfilePage = ({profiles}) => {
     return (
          <div>
               {profiles.length ? null : <p className={styles.text}>هیچ آگهی وجود ندارد</p>}
               {profiles.map((item) => <DashboardCard key={item._id} data={JSON.parse(JSON.stringify(item))}/> )}
          </div>
     );
}

export default MyProfilePage;
