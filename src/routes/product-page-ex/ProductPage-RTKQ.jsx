import { useState } from "react";

import { useNavigate, Link, useParams } from "react-router-dom";

// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import BalanceIcon from "@mui/icons-material/Balance";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/scart.slice";

import "./ProductPage.styles.scss";
import { useGetProductByIdQuery } from "../../services/strApi";

const ProductPage = () => {
  const navigateTo = useNavigate();

  let { id } = useParams();

  const [count, setCount] = useState(0);

  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { data: product } = useGetProductByIdQuery(id);
  // const { data: product, isFetching, error, refetch } = useGetProductByIdQuery(id);

  // const { data, loading, error, errorMessage } = useFetch(
  //   `/products/${id}?populate=*`
  // );

  // TODO: Use Refetch + Loader
  // function handleRefetchOne() {
  //   // force re-fetches the data
  //   refetch();
  // }

  // function handleRefetchTwo() {
  //   // has the same effect as `refetch` for the associated query
  //   dispatch(
  //     strApi.endpoints.getProductById.initiate(
  //       { count: 5 },
  //       { subscribe: false, forceRefetch: true }
  //     )
  //   );
  // }

  // if (error) {
  //   const timer = setTimeout(() => {
  //     setCount("Timeout called!");
  //     console.log("fetch API Error, Refetch in 15s");
  //     refetch();
  //   }, 15000);
  //   return () => clearTimeout(timer);
  // }

  // if (error)
  //   return (
  //     <div>
  //       <button onClick={handleRefetchOne}>Force re-fetch 1</button>
  //       <button onClick={handleRefetchTwo}>Force re-fetch 2</button>
  //     </div>
  //   );

  // if (isFetching) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  const goToSCart = () => {
    navigateTo("/scart");
  };

  // TODO: Products link to breadcrumb??? - most a SHOP-ra tettem a linket
  // TODO: PRODUCTS link to breadcrumb??? - most a category-ra tettem a linket
  // <Link
  //               className="link"
  //               to={`/products/${data?.attributes?.categories.data[0].id}`}
  //             >
  //               {data?.attributes?.categories.data[0].attributes.title}
  //             </Link>{" "}
  //             /{" "}
  //             <Link
  //               className="link"
  //               to={`/products/${data?.attributes?.categories.data[0].id}`}
  //             >
  //               {data?.attributes?.sub_category.data.attributes.title}
  //             </Link>{" "}
  // TODO: sub_categories link to breadcrumb??? - most a category-ra tettem a linket
  // <Link
  //               className="link"
  //               to={`/products/${data?.attributes?.sub_category.data.id}`}
  //             >
  //               {data?.attributes?.sub_category.data.attributes.title}
  //             </Link>{" "}

  // TODO: map categories/sub_categories:
  // {error
  //   ? `Something went wrong! ${errorMessage}`
  //   : loading
  //   ? "loading"
  //   : data?.map((item) => (
  //       <div className="inputItem" key={item.id}>
  //         <input
  //           type="checkbox"
  //           id={item.id}
  //           value={item.id}
  //           onChange={handleChange}
  //         />
  //         <label htmlFor={item.id}>{item.attributes.title}</label>
  //       </div>
  //     ))}

  return (
    <div className="product-container">
      {error ? (
        `Something went wrong! Errormessage: "${error}"`
      ) : isFetching ? (
        "loading"
      ) : (
        <>
          <h2>
            <Link className="link" to="/">
              Home
            </Link>{" "}
            /{" "}
            <Link className="link" to="/shop">
              Products
            </Link>{" "}
            / {product?.attributes?.title}
          </h2>
          <div className="product">
            <div className="left">
              <div className="mainImg">
                <img
                  src={
                    import.meta.env.VITE_APP_STRAPI_UPLOAD_URL +
                    product?.attributes?.[selectedImg]?.product?.attributes?.url
                  }
                  alt="Selected Show image"
                />
              </div>
              <div className="images">
                <img
                  src={
                    import.meta.env.VITE_APP_STRAPI_UPLOAD_URL +
                    product?.attributes?.img?.product?.attributes?.url
                  }
                  alt="Show image 1"
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    import.meta.env.VITE_APP_STRAPI_UPLOAD_URL +
                    product?.attributes?.img2?.product?.attributes?.url
                  }
                  alt="Show image 2"
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
            </div>
            <div className="right">
              <h1>{product?.attributes?.title}</h1>
              <span className="price">${product?.attributes?.price}</span>
              <p>{product?.attributes?.desc}</p>

              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="add"
                onClick={() =>
                  dispatch(
                    addItemToCart({
                      id: product.id,
                      title: product.attributes.title,
                      desc: product.attributes.desc,
                      price: product.attributes.price,
                      img: product.attributes.img.product.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                ADD TO CART
              </button>
              <button className="add" onClick={goToSCart}>
                GO TO CART
              </button>
              <div className="links">
                <div className="item">ADD TO WISH LIST</div>
                <div className="item">ADD TO COMPARE</div>
              </div>
              <hr />
              <p>
                <strong>Available: </strong>
                {product?.attributes?.isAvailable}
              </p>
              <p>
                <strong>Available Colors: </strong>
                {product?.attributes?.colors}
              </p>
              <p>
                <strong>SKU: </strong>
                {product?.attributes?.SKU}
              </p>
              <p>
                <strong>Brand: </strong>
                {product?.attributes?.brand}
              </p>
              <hr />
              <div className="info">
                <span>Vendor: {product?.attributes?.brand}</span>
                <span>
                  Product Type: {product?.attributes?.type},{""}
                  {product?.attributes?.categories.product[0].attributes.title}
                </span>
                <span>
                  Tag:{" "}
                  {product?.attributes?.categories.product[0].attributes.title},{" "}
                  {product?.attributes?.sub_category.product.attributes.title},
                  Furniture, Interior Design
                </span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
