import { useParams } from "react-router-dom";
import { useContext, useState, useEffect, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  const isLoading = useSelector(selectCategoriesIsLoading);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <div className="category-container">
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
