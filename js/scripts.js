function alertNeighbor() {

  // vaiables
  const zero = "0";
  const one = "Beep";
  const two = "Boop";
  const three = "won't you be my neighbor?";
  const four = "'0', 'Beep', 'Boop', 'won't you be my neighbor', 4";

  // numbers less than 5
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
    let result = [];
    for (let i = 5; i != 6; ++i)
    return(four + result.push(i));
    for (let i = 5; i != 7; ++i)
    return(four + result.push(i));
    for (let i = 5; i != 8; ++i)
    return(four + result.push(i));
    for (let i = 5; i != 9; ++i)
    return(four + result.push(i));
    for (let i = 5; i != 10; ++i)
    return(four + result.push(i));

    // numbers more than 9 (more than 1 character number)
    numberMoreThan9 = 0;
    for (let i = 0; i < numberMoreThan9.length; i++);
    if (numberMoreThan9[i] == 3) {
      return three;
    }
    else if (numberMoreThan9[i] == 2 && numberMoreThan9[i] !== 3) {
      return two;
    }
    else if (numberMoreThan9[i] == 1 && numberMoreThan9[i] !== 2 && numberMoreThan9[i] !== 3) {
      return one;
    }
    // UI                
    $(document).ready(function () {
      $("form#users").submit(function (event) {
        event.preventDefault();
        const number = $("#integer").val();
        const numbersInput = alertNeighbor(number);
        $("#alert").html(numbersInput);
      })

    })
  })  
})
