import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import CostCalculator from '@/pages/CostCalculator';
import BusinessSetup from '@/pages/BusinessSetup';
import Services from '@/pages/Services';
import Mainland from '@/pages/Mainland';
import FinancialCentre from '@/pages/FinancialCentre';
import FreeZone from '@/pages/FreeZone';
import Offshore from '@/pages/Offshore';
import Liquidation from '@/pages/Liquidation';
import BankAccount from '@/pages/BankAccount';
import Immigration from '@/pages/Immigration';
import TradeLicense from '@/pages/TradeLicense';
import GoldenVisa from '@/pages/GoldenVisa';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/business-setup" element={<BusinessSetup />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mainland" element={<Mainland />} />
          <Route path="/financial-centre" element={<FinancialCentre />} />
          <Route path="/free-zone" element={<FreeZone />} />
          <Route path="/offshore" element={<Offshore />} />
          <Route path="/services/liquidation" element={<Liquidation />} />
          <Route path="/services/bank-account" element={<BankAccount />} />
          <Route path="/services/immigration" element={<Immigration />} />
          <Route path="/services/trade-license" element={<TradeLicense />} />
          <Route path="/services/golden-visa" element={<GoldenVisa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
