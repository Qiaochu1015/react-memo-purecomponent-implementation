import './App.css';
import CarApp from './components/implementations/CarApp';
import CarAppWithPureComponent from './components/implementations/pureComponent/CarAppWithPureComponent';
import CarAppWithMemo from './components/implementations/memo/CarAppWithMemo';
import ImmutableState from './components/ImmutableState';

function App() {
  return (
    <div className="App">
      <CarApp />
      <CarAppWithPureComponent />
      <CarAppWithMemo />
      <ImmutableState />
    </div>
  );
}

export default App;
