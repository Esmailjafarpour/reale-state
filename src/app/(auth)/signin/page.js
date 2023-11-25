import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import SignInPage from "@/template/SignInPage";

async function SignIn (){
  const session = await getServerSession(authOptions) 
  if(session) redirect("/")
  return (<SignInPage/>);
}

export default SignIn;
