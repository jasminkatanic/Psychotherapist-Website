import { Link } from "react-router-dom";

const mobNav = () => {  

  
  function checkState(){
    let mobNav = document.getElementById("navi-togle");
      if(mobNav.checked){        
        slideMobMenuLeft();        
      }else{
        closeMobMenu();   
      }
  };

  function slideMobMenuLeft(){
      document.getElementById("mobNavBg").style.animation ="loadMobNavBg 1s";
      document.getElementById("mobNavBg").style.animationFillMode = "both";
      document.getElementById("nav-btn").style.zIndex = "100000";
      document.getElementById("mobNavList").style.opacity = "1";
      document.getElementById("mobNavBg").style.zIndex = "10000";
      document.getElementById("mobNavBg").style.height = "500vh";
  };

  function closeMobMenu(){
    document.getElementById("mobNavList").style.opacity = "0";
    document.getElementById("mobNavBg").style.animation ="loadMobNavBgBack 1s";  
    document.getElementById("mobNavBg").style.animationFillMode = "both";    
  };

  function cancelCheckBox(){    
    document.getElementById("navi-togle").checked = false;
    document.getElementById("mainContent").scrollTop = 0;
    checkState();
  };
  
  return (  
    <div className="navigation" id="main-nav">
      <input type="checkbox" className="navigation__checkbox" id="navi-togle" onClick={checkState}/>
        <label htmlFor="navi-togle" className="navigation__button" id="nav-btn">
            <span className="navigation__icon">&nbsp;</span>
        </label>        
      <nav className="navigation__nav">
        <ul className="navigation__list" id="mobNavList">
          <li className="navigation__item"><Link className="navigation__link" to="/" onClick={cancelCheckBox}>Početna</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="/ja" onClick={cancelCheckBox}>Ko Sam Ja</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="/knjige" onClick={cancelCheckBox}>Knjige</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="/gostovanja" onClick={cancelCheckBox}>Gostovanja</Link></li>
          <li className="navigation__item"><Link className="navigation__link" to="/radionice" onClick={cancelCheckBox}>Radionice</Link></li>
          <li className="navigation__item"><a href="https://www.razgovaraj.ba/" target="_blank" rel="noreferrer" className="navigation__link" onClick={cancelCheckBox}>Blog</a></li>
          <li className="navigation__item"><Link className="navigation__link" to="/kontakt" onClick={cancelCheckBox}>Kontakt</Link></li>
        </ul>
      </nav>              
     </div>  

  );
}
 
export default mobNav;