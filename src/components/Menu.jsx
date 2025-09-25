// Importerer ikoner fra react-icons biblioteket
// Hvert ikon repræsenterer en menu-funktion (Home, Explore, Messages osv.)
import {
  FiHome,
  FiHash,
  FiMail,
  FiBookmark,
  FiList,
  FiUser,
  FiMoreHorizontal,
} from "react-icons/fi";

// Menu-komponenten viser navigationen i venstre side af layoutet

const Menu = () => {
  return (
    // Wrapper div med padding, flex-layout og skygge

    <div className="p-4 flex flex-col items-center shadow-lg">
      <nav className="">
        {/* Liste af navigationspunkter */}
        <ul className="text-2xl font-semibold space-y-4">
          {/* Hvert <li> er et menupunkt med ikon + tekst */}
          <li>
            <a className="flex items-center gap-2" href="#">
              <FiHome /> <span>Home</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2" href="#">
              <FiHash /> <span>Explore</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2" href="#">
              <FiMail /> <span>Messages</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2" href="#">
              <FiBookmark /> <span>Bookmarks</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2" href="#">
              <FiList /> <span>Lists</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2" href="#">
              <FiUser /> <span>Profile</span>
            </a>
          </li>
          <li>
            <a className="flex items-center gap-2" href="#">
              <FiMoreHorizontal /> <span>More</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Eksporterer Menu så den kan bruges i App-komponenten
export default Menu;
