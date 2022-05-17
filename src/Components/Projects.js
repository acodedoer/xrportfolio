
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const data = [
    {
        name:"The Virtual Museum of Nigerian Presidents",
        visual:1,
        file:null,
        link:"https://acodedoer.github.io/presidents-ng/",
        description:"An A-Frame based WebXR experience showing Nigeria's Presidents and Heads of State from independence to date.",
        tags:["WebVR", "WebXR", "VR", "Web", "History"]
    },
    {
        name:"WCIA Virtual Tour",
        visual:1,
        file:null,
        link:"http://playboxgs.com/schooltour.html",
        description:"A short virtual tour of White Crescent International Academy, Abuja.",
        tags:["WebVR", "WebXR", "VR", "Web", "Tour"]
    },
    {
        name:"Virtual Scene: Desert Fish",
        visual:1,
        file:null,
        link:"https://acodedoer.github.io/fishaverse/",
        description:"A WebXR/WebVR experience inspired by Netflix's Fish Night epsiode of Love Death + Robot.",
        tags:["WebVR", "WebXR", "VR", "Web", "Simulation", "Boids"]
    },
    {
        name:"Whcak a Mole",
        visual:1,
        file:null,
        link:"https://acodedoer.github.io/aframe-whack-a-mole/",
        description:"A simple virtual-reality whack-a-mole game created using AFrame. It supports the use of a cursor for interaction as well as 3DOF and 6DOF controllers.",
        tags:["WebVR", "WebXR", "VR", "Web", "Game"]
    },
    {
        name:"Fractured Realities",
        visual:1,
        file:null,
        link:"https://acodedoer.github.io/fractured-realities/",
        description:"A VR experience inspired by the opening sequences of Marvel's 'What If'.",
        tags:["WebVR", "WebXR", "VR", "Web", "Game"]
    },
    {
        name:"Apartment Virtual Tour",
        visual:1,
        file:null,
        link:"https://acodedoer.github.io/flat-tour/",
        description:"A short virtual tour of an apartment, created using a customised version of the AFRame WebXR library.",
        tags:["WebVR", "WebXR", "VR", "Web", "Tour"]
    },
]

const Grid = () => data.map((project,key)=>
    <Paper elevation={0} style={{width:"600px", minHeight:"350px", padding:"0.5em", margin:"1.5em",boxSizing:"border-box", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center"}} key={key}>
        <h3>{project.name}</h3>
        {project.visual==1?<iframe style={{border:"none",width:"80%"}} src={project.link}/>:<video src={project.file}/>}
        <p>{project.description}</p>
        <Button onClick={()=> window.open(project.link)} variant="contained">Full View</Button>
    </Paper>)

export const Projects = () => {
    return(
        <Box style={{display:"flex", flexDirection:"row", justifyContent:"space-around",flexWrap:"wrap", width:"100vw", backgroundColor:"#e7ebf0"}}>
            {Grid()}
        </Box>
    )
}