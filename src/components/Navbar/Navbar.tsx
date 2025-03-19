import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo_Kreativa_Krafter_Trädgård-removebg-preview 1.png';

export const Navbar: React.FC = () => {
    return (
        <section className="bg-[#EAE8E1] flex items-center p-10 py-10 h-20 shadow-md z-100">  
            {/* Logga */}
            <div className="p-10">
                <img src={logo} alt="Kreativa Krafter Trädgård"/>
            </div>
            {/* Navigering */}
            <nav>
                <ul className="flex justify-between items-center space-x-20 ml-200 text-emerald-900">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? "font-bold text-[#3C6255]" : "hover:text-emerald-700"}
                        >
                            Startsida
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/om-oss" 
                            className={({ isActive }) => isActive ? "font-bold text-[#3C6255]" : "hover:text-emerald-700"}
                        >
                            Om oss
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/butik" 
                            className={({ isActive }) => isActive ? "font-bold text-[#3C6255]" : "hover:text-emerald-700"}
                        >
                            Butik
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/kontakt" 
                            className={({ isActive }) => isActive ? "font-bold text-[#3C6255]" : "hover:text-emerald-700"}
                        >
                            Kontakt
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    );
};
