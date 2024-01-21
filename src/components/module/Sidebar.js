import Link from "next/link";
import { BiSolidCategoryAlt } from "react-icons/bi";
import {categories ,services} from "@/constants/strings";
import styles from "@/module/Sidebar.module.scss";

const Sidebar = () => {
 
  return (
    <div className={styles.container}>
      <p>
        <BiSolidCategoryAlt />
        دسته بندی
      </p>
      <div>
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
      <h3>خدمات</h3>
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
  );
};

export default Sidebar;
