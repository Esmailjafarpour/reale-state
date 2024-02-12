import Link from "next/link";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaServicestack } from "react-icons/fa";
import {categories ,services} from "@/constants/strings";
import styles from "@/module/Sidebar.module.scss";

const Sidebar = () => {
 
  return (
    <div className={styles.container}>
      <p>
        <BiSolidCategoryAlt />
        دسته بندی
      </p>
      <div className={styles.category}>
        <div className={styles.categoryRight}>
          <Link href="/buy-residential">همه</Link>
          {Object.keys(categories).map((i) => (
            <Link
              key={i}
              href={{
                pathname: "/buy-residential",
                query: { category: i },
              }}
            >
              {categories[i]}
            </Link>
          ))}
        </div>
      
        <div className={styles.categoryLeft}>
          <div className={styles.title}>
            <FaServicestack/>
            <h3>
              خدمات
            </h3>
          </div>
         
          <div>
            {Object.keys(services).map((i) => (
            <Link
              key={i}
              href={{
                pathname: "/buy-residential",
                query: { category: i },
              }}
            >
              {services[i]}
            </Link>
          ))}
          </div>
          
          
        </div>
      
      </div>
    </div>
  );
};

export default Sidebar;
