import { Route, Routes } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Agent/Header/Header";
import Footer from "../../components/Agent/Footer/Footer";
import React, { lazy, Suspense } from "react";
import "./Agent.scss";

const AcquireTicket = lazy(() =>
  import("../../components/Agent/AcquireTicket/AcquireTicket")
);
const ShareTicket = lazy(() =>
  import("../../components/Agent/ShareTicket/ShareTicket")
);
const StripeAcquisition = lazy(() =>
  import("../../components/Agent/StripeAcquisition/StripeAcquisition")
);
const PersonalDetails = lazy(() =>
  import("../../components/Agent/PersonalDetails/PersonalDetails")
);
const MySharings = lazy(() =>
  import("../../components/Agent/MySharings/MySharings")
);

function Agent() {
  return (
    <>
      <Header />
      <main className="name">
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col col-2">
                <Sidebar />
              </div>
              <div className="col col-10" style={{ backgroundColor: "white" }}>
                <Suspense fallback={<div>Loading...</div>}>
                  <Routes>
                    <Route path="/" element={<AcquireTicket />} />
                    <Route
                      path="/acquire-tickets"
                      element={<AcquireTicket />}
                    />
                    <Route path="/share-tickets" element={<ShareTicket />} />
                    <Route
                      path="/stripe-acquisition"
                      element={<StripeAcquisition />}
                    />
                    <Route
                      path="/personal-details"
                      element={<PersonalDetails />}
                    />
                    <Route path="/my-sharings" element={<MySharings />} />
                  </Routes>
                </Suspense>
                <Footer />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Agent;
