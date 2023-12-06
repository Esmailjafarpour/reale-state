import AdminCard from "@/module/AdminCard";
import styles from "@/template/AdminPage.module.css";

const AdminPage = ({profiles}) => {
     return (
          <div >
              {profiles.length ? null : <p>هیچ آگهی در انتظار تاییدی وجود ندارد</p>}
              {profiles.map((profile) => <AdminCard data={profile}/>)}
          </div>
     );
}

export default AdminPage;
