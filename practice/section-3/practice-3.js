'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC=new Array();
  var elementsArray=new Array();
  elementsArray[0]=new Array();
  elementsArray[0][0] =collectionA[0];
  for (var i = 1; i < collectionA.length; i++){
    var isInPreArr=0;
    if (collectionA[i] == elementsArray[elementsArray.length-1][0]) {
      elementsArray[elementsArray.length-1][elementsArray[elementsArray.length-1].length] = collectionA[i];
    } else {
      for (var j = elementsArray.length - 1; j >= 0; j--) {
        if (collectionA[i] == elementsArray[j][0]) {
          elementsArray[j][elementsArray[j].length] = collectionA[i];
          isInPreArr = 1;
        }
      }
      if (isInPreArr != 1) {
        var length=elementsArray.length;
        elementsArray[length] = new Array();
        elementsArray[length][0] = collectionA[i];
      }
    }
  }
  for(var i=0;i<elementsArray.length;i++){
    collectionC[i]={}; //定义数组是一个对象
    collectionC[i].key=elementsArray[i][0];
    collectionC[i].count=elementsArray[i].length;
  }
  for(var i=0;i<collectionC.length;i++){
    for(var j=0;j<objectB.value.length;j++){
      if(collectionC[i].key==objectB.value[j]){
        if(collectionC[i].count>=3){
          collectionC[i].count-=parseInt(collectionC[i].count/3);
        }
      }
    }
  }
  return collectionC;
}
