function alertNeighbor() {
  // global vaiables
  const zero = "0";
  const one = "Beep";
  const two = "Boop";
  const three = "won't you be my neighbor?";
  const four = "'0', 'Beep', 'Boop', 'won't you be my neighbor', 4";

  // numbers less than 5
  function numbersLessThan5(number) {
    if (number === 0) { 
    return zero;
  } else if (number === 1) {
    return one;
  } else if (number === 2) {
      return two;
  } else if (number === 3) {
      return three;
  } else if (number === 4) {
      return four;
  } else {
    return 0;
  }

  // numbers from 5 - 9
  function numbers5To9(number) {
    let fiveToNine = [];
    if (number === 5) {
      for (let i = 5; i != 6; ++i) 
      return four + fiveToNine.push(i)
    } else if (number === 6) {
      for (let i = 5; i != 7; ++i) 
      return four + fiveToNine.push(i)
    } else if (number === 7) {
      for (let i = 5; i != 8; ++i) 
      return four + fiveToNine.push(i)
    } else if (number === 8) {
      for (let i = 5; i != 9; ++i) 
      return four + fiveToNine.push(i)
    } else if (number === 9) {
      for (let i = 5; i != 10; ++i) 
      return four + fiveToNine.push(i)
    }
  }

  // numbers more than 9 (more than 1 character number)
  function numbersMorethan9(number) {
    for (let i=0; i <= i.length-1; i++);
      if (i.number === 3) {
      return three;
    } else if (i.number === 2) {
      return two;
    } else if (i.number === 1) {
      return one;
    }
  }

  // UI
  $(document).ready(function() {
    $("form#numberAlert").submit(function(event){
      event.preventDefault();
      const number = $("#integer").val();
      const numbersInput = alertNeighbor(number);
      $("#alert").html(numbersInput);
    });
  });
}