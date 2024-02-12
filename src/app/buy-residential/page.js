import BuyResidentialsPage from "@/template/BuyResidentialsPage";
import { categories, services } from "@/constants/strings";

export const dynamic = 'force-dynamic';

const BuyResidentials = async({searchParams}) => {
     const res = await fetch("http://localhost:3000/api/profile/",{catch : "no-store"});
     const data = await res.json();
     if (data.error) return <h3>{data.error}</h3>
     let finalData = data.data;
     console.log("searchParamsCategory",searchParams.category)
     if(searchParams.category) {
          finalData = finalData.filter((profile) => 
          categories[searchParams.category]?
          (profile.category === searchParams.category)
          :
          (profile.typeofnotice === searchParams.category)
          )
     }
     return <BuyResidentialsPage data={finalData} searchParams={searchParams}/>
}

export default BuyResidentials;

