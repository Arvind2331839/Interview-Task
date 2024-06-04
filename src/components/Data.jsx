// import axios from "axios";
// import React, { useEffect } from "react";
// import getData from "../Redux/Slice"
// import { useDispatch, useSelector } from "react-redux";


//  function Data() {
//   const data = useSelector((state) => state.data.allData)
//   const loading = useSelector((state) => state.data.loading)
//   const error = useSelector((state) => state.data.error)
//   console.log(data)
//  const dispatch=useDispatch()

//  useEffect(()=>{
//   dispatch(getData())
//  },[dispatch])

//  if(loading){
//   return <h1>Loading...</h1>
//  }
//  else if(error){
//   return <h1>error...</h1>
//  }else{
//   return (
//     <div>
//       Arvind
//    </div>
//   );
//  }
 
// }

// export default Data


import axios from "axios";
import React, { useEffect } from "react";
import Cards from "./Cards";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

 function Data() {

  const [post, setPost] = React.useState([]);
// console.log(post)

  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setPost(response.data);
    });
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };

  return (
    <div className="slider-container">
    <Slider {...settings}>
    <div className="grid grid-cols-3 grid-rows-3  mx-auto ">
    {
      post.map((data)=>(
     <div className="m-5">
       <Cards key={data.id} data={data}/>
     </div>
      )
    )
    }
 </div>
    </Slider>
  </div>
  );
 
 
}

export default Data


