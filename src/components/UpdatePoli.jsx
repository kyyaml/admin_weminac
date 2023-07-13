import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function UpdatePoli() {

    const navigate = useNavigate();

    const {id}= useParams();
    
    const [icon, setIcon] = useState("");

    const[message, setMessage]= useState('');

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
     

    const uploadProduct= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PATCH');
        formData.append('icon', icon);
        formData.append('title', inputs.title);
        formData.append('desc',inputs.desc);
        
        const response= await axios.post("http://127.0.0.1:8000/api/polis/"+id, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
        setMessage(response.data.message); //"message": "Product successfully updated.."
        console.log(response)
        alert("Data Poli Berhasil Di Update")
        setTimeout(()=>{
            navigate('/poli');
        }, 2000);
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        await uploadProduct();
    
     }

     const onOptionChange = e => {
        setIcon(e.target.value)
      }

      useEffect(() => {
        getpoli();
    }, []);

    function getpoli() {
        axios.get('http://127.0.0.1:8000/api/polis/'+id).then(function(response) {
            console.log(response);
            setInputs(response.data.data);
        });
    }


  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Update Poli</h1>
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
                  <h5 className="card-title">Update Data Poli</h5>
                  {/* Floating Labels Form */}
                  <form action="#" method="POST" onSubmit={handleSubmit} className="row g-3">
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
                          name="title"
                          placeholder="title"
                          onChange={handleChange}
                          value={inputs.title}
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
                          name="desc"
                          onChange={handleChange}
                          value={inputs.desc}
                        />
                        <label htmlFor="floatingTextarea">Deskripsi</label>
                      </div>
                    </div>
                    <div className="text-center">
                      <button  className="btn btn-primary" >
                        Submit
                      </button>
                    </div>
                  </form>
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
