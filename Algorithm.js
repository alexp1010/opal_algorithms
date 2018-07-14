var QuickSortAlgorithm = {
    array: [1, 4, 9, 3, 5, 9, 7, 2, 1], // to implement
    
    sortArrayPart : function(index, pivotIndex) {
	
			
      var beginPivotIndex = pivotIndex;
      var beginIndex = index;
      
      while(index < pivotIndex) {
      	if(this.array[index] >= this.array[pivotIndex]) {
        	var biggerValue = this.array[index];
        	this.array[index] = this.array[pivotIndex - 1];
          this.array[pivotIndex - 1] = this.array[pivotIndex];
          this.array[pivotIndex] = biggerValue;
          
          pivotIndex = pivotIndex - 1;          
        }
      	
        if(this.array[index] < this.array[pivotIndex]) {
        	index = index + 1;
        }
      }
    
      // left part
      if((pivotIndex - beginIndex) > 1) {
      	this.sortArrayPart(beginIndex, pivotIndex - 1);
      }
      
      // right part
      if((beginPivotIndex - (pivotIndex + 1) > 1)) {
      	this.sortArrayPart(pivotIndex + 1, beginPivotIndex);
      }
    },
    
    sortArray : function() {
			
      var index = 0;
      var pivotIndex = this.array.length - 1;
      var pivot = this.array[pivotIndex];
      
      this.sortArrayPart(index, pivotIndex);
      
      return this.array;
    },
    
    getArray : function()  {
    	
      return this.array;
    }
};