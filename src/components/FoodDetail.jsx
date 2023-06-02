// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { client } from "../client";

// export default function FoodDetail() {
//   const [food, setFood] = useState();
//   const { id } = useParams();

//   useEffect(() => {
//     client
//       .getEntry(id)
//       .then((response) => {
//         setFood(response.fields);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   return (
//     <>
//    <h1>{}</h1>
//     </>
//   );
// }