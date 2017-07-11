'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC=new Array();
  var h=0;
  for(var i=0;i<collectionA.length;i++){
     for(var j=0;j<collectionB.length;j++){
        for(var k=0;k<collectionB[j].length;k++){
           if(collectionA[i]==collectionB[j][k]){
               collectionC[h++]=collectionA[i];
           }
        }
     }
  }
  return collectionC;
}
