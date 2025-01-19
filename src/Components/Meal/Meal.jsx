
const Meal = ({meal}) => {
  
    const {strCategory, idCategory, strCategoryThumb,strCategoryDescription} = meal;

    return (
    <div>
<div className="card bg-base-100 w-96 rounded-xl shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={strCategoryThumb}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Meal Number: {idCategory}</h2>
    <h2 className="card-title">Meal Category: {strCategory}</h2>
    
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>    </div>
  )
}

export default Meal