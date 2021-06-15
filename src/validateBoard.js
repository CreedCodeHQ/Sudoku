
export const validateRow = (row, gameState) => {
  /**
   * 1 - 9
   * temp = []
   * every new number goes to temp
   * if there's a duplicate, return false
   * return true
   */
  const temp = [];
  for (let j = 0; j < 9; j++) {
    temp.push(gameState[row][j]);
  }
  return temp.length === [...new Set(temp)].length;
};

export const validateCol = (col, gameState) => {
  /**
   * Similar to validateRow but for j values
   */
  const temp = [];
  for (let i = 0; i < 9; i++) {
    temp.push(gameState[i][col]);
  }
  return temp.length === [...new Set(temp)].length;
};

export const validateAllRows = (gameState) => {
  for (let i = 0; i < 9; i++) {
    if (!validateRow(i, gameState)) return false;
  }
  return true;
};

export const validateAllCols = (gameState) => {
  for (let j = 0; j < 9; j++) {
    if (!validateCol(j, gameState)) return false;
  }
  return true;
};


// const validateGrid = (row, col) => {
// 	/**
// 	 * for(i=0,i<9,i+=3)
// 	 * 	for(j=0, j<0, j+=3)
// 	 * 		temp = []
// 	 * 		for (row=0, row<3, row++ )
// 	 * 			for(col=0, col<3,col++){
// 	 * 				temp.push(game[i+row][j+col])
// 	 * 			}
// 	 */

// }
