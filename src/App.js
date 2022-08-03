//import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">
      <header className="App-header">
          <title>Rat Stack</title>
        <img src= "https://bigrat.monster/media/bigrat.png" className="App-logo" alt="logo" />


        <div className="Rat-form" >
            <form action="https://duckduckgo.com/" method="get">
                <input type="text" placeholder="Search the Fur" className="Search-logo" name="q"/>
                <input type="submit" value="Submit" />
            </form>

        </div>



      </header>
    </div>
  );
}



export default App;
