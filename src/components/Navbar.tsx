import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faCommenting } from '@fortawesome/free-solid-svg-icons'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'

function UserRecherche() {
  
  const router = useRouter();
  const { id } = router.query;
  const color = id === '1' ? "#50b9a7" : "#4585f7";

    return (
      <>
        <div className='navbar'>
          <div className="nav-bar-compsants">
              <Link className='link' href={`/user/${id}/recherche`} as={`/user/${id}/recherche`}>
                <FontAwesomeIcon icon={faSearch} className="search icon"/>
                <p>Recherche</p>
              </Link>
              <Link className='link' href={`/user/${id}/agenda`} as={`/user/${id}/agenda`}>
                <FontAwesomeIcon icon={faCalendarCheck} className="calandar icon"/>
                <p>Agenda</p>
              </Link>
              <Link className='link-logo' href={`/user/${id}/dashboard`} as={`/user/${id}/dashboard`}>
                <div className="logo-container">
                  <div style={{ backgroundColor: color }} className="logo"></div>
                </div>
              </Link>
              <Link className='link' href={`/user/${id}/messagerie`} as={`/user/${id}/messagerie`}>
                <FontAwesomeIcon icon={faCommenting} className="msg icon"/>
                <p>Messagerie</p>
              </Link>
              <Link className='link' href={`/user/${id}/profil`} as={`/user/${id}/profil`}>
                <FontAwesomeIcon icon={faUserMd} className="user icon"/>
                <p>Profil</p>
              </Link>
          </div>
        </div>
      </>
    )
}

export default UserRecherche;