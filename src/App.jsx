import { useState } from "react";

function App() {
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

  const [pips, setPips] = useState(defaultPips);
  const [text, setText] = useState("");
  const [user, setUser] = useState("");

  return (
    <>
      <header className=""></header>
      <main className="">
        <ul>
          {pips.map((pip) => {
            return (
              <li className="border " key={pip.date}>
                <time>
                  {pip.date.toLocaleString("da-DK", {
                    dateStyle: "long",
                    timeStyle: "short",
                  })}
                </time>
                <h2>{pip.text}</h2>
                <p>{pip.user}</p>
              </li>
            );
          })}
        </ul>

        <form
          className="mt-8"
          onSubmit={(e) => {
            e.preventDefault();
            setPips([...pips, { text, user, date: new Date() }]);
            setUser("");
            setText("");
          }}
        >
          <input
            className="border "
            type="text"
            placeholder="Skiv dit pip her"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            className="border "
            type="text"
            placeholder="Skiv dit nav her"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <button type="submit">Tilføj pip</button>
        </form>
      </main>
      <footer className=""></footer>
    </>
  );
}

export default App;
