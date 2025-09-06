const positionNumberRules = () => {
  return {
    GK: [1],
    CB: [4, 5, 6, 13, 15],
    LB: [2, 3, 23],
    RB: [2, 12, 20],
    DM: [6, 14, 18],
    CM: [8, 16],
    AM: [10, 8],
    LW: [7, 11, 19],
    RW: [7, 11, 21],
    ST: [9, 10, 11, 7],
  };
};

// const validatePlayer = (player, existingPlayers) => {
//   const { position, number, isStarting } = player;

//   const validNumbers = positionNumberRules[position];

//   // Check for invalid number for the position
//   if (!validNumbers?.includes(number)) {
//     throw new Error(
//       `Invalid number ${number} for position ${position}.
//        Allowed: ${validNumbers ? validNumbers.join(", ") : "None specified"}.`
//     );
//   }

//   // Check if player number is already taken
//   if (existingPlayers.some((p) => p.number === number)) {
//     throw new Error(`Number ${number} is already taken by another player.`);
//   }

//   // Check starter count limit
//   const starterCount = existingPlayers.filter((p) => p.isStarting).length;
//   if (isStarting && starterCount >= 11) {
//     throw new Error("Cannot have more than 11 starters.");
//   }

//   // If all checks pass, return true
//   return true;
// };

module.exports = { positionNumberRules };
