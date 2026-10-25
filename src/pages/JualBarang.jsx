import { useNavigate } from 'react-router-dom'
import TambahBarang from '../components/TambahBarang'

function JualBarang({ onTambah }) {
  const navigate = useNavigate()

  function simpan(barangBaru) {
    onTambah(barangBaru)
    navigate('/barang')
  }

  return (
    <main className="container my-4">
      <h2 className="text-tradehub fw-bold">Jual Barang</h2>
      <p>Isi informasi barang yang ingin kamu jual.</p>
      <TambahBarang onTambah={simpan} />
    </main>
  )
}

export default JualBarang