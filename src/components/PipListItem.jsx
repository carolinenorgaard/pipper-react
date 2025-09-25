// Importerer tre ikoner fra react-icons biblioteket (besked, retweet og hjerte)

import { FiMessageCircle, FiRepeat, FiHeart } from "react-icons/fi";
// useMemo hook bruges til at optimere beregning af avatar (kun når det er nødvendigt)

import { useMemo } from "react";
// Importerer createAvatar funktion og bottts-stil fra Dicebear (genererer avatarer)

import { createAvatar } from "@dicebear/core";
import { bottts } from "@dicebear/collection";

// Komponent til at vise ét enkelt pip (besked) i listen

const PipListItem = ({ pip }) => {
  // Bruger useMemo til kun at generere en avatar når pip.user ændrer sig

  const avatar = useMemo(() => {
    return createAvatar(bottts, {
      size: 50,
      seed: pip.user,
    }).toDataUri();
  }, []);

  return (
    // Hvert pip renderes som et listeelement

    <li className="border-b border-gray-300" key={pip.date}>
      {/* Viser tidspunktet for pippen i dansk format */}

      <time className="text-xs text-gray-500 flex justify-end pr-2">
        {pip.date.toLocaleString("da-DK", {
          dateStyle: "long",
          timeStyle: "short",
        })}
      </time>
      {/* Brugerens avatar + navn */}

      <div className="flex items-end gap-2 ">
        <img src={avatar} alt="Avatar" />
        <p>{pip.user}:</p>
      </div>
      {/* Selve pip-teksten */}

      <div className="p-4">
        <p>{pip.text}</p>
      </div>
      {/* Interaktionsknapper (for nu bare visuelle placeholders) */}

      <div className="flex justify-between p-4">
        <div className="flex items-center gap-2">
          <FiMessageCircle />0
        </div>
        <div className="flex items-center gap-2">
          <FiRepeat />0
        </div>
        <div className="flex items-center gap-2">
          <FiHeart />0
        </div>
      </div>
    </li>
  );
};

// Eksporterer PipListItem, så den kan bruges i PipList komponenten

export default PipListItem;
