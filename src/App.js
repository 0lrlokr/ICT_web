import './App.css';
import { Marker } from 'react-kakao-maps';
import Map from './componenet/Map';
import Header from './componenet/Header';
import Info from './componenet/Info';


function App() {




  return (
    <div className="App">
      <Header />
      <Map></Map>
      <Info />
    </div>
  );
}

export default App;
