import { Link } from "react-router-dom"

const Navbar = () => {

    return(
        <nav className="navContainer">
            <Link to='/' className="navLink">Home</Link>
            <Link to='/about' className="navLink">About</Link>
            <Link to='/counter' className="navLink">Counter</Link>
            <Link to='/color-picker' className="navLink">Color Picker</Link>
        </nav>
    )
}

export default Navbar