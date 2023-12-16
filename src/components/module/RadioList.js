import React from "react";
import styles from "@/module/RadioList.module.scss";

const RadioList = ({ profileData, setProfileData }) => {
  const { category } = profileData;

  const changeHandler = (e) => {
     const { name , value } = e.target;
     setProfileData({
          ...profileData , [name] : value
     })
  }

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
               />
          </div>
        
      </div>
    </div>
  );
};

export default RadioList;
