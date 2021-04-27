import Footer from './Footer';




const About = () => { 


  return (  

    <div className="about">
      <div className="about-head"></div>
        <section className="about-section">
          <div className="about-section-first">
            <div className="about-section-first-head">
              <div className="about-section-first-head-main">Ko Sam Ja</div>
              <div className="about-section-first-head-sub">
                Ja sam neko ko želim da budem. Slobodna, kreativna, hrabra, iskrena, odvažna, razborita, pravedna, odana. 
                <p>Vrijeme provodim u “ovdje i sada”. Rijetko posjećujem budućnost, a još rjeđe prošlost. Jer, dobro proživljeno danas, u sretni san pretvorit će jučer, a svako sutra u slutnju punu nadanja. Znam šta želim i šta mi je istinski važno. Živim u skladu sa svojim imenom, a moje ime u prevodu znači jedna. Jedna sa sobom. Jedna sa svojim vrijednostima.</p>
                <p>Ja sam sebi najbolji resurs.</p>
              </div>
            </div>
            <div className="about-section-first-content">
              <div className="about-section-first-content-left">
                <img src={process.env.PUBLIC_URL + '/vahida-pozadina.jpg'} alt="vahida-img" className="about-section-first-content-left-img"/>
              </div>
              <div className="about-section-first-content-right">
                <div className="about-section-first-content-right-content">
                  <div className="about-section-first-content-right-content-head">moja biografija</div>
                  <div className="about-section-first-content-right-content-text">
                    <p>Prije završetka analitičke psihoterapije na Institutu za grupnu analizu u Zagrebu, završila sa studij književnosti u Tuzli, a rad na Klinici za psihijatriju, omogućio mi je odlično poznavanje psihopatologije. Magistrirala sam na temi književnosti i psihoterapije, odnosno na biblioterapiji, a ovo istraživanje se posebno pokazalo korisnim u radu sa depresivnim klijentima i djecom sa psihosomatskim smetnjama. Doktorirala sam na odnosu kreativnosti i emocionalne inteligencije, a u istraživanje sam, pored emocionalnih komponenti, uvrstila sreću, nadu i optimizam.</p>
                    <p>Regionalni sam predavač, a predavanja, seminare, radionice ili druge prezentacije, predstavila sam i predstavljam na brojnim međunarodnim kongresima i simpozijumima. Imam desetine objavljenih naučnih i stručnih radova u domaćim i stranim časopisima.</p>
                    <p>Osmislila sam, organizovala i vodim regionlni projekat o problemima savremenog čovjeka, koji sam nazvala „Ženski razgovori“. Također, postoje i „Muški razgovori“, a svoje kolumne i kolumne klijenata koji pišu za mene, objavljujem na portalu,  <a href="https://www.razgovaraj.ba/" target="_blank" rel="noreferrer">www.razgovaraj.ba</a></p>                    
                    <p>Na svom youtube kanalu emitujem podcact „Razgovori“, a u emisiju dovodim goste koji govore o realnim problemima, te o metodama pomoću kojih ih rješavaju i /ili prevazilaze. Dobitnica sam nekoliko priznanja za popularizaciju psihoterapije, po ocjeni čitalaca bosanskohercegovačkog magazina za koje pišem kolumne. Živim i radim u Tuzli i Beogradu. Imam vlastitu  firmu „Savjetovalište VD“.</p>
                  </div>                  
                </div>
              </div>
            </div>
          </div>
          <div className="about-section-second">            
              <div className="about-section-second-content">
                <div className="about-section-second-content-left">
                  <img src={process.env.PUBLIC_URL + '/vahida-motiv.jpg'} alt="vahida-img" className="about-section-second-content-left-img"/>
                </div>
                <div className="about-section-second-content-right">
                  <div className="about-section-second-content-right-content">
                    <div className="about-section-second-content-right-content-head">šta me motiviše</div>
                    <div className="about-section-second-content-right-content-text">
                      <p>Ljubav je ono što me najviše pokreće i ona zauzima visoko prvo mjesto na ljestvici mojih vrijednosti. Ovdje podrazumijevam ljubav prema poslu, partneru, porodici, prijateljima…</p>
                      <p>Stoga sam sretna, jer sam ispunjena ljubavlju na svim životnim poljima.</p>  
                      <p>Svaki čovjek koji nađe ono što visoko vrednuje u svom životu, naći  će i smjernice koje će mu reći na šta  treba da se fokusira. Naći će sposobnost da bude hrabar, uporan, fokusiran, ispunjen i sretan. Naći će način da živi životom kakvim želi da živi.</p>                     
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
 
export default About;