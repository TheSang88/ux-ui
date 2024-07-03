import { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import 'animate.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../assets/images/1.png'
import imgcrud from '../../assets/images/sa2.png'
import imgmes from '../../assets/images/sa.png'
import imgma from '../../assets/images/sa3.png'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
function Projects() {
  const aboutArray = 'PROJECT'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  

  return (
    <>
    <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
              />
          </h1>
              
          <div className='carditem'>
          <div className='left'>
          <Card style={{ width: '40rem', background:'transparent',border:'none' }}>
        <Card.Img src={img1} />
      <Card.Body className=''>
        <Link to='https://clientecov.vercel.app/'><Button variant="secondary"><h4>LIVE</h4></Button></Link>
          <Link to='https://github.com/TheSang88/servereco.git'><Button variant="secondary"><h4>SERVER</h4></Button></Link>
          <Link to='https://github.com/TheSang88/clientecov.git'><Button variant="secondary"><h4>CLIENT</h4></Button></Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '40rem', background:'transparent',border:'none' }}>
        <Card.Img src={imgmes} />
      <Card.Body>
        <Link to='https://client-mess-app.vercel.app/dashboard'><Button variant="secondary"><h4>LIVE</h4></Button></Link>
          <Link to='https://github.com/TheSang88/server-mess-app.git'><Button variant="secondary"><h4>SERVER</h4></Button></Link>
          <Link to='https://github.com/TheSang88/client-mess-app.git'><Button variant="secondary"><h4>CLIENT</h4></Button></Link>
      </Card.Body>
    </Card>

            </div>
            <div>


            <Card style={{ width: '40rem', background:'transparent',border:'none' }}>
        <Card.Img src={imgma} />
      <Card.Body>
        <Link to='https://clientmanage-blue.vercel.app/login'><Button variant="secondary"><h4>LIVE</h4></Button></Link>
          <Link to='https://github.com/TheSang88/clientmanage.git'><Button variant="secondary"><h4>SERVER</h4></Button></Link>
          <Link to='https://github.com/TheSang88/servermanage.git'><Button variant="secondary"><h4>CLIENT</h4></Button></Link>
      </Card.Body>
    </Card>




    <Card style={{ width: '40rem', background:'transparent',border:'none' }}>
        <Card.Img src={imgcrud} />
      <Card.Body>
          <Link to='https://clientcrud-gamma.vercel.app/list'><Button variant="secondary"><h4><b>LIVE</b></h4></Button></Link>
          <Link to='https://github.com/TheSang88/servercrud.git'><Button variant="secondary"><h4>SERVER</h4></Button></Link>
          <Link to='https://github.com/TheSang88/clientcrud.git'><Button variant="secondary"><h4>CLIENT</h4></Button></Link>
      </Card.Body>
    </Card>
            </div>

           
          </div>
            </div>
            </div>
            <Loader type="pacman" />
    </>
  );
}

export default Projects;