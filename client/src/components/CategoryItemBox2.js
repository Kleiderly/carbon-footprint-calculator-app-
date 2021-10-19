import './css/Category.css';

const CategoryItemBox2 = ({ type, adress, classChanger, classChanger2, index }) => {
   return (
      <div className="category-type-of-item-container">
         <div
            className={classChanger === index || classChanger2 === index ? 'category-selected' : 'category-deselected'}
         >
            <img className="category-img-category-item-box" src={adress} alt={type} />
         </div>
      </div>
   );
};

export default CategoryItemBox2;
