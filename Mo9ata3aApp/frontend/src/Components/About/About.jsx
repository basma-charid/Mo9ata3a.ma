import { Fade, Zoom } from "react-reveal";
import BoxHolder from "../BoxHolder/BoxHolder";
import "./About.style.css";


const About = () => {
  
  const provider = [
    {id : 1 , icon : "fa-solid fa-check" , title : "Egalisation" , text : "Egalisate you papper very fast"},
    {id : 2 , icon : "fa-solid fa-download" , title : "Download" , text : "Download you papper very fast"},
    {id : 3 , icon : "fa-solid fa-wand-magic-sparkles" , title : "Faster" , text : "upload you papper very fast"},
  ]


  return (
    <div className="holder-3" id="about">
      <Fade cascade bottom>
        <h1 className="holder-title">Qui somme nous ? </h1>
        <p className="holder-parag">nous proposons plusieurs services dédiés aux citoyens pour faciliter leur paperasse quotidienne</p>        
      </Fade>
      <Zoom bottom duration={2000}>
        <div className="sub-holder">
          {
            provider.map(({id , icon ,title , text}) => {
              return (
                <BoxHolder key={id} icon={icon} title={title} text={text} />
              )
              })
          }
        </div>
      </Zoom>
    </div>
  )
}

export default About