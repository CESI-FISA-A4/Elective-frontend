function ChooseQuantity ({ quantity, setQuantity }) {
  return (
    <div className="bg-blackColor text-whiteColor rounded-lg ml-5 mr-1 mb-1">
      <button className="text-align-center"
      onClick={() => setQuantity(quantity - 1 >= 0 ? quantity-1 : 0)}>-</button>

      <span className="m-4 w-1/3">{quantity}</span>

      <button className="text-align-center" 
      onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  )
}

export default ChooseQuantity;