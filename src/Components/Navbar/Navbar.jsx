import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex text-white items-center bg-[#5B913B] border py-4 justify-between px-7'>
        <h2 className='text-3xl font-bold'>Meal Store</h2>
        <ul className='flex font-semibold te gap-4'>
            <NavLink>Contact</NavLink>
            <NavLink>Meals</NavLink>
            <NavLink>About</NavLink>
        </ul>
    </div>
  )
}

export default Navbar