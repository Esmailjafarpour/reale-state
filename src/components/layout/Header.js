import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import styles from "@/layout/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه ی اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">صفحه ی اصلی</Link>
          </li>
        </ul>
      </div>
      <div className={styles.login}>
        <Link href="/signup">
          <FiLogIn />
          <span>ورود</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
