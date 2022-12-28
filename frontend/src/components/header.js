import "../styles/header.css";
import { Input, Select } from 'antd';
import { BsSearch } from "react-icons/bs"
import { MdCompareArrows } from "react-icons/md"
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
const { Option } = Select;

const Header = () => {
    const selectBefore = (
        <Select defaultValue="All Categories">
            <Option>Women's</Option>
            <Option>Men's</Option>
            <Option>Cellphones</Option>
            <Option>Computers</Option>
            <Option>Electronics</Option>
        </Select>
    );
    return (
        <div>
            <div>
                <div className="flexBox headerTop">
                    <ul>
                        <li>About us</li>
                        <li className="borderL borderR">My Account</li>
                        <li className="borderR">Wishlist</li>
                        <li>Order Tracking</li>
                    </ul>
                    <p>Get great devices up to 50% off
                        <a href="#">View details</a>
                    </p>
                    <ul>
                        <li>Need help? Call Us:+ 1800 900</li>
                        <li className="borderL borderR">English</li>
                        <li>USD</li>
                    </ul>
                </div>
                <div className="flexBox headerMid">
                    <img src="https://nest-nextjs.vercel.app/assets/imgs/theme/logo.svg" alt="logo" />
                    <Input className="searchBar" addonBefore={selectBefore} placeholder="Search..." suffix={<BsSearch />} />
                    <ul>
                        <li><MdCompareArrows /> Compare</li>
                        <li><AiOutlineHeart /> Wishlist</li>
                        <li><AiOutlineShoppingCart /> Cart</li>
                        <li><AiOutlineUser /> Account</li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Header;