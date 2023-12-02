"use client";
import { useState , useEffect } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import TextInput from "@/module/TextInput";
import RadioList from "@/module/RadioList";
import TextList from "@/module/TextList";
import CustomDatePicker from "@/module/CustomDatePicker";
import Loader from "@/module/Loader";
import styles from "@/template/AddProfilePage.module.css";

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
    rules: [],
    amenities: [],
  });

  useEffect(() => {
   if (data) {
     setProfileData(data)
   }
  }, []);

  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setLoading(false);
    if (data.error) {
      console.log("error data res", data);
      toast.error(data.error);
    } else {
      console.log("success", data);
      toast.success(data.message);
      router.refresh();
      router.replace("/dashboard/my-profiles")
    }
  };

  const editHandler = async () => {
      setLoading(true)
      const res = await fetch("/api/profile",{
        method : "PATCH",
        body : JSON.stringify(profileData),
        headers : {"Content-Type" : "application/json"}
      })
      console.log(res)
      const data = await res.json();
      console.log(data)
      setLoading(false)
      if (data.error) {
        toast.error(data.error)
      } else {
        toast.success(data.message)
        router.refresh();
        router.replace("/dashboard/my-profiles")
      }
  }
   
  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileData={profileData}
        setProfileData={setProfileData}
        textarea="true"
      />
      <TextInput
        title="آدرس"
        name="location"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="قیمت (تومان)"
        name="price"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <RadioList profileData={profileData} setProfileData={setProfileData} />
      <TextList
        title="امکانات رفاهی"
        profileData={profileData}
        setProfileData={setProfileData}
        type="rules"
      />
      <TextList
        title="قوانین"
        profileData={profileData}
        setProfileData={setProfileData}
        type="amenities"
      />
      <CustomDatePicker
        profileData={profileData}
        setProfileData={setProfileData}
      />
      <Toaster />
      {loading ? (
        <Loader loading={loading} />
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
  );
};

export default AddProfilePage;
