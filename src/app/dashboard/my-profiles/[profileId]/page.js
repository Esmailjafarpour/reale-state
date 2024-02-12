import connectDB from "@/utils/connectDB";
import Profile from "@/models/Profile";
import AddProfilePage from "@/template/AddProfilePage";
const Edit = async ({params : {profileId}}) => {
     await connectDB();
     const profile = await Profile.findOne({_id : profileId});
     if (!profile) return <h3>مشکلی پیش آمده دوباره امتحان کنید</h3>
     return (
          <div>
               <AddProfilePage data={JSON.parse(JSON.stringify(profile))}/>
          </div>
     );
}

export default Edit;
