class TicTacToe {
    constructor() {
      this.player = 1;
      this.symbol = 'x';
      this.matrix = [[0,0,0],[0,0,0],[0,0,0]];
      this.win = false;
      this.winner = null;
      this.noturns = false;
      this.field = null;
      this.isdraw = false;

    }

    getCurrentPlayerSymbol() {      
      return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
      let column = 0,
      leftDiagonal = 0,
      rightDiagonal = 0;

      if(this.matrix[rowIndex][columnIndex]==0 ){
        this.matrix[rowIndex][columnIndex] = this.symbol;      
        

        for(let i = 0; i < this.matrix[rowIndex].length; i++ ){
            let row = 0;
            if(this.matrix[i][columnIndex] == this.symbol){
                column++;
            }
            if(this.matrix[i][this.matrix[i].length-1-i] === this.symbol){
                rightDiagonal++;
            }
            for(let j = 0; j < this.matrix[i].length; j++){
                
                if(this.matrix[rowIndex][j] == this.symbol){
                    row++;
                }
                if( i == j){
                    if(this.matrix[i][j] == this.symbol){
                        leftDiagonal++;
                    }
                }           
                if(row === this.matrix[i].length || column === this.matrix[i].length
                    || leftDiagonal === this.matrix[i].length || rightDiagonal === this.matrix[i].length ){
                    this.win =true;
                    break;
                }             
            }        
        }      
        
          if( this.win == true)  this.winner = this.symbol;
          
          if(this.symbol == 'x') {
            this.symbol = 'o';
          } else {
            this.symbol = 'x';
          }     
      }
    }

    isFinished() {

        if(this.winner == null && this.noMoreTurns())  this.win = true;                
        
        return this.win;
    }

    getWinner() {

    return this.winner;

    }

    noMoreTurns() {
        
        for(let i = 0; i < this.matrix.length; i++){
            if(this.matrix[i].indexOf(0)!=-1){
              this.noturns = false;
              break;
            }
            this.noturns = true;            
        }

      return this.noturns;
    }

    isDraw() {
        
      if(this.winner == null && this.isFinished()) this.isdraw = true;     

      return this.isdraw;
    }

    getFieldValue(rowIndex, colIndex) {
      return (this.matrix[rowIndex][colIndex] || null);     

    }
}

module.exports = TicTacToe;
