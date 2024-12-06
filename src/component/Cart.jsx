import '../assets/Cart.css'

const Cart = () => {
    const items=["Macbook m4 pro","RTX 4090", "Ryzen 7 9800x3D"]
  return (
    <div>
      <h2>Cart 🛒</h2>
      
      {
        items.length>0?
         (
            <>
            <ul className="inline-disc"> 
                {items.map((item, index) => <li>{item}</li> )} 
             </ul>
           
             <h4>You have {items.length} items in your cart</h4>
            </>
         ):(
            <h4>Your Cart is empty</h4>
         )
    
     }
    
      
    </div>
  )
}

export default Cart
