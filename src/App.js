import logo from './logo.svg';
import './App.css';
import PageView from './live/PageView';
import { BrowserRouter, Router, Route, Switch, Link,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
				<Routes>
          <Route path='/' element={<PageView />}></Route>

          <Route path="/mainpage" element={<PageView />}></Route>
					<Route path="/firelive" element={<PageView />}></Route>
          <Route path='/firelive/:key1/:key2' element={<PageView />}></Route>

					<Route path="*" element={<PageView />}></Route>
          
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
