React Use
---------
Even though it was not a requirement to use a single page framework for this exercise I decided to use React anyway so that I could comfortably show a range of techniques such as using components and seperate preprocessed scss files. While use for a component for the 'Card' feature may not seem particularly useful here. If this was a project that would be further developed then I feel like it would be extremly useful.


Bootstrap use
-------------
Originally I was going to use bootstrap for its flex class properties and for responsiveness classes as I would in a personal project but I decided to create the classes instead to improve on file size.


Scss files
----------
I have kept the source code of my scss code available in './src/styles/scss' folder. I sometimes directly import the styles from scss to the relevent component instead of compiling the scss files to css.


Importing json instead of ajax
------------------------------
A downside that I discovered while using react was the inability to perform a local Ajax request. I instead had to import the JSON file and use the data that way.  This meant that the method of displaying the icons for each item of the accordion had to be changed slightly. This is something I would address if I was to repeat this project or something similar.

Responsive Design
-----------------
I built the webpage as a mobile first site and used media queries to change the css if the screen being used was larger than a tablet (768px or lager). I often use bootstrap for this purpose to save time but I wanted to code it myself in this example. Changes were made to the design of the webpage depending on screen size to maintain accessibility, e.g. cards and accordion items made larger and displayed in a column. 