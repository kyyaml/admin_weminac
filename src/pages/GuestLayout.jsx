import { Outlet } from "react-router-dom";

export default function GuestLayout() {
    return (
        <>
            <main className='log'>
                <div className="container">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    {/* End Logo */}


                                    <Outlet />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}
