"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import Loader from "@/module/Loader";
import { secondaryColorTwo , primaryColor } from "@/app/variables.module.scss";
import styles from "@/template/AddProfilePage.module.scss";

const AddProfilePage = ({ data }) => {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    typeofnotice :"",
    rules: [],
    amenities: [],
  });

  useEffect(() => {
    if (data) {
      setProfileData(data);
    }
  }, [data]);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const submitHandler = async () => {
    setProfileData({...profileData,price : profileData.price.replace(/,/g, "")})
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      setProfileData({
        title: "",
        description: "",
        location: "",
        phone: "",
        price: "",
        realState: "",
        constructionDate: new Date(),
        category: "",
        typeofnotice :"",
        rules: [],
        amenities: [],
      })
      router.replace("/dashboard/my-profiles");
      router.refresh();
    }
  };

  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
      // router.replace("/dashboard/my-profiles");
    }
  };

  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>

      <div className={styles.main}>
        <div className={styles.sessionOne}>
          <RadioList
            name = "category"
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </div>
        <div className={styles.sessionOne}>
          <RadioList
            name = "typeOfNotice"
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </div>

        <div className={styles.sessionTwo}>
          <TextInput
            title="عنوان آگهی"
            name="title"
            profileData={profileData}
            setProfileData={setProfileData}
          />
          <TextInput
            title="شماره تماس"
            name="phone"
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </div>

        <div className={styles.sessionThree}>
          <TextInput
            title="آدرس"
            name="location"
            profileData={profileData}
            setProfileData={setProfileData}
          />
          <TextInput
            title="قیمت (تومان)"
            name="price"
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </div>

        <div className={styles.sessionFour}>
          <CustomDatePicker
            profileData={profileData}
            setProfileData={setProfileData}
          />
          <TextInput
            title="بنگاه"
            name="realState"
            profileData={profileData}
            setProfileData={setProfileData}
          />
        </div>

        <div className={styles.sessionFive}>
          <TextInput
            title="توضیحات"
            name="description"
            profileData={profileData}
            setProfileData={setProfileData}
            textarea="true"
          />
        </div>

        <div className={styles.sessionSix}>
          <TextList
            title="امکانات رفاهی"
            profileData={profileData}
            setProfileData={setProfileData}
            type="amenities"
          />
        </div>

        <div className={styles.sessionSeven}>
          <TextList
            title="قوانین"
            profileData={profileData}
            setProfileData={setProfileData}
            type="rules"
          />
        </div>

        <div className={styles.buttons}>
            {loading ? (
              <button className={styles.loader}>
                    <Loader loading={loading} color={primaryColor} />
            </button>
          ) : data ? (
            <button className={styles.submit} onClick={editHandler}>
              ویرایش آگهی
            </button>
          ) : (
            <button className={styles.submit} onClick={submitHandler}>
              ثبت آگهی
            </button>
          )}
        </div>

        <Toaster />        
      </div>
    </div>
  );
};

export default AddProfilePage;
