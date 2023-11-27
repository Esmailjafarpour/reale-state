import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import DashboardSidebar from "@/layout/DashboardSidebar";

const DashboardLayout = async ({children}) => {

     const session = await getServerSession(authOptions);
     if (!session) redirect("/signin")
          
     return <DashboardSidebar>{children}</DashboardSidebar>
     
}

export default DashboardLayout;
