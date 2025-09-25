// Importerer useState fra React, så vi kan lave state-variabler

import { useState } from "react";

// PipForm-komponenten modtager setPips som prop fra App
// setPips = funktion til at opdatere listen af pips
// Den bruges til at tilføje nye pips til listen
const PipForm = ({ setPips }) => {
  // State til at gemme den tekst (pip-besked) brugeren skriver
  const [text, setText] = useState("");

  // State til at gemme brugernavnet
  const [user, setUser] = useState("");

  return (
    // Formularen der håndterer indsendelse af nye pips
    <form
      className="grid gap-2 border-b border-gray-300 px-2 p-4"
      onSubmit={(e) => {
        // Forhindrer siden i at reloade ved submit
        e.preventDefault();
        // Tilføjer et nyt pip til listen via setPips
        setPips((prevPips) => [...prevPips, { text, user, date: new Date() }]);
        // Nulstiller inputfelterne bagefter
        setUser("");
        setText("");
      }}
    >
      {/* Inputfelt til brugernavn */}
      <div className="grid gap-1">
        <label htmlFor="pip-user">User</label>
        <input
          id="pip-user"
          className="border rounded px-2 py-1 "
          type="text"
          placeholder="Skiv dit nav her"
          value={user}
          // Opdaterer state når man skriver i feltet
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      {/* Inputfelt til selve pip-beskeden */}
      <div className="grid gap-1">
        <label htmlFor="pip-text">Message</label>
        <input
          id="pip-text"
          className="border rounded px-2 py-1 "
          type="text"
          placeholder="Skiv dit pip her"
          value={text}
          //Opdaterer state når man skriver i feltet
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* Knap til at indsende formularen */}
      <button
        type="submit"
        className="bg-[#26a7de] text-white rounded-full px-8 py-2 w-max ml-auto font-bold my-2"
      >
        Pip
      </button>
    </form>
  );
};

// Eksporterer PipForm så den kan bruges i App-komponenten

export default PipForm;
