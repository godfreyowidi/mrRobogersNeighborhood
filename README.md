# _Mr Roboger's Neighborhood_

#### _The application output different alert messages depending on which number the user input_

#### By _**Godfrey Owidi**_

## Technologies Used

* _HTML5_
* _CSS_
* _Javascript_
* _jQuery_
*_Git_
*_Github_

## Description

## Tests

### Describe numberLessThan5()
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

### Describe numberMoreThan9()
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

### Describe numbersFrom5To9()
```
Test: "It should return a string ("0", "Beep", "Boop", "Won't you be my neighbor?", 4, 4+1, 4+2..) if the number input is either 4, 5, 6, 7, 8, 9"
Code: alertNeighor(9)
Expect output: ""0", "Beep", "Boop", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9";
```

```
Test: "It should return an operator number match regardless of punctuation."
Code: alertNeighor("#2")
Expect output: "Boop";
```

## Setup Requirements

* _Computer(Mac/PC)_
* _Browser_
* _Internet Connection_

## Installation

1. Clone the project repository from _[Github](https://github.com/godfreyowidi/mrRobogersNeighborhood)_

2. Identify the directory programmingLanguageSuggester and navigate to it using the terminal command ```cd mrRobogersNeighborhood``` 

3. While inside the working directroy (programmingLanguageSuggester), open the project on editor preferably VS code using the terminal command ```code .```

4. Identify index.html from the list of items display on the editor.

5. Right click on the file and choose to open with browser.

6. You can now emjoy viewing and reading through the page.

## Known Bugs

* _No bugs_

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact Information

__hello@godfrey.com__



