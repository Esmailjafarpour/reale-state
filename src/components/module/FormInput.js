import { useState, useEffect } from "react";
import { validate } from "@/utils/validate";
import styles from "@/module/FormInput.module.scss";
const FormInput = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  data,
  form,
  showError
}) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(form, data));
  }, [data]);

  const foucusHandler = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
  };

  console.log("errors", errors);
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
        onFocus={foucusHandler}
      />

      {showError?
        errors[name] && touched[name] ? (
          <span className={styles.error}>{errors[name]}</span>
        ) : (
          <span className={styles.error}></span>
        )
      :
          null
      }
      
    </div>
  );
};

export default FormInput;
