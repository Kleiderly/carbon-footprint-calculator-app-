import './css/Category.css';
import './css/vivify.min.css';

const CategoryItemBox2 = ({ type, adress, classChanger, classChanger2, index }) => {
   return (
      <div className="category-type-of-item-container">
         <div
            className={classChanger === index || classChanger2 === index ? 'category-selected light-tone-bg fadeInLeft vivify delay-500' : 'category-deselected fadeInLeft vivify delay-500'}
         >
            <img className="category-img-category-item-box" src={adress} alt={type} />
         </div>
      </div>
   );
};

export default CategoryItemBox2;
