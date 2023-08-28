import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { useSelector } from "react-redux";
const Category = () => {
  const { category } = useParams();
  console.log("render/re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);


  useEffect(() => {
    
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product}></ProductCard>
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
