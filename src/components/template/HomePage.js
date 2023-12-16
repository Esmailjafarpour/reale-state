import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/module/CategoryCard";
import { cities, services, categories } from "@/constants/strings";
import { icons } from "@/constants/icons";
import styles from "@/template/HomePage.module.scss";
import variables  from "@/app/variables.module.scss";

const HomePage = () => {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>سامانه خرید و اجاره ی ملک</h1>
          <ul>
            {Object.keys(services).map((i) => (
              <li key={i}>
                {services[i]}
                <span>
                  {icons[i]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map((i) => (
          <CategoryCard key={i} title={categories[i]} name={i} />
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
