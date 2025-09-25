// Importerer React hooket useState, og de forskellige komponenter vi selv har lavet

import { useState } from "react";
import Menu from "./components/Menu";
import PipForm from "./components/PipForm";
import PipList from "./components/PipList";
import Header from "./components/Header";

function App() {
  // Opretter en standardliste af pips (beskeder) som vises fra start

  const defaultPips = [
    {
      date: new Date("2025-09-20T09:55:00"),
      text: "Husk at drikke vand",
      user: "Caroline",
    },
    {
      date: new Date("2025-09-22T22:30:00"),
      text: "Husk at lave lektier",
      user: "Mette",
    },
    {
      date: new Date("2025-09-23T10:00:00"),
      text: "Husk at gå en tur",
      user: "Sofie",
    },
  ];

  // State-variabel til at gemme pips og muligheden for at opdatere dem
  // useState initialiseres med defaultPips

  const [pips, setPips] = useState(defaultPips);

  return (
    <>
      {/* Header-komponenten – viser topsektionen af appen */}
      <Header />
      {/* Main-indhold opdelt i 3 kolonner på større skærme */}
      <main className="grid md:grid-cols-3 h-screen">
        {/* Venstre kolonne: Menu-komponenten */}
        <Menu />
        {/* Midterste kolonne: Formular til at tilføje pips og liste af pips */}
        <div className="">
          {/* PipForm modtager setPips, så den kan tilføje nye pips til state */}
          <PipForm setPips={setPips} />
          {/* PipList modtager pips og viser dem som en liste */}
          <PipList pips={pips} />
        </div>
        {/* Højre kolonne: "Trending pips" sektion */}
        <div className="p-4 flex flex-col items-center shadow-lg">
          <div className="bg-gray-200 p-4 rounded-lg ">
            <h4 className="text-2xl font-bold mb-4">Trending pips</h4>
            <ul className="space-y-8">
              {/* Eksempler på trending pips (hardkodet for nu) */}
              <li>
                <a href="#" className="">
                  <h5 className="text-gray-500">React 19</h5>
                  <p className="font-bold">Trending in Technology</p>
                  <p className="">15.2K Pips</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <h5 className="text-gray-500">#WebDev</h5>
                  <p className="font-bold">Trending in Technology</p>
                  <p className="">8,456 Pips</p>
                </a>
              </li>
              <li>
                <a href="#" className="">
                  <h5 className="text-gray-500">TypeScript</h5>
                  <p className="font-bold">Trending in Technology</p>
                  <p className="">4,892 Pips</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
// Eksporterer App-komponenten, så den kan bruges af React2

export default App;
