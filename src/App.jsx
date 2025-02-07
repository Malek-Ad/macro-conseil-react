import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CloudSecurity from './pages/CloudSecurity';
import Contact from './pages/Contact';
import Company from './pages/Company';
import Partners from './pages/Partners';
import Privacy from './pages/Privacy';
import Terms from './pages/TermsOfService';
import FAQs from './pages/FAQs';
import IncidentManagement from './pages/IncidentManagement';
import RiskAssessment from './pages/RiskAssessment';
import SecurityAudit from './pages/SecurityAudit';
import VulnerabilityManagement from './pages/VulnerabilityManagement';
import IoTSecurity from './pages/IoTSecurity';
import TunisianRegulations from './pages/TunisianRegulations';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cloud-security" element={<CloudSecurity />} />
          <Route path="/incident-management" element={<IncidentManagement />} />
          <Route path="/risk-assessment" element={<RiskAssessment />} />
          <Route path="/security-audit" element={<SecurityAudit />} />
          <Route path="/vulnerability-management" element={<VulnerabilityManagement />} />
          <Route path="/iot-ot-security" element={<IoTSecurity />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/tunisian-regulations" element={<TunisianRegulations />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
