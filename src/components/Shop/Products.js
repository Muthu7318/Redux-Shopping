import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 9,
    title: "My Second Book",
    description: "This is a second product - amazing!",
  },
  {
    id: "p3",
    price: 7,
    title: "My Third Book",
    description: "This is a third product - amazing!",
  },
  {
    id: "p4",
    price: 8,
    title: "My Fourth Book",
    description: "This is a fourth product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
