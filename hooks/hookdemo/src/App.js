import './App.css';
import FavoriteColor from './Components/FavoriteColor';
import Book from './Components/Books';
import Timer from './Components/Timer';
import Counter from './Components/Counter';
import TestRef from './Components/TestRef';
import Focus from './Components/Focus';
function App() {
  return (
    <div className="App">
       <h1>React hook Tutorial</h1>
       <hr/>
       <FavoriteColor/>
       <hr/>
       <Book/>
       <Book name="C Programming" author="Y K" price="300" img="https://m.media-amazon.com/images/I/412GfwQATXL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"/>
       <Book name="C Programming" author="Y K" price="300" img="https://m.media-amazon.com/images/I/412GfwQATXL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"/>
       <Book name="C Programming" author="Y K" price="300" img="https://m.media-amazon.com/images/I/412GfwQATXL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"/>
       <Book/>
       <Timer/>
       <Counter/>
       <hr/>
       <TestRef/>
       <Focus/>
       <br/>
       <br/>
    </div>
  );
}

export default App;
