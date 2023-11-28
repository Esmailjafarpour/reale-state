import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "@/module/TextList.module.css";

const TextList = ({ title, profileData, setProfileData, type }) => {

     const addHandler = () => {
          setProfileData({
               ...profileData,[type] : [...profileData[type] , ""]
          })
     }

     const changeHandler = (e , index) => {
          const { value } = e.target;
          const list = [...profileData[type]];
          list[index] = value;
          setProfileData({...profileData , [type] : list})
     }

     const deleteHandler = (index) => {
          const list = [...profileData[type]];
          list.splice(index,1)
          setProfileData({...profileData , [type] : list})
     }

  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      {profileData[type].map((item, index) => (
        <div className={styles.card} key={index}>
          <input type="text" value={item} onChange={(e) => changeHandler(e , index)}/>
          <button onClick={() => deleteHandler(index)}>
               حذف
               <AiOutlineDelete/>
          </button>
        </div>
      ))}
      <button onClick={addHandler}>
          افزودن
          <MdOutlineLibraryAdd/>
     </button>
    </div>
  );
};

export default TextList;
