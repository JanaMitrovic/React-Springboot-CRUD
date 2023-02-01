import './App.css';
import CustomersComponent from './components/CustomersComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AddCustomer from './components/AddCustomer';
import EditCustomer from './components/EditCustomer';
import ViewCustomer from './components/ViewCustomer';

function App() {
  return (

    <div className='App'>
      <Router>
        <HeaderComponent/>
          <Routes>
            <Route path='/' exact element = {<CustomersComponent/>}/>
            <Route path='/add-customer' element = {<AddCustomer/>}/>
            <Route path='/edit-customer/:id' element = {<EditCustomer/>}/>
            <Route path='/customer/:id' element = {<ViewCustomer/>}/>
          </Routes>
        <FooterComponent/>
      </Router>
    </div>

  );
}

export default App;
