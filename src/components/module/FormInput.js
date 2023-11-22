
import styles from "@/module/FormInput.module.css";
const FormInput = ({label , name , type , value , onChange , placeholder}) => {
     return (
          <div className={styles.formInput}>
               <label htmlFor={name}>{label}</label>
               <input
                    id={name}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
               />
          </div>
     );
}

export default FormInput;