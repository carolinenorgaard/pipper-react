// Importerer PipListItem-komponenten, som viser ét enkelt pip i listen
import PipListItem from "./PipListItem";

// PipList-komponenten modtager en liste af pips som prop og viser dem
// pips er et array/variabel af pip-objekter, som hver indeholder text, user og date
// PipList-komponenten modtager pips som prop
const PipList = ({ pips }) => {
  return (
    <ul className="">
      {pips
        // Sorterer pips, så de nyeste vises først (b.date - a.date giver faldende rækkefølge)
        .sort((a, b) => b.date - a.date)
        // Mapper over alle pips og laver et PipListItem for hver
        .map((pip) => {
          // Hvert PipListItem får en unik key (her baseret på datoen) og selve pip-objektet
          return <PipListItem key={pip.date} pip={pip} />;
        })}
    </ul>
  );
};

// Eksporterer PipList, så den kan bruges i App-komponenten
export default PipList;
