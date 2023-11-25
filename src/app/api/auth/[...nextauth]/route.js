import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export const authOptions = {
     session : { strategy : "jwt"},
     providers : [
          CredentialsProvider({
               async authorize(credentials){
                    const {email , password } = credentials;

                    try {
                         await connectDB();
                    } catch (error) {
                         throw new Error("اشکالی در سرور رخ داده است")
                    }

                    if(!email || !password) throw new Error("لطفااطلاعات معتبر را وارد کنید");

                    const user = await User.findOne({email});

                    if (!user) throw new Error("لطفا ابتدا حساب کاربری خود را ایجاد کنید");

                    const isValid = await verifyPassword(password , user.password);

                    if (!isValid) throw new Error("ایمیل یا پسوورد اشتباه است")

                    return{email};
               }
          })
     ]
};

const handler = NextAuth(authOptions)

export { handler as GET , handler as POST};