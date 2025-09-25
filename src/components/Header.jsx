// Importerer Twitter-ikon fra react-icons

import { FiTwitter } from "react-icons/fi";

// Header-komponenten viser toppen af appen med logo og navn (Pipper)
const Header = () => {
  return (
    // Header med kantlinje og centreret indhold
    <header className="flex justify-center border-b border-gray-300">
      {/* Overskrift med ikon (logo) + tekst (Pipper) */}
      <h1 className="text-[#26a7de] flex items-center gap-2 text-4xl py-8 ">
        <FiTwitter /> <span>Pipper</span>
      </h1>
    </header>
  );
};

// Gør Header tilgængelig for resten af appen
export default Header;
