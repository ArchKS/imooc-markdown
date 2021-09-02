import './App.css';
import useMousePosition from './hooks/useMousePosition'
function App() {
  let position = useMousePosition();
  return (
    <div className="App">
          {position.x},{position.y}
    </div>
  );
}

export default App;
