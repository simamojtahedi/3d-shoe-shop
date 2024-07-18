import Categories from "./components/categories/index";
import Header from "./components/header/index";
import Products from "./components/products/index";
import Quote from "./components/quote/index";
import Services from "./components/services/index";
import { products } from "./data/index";


export default function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Products
        title="پرفروش‌ترین‌های برند"
        title_brand="نایـــــکی"
        en_title="nike"
        productsList={products.filter(
          (product: any) => product.brand == "Nike"
        )}
      />
      <Products
        title="پرفروش‌ترین‌های برند"
        title_brand="آدیـــــداس"
        en_title="adidas"
        productsList={products.filter(
          (product: any) => product.brand == "Adidas"
        )}
      />
      <Quote />
      <Products
        title="پرفروش‌ترین‌های برند"
        title_brand="زارا"
        en_title="zara"
        productsList={products.filter(
          (product: any) => product.brand == "Zara"
        )}
      />
      <Services />
    </>
  );
}
