import './App.css';
import { Route, Routes } from 'react-router-dom';
import PublicNav from './components/NavBar/PublicNav';
import ScrollToTop from './routers/route/ScrollToTop';
import Footer from './components/Common/Footer';
import MainPage from './pages/MainPage/MainPage';
import RecordPage from './pages/RecordPage/RecordPage';
import CopyrightPage from './pages/CopyrightPage/CopyrightPage';
import HistoryPage from './pages/AllThatPage/HistoryPage';
import SooPrintPage from './pages/AllThatPage/SooPrintPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import ChipPage from './pages/AllThatPage/ChipPage';
import MailPage from './pages/AllThatPage/MailPage';
import MedalPage from './pages/AllThatPage/MedalPage';
import PhotowallPage from './pages/AllThatPage/PhotowallPage';
import MarazonPage from './pages/AllThatPage/MarazonPage';
import RecordPrintPage from './pages/RecordPage/RecordPrintPage';
import QRcodePage from './pages/QRcodePage/QRcodePage';

function App() {
  return (
    <div>
      <PublicNav/>
      <ScrollToTop/>
      <Routes>
        {/* 메인페이지 */}
        <Route path='/' element={<MainPage/>}/>
        {/* 올뎃마라톤 */}
        <Route path='/history' element={<HistoryPage/>}/>
        <Route path='/sooprint' element={<SooPrintPage/>}/>
        <Route path='/mail' element={<MailPage/>}/>
        <Route path='/marazon' element={<MarazonPage/>}/>
        <Route path='/photowall' element={<PhotowallPage/>}/>
        <Route path='/chip' element={<ChipPage/>}/>
        <Route path='/medal' element={<MedalPage/>}/>
        {/* 대회일정 */}
        <Route path='/schedule' element={<SchedulePage/>}/>
        {/* 기록조회 */}
        <Route path='/record' element={<RecordPage/>}/>
        <Route path='/recordprint/:compCode/:bibNum' element={<RecordPrintPage/>}/>
        {/* 대회등록 */}
        <Route path='/register' element={<RegisterPage/>}/>
        {/* 각인QR생성 */}
        <Route path='/qrcode' element={<QRcodePage/>}/>
        {/* 저작권 */}
        <Route path='/copyright' element={<CopyrightPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
