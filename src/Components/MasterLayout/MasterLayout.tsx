
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom';

export default function MasterLayout() {
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-md-3">sidebar</div>
        <div className="col-md-9">
          <NavBar/>
          <Outlet/>

        </div>
      </div>
      
   
    
    </div>
  )
}
