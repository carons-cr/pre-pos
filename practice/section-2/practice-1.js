'use strict';

function countSameElements(collection) {
  var resultArray=new Array();
  var elementsArray=new Array();
  elementsArray[0]=new Array();
  elementsArray[0][0] =collection[0];
  for (var i = 1; i < collection.length; i++){
    var h=0;
    if (collection[i] == elementsArray[elementsArray.length-1][0]) {
      elementsArray[elementsArray.length-1][elementsArray[elementsArray.length-1].length] = collection[i];
    } else {
      for (var j = elementsArray.length - 1; j >= 0; j--) {
        if (collection[i] == elementsArray[j][0]) {
          elementsArray[j][elementsArray[j].length] = collection[i];
          h = 1;
        }
      }
      if (h != 1) {
        var length=elementsArray.length;
        elementsArray[length] = new Array();
        elementsArray[length][0] = collection[i];
      }
    }
  }
  for(var i=0;i<elementsArray.length;i++){
    resultArray[i]={}; //定义数组是一个对象
    resultArray[i].key=elementsArray[i][0];
    resultArray[i].count=elementsArray[i].length;
  }
  return resultArray;
}
