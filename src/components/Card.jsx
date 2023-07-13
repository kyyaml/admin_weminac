import axios from "axios";
import { useEffect, useState } from "react";

export default function Card() {

  const [totalPoli, setTotalPoli] = useState(0);
  const [totalLayanan, setTotalLayanan] = useState(0);
  const [totalDokter, setTotalDokter] = useState(0);

  useEffect(() => {
    fetchPoli();
    fetchLayanan();
    fetchDokter();

  }, []);

  const fetchDokter = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/dokters'); // URL endpoint Anda
      const data = response.data.data;

      setTotalDokter(data.length);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  const fetchPoli = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/polis'); // URL endpoint Anda
      const data = response.data.data;

      setTotalPoli(data.length);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  const fetchLayanan = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/layanans'); // URL endpoint Anda
      const data = response.data.data;

      setTotalLayanan(data.length);
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  return (
    <div>
  <main id="main" className="main">
    <section className="section dashboard">
      <div className="row">
  <div className="col-xl-4 col-md-6">
    <div className="card info-card sales-card">
      <div className="card-body">
        <h5 className="card-title">Dokter <span></span></h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
          <i className="fas fa-stethoscope"></i>
          </div>
          <div className="ps-3">
            <h6>{totalDokter}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>{/* End Dokter Card */}
  {/* Poli Card */}
  <div className="col-xl-4 col-md-6">
    <div className="card info-card revenue-card">
      <div className="card-body">
        <h5 className="card-title">Poli <span></span></h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
          <i className="fas fa-hospital-user"></i>
          </div>
          <div className="ps-3">
            <h6>{totalPoli}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>{/* End Poli Card */}
  {/* Layanan Card */}
  <div className="col-xl-4 col-md-6">
    <div className="card info-card customers-card">
      <div className="card-body">
        <h5 className="card-title">Layanan <span></span></h5>
        <div className="d-flex align-items-center">
          <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
          <i className="fas fa-hand-holding-medical"></i>
          </div>
          <div className="ps-3">
            <h6>{totalLayanan}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>{/* End Layanan Card */}
</div>
    </section>
  </main>
</div>

  )
}
