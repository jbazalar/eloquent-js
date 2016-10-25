var size = 8;
for(var i=0;i<size;i++){
  var row = "";
  for(var j=0;j<size;j++){
    var spot = (((i+j)%2)===0)?"_":"#";
    row = row + spot;
  }
  console.log(row);
}

/** Output (Used unscores instead of spaces show chess board correctly):

_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_
_#_#_#_#
#_#_#_#_

**/