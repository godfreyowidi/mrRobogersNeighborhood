## Tests
### Describe: alertNeighbor()

```
Test: "It should return an array with a 0 if the number 0 is inputted"
Code: alertNeighor(0)
Expect output: (alertNeighbor(0).toEqual([0]);
```
```
Test: "It should return a string "Beep" if the number 1 is inputted"
Code: alertNeighor(1)
Expect output: "Beep";
```
```
Test: "It should return a string "Boop" if the number 2 is inputted"
Code: alertNeighor(2)
Expect output: "Boop";
```

```
Test: "It should return a string "Won't you be my neighbor?" if the integer number 3 is inputted"
Code: alertNeighor(3)
Expect output: "Won't you be my neighbor?";
```

```
Test: "It should return a string "Won't you be my neighbor?" if the number inputted contain number 3"
Code: alertNeighor(530)
Expect output: "Won't you be my neighbor?";
```

```
Test: "It should return a string "Boop" if the number with the highest value among the input is 2"
Code: alertNeighor(1102)
Expect output: "Boop";
```

```
Test: "It should return a string "Beep" if the number with the highest value among the input is 1"
Code: alertNeighor(1000)
Expect output: "Beep";
```

```
Test: "It should return a string ("0", "Beep", "Boop", "Won't you be my neighbor?", 4, 4+1, 4+2..) if the number input is either 4, 5, 6, 7, 8, 9"
Code: alertNeighor(9)
Expect output: ""0", "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9";
```

```
Test: "It should return 0 if the input is a string or special characters only"
Code: alertNeighor("hey!")
Expect output: 0;
```

```
Test: "It should return an operator number match regardless of punctuation."
Code: alertNeighor("#2")
Expect output: "Boop";

