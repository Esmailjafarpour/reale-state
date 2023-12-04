import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/module/CategoryCard";
import styles from "@/template/HomePage.module.css";

const HomePage = () => {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "شیراز",
    "بوشهر",
    "تهران",
    "اصفهان",
    "همدان",
    "تبریز",
    "سنندج",
    "کرمانشاه",
    
  ];
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
        <CategoryCard title="خانه ی ویلایی" name="villa" />
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="مغازه" name="store" />
        <CategoryCard title="دفتر" name="office" />
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
