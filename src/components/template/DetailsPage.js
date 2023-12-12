import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiCalendarCheck } from "react-icons/bi";
import { icons } from "@/constants/icons";
import { categories } from "@/constants/strings";
import Title from "@/module/Title";
import ItemList from "@/module/ItemList";
import ShareButton from "@/module/ShareButton";
import { e2p, sp } from "@/utils/replaceNumber";
import styles from "@/template/DetailsPage.module.css";

const DetailsPage = ({
  data: {
    title,
    location,
    description,
    amenities,
    rules,
    realState,
    category,
    phone,
    price,
    constructionDate,
  },
}) => {
  
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{title}</h1>
        <span>
          <HiOutlineLocationMarker />
          {location}
        </span>
        <Title>توضیحات</Title>
        <p>{description}</p>
        <Title>امکانات</Title>
        <ItemList data={amenities} />
        <Title>قوانین</Title>
        <ItemList data={rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک{realState}</p>
          <span>
            <AiOutlinePhone />
            {e2p(phone)}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[category]} {categories[category]}
          </p>
          <p>{sp(price)} تومان</p>
          <p>
            {new Date(constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
