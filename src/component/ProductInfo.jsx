

const ProductInfo = () => {
    const product={
        name: "Bottle",
        price: 13.99,
        description: "This is a product",
        availability:"In Stock"
    }

    const{name,price,description,availability}=product
  return (
    <div>
      <span>name: {name}</span><br />
      <span>price: {price}</span><br />
      <span>description: {description}</span><br />
      <span>availability: {availability}</span><br /> 
    </div>
  )
}

export default ProductInfo
