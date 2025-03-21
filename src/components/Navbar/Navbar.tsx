import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Logo_Kreativa_Krafter_Trädgård-removebg-preview 1.png';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#EAE8E1] shadow-md top-0 left-0 w-full z-100">
            <nav className="flex justify-between px-6 md:px-12 py-4">

                {/* Logga */}
                <div className="flex">
                    <img src={logo} alt="Kreativa Krafter Trädgård" className="h-12 md:h-16"/>
                </div>

                {/* Hamburgermeny för mobil */}
                <button 
                    className="md:hidden text-emerald-900 focus:outline-none" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigeringslänkar */}
                <ul className={`absolute md:static top-20 left-0 w-full md:w-auto bg-[#EAE8E1]
                    flex flex-col md:flex-row items-center md:space-x-10 transition-all duration-300 ${isOpen ? "block" : "hidden"} md:flex`}>
                    {["Hem", "Våra tjänster", "Produkter", "Kontakt"].map((text, index) => (
                        <li key={index} className="py-4 md:py-0 text-lg ml-6 md:ml-12">
                            <NavLink 
                                to={text === "Hem" ? "/" : `/${text.toLowerCase().replace(" ", "-")}`} 
                                className={({ isActive }) => isActive ? "font-bold text-[#3C6255]" : "hover:text-emerald-700"}
                            >
                                {text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
