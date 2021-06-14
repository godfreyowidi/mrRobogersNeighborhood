
  // vaiables
  const zero = "0";
  const one = "Beep";
  const two = "Boop";
  const three = "won't you be my neighbor?";
  const four = "'0', 'Beep', 'Boop', 'won't you be my neighbor', 4";

  // numbers less than 5
  function numbersLessThan5(number) {
    if (number == 0) {
      return zero;
    }
    else if (number == 1) {
      return one;
    }
    else if (number == 2) {
      return two;
    }
    else if (number == 3) {
      return three;
    }
    else if (number == 4) {
      return four;
    }
  
    // numbers from 5 - 9
  function numberFrom5To9(number) {
    let result = [];
    for (let i = 5; i < number.length; ++i)
    if (number.includes(5)) {
      return(four + result.push[i]);
    } else if (number.icludes(6)) {
      return(four + result.push[i]);
    } else if (number.includes(7)) {
      return(four + result.push[i]);
    } else if (number.icludes(8)) {
      return(four + result.push[i]);
    } else if (number.includes(9));
      return(four + result.push[i]);
  }
    // numbers more than 9 (more than 1 character number)
  function numberMoreThan9(number) {
    for (let i = 0; i < number.length; i++);
    if (number[i] == 3) {
      return three;
    }
    else if (number[i] == 2 && number[i] !== 3) {
      return two;
    }
    else if (number[i] == 1 && number[i] !== 2 && number[i] !== 3) {
      return one;
    }
  }
    // UI                
$(document).ready(function () {
  $("form#users").submit(function (event) {
    event.preventDefault();
    const number = $("#integer").val();
    const numbersInput = alertNeighbor(number);
    $("#alert").html(numbersInput);
  });
});
 

