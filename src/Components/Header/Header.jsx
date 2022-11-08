import './Header';
import './Header.css';
import img from "../../assets/images/logo.svg";
import {FiMenu, FiSearch, FiShoppingCart} from "react-icons/fi";
import { BsPerson, BsSuitHeart } from "react-icons/bs";
import {FcOk} from "react-icons/fc";
import {MdKeyboardArrowDown} from "react-icons/md"
function Header (){
  return(
    <header>
      <nav>
        <ul className='collection'>
         <div className='collection-one'>
            <li className="collection-text-one"><FiMenu className='icon'/>  Menu</li>
            <li className='collection-text-two'><FiSearch className='icon'/>  Search</li>
          </div>
          <li><img src={img} /></li>
          <div className='collection-three'>
            <li className="collection-icon"><BsPerson/></li>
            <li className="collection-icon"><BsSuitHeart/></li>
            <li className="collection-icon"><FiShoppingCart/></li>
            <li className="collection-icon1"><FcOk/></li>
            <li className='collection-three-text'>ENG <MdKeyboardArrowDown className='icon1'/></li>
            <li className='collection-three-text'>USD <MdKeyboardArrowDown className='icon1'/></li>
          </div>
        </ul>
      </nav>
    </header>

  )
}

export default Header;