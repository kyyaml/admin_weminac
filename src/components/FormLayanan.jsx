import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function FormLayanan() {

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate()

  const onOptionChange = e => {
    setIcon(e.target.value)
  }

  function handleApi() {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('icon', icon)
    formData.append('desc', desc)
    axios.post('http://127.0.0.1:8000/api/layanans', formData).then((res) => {
      console.log(res)
      navigate("/layanan");
    })
  }

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Tambah Layanan</h1>
        </div>
        <div className="iconslist">
          <div className="icon">
            <i className="fas fa-bacterium" />
            <div className="label">bacterium</div>
          </div>
          <div className="icon">
            <i className="fas fa-heartbeat" />
            <div className="label">heartbeat</div>
          </div>
          <div className="icon">
            <i className="fas fa-procedures" />
            <div className="label">procedures</div>
          </div>
          <div className="icon">
            <i className="fas fa-user-md" />
            <div className="label">user</div>
          </div>
          <div className="icon">
            <i className="fas fa-wheelchair" />
            <div className="label">wheelchair</div>
          </div>
          <div className="icon">
            <i className="fas fa-shield-virus" />
            <div className="label">shield</div>
          </div>
          <div className="icon">
            <i className="fas fa-file-medical-alt" />
            <div className="label">file-medical</div>
          </div>
          <div className="icon">
            <i className="fas fa-hospital" />
            <div className="label">hospital</div>
          </div>
          <div className="icon">
            <i className="fas fa-ambulance" />
            <div className="label">ambulance</div>
          </div>
          <div className="icon">
            <i className="fas fa-laptop-medical" />
            <div className="label">laptop-medical</div>
          </div>
          <div className="icon">
            <i className="fas fa-pills" />
            <div className="label">pills</div>
          </div>
          <div className="icon">
            <i className="fas fa-notes-medical" />
            <div className="label">notes-medical</div>
          </div>
          <div className="icon">
            <i className="fas fa-thermometer" />
            <div className="label">thermometer</div>
          </div>
          <div className="icon">
            <i className="fas fa-dna" />
            <div className="label">dna</div>
          </div>
          <div className="icon">
            <i className="fas fa-flask" />
            <div className="label">flask</div>
          </div>
        </div>
        {/* End Page Title */}
        <section className="section p-4">
          <div className="row">
            <div className="">
              <div className="card">
                <div className="card-body mb-4">
                  <h5 className="card-title">Tambah Data Layanan</h5>
                  {/* Floating Labels Form */}
                  <div className="row g-3">
                    <div className="row mb-3">
                      <div className="col-sm-10">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                          onChange={onOptionChange}
                        >
                          <option>Icon</option>
                          <option value="fas fa-bacterium" selected={icon === "fas fa-bacterium"}>bacterium</option>
                          <option value="fas fa-heartbeat" selected={icon === "fas fa-heartbeat"}>heartbeat</option>
                          <option value="fas fa-procedures" selected={icon === "fas fa-procedures"}>procedures</option>
                          <option value="fas fa-user" selected={icon === "fas fa-user"}>user</option>
                          <option value="fas fa-wheelchair" selected={icon === "fas fa-wheelchair"}>wheelchair</option>
                          <option value="fas fa-shield" selected={icon === "fas fa-shield"}>shield</option>
                          <option value="fas fa-file-medical" selected={icon === "fas fa-file-medical"}>file-medical</option>
                          <option value="fas fa-hospital" selected={icon === "fas fa-hospital"}>hospital</option>
                          <option value="fas fa-ambulance" selected={icon === "fas fa-ambulance"}>ambulance</option>
                          <option value="fas fa-laptop-medical" selected={icon === "fas fa-laptop-medical"}>laptop-medical</option>
                          <option value="fas fa-pills" selected={icon === "fas fa-pills"}>pills</option>
                          <option value="fas fa-notes-medical" selected={icon === "fas fa-notes-medical"}>notes-medical</option>
                          <option value="fas fa-thermometer" selected={icon === "fas fa-thermometer"}>thermometer</option>
                          <option value="fas fa-dna" selected={icon === "fas fa-dna"}>dna</option>
                          <option value="fas fa-flask" selected={icon === "fas fa-flask"}>flask</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          placeholder="title"
                          onChange={(event) => {
                            setTitle(event.target.value);
                          }}
                          value={title}
                        />
                        <label htmlFor="title">Title</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Address"
                          id="floatingTextarea"
                          onChange={(event) => {
                            setDesc(event.target.value);
                          }}
                          value={desc}
                          style={{ height: 100 }}
                        />
                        <label htmlFor="floatingTextarea">Deskripsi</label>
                      </div>
                    </div>
                    <div className="text-center">
                      <button onClick={handleApi} className="btn btn-primary" >
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

