//import Image from 'next/image';
import styles from "../../styles/navbar.module.css";

export default function NabvaCandidate() {

    return(
        <>
            <div className="sidebar sidebar-none">
                <div className="logo-details">
                    <div>
                        {/*<Image
                        src="/images/logo-isw.jpg"
                        className={styles.imgLogo}
                        alt="profileImg"
                        width="60px"
                        height="70px" />*/}
                    </div>
                    <div className="logo_name">Unipoli ISW</div>
                    <i className='bx bx-menu btnOne' id="btn"></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="#">
                            <i className='bx bx-folder'></i>
                            <span className="links_name">Repositorios</span>
                        </a>
                        <span className="tooltip">Repositorios</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-user'></i>
                            <span className="links_name">Configuración</span>
                        </a>
                        <span className="tooltip">Configuración</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-pie-chart-alt-2'></i>
                            <span className="links_name">Estadísticas</span>
                        </a>
                        <span className="tooltip">Estadísticas</span>
                    </li>
                    <li className="profile">
                        <div className="profile-details">
                            <div className="name_job">
                                <div className="name">Manuel Alberto</div>
                                <div className="job">Alumno</div>
                            </div>
                        </div>
                        <i className='bx bx-log-out' id="log_out"></i>
                    </li>
                </ul>
            </div>
            <div className="navbar-side">
                <div>
                    <i className='bx bx-menu btnTwo' id="btn"></i>
                </div>
            </div>
        </>
    );
}