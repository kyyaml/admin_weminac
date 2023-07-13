import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function FormDokter() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [instagram, setInstagram] = useState("");
  const [image, setImage] = useState('');

  const navigate = useNavigate()

  function handleImage(e) {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  function handleApi() {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('role', role)
    formData.append('instagram', instagram)
    formData.append('image', image)
    axios.post('http://127.0.0.1:8000/api/dokters', formData).then((res) => {
      console.log(res)
      navigate("/dokter");
    })
  }

  return (

  
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Tambah Dokter</h1>
        </div>
        {/* End Page Title */}
        <section className="section p-4">
          <div className="row">
            <div className="">
              <div className="card">
                <div className="card-body mb-4">
                  <h5 className="card-title">Tambah Data Dokter</h5>
                  {/* Floating Labels Form */}
                  <div className="row g-3">
                    <div className="col-md-6 col-lg-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          name="name"
                          onChange={(event) => {
                            setName(event.target.value);
                          }}
                          value={name}
                        />
                        <label htmlFor="title">Nama</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          placeholder="spesialis"
                          name="role"
                          onChange={(event) => {
                            setRole(event.target.value);
                          }}
                          value={role}
                        />
                        <label htmlFor="floatingTextarea">Spesialis</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="col-md-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="floatingCity"
                            placeholder="Instagram"
                            name="name"
                            onChange={(event) => {
                              setInstagram(event.target.value);
                            }}
                            value={instagram}
                          />
                          <label htmlFor="floatingCity">Instagram</label>
                        </div>
                      </div>
                    </div>
                    
                    
                      <div className="col-md-6 col-lg-12">                          
                          <label htmlFor="floatingCity">Foto Dokter</label>
                      </div> 
                      <div className="col-12">
                      
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Foto"
                          name="image"
                          onChange={handleImage}                      
                        />                 
                    </div> 
                    
                    <div className="text-center">
                      <button type="submit" onClick={handleApi} className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                  {/* End floating Labels Form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default FormDokter;
