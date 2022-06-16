import s from "./Header.module.css";

const Header = () => { 
    return (
        <div className={s.container}>
            <p className={s.text}>Портал оренди та прокату товарів та послуг</p>
            <button type="button" className={s.btn}> Здати в аренду</button>
            <button type="button" className={s.loginbtn}>Увійти</button>
        </div>
    )
}
export default Header;
