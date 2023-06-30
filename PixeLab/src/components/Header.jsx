
function Header(){
  return(
    < >
      <header className="header__container">
        <div className="navBrand">
          <img className="logo" src="src/img/Logo.svg" alt="" />
        </div>
        <nav className="navBar">
          <ul className="navBar__list">
            <li className="navBar__links"><a className="link" href="/">Home</a></li>
            <li className="navBar__links"><a className="link" href="/">About Us</a></li>
            <li className="navBar__links"><a className="link" href="/">Our app</a></li>
            <li className="navBar__links"><a className="link" href="/">Contact</a></li>
          </ul>
        </nav>
        <div className="navBar__btn">
          <a className="link active" href="/">Log in</a>
          <a className="link" href="/">Sign up</a>
        </div>
      </header>
    </>
  )
}

export default Header