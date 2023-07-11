import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareTwitter} from "react-icons/fa6";
import { FaLinkedin} from "react-icons/fa6";

function Main(){
  return (
    <>
      <section className="section__01">
        <div className="col__rigth">
          <h1>We boost growth for your statup business</h1>
          <p>Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment</p>
          <a className="link" href="/">Get Starter</a>
        </div>
        <div className="col__left">
          <img src="/src/img/img.png" alt="" />
        </div>
      </section>
      <section className="section__02">
        <div className="row__01">
          <p>SERVICE</p>
          <h2>Our Vison & Our Goal</h2>
        </div>
        <div className="row__02">
          <div className="card">
            <img src="/src/img/vector.svg" alt="" />
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</p>
            <a href="/">Learn More</a>
          </div>
          <div className="card">
            <img src="/src/img/video.svg" alt="" />
            <h3>Video Editing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</p>
            <a href="/">Learn More</a>
          </div>
          <div className="card">
            <img src="/src/img/Chart.svg" alt="" />
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</p>
            <a href="/">Learn More</a>
          </div>
        </div>
      </section>
      <section className="section__03">
        <div className="col__rigth">
          <h4>Many Blocks and Components</h4>
          <p>Startup Framework contains components and complex blocks which can easily be integrated into almost any design.</p>
          <a href="/">Explore</a>
        </div>
        <div className="col__left">
          <img src="./src/img/Video.png" alt="" />
        </div>
      </section>
      <section className="section__04">
        <div className="row__01">
          <p>TESTMONIALS</p>
          <h4>What Clients say about us</h4>
        </div>
        <div className="row__02">
          <div className="col__left">
            <div className="card">
              <div className="perfil">
                <img src="./src/img/Mask.png" alt="" />
              </div>
              <div className="description">
                <p>Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</p>
                <span>Rayhan Curran</span>
              </div>
            </div>
            <div className="card">
              <div className="perfil">
              <img src="./src/img/Mask1.png" alt="" />
              </div>
              <div className="description">
                <p>As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website</p>
                <span>Kayley Frame</span>
              </div>
            </div>
          </div>
          <div className="col__rigth">
            <div className="card">
              <div className="perfil">
              <img src="./src/img/Mask3.png" alt="" />
              </div>
              <div className="description">
                <p>I’ve built my website with Startup just in one day, and it was ready-to-go. </p>
                <span>Allan Kim</span>
              </div>
            </div>
            <div className="card">
              <div className="perfil">
              <img src="./src/img/Mask2.png" alt="" />
              </div>
              <div className="description">
                <p>The most important part of the Startup Framework is the samples</p>
                <span>Gene Whitfield</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section__05">
        <div className="row__01">
            <p>OUR TEAM</p>
            <h6>Meet The Team</h6>
        </div>
        <div className="row__02">
          <div className="card">
            <img src="/src/img/team01.png" alt="" />
            <h6>Vanessa Laird</h6>
            <p>UI Designer</p>
            <div className="social">
              <a href="/"><FaSquareTwitter className="icon"/></a>
              <a href="/"><FaSquareInstagram className="icon"/></a>
              <a href="/"><FaLinkedin className="icon"/></a>
            </div>
          </div>
          <div className="card">
            <img src="/src/img/team02.png" alt="" />
            <h6>Mason Campbell</h6>
            <p>UI Designer</p>
            <div className="social">
              <a href="/"><FaSquareTwitter className="icon"/></a>
              <a href="/"><FaSquareInstagram className="icon"/></a>
              <a href="/"><FaLinkedin className="icon"/></a>
            </div>
          </div>
          <div className="card">
            <img src="/src/img/team03.png" alt="" />
            <h6>Irea Evans</h6>
            <p>Client Manager</p>
            <div className="social">
              <a href="/"><FaSquareTwitter className="icon"/></a>
              <a href="/"><FaSquareInstagram className="icon"/></a>
              <a href="/"><FaLinkedin className="icon"/></a>
            </div>
          </div>
        </div>
      </section>
      <section className="section__06">
          <div className="row__01">
            <p>Contato</p>
            <h6>Subscribe Our Newsleter</h6>
          </div>
          <div className="row__02">
              <img src="/src/img/envelope.svg" alt="" />
            <div className="inputs">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <input className="input" type="text" placeholder="Your E-mail here.." required />
              <button className="btn">Subscribe</button>
            </div>
          </div>
      </section>
    </>
  )
}

export default Main