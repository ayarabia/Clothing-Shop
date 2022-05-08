import React, { useState } from 'react'
import NavbarComponent from './Navbar';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import "../Style/test.css"
import {useEffect,useContext} from 'react'
import getProduct from '../Redux/Actions/productAction'
import {ListGroup ,Card,Row,Container,Col} from 'react-bootstrap'
import {connect} from 'react-redux'
import '../Style/products.css'
import { themecontxt } from '../Context/creatContext';
import {  Link } from "react-router-dom";
import {Rating} from 'react-simple-star-rating'
const options = {
  margin: 30,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["Prev", "Next"],
//   smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,
      }
  },
};
function Products(props) {
  let value=useContext(themecontxt)
  const [rating, setRating] = useState(0) 
  // console.log(value);
  var {product,getProduct,increase,decrease}=props;
  var [test,setTest]=useState(product);
  // console.log(props)
  var [quntity,setQuntity]=useState(0)
    useEffect(()=>{
       getProduct()
      

   
},[])

    console.log(product);
  
 let showProduct=(item)=>{
          
            var newArray=[]
            for (let i=0;i<product.length;i++){
              product[i].quntity=quntity
                // console.log(product[i]);
                if(product[i].category.includes(item)){
            newArray.push(product[i])
                }
            }
            // console.log("hollo");
    product=newArray;

 
    setTest(newArray)
   return product;
           }
           const handleRating = (rate) => {
            setRating(rate)
            // Some logic
          }      
 let addtoCart=()=>{
let qun=quntity + 1
   setQuntity(qun)
   
 }
 
  return (
    <>
    
 <NavbarComponent></NavbarComponent>
 <div style={value.theme}>
   <div className='text-center p-5' >
   {/* <h1 className='fs-4 mainColor'>NEW ARRIVALS</h1> */}
    <h1 className='fs-2 mainColor mb-5'>SIXTEEN PRODUCTS</h1>
    <ListGroup horizontal className=' mx-auto col-8'>
  <ListGroup.Item onClick={()=>{showProduct("e")}} className='mainColor'>ALL PRODUCTS </ListGroup.Item>
  <ListGroup.Item onClick={()=>{showProduct("men")}}>Men's clothing</ListGroup.Item>
  <ListGroup.Item onClick={()=>{showProduct("women")}}>Women's clothing </ListGroup.Item>
  <ListGroup.Item onClick={()=>{showProduct("jewelery")}}>Jewelery</ListGroup.Item>
  <ListGroup.Item onClick={()=>{showProduct("electronics")}}>Electronics</ListGroup.Item>
</ListGroup>


   </div>

   <div class='container-fluid' >            
<OwlCarousel items={4}  
  className="owl-theme"  
  {...options}
  loop  
   nav  
  margin={8} 
  >  
 {test.map((item,index)=>{
    return <div class="item">
     <Card>
     <Link to="/detailes" state={{data:item}}>
        <Card.Img variant="top" src={item.image}  />  </Link>
        <Card.Body>
          <Card.Title className='d-flex justify-content-between' style={{height:"50px",overflow:'hidden'}}>{item.title} </Card.Title>
          <span style={{color:'red'}}>${item.price}</span>
        
          <div className='d-flex justify-content-start align-items-center'> 
  
  
  
   <Rating
        onClick={handleRating}
        ratingValue={item.rating.rate}
        size={20}
        label
        transition
        fillColor='orange'
        isDisabled
        emptyColor='gray'
        className='foo' // Will remove the inline style if applied
      /> 
 
          <span style={{color:'red',marginLeft:'20px' }}>   {item.rating.rate} reviews</span>

          </div>
          
        </Card.Body>
        <div className='buttons'>
        <button className='btn btn-danger add' onClick={()=>{increase();
     addtoCart()
     console.log(quntity);
        }}>Add To Cart</button>
          {/* <button className='btn btn-danger add' onClick={()=>{decrease()}}>Remove</button> */}
          
          {/* <span><Link to="/detailes" state={{data:item}} className='btn btn-danger'>show detailes </Link></span> */}
          
        </div>
      
      </Card>
    
    </div> 
    
    
  })} 
</OwlCarousel>  
</div>  
</div>
    </>
  )
}
let mapStateToProps=(state)=>{
    // console.log(state.counter);
return{
   product:state.product 
}

}
let mapDispatchToProps=(dispatch)=>{
return {
    getProduct:()=>{dispatch(getProduct())},
    increase:()=>{dispatch({type:"INCREASE"})},
    decrease:()=>{dispatch({type:"DECREASE"})},
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)
{/* <Container>
<Row xs={1} md={4} className="g-4">
    
{product.map((item,index)=>{ }
{test.map((item,index)=>{
return   <Col> <Card>
        <Card.Img variant="top" src={item.image}  />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between'>Card title <span>${item.price}</span></Card.Title>
          <Card.Text>
         {item.title}
          </Card.Text>
          <div className='d-flex justify-content-between'> 
   <div>
   <i class="fa fa-star" style={{color:"red"}} ></i>
          <i class="fa fa-star" style={{color:"red"}} ></i>
          <i class="fa fa-star" style={{color:"red"}} ></i>
          <i class="fa fa-star" style={{color:"red"}} ></i>
          <i class="fa fa-star-o"></i>
   </div>
          <span>Reviews ({item.rating.rate})</span>
          </div>
          
        </Card.Body>
        <div className='buttons'>
        <button className='btn btn-danger add' onClick={()=>{increase()}}>Add To Card</button>
          <button className='btn btn-danger add' onClick={()=>{decrease()}}>Remove</button>
        </div>
      </Card>
     
      </Col>
  

})

}</Row>

</Container> */}