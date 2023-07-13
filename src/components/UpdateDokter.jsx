import axios from "axios";
import { useState , useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


export default function UpdateDokter() {
    const navigate = useNavigate();

    const {id}=   useParams();
  
    const[message, setMessage]= useState('');

  
    const [inputs, setInputs] = useState([]);
    const [fileimage, setPhoto]= useState('');
  
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const uploadProduct= async()=>{
        const formData= new FormData();
        formData.append('_method', 'PATCH');
        formData.append('name', inputs.name);
        formData.append('role',inputs.role);
        formData.append('instagram',inputs.instagram);
        formData.append('image', fileimage);
        const response= await axios.post("http://127.0.0.1:8000/api/dokters/"+id, formData, {
            headers:{'Content-Type':"multipart/form-data"},
        } );
        setMessage(response.data.message); //"message": "Product successfully updated.."
        console.log(response)
        setTimeout(()=>{
            navigate('/dokter');
        }, 2000);
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
        await uploadProduct();
    
     }

     useEffect(() => {
        getdokter();
    }, []);
  
    function getdokter() {
        axios.get('http://127.0.0.1:8000/api/dokters/'+id).then(function(response) {
            console.log(response);
            setInputs(response.data.data);
        });
    }
  return (

  
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Update Dokter</h1>
        </div>
        {/* End Page Title */}
        <section className="section p-4">
          <div className="row"> 
            <div className="">
              <div className="card">
                <div className="card-body mb-4">
                  <h5 className="card-title">Update Data Dokter</h5>
                  {/* Floating Labels Form */}
                  <form onSubmit={handleSubmit} method="POST" action="#" className="row g-3">
                    <div className="col-md-6 col-lg-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="name"
                          value={inputs.name}
                          name="name" 
                          onChange={handleChange}
                        />
                        <label htmlFor="name">Nama</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          className="form-control"
                          placeholder="spesialis"
                          value={inputs.role}
                          name="role" 
                          onChange={handleChange}
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
                            value={inputs.instagram}
                            name="instagram" 
                            onChange={handleChange}
                          />
                          <label htmlFor="floatingCity">Instagram</label>
                        </div>
                      </div>
                    </div>
                    
                    
                      <div className="col-md-6 col-lg-12">                          
                          <label htmlFor="floatingCity">Foto Dokter</label>
                      </div> 
                      <img src={inputs.image} alt="" className="w-25"/>
                      <div className="col-12">
                      
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Foto"
                          name="image"
                          onChange={(e)=>setPhoto(e.target.files[0])}                    
                        />                 
                    </div> 
                    
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
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


