import './App.css';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="App">

      {/** Sidebar component*/}
      <Sidebar />

      {/** Feed component */}
      <Feed />

      {/** Widgets component */}
      <Widgets />
    </div>
  );
}

export default App;