import { useState, useEffect } from "react";
import { validate } from "@/utils/validate";
import { categories } from "@/constants/strings";
import styles from "@/module/RadioList.module.scss";

const RadioList = ({ name, profileData, setProfileData }) => {
  const { category } = profileData;

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const [categoryShow, setCategoryShow] = useState("");

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
    setTouched(true);
    setCategoryShow(categories[value]);
  };

  return (
    <div className={styles.container}>
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

      {errors.category ? (
        <div className={styles.categoryError}>{errors.category}</div>
      ) : (
        <div className={styles.categoryType}>
          دسته بندی مورد انتخابی شما
          <span>{categoryShow}</span>
          می باشد
        </div>
      )}
    </div>
  );
};

export default RadioList;
