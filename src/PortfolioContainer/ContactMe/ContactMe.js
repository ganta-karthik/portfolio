import React, {useState} from "react";
import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from "../../utilities/Animations";
import Typical from 'react-typical'
import axios from "axios";
import { toast } from "react-toastify";
import './ContactMe.css'


export default function ContactMe(props){
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
      };
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [message, setMessage] = useState("")
      const [banner, setBanner] = useState("")
      const [bool, setBool] = useState(false)

const handleName = (e) =>{
    setName(e.target.value)
}
const handleEmail = (e) =>{
    setEmail(e.target.value)
}
const handleMessage = (e) =>{
    setMessage(e.target.value)
}
const submitForm = async (e) => {
    e.preventDefault();
  
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setBanner("Please fill in all the fields.");
      toast.error("Please fill in all the fields.");
      return;
    }
  
    try {
      setBool(true);
      const data = {
        name,
        email,
        message,
      };
  
      const res = await axios.post(
        "https://getform.io/f/79e42a95-9df6-4af4-857f-1d4d810a2623",
        data
      );
  
      if (res.status === 200) {
        setBanner("Form submitted successfully!");
        toast.success("Form submitted successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setBanner("An error occurred while submitting the form.");
        toast.error("An error occurred while submitting the form.");
      }
    } catch (error) {
      setBanner("An error occurred while submitting the form.");
      toast.error("An error occurred while submitting the form.");
      console.error(error);
    } finally {
      setBool(false);
    }
  };
  
    return(
        <div className="main-container fade-in" id={props.id || ""}>
            <ScreenHeading
            subHeading = {"Lets keep In Touch"}
            title={'Contact Me'}
            />
            <div className="central-form">
                <div className="col">
                <h2 className="title">
                            <Typical
                            steps = {[
                                "Get In Touch 📧 ",1000,
                            ]}
                            loop={Infinity}
                            />
                </h2>
                        <a href='https://www.linkedin.com/in/ganta-karthik-kumar'>
                            <i className='fa fa-linkedin'></i>
                        </a>
                        <a href='https://www.instagram.com/_karthikk_14/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://github.com/ganta-karthik'>
                            <i className='fa fa-github'></i>
                        </a>
                </div>
                <div className="back-form">
                <div className="img-back">
                    <h4>Send Your Email Here!</h4>
                    <img src={imgBack} alt='image not found'/>
                </div>
                <form onSubmit={submitForm} action="https://getform.io/f/440490cc-2254-473d-801c-146372dfe66e" method="">
                    <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type='text'
                    onChange={handleName}
                    value={name}
                    />
                    <label htmlFor='email'>Email</label>
                    <input type='email'
                     onChange={handleEmail}
                     value={email}
                    />
                    <label htmlFor='message'>Message</label>
                    <textarea type='text'
                     onChange={handleMessage}
                     value={message}
                    />
                    <div className="send-btn">
                        <button type = 'submit'>
                        send<i className="fa fa-paper-plane"/>
                       {bool?(<b className="load">
                           <img src={load1} alt='image not responding'/>
                       </b>):("")}
                        </button>
                    </div>
                  </form>
                </div>
            </div>
        </div>
    )
}