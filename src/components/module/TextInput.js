import { p2e, sp, e2p } from "@/utils/replaceNumber";
import { useState, useEffect } from "react";
import { validate } from "@/utils/validate";
import Num2persian from "num2persian";
import styles from "@/module/TextInput.module.scss";

const TextInput = ({
  type,
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) => {
  const [numberPersian, setAllNumberPersian] = useState({
    price: profileData.price,
    phone: profileData.phone,
    priceletters: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate("AddProfilePage", profileData));
    console.log("profileData.price",profileData.price)
    console.log("profileData.phone",profileData.phone)
  }, [profileData]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const persian = Num2persian(p2e(value));
    const strSeparated = value.replaceAll(",", "").replace(
      /(\d)(?=(\d{3})+$)/g,
      "$1,"
    );

    switch (name) {
      case "price":
        setAllNumberPersian({
          ...numberPersian,
          price: strSeparated,
          priceletters: persian,
        });
        setProfileData({ ...profileData, [name]: p2e(value) });
        break;

      case "phone":
        setAllNumberPersian({ ...numberPersian, phone: e2p(value) });
        setProfileData({ ...profileData, [name]: p2e(value) });
        break;

      default:
        setProfileData({ ...profileData, [name]: p2e(value) });
        break;
    }
  };

  const focusHandler = (e) => {
    const { name } = event.target;
    setTouched({ ...touched, [name]: true });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div className={styles.input}>
        {textarea ? (
          <>
            <textarea
              type="text"
              name={name}
              placeholder={title + " " + "را وارد کنید"}
              value={profileData[name]}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <span className={styles.error}>
              {touched[name] && errors[name]}
            </span>
          </>
        ) : (
          <>
            <input
              type="text"
              name={name}
              placeholder={title + " " + "را وارد کنید"}
              value={
                name === "price" || name === "phone"
                  ? name === "price" ? numberPersian["price"] : numberPersian["phone"]
                  : profileData[name]
              }
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            {numberPersian.priceletters.length ? (
              <span className={styles.priceletters}>
                {numberPersian.priceletters}
              </span>
            ) : touched[name] ? (
              <span className={styles.error}>{errors[name]}</span>
            ) : (
              <span className={styles.error}></span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TextInput;
