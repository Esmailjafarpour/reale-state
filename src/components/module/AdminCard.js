"use client";
import { toast, Toaster } from "react-hot-toast";
import { sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import { BiCheckShield } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";
import styles from "@/module/AdminCard.module.scss";

const AdminCard = ({ data: { _id, title, description, price, location } }) => {
  const router = useRouter();
  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  const deleteHandler = async () => {
    const res = await fetch(`/api/profile/delete/${_id}`,{method : "DELETE"});
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  }

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <div className={styles.buttons}>
        <button onClick={publishHandler}>
          انتشار آگهی 
          <BiCheckShield/>
        </button>
        <button onClick={deleteHandler}>
          حذف آگهی
          <RiDeleteBinFill/>
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default AdminCard;
