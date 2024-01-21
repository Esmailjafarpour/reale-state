import { useState, useEffect } from "react";
import { validate } from "@/utils/validate";
import { categories, services } from "@/constants/strings";
import styles from "@/module/RadioList.module.scss";

const RadioList = ({ name, profileData, setProfileData }) => {
  const { category, typeofnotice } = profileData;
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const [categoryShow, setCategoryShow] = useState("");
  const [typeofnoticeShow, setTypeofnoticeShow] = useState("");

  useEffect(() => {
    setErrors(validate("AddProfilePage", profileData));
    setTouched(false);
  }, [profileData]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value,
    });
  };

  const focusHandler = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setTouched(true);
      setCategoryShow(categories[value]);
    } else {
      setTouched(true);
      setTypeofnoticeShow(services[value]);
    }
  };

  return (
    <div className={styles.container}>
      {name === "category" ? (
        <>
          <p>دسته بندی</p>
          <div className={styles.main}>
            <div>
              <label htmlFor="villa">ویلا</label>
              <input
                type="radio"
                id="villa"
                value="villa"
                name="category"
                onChange={changeHandler}
                checked={category === "villa"}
                onFocus={focusHandler}
              />
            </div>

            <div>
              <label htmlFor="apartment">آپارتمان</label>
              <input
                type="radio"
                id="apartment"
                value="apartment"
                name="category"
                onChange={changeHandler}
                checked={category === "apartment"}
                onFocus={focusHandler}
              />
            </div>

            <div>
              <label htmlFor="store">مغازه</label>
              <input
                type="radio"
                id="store"
                value="store"
                name="category"
                onChange={changeHandler}
                checked={category === "store"}
                onFocus={focusHandler}
              />
            </div>

            <div>
              <label htmlFor="office">دفتر</label>
              <input
                type="radio"
                id="office"
                value="office"
                name="category"
                onChange={changeHandler}
                checked={category === "office"}
                onFocus={focusHandler}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <p>نوع آگهی</p>
          <div className={styles.main}>
            <div>
              <label htmlFor="sale">فروش</label>
              <input
                type="radio"
                id="sale"
                value="sale"
                name="typeofnotice"
                onChange={changeHandler}
                checked={typeofnotice === "sale"}
                onFocus={focusHandler}
              />
            </div>

            <div>
              <label htmlFor="mortgage">رهن</label>
              <input
                type="radio"
                id="mortgage"
                value="mortgage"
                name="typeofnotice"
                onChange={changeHandler}
                checked={typeofnotice === "mortgage"}
                onFocus={focusHandler}
              />
            </div>

            <div>
              <label htmlFor="Rent">اجاره</label>
              <input
                type="radio"
                id="Rent"
                value="Rent"
                name="typeofnotice"
                onChange={changeHandler}
                checked={typeofnotice === "Rent"}
                onFocus={focusHandler}
              />
            </div>
          </div>
        </>
      )}

      {name === "category" ? (
        errors.category ? (
          <div className={styles.categoryError}>{errors.category}</div>
        ) : (
          <div className={styles.categoryType}>
            {`دسته بندی مورد انتخابی شما
              ${categoryShow}
            می باشد`}
          </div>
        )
      ) : errors.typeofnotice ? (
        <div className={styles.categoryError}>{errors.typeofnotice}</div>
      ) : (
        <div className={styles.categoryType}>
          {`نوع آگهی شما جهت
              ${typeofnoticeShow }
            می باشد
          `}
        </div>
      )}
    </div>
  );
};

export default RadioList;
