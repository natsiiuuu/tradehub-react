import { Link, NavLink } from 'react-router-dom'

const kelasLink = ({ isActive }) => 'nav-link' + (isActive ? ' active' : '')

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-tradehub">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">TradeHub</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#menuUtama" aria-controls="menuUtama"
          aria-expanded="false" aria-label="Buka menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menuUtama">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><NavLink className={kelasLink} to="/" end>Beranda</NavLink></li>
            <li className="nav-item"><NavLink className={kelasLink} to="/barang">Daftar Barang</NavLink></li>
            <li className="nav-item"><NavLink className={kelasLink} to="/jual">Jual Barang</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar