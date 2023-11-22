"use client";
import { useState , useEffect } from "react";
import styles from "@/template/SignupPage.module.css";
import FormInput from "@/module/FormInput";
import Link from "next/link";


const SigninPage = () => {

     const [state, setAllState] = useState({
          email : "",
          password : "",
     });

     const signinHandler = () => {
         
     }

     return (
          <div className={styles.form}>
             <h4>فرم ورود</h4>
             <form>
               <FormInput
                    label="نام کاربری" 
                    name="email" 
                    type="text" 
                    value={state.email} 
                    onChange={(e)=> setAllState({
                         ...state,
                         [e.target.name] : e.target.value
                    })}  
               />
               <FormInput
                    label="رمز عبور" 
                    name="password" 
                    type="password" 
                    value={state.password} 
                    onChange={(e)=> setAllState({
                         ...state,
                         [e.target.name] : e.target.value
                    })}  
               />
               <button type="submit" onClick={signinHandler}>ورود</button> 
             </form>  
             <p>
               حساب کاربری دارید؟
               <Link href="/signup">ثبت نام</Link>
             </p>
          </div>
     );
}

export default SigninPage;

