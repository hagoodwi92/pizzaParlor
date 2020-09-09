# _Pizza Parlor_

#### This webpage simulates a pizza parlor submitting orders, Aug. 28, 2020

#### By _**Alex Goodwin**_

## Description

This webpage simulates customer's placing orders at a pizza restaurant. It calculates cost by taking into consideration the toppings and the size of pizza. 

## Specs
* Should correctly create a pizza object with properties
  * Sample Input: Small : Submit 
  * Sample Output(Console): [Pizza], Pizza {topping1: undefined, topping2: undefined, topping3: undefined, topping4: undefined, topping5: undefined, …}
  * Sample Output: "Your total today is : $5.00 for one (Small) pizza and your toppings. If you would like another pizza today, please fill out another order and submit."
* Should correctly return the cost of a user's pizza, based on toppings and pizza size
  * Sample Input: Pepperoni, Small: Submit
  * Sample Output: "Your total today is : $10.00 for one (Small) pizza and your toppings. If you would like another pizza today, please fill out another order and submit."
  * Should correctly add pizza objects to an array
  * Sample Input: Small : Submit x 2. 
  * Sample Output(Console): [Pizza] , (2) [Pizza, Pizza]
  * Sample Output: "Your total today is : $5.00 for one (Small) pizza and your toppings. If you would like another pizza today, please fill out another order and submit."

## Setup/Installation Requirements

* Clone pizzaParlor repository.
* Open pizza directory to view code in scripts.js,  index.html, and styles.css.
* Open index.html in desired web browser.

## Known Bugs
No known bugs. Each pizza object saves into an array, but this only available for viewing in the console. It does not display individual pizza orders, but the functionality is there. Right click on the webpage, click inspect, and click console to view the pizza objects in the array.

## Support and contact details

Please contact me at hagoodwi@gmail.com for support. 

## Technologies Used

This webpage allows me to practice using objects and prototypes in Javascript. It also incorporates HTML, CSS, and the bootstrap framework for styling. 

### License

This falls under the MIT license. 

Copyright (c) 2020 **_Alex Goodwin_**