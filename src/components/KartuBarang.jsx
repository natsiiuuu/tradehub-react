import { Link } from 'react-router-dom'

const warnaStatus = {
  Tersedia: 'bg-success',
  Dipesan: 'bg-warning text-dark',
  Terjual: 'bg-danger',
}

function KartuBarang({ barang }) {
  const { id, nama, kategori, kondisi, harga, lokasi, status, gambar } = barang

  return (
    <div className="card item-card h-100">
      <div className="position-relative">
        {gambar ? (
          <img src={gambar} className="card-img-top" alt={nama} />
        ) : (
          <div className="gambar-kosong"><i className="bi bi-image"></i></div>
        )}
        <span className={`badge ${warnaStatus[status]} status-badge`}>{status}</span>
      </div>
      <div className="card-body">
        <small className="text-muted">{kategori} &bull; {kondisi}</small>
        <h5 className="card-title mt-1">{nama}</h5>
        <small className="text-muted d-block mb-1">
          <i className="bi bi-geo-alt"></i> {lokasi}
        </small>
        <p className="harga mb-0">Rp{harga.toLocaleString('id-ID')}</p>
      </div>
      <div className="card-footer bg-white border-0 pt-0">
        <Link to={`/barang/${id}`}
          className={`btn btn-sm w-100 ${status === 'Terjual' ? 'btn-secondary' : 'btn-primary'}`}>
          Lihat Detail
        </Link>
      </div>
    </div>
  )
}

export default KartuBarang