import '../../styles/styles.css'
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineApi } from "react-icons/ai";
import { DiPython } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";

export default function Home_P2() {

  const skillsFrontend = [
    { "nombre": 'html', "logo": <FaHtml5 className='logo-skill' />, },
    { "nombre": 'css', "logo": <SiCss3 className='logo-skill' />, },
    { "nombre": 'javascript', "logo": <DiJavascript1 className='logo-skill' />, },
    { "nombre": 'react', "logo": <DiReact className='logo-skill' />, },
    { "nombre": 'nextJS', "logo": <TbBrandNextjs className='logo-skill' />, },
    { "nombre": 'tailwind', "logo": <SiTailwindcss className='logo-skill' />, },
    { "nombre": 'bootstrap', "logo": <BsFillBootstrapFill className='logo-skill' />, },
  ]

  const skillsBackend = [
    { "nombre": 'node', "logo": <FaNodeJs className='logo-skill' />, },
    { "nombre": 'express', "logo": <SiExpress className='logo-skill' />, },
    { "nombre": 'mongo DB', "logo": <SiMongodb className='logo-skill' />, },
    { "nombre": 'python', "logo": <DiPython className='logo-skill' />, },
    { "nombre": 'mysql', "logo": <SiMysql className='logo-skill' />, },
    { "nombre": 'api rest', "logo": <AiOutlineApi className='logo-skill' />, },
    { "nombre": 'flask', "logo": <SiFlask className='logo-skill' />, },
  ]

  return (
    <div id="container-general__Home__P2">
      <h2 id='titulo-habilidades__Home-P2'>Habilidades Técnicas:</h2>
      <div className='container-GeneralSkill__Home-P2'>
        <h2 className='titulo-stack__Home-P2'>Frontend</h2>
        {/* Comienzo de contenedor FRONTEND */}
        <div className='container-skills__Home-P2'>
          {
            skillsFrontend.map((elem, index) =>
              <div className='mt-2' key={index}>
                <div className='cont-eachSkill__Home-P2'>
                  <h2 className='nombre-skill'>{elem?.nombre?.toUpperCase()}</h2>
                  {elem?.logo}
                </div>
              </div>
            )
          }
        </div>
        <h2 className='titulo-stack__Home-P2 mt-4'>Backend</h2>
        {/* Comienzo de contenedor BACKEND */}
        <div className='container-skills__Home-P2'>
          {
            skillsBackend.map((elem, index) =>
              <div className='mt-2' key={index}>
                <div className='cont-eachSkill__Home-P2'>
                  <h2 className='nombre-skill'>{elem?.nombre?.toUpperCase()}</h2>
                  {elem?.logo}
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
