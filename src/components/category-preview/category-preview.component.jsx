import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import Spinner from "../spinner/spinner.component";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../store/categories/category.selector";

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="preview">
          {products
            .filter((_, index) => index < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPreview;
