"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Toaster , toast } from "react-hot-toast";
import Loader from "@/module/Loader";
import FormInput from "@/module/FormInput";
import Link from "next/link";
import { secondaryColorTwo } from "@/app/variables.module.scss";
import styles from "@/template/SignupPage.module.scss";


const SigninPage = () => {

     const router = useRouter();
     const [state, setAllState] = useState({
          email : "naderjafarpour@gmail.com",
          password : "123",
          loading : false
     });

     const signinHandler = async (event) => {
         event.preventDefault();
         setAllState({
          ...state,
          loading : true
         });
         const res = await signIn("credentials",{
          email : state.email,
          password : state.password,
          redirect : false
         })
         setAllState({
          ...state,
          loading : false
         })
         if(res.error) {
           toast.error(res.error)
         }else{
          router.push("/");
         }
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
               {state.loading?
                    <div className={styles.loader}>
                         <Loader loading={state.loading} color={secondaryColorTwo}/>
                    </div>
                    :
                    <button type="submit"  onClick={signinHandler}>ورود</button>}
             </form>  
             <p>
               حساب کاربری ندارید؟
               <Link href="/signup">ثبت نام</Link>
             </p>
             <Toaster/>
          </div>
     );
}

export default SigninPage;

