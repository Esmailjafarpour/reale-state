import Image from "next/image";
import Link from "next/link";
import styles from "@/module/CategoryCard.module.css";

const CategoryCard = ({title , name}) => {
  return (
    <div className={styles.card}>
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={140}
          priority={true}
        />
        <p>{title}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
