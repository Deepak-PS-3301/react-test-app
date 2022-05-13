import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  return (
    <div className="container">
        <div className="row">
            <div className="col col-12 sm-col-12 md-col-12 lg-col-12 xl-col-12 xxl-col-12">
                <div className="row g-3">
                    <div className="col col col-12 sm-col-12 md-col-12 lg-col-12 xl-col-12 xxl-col-12">
                        <label for="">Username</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="col col col-12 sm-col-12 md-col-12 lg-col-12 xl-col-12 xxl-col-12">
                        <label for="">Password</label>
                        <input className="form-control" type="password"/>
                    </div>
                    <div className="col col col-12 sm-col-12 md-col-12 lg-col-12 xl-col-12 xxl-col-12">
                        <button className="btn btn-success">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
