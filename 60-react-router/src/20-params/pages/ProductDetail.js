import { useParams } from "react-router-dom";

export default function ProductDetail() {
  /**
   * We can extract the ":" params from the URL using the useParams hook
   * It will return an object with the param names as keys, matched with the extracted values from the URL
   *    - Make good use of destructuring!
   */

  const params = useParams();
  console.log(params);
  /**
   * If the URL is /product-detail/3" and the Route path matcher is "/product-detail/:productId",
   * {
   *    productId: 3,
   * }
   *
   * - If URL = "/product-detail/3/UYIKHJ", the same Route still matches (bc. not using exact match) and it is still :productID = 3 because params only matches until hitting another "/"
   */

  return (
    <section>
      <h1>The Products Page</h1>
      <p>{params.productId}</p> {/* This will show the productId */}
    </section>
  );
}
