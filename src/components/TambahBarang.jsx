import { useState } from 'react'

const formAwal = {
  nama: '',
  kategori: '',
  kondisi: '',
  harga: '',
  lokasi: '',
  status: 'Tersedia',
  deskripsi: '',
}

function Baris({ label, id, children }) {
  return (
    <div className="row mb-3">
      <label htmlFor={id} className="col-sm-3 col-form-label">{label}:</label>
      <div className="col-sm-9">{children}</div>
    </div>
  )
}

function TambahBarang({ onTambah }) {
  const [form, setForm] = useState(formAwal)
  const [foto, setFoto] = useState('')
  const [kunciFoto, setKunciFoto] = useState(0)
  const [pesan, setPesan] = useState('')

  // Satu handler untuk semua input (controlled component)
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleFoto(e) {
    const file = e.target.files[0]
    setFoto(file ? URL.createObjectURL(file) : '')
  }

  function handleReset() {
    setForm(formAwal)
    setFoto('')
    setPesan('')
    setKunciFoto(kunciFoto + 1)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (form.nama.trim() === '' || form.harga === '') {
      setPesan('Nama barang dan harga wajib diisi.')
      return
    }
    onTambah({
      ...form,
      nama: form.nama.trim(),
      harga: Number(form.harga),
      kategori: form.kategori || 'Lainnya',
      kondisi: form.kondisi || 'Baik',
      lokasi: form.lokasi || 'Telkom University',
      gambar: foto,
    })
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        {pesan && <div className="alert alert-danger">{pesan}</div>}
        <form onSubmit={handleSubmit}>
          <Baris label="Nama Barang" id="nama">
            <input type="text" className="form-control" id="nama" name="nama"
              value={form.nama} onChange={handleChange}
              placeholder="Contoh: Kalkulator Casio" />
          </Baris>
          <Baris label="Kategori" id="kategori">
            <select className="form-control" id="kategori" name="kategori"
              value={form.kategori} onChange={handleChange}>
              <option value="">Pilih Kategori</option>
              <option>Akademik</option>
              <option>Elektronik</option>
              <option>Fashion</option>
              <option>Peralatan Kos</option>
              <option>Olahraga</option>
              <option>Lainnya</option>
            </select>
          </Baris>
          <Baris label="Kondisi" id="kondisi">
            <select className="form-control" id="kondisi" name="kondisi"
              value={form.kondisi} onChange={handleChange}>
              <option value="">Pilih Kondisi</option>
              <option>Seperti Baru</option>
              <option>Sangat Baik</option>
              <option>Baik</option>
              <option>Cukup</option>
            </select>
          </Baris>
          <Baris label="Harga (Rp)" id="harga">
            <input type="number" min="0" className="form-control" id="harga" name="harga"
              value={form.harga} onChange={handleChange} placeholder="Contoh: 80000" />
          </Baris>
          <Baris label="Lokasi" id="lokasi">
            <input type="text" className="form-control" id="lokasi" name="lokasi"
              value={form.lokasi} onChange={handleChange}
              placeholder="Contoh: Telkom University" />
          </Baris>
          <Baris label="Status" id="status">
            <select className="form-control" id="status" name="status"
              value={form.status} onChange={handleChange}>
              <option>Tersedia</option>
              <option>Dipesan</option>
              <option>Terjual</option>
            </select>
          </Baris>
          <Baris label="Foto Barang" id="foto">
            <input type="file" className="form-control" id="foto" accept="image/*"
              key={kunciFoto} onChange={handleFoto} />
            {foto && <img src={foto} alt="Pratinjau" className="img-thumbnail mt-2" width="120" />}
          </Baris>
          <Baris label="Deskripsi" id="deskripsi">
            <textarea className="form-control" id="deskripsi" name="deskripsi" rows="5"
              value={form.deskripsi} onChange={handleChange}
              placeholder="Jelaskan kondisi barang..."></textarea>
          </Baris>
          <div className="row">
            <div className="col-sm-9 offset-sm-3">
              <button type="submit" className="btn btn-success me-2">Publikasikan</button>
              <button type="button" className="btn btn-secondary" onClick={handleReset}>Reset</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TambahBarang