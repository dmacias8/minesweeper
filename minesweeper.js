const printBoard = board => {
  console.log("Current Board:")
  console.log(board[0].join(' | '));   //check step 9
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

const blankLine = '  |   |  ';
console.log("This is what an empty board would look like:");
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

const guessLine = '1 |   |  ';
const bombLine = '  | B |  ';
console.log("This is what a board with a guess and a bomb on it would look like:")
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);

const board = [ 
  ['  |   |  '], 
  ['  |   |  '], 
  ['  |   |  '], 
];

console.log(printBoard(board));