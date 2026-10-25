import KartuBarang from './KartuBarang'

function DaftarBarang({ daftar, adaData }) {
  // Conditional rendering: daftar kosong
  if (daftar.length === 0) {
    return (
      <div className="alert alert-secondary text-center">
        {adaData ? 'Barang tidak ditemukan' : 'Belum ada data barang'}
      </div>
    )
  }

  return (
    <div className="row g-3">
      {daftar.map((barang) => (
        <div className="col-12 col-sm-6 col-lg-4" key={barang.id}>
          <KartuBarang barang={barang} />
        </div>
      ))}
    </div>
  )
}

export default DaftarBarang