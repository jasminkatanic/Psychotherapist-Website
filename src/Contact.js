import Footer from './Footer';
import { FaFacebookSquare, FaInstagram, FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa";
import emailjs from 'emailjs-com';

const Contact = () => {

  
  function validateEmail(email){
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };
  
  function sendHook(){
    
    let nameIn = document.getElementById("fullNameInput");
    let emailIn = document.getElementById("emailInput");
    let txtIn = document.getElementById("textInput");
    let formErr = document.getElementById("fullNameLbl");

    

    if(nameIn.value === "" || emailIn.value ==="" || txtIn.value ===""){
      
      //Fail to send because of the empty Full Name
      if(nameIn.value ===""){
        nameIn.style.border = "solid red 3px";        
        
        formErr.innerHTML = "Sva su polja neophodna.";
        formErr.style.opacity = "1";
        formErr.style.visibility = "visible";

      //Fail to send because of the empty Email
      }else if(emailIn.value ===""){
        emailIn.style.border = "solid red 3px";        
        
        formErr.innerHTML = "Sva su polja neophodna.";
        formErr.style.opacity = "1";
        formErr.style.visibility = "visible";

      //Fail to send because of the empty Text
      }else if(txtIn.value ===""){
        txtIn.style.border = "solid red 3px";        
        
        formErr.innerHTML = "Sva su polja neophodna.";
        formErr.style.opacity = "1";
        formErr.style.visibility = "visible";
      }      
           
    }else{
      
      //Mail Sent ***
      if(validateEmail(emailIn.value)){        

        let templateParams = {
          formaName: nameIn.value,
          formaEmail: emailIn.value,
          yourText: txtIn.value
        };
        
        emailjs.send('', '', templateParams, '')
        .then(function(response) {
          formErr.innerHTML = ``;
          formErr.style.opacity = "0";
          formErr.style.visibility = "hidden";

          nameIn.value = '';
          emailIn.value = '';
          txtIn.value = '';

          nameIn.style.removeProperty('border');
          emailIn.style.removeProperty('border');
          txtIn.style.removeProperty('border');
          

        }, function(error) {
          console.log('FAILED...', error);
        });
        
      }
      //Fail to send because of the Invalid Email
      else{
        emailIn.style.border = "solid red 3px";  

        formErr.innerHTML = `<strong>${emailIn.value}</strong> nije validna email adresa.`;
        formErr.style.opacity = "1";
        formErr.style.visibility = "visible";
      }
      
    }

  };
  
  return (  
    <div className="contact">      
      <div className="contact-head"></div>
        <section className="contact-section">
          <div className="contact-section-first">
            <div className="contact-section-first-head">
              <div className="contact-section-first-head-main">Kontakt</div>
              <div className="contact-section-first-head-sub">Želite termin za seansu, želite da učestvujete na radionici, imate pitanje ili ste zainteresovani za neku od knjiga onda odaberite jedan od načina ispod i kontaktiraje me.</div>
            </div>
            <div className="contact-section-first-content">
              <div className="contact-section-first-content-left">
                <div className="contact-section-first-content-left-content">
                  <div className="contact-section-first-content-left-content-head">društvene mreže</div>
                  <div className="contact-section-first-content-left-content-text">
                  <div className="contact-section-first-content-left-content-text-btn">
                    <a href="" target="_blank" rel="noreferrer" className="contact-section-first-content-left-content-text-btn-facebook">
                      <FaFacebookSquare className="contact-section-first-content-left-content-text-btn-facebook-icon"></FaFacebookSquare>                                  
                      <div className="contact-section-first-content-left-content-text-btn-facebook-link">Vahida Djedović</div>
                    </a>                    
                  </div>
                  <div className="contact-section-first-content-left-content-text-btn">
                    <a href="" target="_blank" rel="noreferrer" className="contact-section-first-content-left-content-text-btn-instagram">
                      <FaInstagram className="contact-section-first-content-left-content-text-btn-instagram-icon"></FaInstagram>                                  
                      <div className="contact-section-first-content-left-content-text-btn-instagram-link">@vahidadjedovic</div>
                    </a>                    
                  </div>
                  </div> 
                  <div className="contact-section-first-content-left-content-head">telefon</div>
                  <div className="contact-section-first-content-left-content-text">
                    <div className="contact-section-first-content-left-content-text-btn">
                      <a href="" rel="noreferrer" className="contact-section-first-content-left-content-text-btn-phone">
                        <FaPhoneSquareAlt className="contact-section-first-content-left-content-text-btn-phone-icon"></FaPhoneSquareAlt>                                  
                        <div className="contact-section-first-content-left-content-text-btn-phone-link">+387 61 569 746</div>
                      </a>                    
                    </div>
                  </div>                 
                </div>
              </div>
              <div className="contact-section-first-content-right">
                <div className="contact-section-first-content-right-content">
                  <div className="contact-section-first-content-right-content-head">pošaljite email</div>
                  <div className="contact-section-first-content-right-content-text">
                    <div className="contact-section-first-content-right-content-text-form">
                      <label htmlFor="formFullName" className="contact-section-first-content-right-content-text-form-nameLbl" id="fullNameLbl"></label>
                        <input type="text" name="formFullName" className="contact-section-first-content-right-content-text-form-nameInput" id="fullNameInput" placeholder=" Ime i Prezime"/>
                          <input type="email" name="formEmail" className="contact-section-first-content-right-content-text-form-emailInput" id="emailInput" placeholder=" Email Adresa"/>
                            <textarea name="formText" className="contact-section-first-content-right-content-text-form-textInput" id="textInput" placeholder=" Vaš Tekst"></textarea>
                    </div>
                    <div className="contact-section-first-content-right-content-text-btn">
                      <div className="contact-section-first-content-right-content-text-btn-email" onClick={sendHook}>
                        <FaEnvelope className="contact-section-first-content-right-content-text-btn-email-icon"></FaEnvelope>                                  
                        <div className="contact-section-first-content-right-content-text-btn-email-link">Pošalji</div>
                      </div>                    
                    </div>
                  </div>                  
                </div>
              </div>
            </div>
          </div>          
          <Footer />
        </section>      
    </div>
  );

}
 
export default Contact;