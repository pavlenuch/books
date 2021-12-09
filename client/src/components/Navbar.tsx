import {FC} from "react"
import '../index.css'
import img_book from '../img/book.png'
import { NavLink } from 'react-router-dom'


const Navbar: FC = () => {

    return (
        <nav className="grey darken-3" >
            <div className="nav-wrapper grey darken-3 navbar">
                <NavLink to='/'><img src={img_book} alt="img_book" className="brand-logo"/></NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to='/create'>ADD NEW BOOK</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar