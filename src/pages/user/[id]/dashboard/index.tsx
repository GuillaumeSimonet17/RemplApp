import { NextPage } from "next";
import Navbar from '../../../../components/Navbar';
import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function switchPage(page_id: number) {
  const currentPage = document.querySelector(".page.active");
  if (currentPage?.classList.contains('active'))
    currentPage.classList.remove("active");

  const nextPage = document.querySelector(`.page[data-page="${page_id}"]`);
  nextPage.classList.add("active")
}
function UserDashboard() {
  const router = useRouter()
  const { id } = router.query

  const handleClick = (tab_switcher: any) => {
    const page_id = tab_switcher.dataset.tab;
    const activeTab = document.querySelector('.tab.active');
    activeTab?.classList.remove('active');

    tab_switcher.parentNode.classList.add('active');

    switchPage(page_id);
  }

  useEffect(() => {
    const tab_switchers = document.querySelectorAll('[data-switcher]');

    for (let i = 0; i < tab_switchers.length; i++) {
      const tab_switcher = tab_switchers[i];

      tab_switcher.addEventListener('click', () => {
        handleClick(tab_switcher);
      });
    }
  }, []);




  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard_container">
        <div className="sous_menu">
          <nav>
            <ul className="tabs">
              <li className="tab active">
                <button data-switcher onClick={(event) => handleClick(event.target)} data-tab="1">Archives</button>
              </li>
              <li className="tab ">
                <button data-switcher onClick={(event) => handleClick(event.target)} data-tab="2">A traiter</button>
              </li>
              <li className="tab ">
                <button data-switcher onClick={(event) => handleClick(event.target)} data-tab="3">A venir</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="pages">
          <div className="page active page_default" data-page="0">
            <p>Tout à été traité ! Merci</p>
            <span>
              <FontAwesomeIcon icon={faSearch} className="search icon"/>
              <button>Rechercher un remplacement</button>
            </span>
          </div>
          <div className="page " data-page="1">
            <h2>Archives</h2>
          </div>
          <div className="page " data-page="2">
            <h2>A traiter</h2>
          </div>
          <div className="page " data-page="3">
            <h2>A venir</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard