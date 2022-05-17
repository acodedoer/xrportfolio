import './App.css';
import Gallery from './Components/Gallery.js';

function App() {
  return (
    <div className="App" style={{width:"100vw",display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{width:"98%",display:"flex", flexDirection:"row", justifyContent:"left", alignItems:"center"}} >
        <div style={{textAlign:"right"}}>
          <h1>Hi <span>&#128075;&#127997;</span></h1>
          <h1>I'm Misbahu</h1>
        </div>
        <div style={{width:"0.5em", margin:"0.5em", minHeight:"100px", backgroundColour:"red"}}></div>
        <div style={{textAlign:"left"}}> 
          <p style={{marginBottom:"0", marginTop:"0.5em"}}>Cofounder and Tech Lead at IIDEA, Nigeria.</p>
          <p style={{marginBottom:"0", marginTop:"0.5em"}}>Cofounder and Technical Partner at Playbox, Nigeria.</p>
          <p style={{marginBottom:"0", marginTop:"0.5em"}}>Games & Computer Science Lecturer at University of Central Lancashire, UK.</p>
          <p style={{marginBottom:"0", marginTop:"0.5em"}}>Twitter: <a href='https://twitter.com/Misbahu_SZ'>@misbahu_sz</a>, GitHub: <a href='https://github.com/acodedoer'>@acodedoer</a>, Email: <a href='mailto:misbahu.s.z@gmail.com'>misbahu.s.z@gmail.com</a></p>
        </div>
      </div>

      <Gallery/>
    </div>
  );
}

export default App;
