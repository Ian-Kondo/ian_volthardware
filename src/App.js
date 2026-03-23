import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';
import AddProductComponent from './components/AddProductComponent';
import MakePaymentComponent from './components/MakePaymentComponent';
import GetProductComponent from './components/GetProductComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="App">
          <header className="App-header">
            <h1>Ian_Volthardware</h1>
            <NavbarComponent />



          </header>
          <Routes>
            <Route path='/' element={<GetProductComponent />} />
            <Route path='/addproduct' element={<AddProductComponent />} />
            <Route path='/signin' element={<SignInComponent />} />
            <Route path='/signup' element={<SignUpComponent />} />
            <Route path='/makepayment' element={<MakePaymentComponent />} />
n
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
