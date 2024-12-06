

const ProductList = ({product,imageUrl}) => {
  return (
    <>
    <img src={imageUrl} alt="image" width="200px"></img>
    <div>
    {product.map(({id,name,price})=><p key={id}>name:{name}::price: ${price}</p>)}
  </div>
    <br />
  </>
    
  )
}

export default ProductList
