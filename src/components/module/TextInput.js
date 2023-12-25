import { p2e, sp, e2p } from "@/utils/replaceNumber";
import { useState , useEffect } from "react";
import Num2persian from "num2persian";
import { validate } from "@/utils/validate";
import styles from "@/module/TextInput.module.scss";

const TextInput = ({
  title,
  name,
  profileData,
  setProfileData,
  textarea = false,
}) => {
  const [numberPersion, setAllNumberPersion] = useState({
    price: "",
    phone: "",
    priceletters: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate("AddProfilePage", profileData));
  }, [profileData]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "price":
        setAllNumberPersion({
          ...numberPersion,
          price: p2e(value),
          priceletters: value.num2persian(),
        });
        setProfileData({ ...profileData, [name]: p2e(value) });
        break;

      case "phone":
        setAllNumberPersion({ ...numberPersion, phone: e2p(value) });
        setProfileData({ ...profileData, [name]: p2e(value) });
        break;

      default:
        setProfileData({ ...profileData, [name]: p2e(value) });
        break;
    }
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div className={styles.input}>
        {textarea ? (
          <textarea
            type="text"
            name={name}
            placeholder={title + " " + "را وارد کنید"}
            value={profileData[name]}
            onChange={changeHandler}
          />
        ) : (
          <>
            <input
              type="text"
              name={name}
              placeholder={title + " " + "را وارد کنید"}
              value={
                name === "price" || name === "phone"
                  ? numberPersion[name]
                  : profileData[name]
              }
              onChange={changeHandler}
            />
            {numberPersion.priceletters.length ? (
              <span className={styles.priceletters}>
                {numberPersion.priceletters}
              </span>
            ) : (
              <span className={styles.error}>{errors[name]}</span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TextInput;
