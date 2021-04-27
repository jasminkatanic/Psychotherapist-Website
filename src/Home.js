import { Link } from 'react-router-dom';
import Footer from './Footer';

const Home = () => {
  
  return (  

    <div className="home">
      <div className="home-head"></div>
        <section className="home-section">
          <div className="home-section-first">
            <div className="home-section-first-head">
              <div className="home-section-first-head-main">Dr.sc. Vahida Djedović</div>
              <div className="home-section-first-head-sub">Dr. sc. Vahida Djedović je <strong>psihoterapeutkinja</strong> sa dvadesetogodišnjim iskustvom u radu sa ljudima koji svoje probleme ne mogu riješiti samostalno. <strong>Radi individualnu i grupnu psihoterapiju,  terapiju parova, shema terapiju i biblioterapiju.</strong> Također radi i kao poslovna savjetnica.</div>
            </div>
            <div className="home-section-first-content">
              <div className="home-section-first-content-left">
                <img src={process.env.PUBLIC_URL + '/vahida-home.jpg'} alt="vahida-img" className="home-section-first-content-left-img"/>
              </div>
              <div className="home-section-first-content-right">
                <div className="home-section-first-content-right-content">
                  <div className="home-section-first-content-right-content-head">Psihoterapeutkinja i poslovna savjetnica</div>
                  <div className="home-section-first-content-right-content-text">
                    <p>Najvažniji dio psihoteraije je da kažete sebi da vam je ovakav vid tretmana poterban. Sljedeći važan zadatak je da izaberete terapeuta kojemu možete vjerovati i uz kojeg ćete se osjećati sigurno. Ako nije tako, nema uspješne terapije. Nemojte biti tamo gdje vam unutrašnji glas govori da nešto nije kako treba. Odnos između klijenta i terapeuta treba da bude pun povjerenja i jedno sigurno mjesto za rast i razvoj.</p>
                    <p>Naš odnos sa samim sobom je temelj iz kojeg nastaju svi drugi odnosi. Preduslov stvaranja uspješnog odnosa sa drugima je ljubav prema sebi.</p>
                    <p>U individualnom psihoterapijskom radu često radim na snovima, jer je tumačenje snova vještina kojom se objašnjavaju moguća značenja sadržaja snova, a najčešće su to simbolične poruke koje nam šalje naše nesvjesno. San je nemoguće analizirati i interpretirati na pravi način bez sanjača. San je glas nesvjesnog uma, koji želi da ga čujemo.</p>
                    <p>Grupna terapija je dobra za osobe koje smatraju da su njihovi problemi jedinstveni i nerješivi. Takvi stavovi se razbijaju u grupnom susretu uz uvid da drugi znaju i mogu prepoznati naše probleme, te pomoći nam u njhovom rješavanju. Također, grupa je mjesto pripadnosti i prihvatanja, a to su neke od osnovnih životnih potreba. To je mjesto gdje možemo biti ono šo jesmo i mjesto gdje nas niko neće osuditi.</p>
                    <p>Partnerska terapija je najčešća terapija koju radim. Ljubavni odnosi su oduvijek privlačili veliku pažnju, a statistika kaže da, preko 70% ljudi koji se jave na psihoterapiju, jave se upravo zbog nezadovoljstva u ljubavnim odnosima. Najčešći razlozi zbog kojih se javljaju partneri su nedovoljna dobra komunikacija, preljube i problemi u vezi s novcem.</p>
                    <p>Biblioterapija se pokazala kao izuzetno korisna metoda uradu sa djecom i depresijama. U radu sa djecom, najčešće koristim bajke, jer su djeca često na nivou konkretnog i o sebi govore u trećem licu, odnosno, o svojim problemima govore kroz likove iiz bajki. Sa odraslima, a koji su zainteresovani za ovakav vid rada, uglavnom koristim klasičnu književnost, ili neka djela po izboru klijenta.</p>
                    <p>(O svemu, puno više možete čitati na <a href="https://www.razgovaraj.ba/" target="_blank" rel="noreferrer">www.razgovaraj.ba</a>)</p>
                    <p><strong>Kao poslovna savjetnica,</strong> najčešće radim na izgradnji ličnog i poslovnog brenda. Brending strategija je kreiranje imena i slike u svrhu postizanja prepoznatljivosti kod kupaca, bilo da prodajete uslugu ili proizvod. Svako od nas je indivuda za sebe, stoga se brend ličnosti temelji na dobrom poznavavanju sebe, a brend firme na zadovoljstvu uposlenika. Uposlenici su najvažniji resurs jednog preduzeća, stoga da bi preduzeće dobro poslovalo, neophodno je da ima zadovoljne uposlenike.</p>
                  </div>
                  <div className="home-section-first-content-right-content-btn">
                    <Link className="home-section-first-content-right-content-btn-edit" to="/ja">
                      <div className="home-section-first-content-right-content-btn-edit-link">VIŠE</div>
                    </Link>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-section-second">
            <div className="home-section-second-content">
              <div className="home-section-second-content-item">
                <div className="home-section-second-content-item-one">
                  <div className="home-section-second-content-item-one-left">
                    <div className="home-section-second-content-item-one-left-content">
                      <div className="home-section-second-content-item-one-left-content-head">KNJIGE</div>
                      <div className="home-section-second-content-item-one-left-content-txt">
                        <p>Napisala sam tri knjige iz oblasti popularne psihologije:</p>
                        <p>Obući košulju sretnog čovjeka, Terapeut ljubavi i Kako (pro)voditi ljubav.</p>
                      </div>
                      <div className="home-section-second-content-item-one-left-content-btn">
                        <Link className="home-section-second-content-item-one-left-content-btn-edit" to="/knjige">
                          <div className="home-section-second-content-item-one-left-content-btn-edit-link">VIŠE</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="home-section-second-content-item-one-right">
                    <img src={process.env.PUBLIC_URL + '/vahida-knjiga.jpg'} alt="vahida-knjiga" className="home-section-second-content-item-one-right-img"/>
                  </div>
                </div>
                <div className="home-section-second-content-item-two">
                  <div className="home-section-second-content-item-two-left">
                    <img src={process.env.PUBLIC_URL + '/vahida-gost.jpg'} alt="vahida-knjiga" className="home-section-second-content-item-two-left-img"/>
                  </div>
                  <div className="home-section-second-content-item-two-right">
                    <div className="home-section-second-content-item-two-right-content">
                      <div className="home-section-second-content-item-two-right-content-head">GOSTOVANJA</div>
                      <div className="home-section-second-content-item-two-right-content-txt">
                        <p>Česta sam gošća u mnogim televizijskim kućama širom regiona.</p>
                        <p>Najdraže mi je gostovanje na HRT, u jutarnjem programu, Dobro jutro, Hrvatska.</p>
                        <p>Neka od gostovanja možete pogledati i na stranici.</p>
                      </div>
                      <div className="home-section-second-content-item-two-right-content-btn">
                        <Link className="home-section-second-content-item-two-right-content-btn-edit" to="/gostovanja">
                          <div className="home-section-second-content-item-two-right-content-btn-edit-link">VIŠE</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-section-second-content-item-three">
                  <div className="home-section-second-content-item-three-left">
                    <div className="home-section-second-content-item-three-left-content">
                      <div className="home-section-second-content-item-three-left-content-head">RADIONICE</div>
                      <div className="home-section-second-content-item-three-left-content-txt">
                        <p>Osmislila sam i organizovala međunarodni projekat o problemima savremenog čovjeka, koji sam nazvala „Ženski razgovori“. Također, postoje i „Muški razgovori“.</p>
                      </div>
                      <div className="home-section-second-content-item-three-left-content-btn">
                        <Link className="home-section-second-content-item-three-left-content-btn-edit" to="/radionice">
                          <div className="home-section-second-content-item-three-left-content-btn-edit-link">VIŠE</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="home-section-second-content-item-three-right">
                    <img src={process.env.PUBLIC_URL + '/vahida-radionice.jpg'} alt="vahida-knjiga" className="home-section-second-content-item-three-right-img"/>
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
 
export default Home;