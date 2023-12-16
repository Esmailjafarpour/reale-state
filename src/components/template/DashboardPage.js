import styles from "@/template/DashboardPage.module.scss";

const DashboardPage = async ({createdAt}) => {
  
     return (
          <div className={styles.container}>
               <h3>سلام</h3>
               <p>آگهی خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند</p>
               <div className={styles.createdAt}>
                    <p>تاریخ عضویت</p>
                    <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
               </div>
          </div>
     );
}

export default DashboardPage;
