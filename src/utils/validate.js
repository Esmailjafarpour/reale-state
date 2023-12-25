const validate = (type , data) => {

     const errors = {};

     if (type === "AddProfilePage") {
          if (!data.title.trim()) {
               errors.title = "عنوان آگهی را وارد کنید"
          }else if(data.title.length < 3){
               errors.title = "عنوان باید بیشتر از سه حرف باشد"
          }
     }

     return errors
}

export {validate};