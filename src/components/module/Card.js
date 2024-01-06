import Link from "next/link";
import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiCodereview } from "react-icons/si";
import { sp } from "@/utils/replaceNumber";
import { icons } from "@/constants/icons";
import styles from "@/module/Card.module.scss";

const Card = ({ data: {_id , category, title, location, price } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <div className={styles.img}>
        <Image
          src={`/images/${category}.png`}
          alt={title}
          width={230}
          height={140}
          priority={true}
        />
      </div>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span>{sp(price)} تومان</span>
      <Link href={`/buy-residential/${_id}`}>
          مشاهده ی آگهی
        <SiCodereview/>
      </Link>
    </div>
  );
};

export default Card;
