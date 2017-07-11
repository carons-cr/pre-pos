'use strict';

function countSameElements(collection) {
  var elementsArray=new Array();
  var resultArray=new Array();
  elementsArray[0]=new Array();
  elementsArray[0][0] =collection[0];
  for (var i = 1; i < collection.length; i++){
    var isInPreArr=0;
    if (collection[i] == elementsArray[elementsArray.length-1][0]) {
      elementsArray[elementsArray.length-1][elementsArray[elementsArray.length-1].length] = collection[i];
    }else if(collection[i].length>1) {
      var numStr="";
      var num=0;
      for(var j1=0;j1<collection[i].length;j1++){
        if(collection[i].charAt(j1)>=0&&collection[i].charAt(j1)<10){
          numStr+=collection[i].charAt(j1);
        }
      }
      num=parseInt(numStr);
      for (var j2 = elementsArray.length - 1; j2 >= 0; j2--) {
        if (collection[i].charAt(0) == elementsArray[j2][0]) {
          for(var k=0;k<num;k++){
            elementsArray[j2][elementsArray[j2].length] = collection[i].charAt(0);
          }
          isInPreArr = 1;
        }
      }
      if (isInPreArr != 1) {
        var length=elementsArray.length;
        elementsArray[length] = new Array();
        for(var k=0;k<num;k++){
          elementsArray[length][elementsArray[length].length] = collection[i].charAt(0);
        }
      }
    }else {
      for (var j = elementsArray.length - 1; j >= 0; j--) {
        if (collection[i] == elementsArray[j][0]) {
          elementsArray[j][elementsArray[j].length] = collection[i];
          isInPreArr = 1;
        }
      }
      if (isInPreArr != 1) {
        var length=elementsArray.length;
        elementsArray[length] = new Array();
        elementsArray[length][0] = collection[i];
      }
    }
  }
  for(var i=0;i<elementsArray.length;i++){
    resultArray[i]={}; //定义数组元素是一个对象
    resultArray[i].name=elementsArray[i][0];
    resultArray[i].summary=elementsArray[i].length;
  }
  return resultArray;
}
