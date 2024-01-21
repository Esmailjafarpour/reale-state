const validate = (type, data) => {

  const errors = {};

  if (type === "AddProfilePage") {
    
    if (!data.title.trim()) {
      errors.title = "عنوان آگهی را وارد کنید";
    } 
    // else if(typeof(data.title) === "number"){
    //   errors.title = "مقدار غیر عددی وارد کنید"
    // }
    else if (data.title.length < 3) {
      errors.title = "عنوان باید بیشتر از سه حرف باشد";
    }

    if (!data.category) {
      errors.category = "یک دسته بندی برای آگهی خود انتخاب می کنید؟";
    }

    if (!data.typeofnotice) {
      errors.typeofnotice = "نوع آگهی خود را مشخص می کنید؟";
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

    if (data.price.length === 0) {
      errors.price = "قیمتی را وارد کنید ";
    }

    if (!data.realState) {
      errors.realState = "مشاور املاک  مورد نظر خود را انتخاب کنید";
    }

    if (!data.description) {
      errors.description = "توضیحات مختصری را برای آگهی خود بنویسید";
    }

  }

  if (type === "signup") {
    if (!data.email) {
      errors.email = "ایمیل خود را وارد کنید";
    }

    if (
      data.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
    ) {
     errors.email = "فرمت ایمیل صحیح نیست";
    }

    if (!data.password) {
      errors.password = "رمز عبوری را تعین کنید";
    }

    if (data.password.length < 6) {
      errors.password = "رمز عبور طولانی تری را انتخاب کنید";
    }

    if (!data.rePassword) {
      errors.rePassword = "رمز عبور را تکرار کنید";
    }

    if (data.rePassword) {
      if (data.password.length !== data.rePassword.length) {
        errors.rePassword = "تکرار رمز عبور با رمز عبور برابر نیست";
      }

      if (data.password.length === data.rePassword.length) {
        if (data.password !== data.rePassword) {
          errors.rePassword = "تکرار رمز صحیح نیست";
        }
      }
    }
  }

  if (type === "signin") {
    if (!data.email) {
      errors.email = "ایمیل خود را وارد کنید";
    }

    if (
     data.email &&
     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
   ) {
    errors.email = "فرمت ایمیل صحیح نیست";
   }

    if (!data.password) {
      errors.password = "رمز عبور را وارد کنید";
    }
  }

  return errors;
};

export { validate };

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
