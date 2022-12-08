
import styles from "./Category.module.scss";
const Category = ({list,isActive,setIsActive}) => {

 
 
  return (
    <div className={styles.wrapper}>
      <ul className={styles.ul}>
        {list.map((item, index) => {
          return (
            <li onClick={()=>setIsActive(index)} className={isActive === index ? styles.active : ""}>{item}</li>
          
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
