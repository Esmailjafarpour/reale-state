import styles from "@/layout/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3>سامانه ی خرید و اجاره ی ملک</h3>
        <p>فروش املاک دنج و اوکازیون مخصوص خاص پسندان که به دنبال ملک و یا املاک خاص و شیک می‌گردند. خرید و فروش املاک خود را به ما بسپارید و با آرامش به خانه‌ی خود نقل مکان کنید.
        </p>
      </div>
      <div>
        <ul>
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
