"use client";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import styles from "@/layout/Header.module.css";
import { useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const { data } = useSession();

  return (
    <header className={styles.header}>
      <div>
        <ul>
          <li>
            <Link href="/">صفحه ی اصلی</Link>
          </li>
          <li>
            <Link href="/buy-residential">آگهی ها</Link>
          </li>
        </ul>
      </div>
      {data ? (
        <div className={styles.login}>
          <Link href="/dashboard">
            <FaUserAlt />
          </Link>
        </div>
      ) : (
        <div className={styles.login}>
          <Link href="/signin">
            <FiLogIn />
            <span>ورود</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
