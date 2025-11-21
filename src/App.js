import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import InfoBar from './components/InfoBar';
import Footer from './components/Footer';
import Home from './pages/HomePage/Home';
import LoanCosts from './pages/Costs/Costs';
import ApplyNow from './pages/ApplyNow/ApplyNow';
import ContactUs from './pages/ContactUs/ContactUs';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ComplaintsManagementPolicy from './pages/Legal/Complaints Management Policy';
import CreditReportingStatement from './pages/Legal/Credit Reporting Statement';
import PrivacyStatement from './pages/Legal/PrivacyStatement';
import TargetMarket from './pages/Legal/TargetMarketDetermination';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-200">
      <Header />
      <InfoBar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-now" element={<ApplyNow />} />
          <Route path="/costs" element={<LoanCosts />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/legal/privacy-and-credit" element={<ComplaintsManagementPolicy />} />
          <Route path="/legal/credit-information" element={<CreditReportingStatement />} />
          <Route path="/legal/website-privacy" element={<PrivacyStatement />} />
          <Route path="/legal/target-market" element={<TargetMarket />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
