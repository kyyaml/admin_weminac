import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TableLayanan() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/layanans`).then((res) => {
      console.log(res);
      setData(res.data.data);
    });
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Wait...";

    axios
      .delete(`http://localhost:8000/api/layanans/${id}`)
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

  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Tabel Layanan</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">Data</li>
              <li className="breadcrumb-item active">Layanan</li>
            </ol>
          </nav>
        </div>
        <div>
            <Link to="/layanan/tambah">
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
                  <h5 className="card-title">Tabel Layanan</h5>
                  {/* Default Table */}
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Icon</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th colSpan={2}>Aksi</th>
                        
                        </tr>
                      </thead>
                     
                      <tbody>
                      {data.map((item, index) => (
                        <tr key={index}>
                          <th scope="row">{index+1}</th>
                          <td><i className={item.icon}></i></td>
                          <td>{item.title}</td>
                          <td>{item.desc}</td>
                          <td>
                            <Link to={`/layanan/${item.id}/edit`} className="btn btn-warning" role="button">Update</Link>
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