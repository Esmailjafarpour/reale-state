import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import Profile from "@/models/Profile";
import DashboardSidebar from "@/layout/DashboardSidebar";
import AdminPage from "@/template/AdminPage";

export const metadata = {
  title : "Admin پنل"
}

const Admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/dashboard");
  const profiles = await Profile.find({published : false})
  return (
    <DashboardSidebar role={user.role} email={user.email}>
      <AdminPage profiles={profiles}/>
    </DashboardSidebar>
  );
};

export default Admin;
