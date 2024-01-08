import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";
import { categories } from "@/constants/strings";
import styles from "@/template/BuyResidentialsPage.module.scss";

const BuyResidentialsPage = ({ data, searchParams }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.main}>
        {data.length ? null : (
          <p className={styles.text}>{`هیچ آگهی برای دسته بندی ${categories[searchParams.category]} وجود ندارد`}</p>
        )}
        {data.map((profile) => (
          <div className={styles.card}>
            <Card key={profile._id} data={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyResidentialsPage;
