import { Link } from 'react-router-dom';
import Footer from './Footer';

const Books = () => {
  
  return (  
    <div className="book">
      <div className="book-head"></div>
        <section className="book-section">
          <div className="book-section-first">
            <div className="book-section-first-head">
              <div className="book-section-first-head-main">Knjige</div>
              <div className="book-section-first-head-sub">Iako sam, prije analitičke psihoterapijske izobrazbe, završila studij književnosti, nisam imala namjeru da pišem knjige. Prva knjiga je bila zamišljena kao džepni savjetodavni priručnik za moje klijente, ali ni jedna izdavačka kuća nije htjela štampati tako malo izdanje. Sada već ne mogu da se zaustavim u pisanju.</div>
            </div>
            <div className="book-section-first-content">
              <div className="book-section-first-content-left">
                <img src={process.env.PUBLIC_URL + '/vahida-knjiga-jedan.jpg'} alt="vahida-img" className="book-section-first-content-left-img"/>
              </div>
              <div className="book-section-first-content-right">
                <div className="book-section-first-content-right-content">
                  <div className="book-section-first-content-right-content-head">Obući Košulju Sretnog Čovjeka</div>
                  <div className="book-section-first-content-right-content-text">                    
                    <p>U knjizi su opisani načini na koje ljudi mogu biti sretni, a glavni pokretač sreće je ljubav. Knjiga donosi tri psihoterapijske priče o ženama koje su izašle iz teških životnih strahova. Knjiga vam može pomoći da pronađete sebe i da naučite biti svoji, jer jedino tako možete biti sretni.</p>
                    <p>U današnje doba ljudi su često usamljeni, nesigurni i nisu povezani s drugima. Uplašeni od samoće i neprihvaćanja, ulaze u začarni krug takvog života i postaju depresivni. Njihov strah je egzistencijalni strah, jer nemaju sretan i ispunjen život. Je li ipak moguća sreća?</p>
                    <p>Ako ste zainteresovani za kupovinu knjige javite se putem online forme na stranici koju možete naći klikom na dugme KONTAKT koje se nalazi ispod.</p>  
                  </div>
                  <div className="book-section-first-content-right-content-btn">
                    <Link className="book-section-first-content-right-content-btn-edit" to="/kontakt">
                      <div className="book-section-first-content-right-content-btn-edit-link">KONTAKT</div>
                    </Link>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="book-section-second">
            <div className="book-section-second-content">
                <div className="book-section-second-content-left">
                  <img src={process.env.PUBLIC_URL + '/vahida-knjiga-dva.jpg'} alt="vahida-img" className="book-section-second-content-left-img"/>
                </div>
                <div className="book-section-second-content-right">
                  <div className="book-section-second-content-right-content">
                    <div className="book-section-second-content-right-content-head">Terapeut ljubavi</div>
                    <div className="book-section-second-content-right-content-text">
                      <p>Knjiga Terapeut ljubavi, sastoji se iz tri dijela.</p>
                      <p>Prvi dio namijenjen je muškarcima, odnosno, govori o najčešćim problemima s kojima se muškarci susreću u ljubavi, drugi dio pripada ženama i njihovim najčešćim ljubavnim problemima, a treći dio pripada i jednima i drugima, odnosno, govori o tome šta je to u ljubavi, a interesuje oba spola podjednako.</p>
                      <p>Ono što ih podjednako interesuje jeste, između ostalog i:</p>
                      <p>Kako u vezi biti i ostati svoj, a opet biti zajedno?</p>
                      <p>Ako želite biti i ostati svoji, a opet zajedno, (sto je cilj svake veze) treba da posjedujete tri vrijednosti:</p>
                      <p><ol>
                        <li>Ljubav</li>
                        <li>Iskrenost i povjerenje</li>
                        <li>Poštovanje</li>
                        </ol>
                      </p>
                      <p>Ovo su tri vrijednosti kojima treba da teže oba spola, ali drugačije su poredani kod žena, a drugačije kod muškaraca.</p>
                      <p>Ako ste zainteresovani za kupovinu knjige javite se putem online forme na stranici koju možete naći klikom na dugme KONTAKT koje se nalazi ispod.</p>  
                    </div>
                    <div className="book-section-second-content-right-content-btn">
                      <Link className="book-section-second-content-right-content-btn-edit" to="/kontakt">
                        <div className="book-section-second-content-right-content-btn-edit-link">KONTAKT</div>
                      </Link>                    
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="book-section-third">            
            <div className="book-section-third-content">
              <div className="book-section-third-content-left">
                <img src={process.env.PUBLIC_URL + '/vahida-knjiga-tri.jpg'} alt="vahida-img" className="book-section-third-content-left-img"/>
              </div>
              <div className="book-section-third-content-right">
                <div className="book-section-third-content-right-content">
                  <div className="book-section-third-content-right-content-head">Kako (pro)voditi ljubav</div>
                  <div className="book-section-third-content-right-content-text">
                    <p>Svi žudimo za nekom sigurnošću i zajedništvom, mnogi očajno žele stupiti u vezu, ali ipak, zazirući od (po)vezanosti, jer se boje da će im takvo stanje odnjeti osjećaj slobode. U ovoj knjizi ljubavni odnosi imaju dva lica, s tim, što se jedno lice rijeđe viđa, a to je lice ljubavi, poštovanja i poverenja. Drugo lice je lice romantične ljubavi, a od nje i lice problema, previranja, nedovoljno dobre komunikacije, lice prevare.</p>
                    <p>Ako ste zainteresovani za kupovinu knjige javite se putem online forme na stranici koju možete naći klikom na dugme KONTAKT koje se nalazi ispod.</p>  
                  </div>
                  <div className="book-section-third-content-right-content-btn">
                    <Link className="book-section-third-content-right-content-btn-edit" to="/kontakt">
                      <div className="book-section-third-content-right-content-btn-edit-link">KONTAKT</div>
                    </Link>                    
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
 
export default Books;