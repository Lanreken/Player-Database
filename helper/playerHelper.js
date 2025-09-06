const positionNumberRules = () => {
  return {
    GK: [1],
    CB: [2, 4, 5],
    LB: [3, 13],
    RB: [12, 14],
    DM: [6, 15, 16],
    CM: [8, 17, 18],
    AM: [10, 19, 20],
    LW: [7, 24],
    RW: [11, 21, 23],
    ST: [9, 22],
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
