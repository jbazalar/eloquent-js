function logFive(seq){
  for(seq.count=0;seq.count < 5; seq.count++){
    if(seq.count < seq.length){
      console.log(seq.val(seq.count));
    }else{ break; }
  }
}

function ArraySeq(arr){
  this.arr = arr;
  this.start = 0;
  this.count = 0;
  this.val = function(index){
    return this.arr[index];
  };
  this.length = this.arr.length;
}

function RangeSeq(start,end){
  this.start = start;
  this.end = end;
  this.count = 0;
  this.arr=[];
  for(var i=start;i<end;i++){
    this.arr.push(i);
  }
  this.val = function(index){
    return this.arr[index];
  };
}
Object.defineProperty(RangeSeq.prototype, "length", {get: function(){
  return this.arr.length;
}});

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104