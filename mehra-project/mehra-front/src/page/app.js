import logo from '../assets/image/mehrashop-logo.svg'
import account from '../assets/image/icons/Account icon 2.svg'
import cart from '../assets/image/icons/Cart icon 2.svg'
import like from '../assets/image/icons/Heart icon.svg'
import leaf from '../assets/image/icons/Vector.svg'
import cardPic from '../assets/image/cardIcon.svg'
import stare from '../assets/image/icons/stare.svg'
import shop from '../assets/image/icons/shop.svg'
import slide1 from '../assets/image/cute-woman.svg'
import slide2 from '../assets/image/slide2.svg'
import iconCarrier from '../assets/image/icons/iconCarrier.svg'
import frame from '../assets/image/icons/Frame.svg'
import backpack from '../assets/image/icons/backpack.svg'
import babikio from '../assets/image/icons/babikio.svg'
import Slider from "../component/slider";
import {RiBardLine, RiMenLine, RiMenuLine, RiSearchLine} from "react-icons/ri";
import BurgerMenu from "../component/burgerMenu";

const App =()=>{

    const image = [slide1 , slide2];

    return(
        <div>
            <div className={'header'}>
                <div className={'logo'}>
                    <img src={logo} width={100} height={50}/>
                </div>
                <div>
                    <ul className={'navItem'}>
                        <li>خانه</li>
                        <li>بلاگ</li>
                        <li>داستان ما</li>
                        <li>تماس با ما</li>
                    </ul>
                    <div className={'manuBar'} >
                        <BurgerMenu/>
                        <RiSearchLine size={28}/>
                    </div>


                </div>
                <div className={'logoItem'}>
                    <img src={account} width={40} height={40}/>
                    <img src={like} width={40} height={40}/>
                    <img src={cart} width={40} height={40}/>
                </div>
            </div>
            <div className={'container'}>
                <div className={'content'}>
                    <div className={'headerContent'}>
                        <div className={'tab'}>
                            <p className={'tabButton tabActive'}> پرفروش ترین ها</p>
                            <p className={'tabButton'}>جدید ترین ها</p>
                            <p className={'tabButton'}>محبوب ترین ها</p>

                        </div>
                        <div>
                            <button className={'button'}>
                                مشاهده همه
                            </button>
                        </div>
                    </div>
                    <div className={'cartContent'}>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        {/*section 2*/}
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        {/*section 3*/}
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                        <div className={'card'}>
                            <div>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                                <img src={leaf} className={'iconCard'}/>
                            </div>
                            <div className={'cardPic'}>
                                <img src={cardPic}/>
                            </div>
                            <p style={{fontSize: '14px', padding: '10px', lineHeight: '20px'}}>عنوان محصول عنوان محصول
                                عنوان محصول عنوان محصول
                                محصول</p>
                            <div className={'cardContent'}>
                                <div className={'rate'}>
                                    <span>4.6</span>
                                    <img src={stare} alt="star"/>
                                </div>
                                <div className={'buttonCard'}>
                                    <img src={shop} width={30}/>
                                    <p> مهراشاپ</p>
                                </div>
                            </div>
                            <div className={'discount'}>
                                <p>460,000</p>
                            </div>
                            <div className={'priceContent'}>
                                <div className={'addButton'}>+</div>
                                <p> 460,000 تومان</p>
                            </div>
                        </div>
                    </div>
                    <div className={'slider'}>
                        <div className={'sliderContent'}>
                            <div>
                                <Slider images={image}/>
                            </div>
                            <div className={'category'}>
                                <div style={{border: '2px solid #80AD01'}} className={'categoryItem'}>
                                    <img
                                        className={'item'}
                                        src={frame}
                                        width={60}
                                    />
                                    <p style={{color: '#80AD01'}}>مد و فشن </p>

                                </div>
                                <div className={'categoryItem'}>
                                    <img
                                        className={'item'}
                                        src={iconCarrier}
                                        width={60}
                                    />
                                    <p>زیبایی و سلامت </p>
                                </div>
                                <div className={'categoryItem'}>
                                    <img
                                        className={'item'}
                                        src={babikio}
                                        width={60}
                                    />
                                    <p>لوازم خانه</p>
                                </div>
                                <div className={'categoryItem'}>
                                    <img
                                        className={'item'}
                                        src={backpack}
                                        width={60}
                                    />
                                    <p>ورزش و سفر </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className={'productBtn'}>
                            مشاهده همه محصولات
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default App