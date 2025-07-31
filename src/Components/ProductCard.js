export function ProductCard({products, background = "olivegreen", ...restProps}) {
  
  function handleClick(products) {
      alert(`You clicked on ${products.title} which costs Rs ${products.price}`);
  }

  return (
    <article 
      style= {{
        background,
        border: "1px solid black", 
        borderRadius: "10px", 
        padding: "20px",  
        textAlign: "center",
      }}
    >
      <h2> {products.title} </h2>
      <img 
        src={products.imageSrc}
        alt= {products.title}
        {...restProps}
        style={{border: "1px solid white", borderRadius: '10px' }}
      />
      <br></br>

      <h3 style={{textAlign:'left'}}> Description : </h3>
      <ul style={{textAlign:'left', textDecoration:'none'}}>
        <li> {products.description[0]} </li>
        <li> {products.description[1]} </li>
        <li> {products.description[2]} </li>
        <li> {products.description[3]} </li>
        <li> {products.description[4]} </li>
        <li> {products.description[5]} </li>
      </ul>
      <br></br>

      <button onClick={() => handleClick(products)}> Buy for Rs {products.price} </button>
    </article>
  )
}
