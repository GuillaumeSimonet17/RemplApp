import { NextPage } from "next";
import Navbar from '../../../../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'

const MessagesIndex:NextPage = () => {
    return (
        <div className="messagerie_container">
            <Navbar />

            <div className="new-mess-container">
                <FontAwesomeIcon icon={faPencil} className="wri icon"/>
                <p>Nouveau message</p>
            </div>

            <div className="messages-container">
                <div className="message-card">
                    <div className="left">
                        <FontAwesomeIcon icon={faUserMd} className="user icon"/>
                        <div className="content">
                            <div className="dr_name">Dr Sonia DUCROT</div>
                            <p>Envoyez un premier message !</p>
                        </div>
                    </div>
                    <div className="right">
                        <p className="hour">11h18</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
    )
}

export default MessagesIndex;