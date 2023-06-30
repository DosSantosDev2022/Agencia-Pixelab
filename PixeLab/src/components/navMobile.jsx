

function navMobile (){
  return (
    <>
      <nav className="navBar__mobile" id='navBarMobile'>
        <ul className="navBar__list">
          <li className="navBar__links"><a className="link" href="/">Home</a></li>
          <li className="navBar__links"><a className="link" href="/">About Us</a></li>
          <li className="navBar__links"><a className="link" href="/">Our app</a></li>
          <li className="navBar__links"><a className="link" href="/">Contact</a></li>
        </ul>
      </nav>
      <div className=''>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    
    </>
  );
}

export default navMobile

