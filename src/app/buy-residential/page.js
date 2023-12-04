import BuyResidentialsPage from "@/template/BuyResidentialsPage";

const BuyResidentials = async({searchParams}) => {
     console.log(searchParams)
     const res = await fetch("http://localhost:3000/api/profile/",{catch : "no-store"});
     const data = await res.json();
     if (data.error) return <h3>{data.error}</h3>
     let finalData = data.data;
     if(searchParams.category) {
          finalData = finalData.filter((profile) => (profile.category === searchParams.category))
     }
     return <BuyResidentialsPage data={finalData}/>
}

export default BuyResidentials;
