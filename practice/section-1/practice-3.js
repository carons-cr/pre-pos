'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionC=new Array();
  var k=0;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<objectB.value.length;j++){
      if(collectionA[i]==objectB.value[j]){
        collectionC[k++]=objectB.value[j];
      }
    }
  }
  return collectionC;
}
