import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/module/CategoryCard";
import { cities, services, categories } from "@/constants/strings";
import styles from "@/template/HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ی ملک</h1>
          <ul>
            {services.map((i) => (
              <li key={i}>
                {i}
                <span>
                  <FiCircle />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map((i) => (
          <CategoryCard title={categories[i]} name={i} />
        ))}
      </div>
      <div className={styles.city}>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
