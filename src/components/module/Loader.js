import { ThreeDots } from "react-loader-spinner";
import styles from "@/module/Loader.module.scss"

const Loader = ({loading , color}) => {
  return (
    <div className={styles.loader}>
       <ThreeDots
        height="30"
        width="40"
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{ margin: "auto" }}
        wrapperClassName=""
        visible={loading}
      />
    </div>
   
  );
};

export default Loader;
