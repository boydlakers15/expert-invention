import './index.css';

export default function Navbar() {
    return (

    <nav className="nav">
      <p className="section"><img className='img' src='https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png'></img>Hacker Clone</p>
      <ul>
        <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
      </ul>

    </nav>
    )
    

}

