import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TableDoctors() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/dokters`).then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Wait...";

    axios
      .delete(`http://localhost:8000/api/dokters/${id}`)
      .then((res) => {
        alert(res.data.message);
        thisClicked.closest("tr").remove();
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 404) {
            alert(error.response.data.message);
            thisClicked.innerText = "Delete";
          }
          if (error.response.status === 500) {
            alert(error.response.data);
          }
        }
      });
    };

    const instagram = "instagram.com/"
    
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Tabel Dokter</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Data</li>
              <li className="breadcrumb-item active">Dokter</li>
            </ol>
          </nav>
        </div>
        <div>
            <Link to="/dokter/tambah">
                <div className="button-container">
            <button type="button" className="btn btn-primary text-right">Tambah</button>
            </div>
            </Link>
          </div>
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            <div className="">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Tabel Dokter</h5>
                  {/* Default Table */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Spesialis</th>
                        <th scope="col">Instagram</th>
                        <th scope="col">Gambar</th>
                        <th colSpan={2}>Aksi</th>
                        
                        </tr>
                      </thead>
                     
                      <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
                          <td>{item.name}</td>
                          <td>{item.role}</td>
                          <td><Link to={`https://instagram.com/${item.instagram}`} className="text-dark">{item.instagram}</Link> </td>
                          <td><img src={item.image} width={200} height={100} alt="" /></td>
                          <td>
                            <Link to={`/dokter/${item.id}/edit`} className="btn btn-warning" role="button">Update</Link>
                            <Link className="btn btn-danger" role="button" onClick={(e) => handleDelete(e, item.id)}>Delete</Link>
                          </td>
                         
                        </tr>
                        ))}
                    </tbody>
                    
                  </table>
                  {/* End Default Table Example */}
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
 </div>
 );
}