import { p2e, sp, e2p } from "@/utils/replaceNumber";
import { useState , useEffect } from "react";
import Num2persian from "num2persian";
import { numberToWords , wordsToNumber , removeCommas } from "@persian-tools/persian-tools";
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
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate("AddProfilePage", profileData));
  }, [profileData]);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    const number = p2e(value);
    console.log(number)

    const persian = Num2persian(value);
    console.log(persian)
     
    switch (name) {
      case "price":
        setAllNumberPersion({
          ...numberPersion,
          price: number,
          priceletters: persian,
        });
        setProfileData({ ...profileData, [name]: p2e(value)});
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

  const focusHandler = (e) => {
    const {name} = event.target;
    setTouched({...touched,[name] : true})
  }

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
            <span className={styles.error}>{touched[name]&&errors[name]}</span>
          </>
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
              onFocus={focusHandler}
            />
            {numberPersion.priceletters.length ? (
              <span className={styles.priceletters}>
                {numberPersion.priceletters}
              </span>
            ) : (
                  touched[name]?
                  <span className={styles.error}>{errors[name]}</span>
                  :
                  <span className={styles.error}></span>
                )
              }
          </>
        )}
      </div>
    </div>
  );
};

export default TextInput;
