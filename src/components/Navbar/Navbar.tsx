import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/Logo_Kreativa_Krafter_Trädgård-removebg-preview 1.png';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-[#EAE8E1] shadow-md top-0 left-0 w-full z-50">
            <nav className="flex items-center justify-between px-6 md:px-12 py-4 relative">
                
                {/* Logga */}
                <div className="w-40 flex-shrink-0">
                    <img src={logo} alt="Kreativa Krafter Trädgård" className="w-full" />
                </div>

                {/* Navigeringslänkar */}
                <div className="flex-1 flex justify-center">
                    <ul className={`md:flex hidden space-x-10`}>
                        {["Hem", "Våra tjänster", "Produkter", "Kontakt"].map((text, index) => (
                            <li key={index} className="text-lg text-[#2f4b41]">
                                <NavLink 
                                    to={text === "Hem" ? "/" : `/${text.toLowerCase().replace(" ", "-")}`} 
                                    className={({ isActive }) => isActive ? "font-bold text-[#69ab94]" : "hover:text-emerald-600"}
                                >
                                    {text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hamburgermeny */}
                <button 
                    className="md:hidden text-emerald-900 focus:outline-none" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobilmeny */}
                {isOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-[#2f4b41] flex flex-col items-center space-y-4 py-4 shadow-md 
                    md:hidden text-white">
                        {["Hem", "Våra tjänster", "Produkter", "Kontakt"].map((text, index) => (
                            <li key={index} className="text-lg">
                                <NavLink 
                                    to={text === "Hem" ? "/" : `/${text.toLowerCase().replace(" ", "-")}`} 
                                    className={({ isActive }) => isActive ? "font-bold text-[#69ab94]" : "hover:text-emerald-400"}
                                    onClick={() => setIsOpen(false)} 
                                >
                                    {text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    );
};

