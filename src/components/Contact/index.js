import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
 
  const form = useRef()
  const contactArray = 'Contact Me'.split('')

  const sendEmail = (e) => {
    e.preventDefault()

 

    emailjs
      .sendForm(
        'service_y4wblsi',
        'template_3ry43re',
        form.current,
        'ewj1C-j0E-xbtNyBb'
      )
      .then(
        () => {
        
          toast.success('Message successfully sent!', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
          const timeout = setTimeout(() => {
            window.location.reload(false)
          }, 3900)

          return () => clearTimeout(timeout)
        },
        () => {
       
          toast.error('Failed to send the message, please try again', {
            position: 'bottom-center',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          })
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
             
              strArray={contactArray}
              idx={15}
            />
          </h1>
          <p>
            I am interested in opportunities - especially ambitious or large
            projects. However, if you have other request or question, don't
            hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
              <ToastContainer />
            </form>
          </div>
        </div>
        <div className="info-map">
          Phạm Thế Sang
          <br />
          Hóc Môn, <br />
          TP.Hồ Chí Minh, <br />
          Việt Nam
          <br />
        </div>
        <div className="map-wrap">
           
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62683.810590163346!2d106.55825217013626!3d10.907493030600927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d5bc212b8037%3A0x4e145dad949987f3!2zNiDEkOG7lyBWxINuIEThuq15LCBUw6JuIEhp4buHcCwgSMOzYyBNw7RuLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1701662487762!5m2!1svi!2s" width="830" height="620"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
