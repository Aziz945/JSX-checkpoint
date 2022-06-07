import './style.css'
import './App.css';
import mygenave from "./Genave.jpg"
import myvideo from "./Video.mp4"



function App() {
  return (
      <div className='App'>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Aziz Mlika</h1>
    <br />
    <img className='image' src="/lambo.jpg" alt='not found' />
    <br />
    <br></br>
    <img className='image' src={mygenave} alt ='myImage' />
  </div>

  {/* my video */}
  <video width={320} height={240} controls>
    <source src={myvideo} type="video/mp4" />
  </video>
        
    </div>
  );
}

export default App;





