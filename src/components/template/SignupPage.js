"use client";
import { useState , useEffect } from "react";
import { useRouter } from "next/navigation";
import { Toaster , toast } from "react-hot-toast";
import Link from "next/link";
import Loader from "@/module/Loader";
import FormInput from "@/module/FormInput";
import { secondaryColorTwo } from "@/app/variables.module.scss";
import styles from "@/template/SignupPage.module.scss";

const SignupPage = () => {

     const [state, setAllState] = useState({
          email : "naderjafarpour@gmail.com",
          password : "123",
          rePassword : "123",
          loading : false
     });

     const router = useRouter()

     const signupHandler = async (event) => {
          event.preventDefault();
          if (state.password !== state.rePassword) {
               toast.error("رمز عبور و تکرار آن با هم برابر نیست") 
               return;
          }
          setAllState({
               ...state,
               loading : true
          })
          const res = await fetch("/api/auth/signup",{
               method : "POST",
               body : JSON.stringify({email : state.email , password : state.password}),
               headers : {"Content-Type" : "application/json"}
          })

          const data = await res.json();
               setAllState({
                    ...state,
                    loading : false
               })
          if (res.status === 201) {
               router.push("/signin")
          } else {
              toast.error(data.error) 
          }
     }

     return (
          <div className={styles.form}>
             <h4>فرم ثبت نام</h4>
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
               <FormInput
                    label="تکرار رمز عبور" 
                    name="rePassword" 
                    type="password" 
                    value={state.rePassword} 
                    onChange={(e)=> setAllState({
                         ...state,
                         [e.target.name] : e.target.value
                    })}  
               />    
               {state.loading ? 
                    <Loader loading={state.loading} color={secondaryColorTwo}/>
               : <button type="submit" onClick={signupHandler}>ثبت نام</button>} 
               
             </form>  
             <p>
               حساب کاربری دارید؟
               <Link href="/signin">ورود</Link>
             </p>
             <Toaster/>
          </div>
     );
}

export default SignupPage;
