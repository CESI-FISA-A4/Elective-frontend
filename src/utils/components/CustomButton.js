
function CustomButton({ type, onClick, children }) {
    return (
        <button type={type} onClick={onClick} className='hover:bg-greenColor bg-blackColor text-white rounded-md p-2'>
            {children}
        </button>
    )
}

export default CustomButton;