const validate = (type , data) => {

     const errors = {};

     if (type === "AddProfilePage") {
          if (!data.title.trim()) {
               errors.title = "عنوان آگهی را وارد کنید";
          }else if(data.title.length < 3){
               errors.title = "عنوان باید بیشتر از سه حرف باشد";
          }

          if (!data.category) {
               errors.category = "یک دسته بندی راانتخاب کنید"; 
          }
          if (!data.phone) {
               errors.phone = "شماره تماس را مشخص کنید"; 
          }
          if (!data.location) {
               errors.location = "آدرس تقریبی ملک مورد نظر را مشخص کنید"; 
          }
          if (!data.price) {
               errors.price = "قیمت را مشخص کنید"; 
          }
          if (!data.realState) {
               errors.realState = "مشاور املاک  مورد نظر خود را انتخاب کنید";
          }
          if (!data.description) {
               errors.description = "توضیحات مختصری را برای آگهی خود بنویسید"; 
          }
     }

     return errors
}

export {validate};

// title: "",
// description: "",
// location: "",
// phone: "",
// price: "",
// realState: "",
// constructionDate: new Date(),
// category: "",
// rules: [],
// amenities: [],