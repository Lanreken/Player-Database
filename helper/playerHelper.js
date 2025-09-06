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

module.exports = { positionNumberRules };
