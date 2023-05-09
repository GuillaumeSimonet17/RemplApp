import Link from 'next/link';
import Navbar from '../../../../components/Navbar'
import { useRouter } from 'next/router'
import { useState } from 'react';
import { start } from "repl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders } from '@fortawesome/free-solid-svg-icons'

function UserRecherche() {
    const router = useRouter()
    const { id } = router.query
    let top = 0;
    let [topVal, setTopVal] = useState(200);
    let y = 0;

    // function mouseDown(event: MouseEvent) {
    //     // let startY = event.clientY;
    //     // function onmousemove(event: MouseEvent) {
    //     //     y = event.clientY;
    //     //     top = startY - topVal;
    //     //     setTopVal(y - top);
    //     // }
    //     //     document.addEventListener("mousemove", onmousemove);
    //     //     document.addEventListener("mouseup", () => {
    //     //     document.removeEventListener("mousemove", onmousemove);
    //     // });
    // }
    // if (topVal < 170)
    //     setTopVal(200);
    // if (topVal > 435)
    //     setTopVal(435);
    

    return (
        <main>
            <div className="search-body">
                <Navbar />
                
                <div className="search-container">
                    <Link className='search-filters-link' href="#">
                        <h3>Ma recherche</h3>
                        <p>3 prochains mois &gt; 0 € / jour </p>
                    </Link>
                </div>
                <div className="content">
                    <div className="map-container">
                        <div className="map"></div>
                    </div>
                    {/* <div onMouseDown={mouseDown} style={{ top: topVal+"px" }} id="res" className="results"> */}
                    <div id="res" className="results">
                        <div className="handler-container">
                            <div className="handler"></div>
                        </div>
                        <div className="results-container">
                            <div className="result-content">
                                <div className="filter-container">
                                    <div className="filter">
                                        <p>Filtrer mes résultats</p>
                                        <FontAwesomeIcon icon={faSliders} className="slider icon"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}


export default UserRecherche