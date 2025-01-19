
const Meal = ({meal}) => {
  
    const {strCategory, idCategory, strCategoryThumb,strCategoryDescription} = meal;

    return (
    <div>
<div className="card bg-[#D99D81] p-7 w-96 rounded-xl shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={strCategoryThumb}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center font-medium text-center">
    <h2 className="card-title ">Meal Number: {idCategory}</h2>
    <h2 className="card-title text-lg font-semibold my-2">Meal Category: {strCategory}</h2>
    
    <div className="card-actions">
      <button className="btn bg-[#5B913B] text-white font-semibold p-3 rounded-xl">Show Details</button>
    </div>
  </div>
</div>    </div>
  )
}

export default Meal