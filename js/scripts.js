const beep = "beep!"
const boop = "boop!"
const neighbor = "Won't you be my neighbor?"


function beepBoop(number) {
  let numberList = [];
  for (let i = 0; i <= number; i++) {
    numberList.push(i.toString());
  };

  let mrRobogersNeigboorhood = numbers.map(function(numberEntry) {
    if (numberEntry.includes("3")) {
      return numberEntry = neighbor;
    } else if (numberEntry.includes("2")) {
      return numberEntry = boop;
    } else if (numberEntry.includes("1")) {
      return numberEntry = beep;
    } else {
      return numberEntry;
    };
  });
  return mrRobogersNeigboorhood;
};

  
  
  
  
  
  
  
  
  
  
  
  
  
