import Link from "next/link"
import Image from "next/image"
import CustomButton from "../CustomButton/CustomButton"
import "./Navbar.scss"

const Navbar = () => {
  return (
   <header className="navbar-header">
   <nav className="nav-container">
  <Link href="/" className="link">
    <Image className="image-navbar" src="/logo.svg" alt="no" width={118} height={18}/>
  </Link>


  <CustomButton 
  title="Sign In"
  btnType="button"
  containerStyles={"navbar-button"}

  />
   </nav>
  





   </header>
  )
}

export default Navbar