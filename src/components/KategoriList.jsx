const daftarKategori = [
  { nama: 'Akademik', ikon: 'bi-book' },
  { nama: 'Elektronik', ikon: 'bi-headset' },
  { nama: 'Fashion', ikon: 'bi-handbag' },
  { nama: 'Peralatan Kos', ikon: 'bi-house-door' },
  { nama: 'Olahraga', ikon: 'bi-dribbble' },
  { nama: 'Lainnya', ikon: 'bi-three-dots' },
]

function KategoriList({ aktif, onPilih }) {
  return (
    <div className="row row-cols-3 row-cols-md-6 g-2 mb-4 text-center">
      {daftarKategori.map((kategori) => (
        <div className="col" key={kategori.nama}>
          <button type="button"
            className={`kategori-tile w-100 border-0 ${aktif === kategori.nama ? 'aktif' : ''}`}
            onClick={() => onPilih(aktif === kategori.nama ? '' : kategori.nama)}>
            <i className={`bi ${kategori.ikon}`}></i>
            <span>{kategori.nama}</span>
          </button>
        </div>
      ))}
    </div>
  )
}

export default KategoriList