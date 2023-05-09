import { NextPage } from "next";
import Navbar from '../../../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEur } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faListUl } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ProfilIndex:NextPage = () => {
    return (
        <div className="profil_body">
            <Navbar />
            <div className="profil_container">
                <h3>Mon profil</h3>
                <hr className="main_separator"></hr>
                <div className="monprofil">
                    <ul className="ul_profil">
                        
                        <li>
                            <div className="left">
                                <FontAwesomeIcon icon={faEur} className="eur icon"/>
                                <span>Historique de mes remplacements</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="chevron-right"/>
                        </li>
                        <div className="separator"></div>

                        <li>
                            <div className="left">
                                <FontAwesomeIcon icon={faListUl} className="list-ul icon"/>
                                <span>Modifier mon profil</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="chevron-right"/>
                        </li>
                        <div className="separator"></div>
                        <li>
                            <div className="left">
                                <FontAwesomeIcon icon={faBell} className="bell icon"/>
                                <span>Paramétrer les nortifications</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="chevron-right"/>
                        </li>
                        <div className="separator"></div>
                        <li>
                            <div className="left">
                                <FontAwesomeIcon icon={faFile} className="file icon"/>
                                <span>Mes documents</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="chevron-right"/>
                        </li>
                        <div className="separator"></div>
                        <li>
                            <div className="left">
                                <FontAwesomeIcon icon={faLock} className="lock icon"/>
                                <span>Changer mon mot de passe</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="chevron-right"/>
                        </li>
                        <div className="separator"></div>
                        <li>
                            <div className="left">
                                <FontAwesomeIcon icon={faSignOut} className="log-out icon"/>
                                <span>Déconnexion</span>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="chevron-right"/>
                        </li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <hr className="main_separator"></hr>
                    <ul className="ul_profil">
                        <li>
                            <div className="left">
                                <FontAwesomeIcon icon={faPhone} className="phone icon"/>
                                <span>06 21 76 76 35</span>
                            </div>
                        </li>
                        <div className="separator"></div>
                        <li>
                            <div className="left">
                                <FontAwesomeIcon icon={faEnvelope} className="mail icon"/>
                                <span>guillaumemnmsimonet@gmail.com</span>
                            </div>
                        </li>
                        <div className="separator"></div>
                    </ul>
                </div>
                <div className="mode_switch_container">
                    <button>Mode Cabinet</button>
                </div>
            </div>
        </div>
    )
}

export default ProfilIndex;