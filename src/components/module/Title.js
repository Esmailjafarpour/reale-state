import styles from "@/module/Title.module.scss";

const Title = ({children}) => {
     return (
          <div className={styles.title}>
               {children}
          </div>
     );
}

export default Title;
