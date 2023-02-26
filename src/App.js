import './App.css';
import { BrowserRouter, Router, Route, Switch, Link,Routes } from 'react-router-dom';

import FreeStudy from './FootWeek01/FreeStudy'
import MainPage from './FootWeek01/MainPage';
import FireLive from './FootWeek01/FireLive';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
          <Route path='/' element={<FreeStudy />}></Route>

          <Route path="/mainpage" element={<MainPage />}></Route>
					<Route path="/firelive" element={<FireLive />}></Route>
          <Route path='/firelive/:key1/:key2' element={<FireLive />}></Route>

					<Route path="*" element={<FreeStudy />}></Route>
          
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
