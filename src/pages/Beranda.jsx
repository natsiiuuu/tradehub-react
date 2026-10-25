import Hero from '../components/Hero'
import KategoriList from '../components/KategoriList'
import DaftarBarang from '../components/DaftarBarang'

function Beranda({ pencarian, onCari, kategoriAktif, onPilihKategori, daftar, adaData }) {
  return (
    <>
      <Hero pencarian={pencarian} onCari={onCari} />
      <main className="container my-4">
        <h4 className="text-tradehub fw-bold mb-3">Kategori</h4>
        <KategoriList aktif={kategoriAktif} onPilih={onPilihKategori} />
        <h4 className="text-tradehub fw-bold mb-3">Barang Terbaru</h4>
        <DaftarBarang daftar={daftar} adaData={adaData} />
      </main>
    </>
  )
}

export default Beranda