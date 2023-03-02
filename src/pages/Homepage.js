import { Link, useNavigate } from "react-router-dom";

export default function Homepage() {
   const navigate = useNavigate();
   function navigationHandler() {
      navigate("/products");
   }
   return (
      <>
         <h1>My Home Page</h1>
         <p>
            GoTo : <Link to="/products">All Products Page</Link>
         </p>
         <button onClick={navigationHandler}>>> products</button>
      </>
   );
}
