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
//console.log('first:' +this.symbol);
    }

    getCurrentPlayerSymbol() {
      
      return this.symbol;

    }

    nextTurn(rowIndex, columnIndex) {
      if(this.matrix[rowIndex][columnIndex]==0 ){
      this.matrix[rowIndex][columnIndex] = this.symbol;
       // console.log(this.matrix[rowIndex][columnIndex]);
      if(this.player == 1) this.player = 2;         
     
        
        for(let i=0; i <3; i++){
          if(this.matrix[i][0]==this.symbol &&
            this.matrix[i][1]==this.symbol &&
            this.matrix[i][2] ==this.symbol){
            this.win =true;
            
          }
        if(this.matrix[0][i]==this.symbol &&
            this.matrix[1][i]==this.symbol &&
            this.matrix[2][i] == this.symbol ){
           this.win =true;
           
           }
          
         
        }
        if(this.matrix[0][0] == this.symbol &&
            this.matrix[1][1] == this.symbol &&
            this.matrix[2][2] == this.symbol ){
            this.win =true;
           
          }
        
          if(this.matrix[0][2] == this.symbol &&
            this.matrix[1][1] == this.symbol &&
            this.matrix[2][0] == this.symbol ){
            this.win =true;
         
          }
        if( this.win == true){
           this.winner = this.symbol;
        }
            if(this.symbol == 'x') {this.symbol = 'o';} else {this.symbol = 'x';};
         
      
        }
     //console.log('win'+this.win+'  curr'+this.symbol);
      
     //console.log('row: '+rowIndex+'column: '+columnIndex + '__sym  ' +this.symbol);

    }

    isFinished() {
        if(this.winner == null)
        {for(let i = 0; i <3; i++){
            if(this.matrix[i].indexOf(0)!=-1){
              this.win = false;
              break;
            }
            this.win = true;
            
        }}
        return this.win;

    }

    getWinner() {
    
    return this.winner;
}

    noMoreTurns() {
        
        for(let i = 0; i <3; i++){
            if(this.matrix[i].indexOf(0)!=-1){
              this.noturns = false;
              break;
            }
            this.noturns = true;
            
        }
      return this.noturns;

    }

    isDraw() {
        
        if(this.winner == null){
            for(let i = 0; i <3; i++){
                  if(this.matrix[i].indexOf(0)!=-1){
                    this.isdraw = false;
                    break;
                  }
                  this.isdraw = true;
                  
              }
        // if(this.win == 1) this.isdraw = false;
      
    
}
      
      return this.isdraw;

    }

    getFieldValue(rowIndex, colIndex) {
      return (this.matrix[rowIndex][colIndex] || null);
      

    }
}
   game = new TicTacToe();
           
            
            
            


module.exports = TicTacToe;
