import DaftarBarang from '../components/DaftarBarang'

function SemuaBarang({ pencarian, onCari, daftar, adaData }) {
  return (
    <main className="container my-4">
      <h2 className="text-tradehub fw-bold mb-0">Daftar Barang</h2>
      <small className="text-muted d-block mb-3">Menampilkan {daftar.length} barang</small>
      <input type="search" className="form-control mb-4" placeholder="Cari nama barang"
        value={pencarian} onChange={(e) => onCari(e.target.value)} />
      <DaftarBarang daftar={daftar} adaData={adaData} />
    </main>
  )
}

export default SemuaBarang