"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "@/module/FormInput";
import { FiLogIn } from "react-icons/fi";
import { useSession } from "next-auth/react";
import { FaUserAlt } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { services, cities, categories , servicesPersian , categoriesPersian } from "@/constants/strings";
import { toast, Toaster } from "react-hot-toast";
import Link from "next/link";
import styles from "@/layout/Header.module.scss";

const Header = () => {
  const { data } = useSession();
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchHandler = () => {
    const serviceKeys = Object.keys(services);
    const categoryKeys = Object.keys(categories);

    const serviceValue = Object.values(services);
    const categoryValue = Object.values(categories);

    const resultSearch = serviceKeys[serviceValue.indexOf(searchInput)] || categoryKeys[categoryValue.indexOf(searchInput)]
    const categoryResult = categoryKeys.find((i) => i === searchInput);
    const serviceResult = serviceKeys.find((i) => i === searchInput);
  
    if (!searchInput) {
      toast.error("موردی را برای جستجو بنویسید");
      setSearchInput("")
      return;
    }

    if (resultSearch) {
      router.push(`/buy-residential?category=${resultSearch.toString()}`)
      toast.success("کمی صبر کنید");
      setSearchInput("")
      return;
    }

    if (!categoryResult && !serviceResult) {
      toast.success("برای جستجو از کلمات ویلا ،آپارتمان ،مغازه ، دفتر استفاده کنید");
      toast.success("برای جستجو از کلمات خرید ،فروش ،رهن ، اجاره استفاده کنید");
      toast.error("مورد مورد نظر شما یافت نشد");
      setSearchInput("")
      return;
    }

  };

  return (
    <header className={styles.header}>
      <div className={styles.first}>
        <div className={styles.logo}>
        <Link href="/"><SiHomebridge /></Link>
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
      <Toaster />
    </header>
  );
};

export default Header;
