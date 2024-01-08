"use client";
import { useState } from "react";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import styles from "@/layout/Header.module.scss";
import { useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import FormInput from "@/module/FormInput";
import { FaSearch } from "react-icons/fa";
import { services, cities, categories } from "@/constants/strings";

const Header = () => {
  const { data } = useSession();
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => {
    console.log("pppp",e.target.value)
    setSearchInput(e.target.value);
  };

  const searchHandler = () => {
    const servicekey = Object.values(services);
    const categorykey = Object.values(categories);
    const categoryResult = categorykey.find((i) => i === searchInput);
    const serviceResult = servicekey.find((i) => i === searchInput);
    console.log(categoryResult, serviceResult);
  };

  return (
    <header className={styles.header}>
      <div className={styles.first}>
        <div className={styles.logo}>
          <SiHomebridge />
        </div>

        <div className={styles.Meno}>
          <ul>
            <li>
              <Link href="/">صفحه ی اصلی</Link>
            </li>
            <li>
              <Link href="/buy-residential">آگهی ها</Link>
            </li>
          </ul>
        </div>

        <div className={styles.SearchInput}>
          <FormInput
            value={searchInput}
            onChange={changeHandler}
            placeholder="ملک مورد نظر خود را جستجو کنید"
            showError={false}
          />
          <button onClick={searchHandler}>
            <FaSearch />
          </button>
        </div>
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
