import logo from './logo.svg';
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from "./components/SentimentAnalysis";
import WebsiteVisitors from "./components/WebsiteVisitors";
import './App.css';

function App() {
  return (
    <div className='App-grid'>
      <div className= "grid box-1"><Sidebar/></div> 
      <div className="grid box-2"><Reviews/></div>
      <div className="grid box-3"><AverageRating/></div>
      <div className="grid box-4"><SentimentAnalysis/></div>
      <div className="grid box-5"><WebsiteVisitors/></div>
      <div className= "grid box-6" ></div>
    </div>
 
  );

}

export default App;
