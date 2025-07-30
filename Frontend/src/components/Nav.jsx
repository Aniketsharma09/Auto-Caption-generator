import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="w-full h-full bg-gray-800 flex items-center justify-between px-5 py-3">
        <div className="logo w-[33%]"> Logo</div>
        <div className="w-[33%] flex items-center justify-between ">
            <NavLink className='text-xl tracking-widest' to='/'>Home</NavLink>
            <NavLink className='text-xl tracking-widest' to='/posts'>Posts</NavLink>
            <NavLink className='text-xl tracking-widest' to='/about'>About</NavLink>
        </div>
        <div className='w-[33%] flex items-center justify-end '>
        <NavLink className='px-3 py-1 rounded-md bg-blue-500 text-md tracking-widest '  to="/login">Login</NavLink>
        </div>
    </div>
  )
}

export default Nav