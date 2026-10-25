import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const warnaStatus = {
  Tersedia: 'bg-success',
  Dipesan: 'bg-warning text-dark',
  Terjual: 'bg-danger',
}

function DetailBarang({ barang, onHapus }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [wishlist, setWishlist] = useState(false)
  const item = barang.find((b) => String(b.id) === id)

  if (!item) {
    return (
      <main className="container my-4">
        <div className="alert alert-secondary">Barang tidak ditemukan.</div>
        <Link to="/barang">&larr; Kembali ke Daftar Barang</Link>
      </main>
    )
  }

  function hapus() {
    if (window.confirm('Hapus barang ini?')) {
      onHapus(item.id)
      navigate('/barang')
    }
  }

  return (
    <main className="container my-4">
      <h2 className="text-tradehub fw-bold">{item.nama}</h2>
      <p>Diposting oleh {item.penjual} pada {item.tanggal}.</p>
      <div className="row g-4">
        <div className="col-12 col-md-5">
          {item.gambar ? (
            <img src={item.gambar} className="img-fluid rounded shadow-sm" alt={item.nama} />
          ) : (
            <div className="gambar-kosong rounded"><i className="bi bi-image"></i></div>
          )}
        </div>
        <div className="col-12 col-md-7">
          <table className="table">
            <tbody>
              <tr><th scope="row" className="w-50">Kategori</th><td>{item.kategori}</td></tr>
              <tr><th scope="row">Kondisi</th><td>{item.kondisi}</td></tr>
              <tr><th scope="row">Harga</th><td>Rp{item.harga.toLocaleString('id-ID')}</td></tr>
              <tr><th scope="row">Lokasi</th><td>{item.lokasi}</td></tr>
              <tr><th scope="row">Status</th><td><span className={`badge ${warnaStatus[item.status]}`}>{item.status}</span></td></tr>
            </tbody>
          </table>
          <h5 className="text-tradehub fw-bold">Deskripsi</h5>
          <p>{item.deskripsi || 'Belum ada deskripsi.'}</p>
          <div className="alert alert-info">
            <strong>Penjual:</strong> {item.penjual} &mdash; {item.prodi}, {item.lokasi}
          </div>
          <button type="button" className="btn btn-primary me-2">Hubungi Penjual</button>
          <button type="button" className={`btn me-2 ${wishlist ? 'btn-danger' : 'btn-secondary'}`}
            onClick={() => setWishlist(!wishlist)}>
            <i className={`bi ${wishlist ? 'bi-heart-fill' : 'bi-heart'}`}></i>{' '}
            {wishlist ? 'Ada di Wishlist' : 'Tambah ke Wishlist'}
          </button>
          <button type="button" className="btn btn-outline-danger" onClick={hapus}>
            <i className="bi bi-trash"></i> Hapus Barang
          </button>
        </div>
      </div>
      <Link to="/barang" className="btn btn-link mt-3">&larr; Kembali ke Daftar Barang</Link>
    </main>
  )
}

export default DetailBarang