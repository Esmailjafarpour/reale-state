"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { toast, Toaster } from "react-hot-toast";
import Loader from "@/module/Loader";
import Card from "@/module/Card";
import { secondaryColorTwo } from "@/app/variables.module.scss";
import styles from "@/module/DashboardCard.module.scss";

const DashboardCard = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
  };

  const deleteHandler = async () => {
    setLoading(true)
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    setLoading(false)
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh();
    }
  };

  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        {loading ? 
          <button>
            <Loader loading={loading} color={secondaryColorTwo}/>
          </button>
         : 
          <button onClick={deleteHandler}>
            حذف آگهی
            <RiDeleteBinFill />
          </button>
        }
      </div>
      <Toaster />
    </div>
  );
};

export default DashboardCard;
