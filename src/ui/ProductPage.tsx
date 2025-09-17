import { useParams } from "react-router-dom";
import navItems from "../config/nav.config";
import { Breadcrumbs } from "../ui";
import { ProductPageModel } from "../models/ProductPageModel";
import { ProductTabs } from "./ProductTabs";

const ProductPage = () => {
  const { product } = useParams<{ product: string }>();
  const decodedSlug = product ? decodeURIComponent(product) : "";

  // Create the product page model
  const page = new ProductPageModel(navItems, decodedSlug);



  // If product not found, display a message
  if (!page.name) return <p>Product not found</p>;

  return (
    <section className="product container">
      <Breadcrumbs />
      
      <h1 className="product__title h3-title">{page.name}</h1>

      {page.path && (
        <div className="product__image-container">
          <img src={page.path} alt={page.name} className="product__image" />
        </div>
      )}

      <ProductTabs matchedProduct={page} />
    </section>
  );
};

export default ProductPage;