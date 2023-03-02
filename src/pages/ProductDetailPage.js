import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
   const pararms = useParams();
   return (
      <>
         <h1>Product Details</h1>
         <p>{pararms.productId}</p>
         <p>
            <Link to=".." relative="path">
               Back
            </Link>
         </p>
      </>
   );
}
