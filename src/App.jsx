import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Beranda from './pages/Beranda'
import SemuaBarang from './pages/SemuaBarang'
import DetailBarang from './pages/DetailBarang'
import JualBarang from './pages/JualBarang'

const dataAwal = [
  { id: 1, nama: 'Kalkulator Casio FX-991ES Plus', kategori: 'Akademik', kondisi: 'Bekas - Baik', harga: 80000, lokasi: 'Telkom University', status: 'Tersedia', gambar: '/images/kalkulator.jpg', deskripsi: 'Kalkulator dalam kondisi baik dan berfungsi normal. Ada sedikit goresan pada bagian luar akibat pemakaian.', penjual: 'Fattan', prodi: 'Rekayasa Perangkat Lunak', tanggal: '27 September 2026' },
  { id: 2, nama: 'Headset Gaming', kategori: 'Elektronik', kondisi: 'Bekas - Sangat Baik', harga: 150000, lokasi: 'Dayeuhkolot', status: 'Dipesan', gambar: '/images/headset.jpg', deskripsi: 'Headset gaming lengkap dengan kotak dan kabel, suara masih jernih.', penjual: 'Fattan', prodi: 'Rekayasa Perangkat Lunak', tanggal: '28 September 2026' },
  { id: 3, nama: 'Jaket Hoodie', kategori: 'Fashion', kondisi: 'Bekas - Baik', harga: 100000, lokasi: 'Buah Batu', status: 'Terjual', gambar: '/images/jaket.jpg', deskripsi: 'Jaket hoodie hitam ukuran L, bahan tebal dan nyaman.', penjual: 'Fattan', prodi: 'Rekayasa Perangkat Lunak', tanggal: '29 September 2026' },
]

function App() {
  // State utama: daftar barang, kata kunci pencarian, dan kategori terpilih
  const [barang, setBarang] = useState(dataAwal)
  const [pencarian, setPencarian] = useState('')
  const [kategoriAktif, setKategoriAktif] = useState('')

  function tambahBarang(barangBaru) {
    const tanggal = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
    setBarang([
      { ...barangBaru, id: Date.now(), penjual: 'Fattan', prodi: 'Rekayasa Perangkat Lunak', tanggal },
      ...barang,
    ])
  }

  function hapusBarang(id) {
    setBarang(barang.filter((item) => item.id !== id))
  }

  const barangTampil = barang.filter(
    (item) =>
      item.nama.toLowerCase().includes(pencarian.toLowerCase()) &&
      (kategoriAktif === '' || item.kategori === kategoriAktif)
  )

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Beranda pencarian={pencarian} onCari={setPencarian}
            kategoriAktif={kategoriAktif} onPilihKategori={setKategoriAktif}
            daftar={barangTampil} adaData={barang.length > 0} />
        } />
        <Route path="/barang" element={
          <SemuaBarang pencarian={pencarian} onCari={setPencarian}
            daftar={barangTampil} adaData={barang.length > 0} />
        } />
        <Route path="/barang/:id" element={<DetailBarang barang={barang} onHapus={hapusBarang} />} />
        <Route path="/jual" element={<JualBarang onTambah={tambahBarang} />} />
      </Routes>
      <footer className="bg-tradehub text-white text-center py-3 mt-4">
        <p className="mb-0">&copy; 2026 TradeHub - Forum Jual Beli Mahasiswa</p>
      </footer>
    </>
  )
}

export default App