/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = function(board, word) {
  if (board.length === 0 || word.length === 0) return false;
  
  const rows = board.length;
  const cols = board[0].length;
  
  const findCharWithDfs = (board, row, col, remain) => {
    if (remain.length === 0) return true;
    if (row < 0 || row >= rows || col < 0 || col >= cols) return false
    if (board[row][col] !== remain[0]) return false;
  
    const currentChar = board[row][col];
    const remaining = remain.substring(1);
    board[row][col] = "checked"
    
    const result =
        findCharWithDfs(board, row + 1, col, remaining) ||
        findCharWithDfs(board, row - 1, col, remaining) ||
        findCharWithDfs(board, row, col + 1, remaining) ||
        findCharWithDfs(board, row, col - 1, remaining);
    
    board[row][col] = currentChar;
  
    return result;
  }

  
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (findCharWithDfs(board, i, j, word)) {
        return true;
      }
    }
  }
  
  return false;
};