import AdminCard from "@/module/AdminCard";
import styles from "@/template/AdminPage.module.scss";

const AdminPage = ({profiles}) => {
     return (
          <div className={styles.container}>
              {profiles.length ? null : <p className={styles.text}>هیچ آگهی در انتظار تاییدی وجود ندارد</p>}
              {profiles.map((profile) => <AdminCard key={profile._id} data={JSON.parse(JSON.stringify(profile))}/>)}
          </div>
     );
}

export default AdminPage;
