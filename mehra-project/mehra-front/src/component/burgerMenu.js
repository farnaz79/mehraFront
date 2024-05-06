import {useState} from "react";
import shop from '../assets/image/icons/shop.svg'
import {RiMenuLine} from "react-icons/ri";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
               <RiMenuLine
                   className={`burger ${isOpen ? 'open' : ''}`}
                   onClick={handleToggleMenu}
                   size={28}
               />
            {isOpen && (
                <div className="menu">
                    <ul>
                        <li>بلاگ</li>
                        <li>داستان ما</li>
                        <li>تماس با ما</li>
                        <li>
                            <img src={shop} width={30}/>
                            <p>فروشنده شوید</p>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;