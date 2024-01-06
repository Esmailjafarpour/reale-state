"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import Link from "next/link";
import Loader from "@/module/Loader";
import FormInput from "@/module/FormInput";
import { validate } from "@/utils/validate";
import { secondaryColorTwo } from "@/app/variables.module.scss";
import styles from "@/template/SignupPage.module.scss";

const SignupPage = () => {
  const router = useRouter();
  const [state, setAllState] = useState({
    email: "",
    password: "",
    rePassword: "",
    loading: false,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAllState({ ...state, [name]: value });
  };

  const signupHandler = async (event) => {
    event.preventDefault();
    if (state.password !== state.rePassword) {
      toast.error("رمز عبور و تکرار آن با هم برابر نیست");
      return;
    }
    setAllState({
      ...state,
      loading: true,
    });
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email: state.email, password: state.password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setAllState({
      ...state,
      loading: false,
    });
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }

  };

  return (
    <div className={styles.form}>
      <h4>فرم ثبت نام</h4>
      <form>
          <FormInput
            label="ایمیل"
            name="email"
            type="text"
            value={state.email}
            onChange={changeHandler}
            form="signup"
            data={state}
            showError={true}
          />
        
        
          <FormInput
            label="رمز عبور"
            name="password"
            type="password"
            value={state.password}
            onChange={changeHandler}
            form="signup"
            data={state}
            showError={true}
          />
        
        
          <FormInput
            label="تکرار رمز عبور"
            name="rePassword"
            type="password"
            value={state.rePassword}
            onChange={changeHandler}
            form="signup"
            data={state}
            showError={true}
          />
        

        {state.loading ? (
          <div className={styles.loader}>
            <Loader loading={state.loading} color={secondaryColorTwo} />
          </div>
        ) : (
          <button type="submit" onClick={signupHandler}>
            ثبت نام
          </button>
        )}
      </form>
      <p>
        حساب کاربری دارید؟
        <Link href="/signin">ورود</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default SignupPage;
