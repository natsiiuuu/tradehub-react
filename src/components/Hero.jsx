import { Link } from 'react-router-dom'

function Hero({ pencarian, onCari }) {
  return (
    <section className="hero text-white py-5">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-7">
            <span className="badge bg-warning text-dark mb-2">Khusus Mahasiswa</span>
            <h1 className="display-5 fw-bold">Jual beli barang bekas antar mahasiswa</h1>
            <p className="lead mb-4">
              Cari buku, elektronik, hingga perlengkapan kos dengan harga bersahabat.
            </p>
            <div className="row g-2">
              <div className="col-12 col-sm-8">
                <input type="search" className="form-control form-control-lg"
                  placeholder="Cari barang..." value={pencarian}
                  onChange={(e) => onCari(e.target.value)} />
              </div>
              <div className="col-12 col-sm-4">
                <Link to="/barang" className="btn btn-warning btn-lg w-100 fw-bold">
                  <i className="bi bi-search"></i> Cari
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 text-lg-end">
            <Link to="/jual" className="btn btn-outline-light btn-lg">
              <i className="bi bi-plus-circle"></i> Jual Barangmu
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero