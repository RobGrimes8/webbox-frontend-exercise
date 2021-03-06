WebBox Front-end Developer Exercise
============================

© Copyright 2020 WebBox. All rights reserved.

Objective
---------

Build a web page that demonstrates front-end development ability

Requirements
------------

* Submit your finished work compressed in the format of your choice.
* The finished web page should look like the provided mockup.
* There should be an animation when navigating between the accordion items. You are free to come up with what this transition looks like.
* The "Dynamic Content" section included at the end of this README should be completed as a part of your submission.
* Treat your final deliverable as if it were going to be deployed to production.
* Along with code comments, please document your submission by creating a README in the `./app/` directory. Feel free to include anything in it that you think might be helpful in evaluating your work.
* If you use a preprocessor or any kind of build tool, please include the source code as well as the compiled output.
* You are __not__ required to use a single-page application framework (e.g. Angular, React)

Success Criteria
----------------

* The markup should be semantic and accessible.
* The page should be presentable in all modern browsers as well as IE 11, though not necessarily visually identical across the board. Please document intentional deviations.
* The web page should be responsive and be presentable on a range of devices (e.g. mobiles, tablets) and browsers.
* Page loading times (Google Page Speed) should be taken into consideration when builing the page.
* Any additonal features/finishing touches are welcomed (e.g. mobile menu, animations, hover states) but not required.

Resources
---------

The visual design team has provided several deliverables to help with construction of the page:
* A mockup of what the finished product should look like: `./resources/mockup.png`.
* All of the copy can be found in the 'body-copy' folder located at `./resources/body-copy/`.
* Any image you need can be found in the `./app/assets/images` directory. The social icons have been added but feel free to add these in any way you want.
* Colours and fonts used in the mockup can be found at: `./resources/extras.txt`.


Server
------

This package is configured with a basic web server. You'll first need to install [Node.js](http://nodejs.org/). Once you have Node.js installed and have cloned this repo, then you can run the following commands to start the server (on port 8080 by default).

```sh
npm install
npm start
```

You should see "The server is running!" when you visit http://localhost:8080. Use CTRL-C to stop the server when you are done.

Feel free to add any additional build infrastructure that you would like, as long as the page is still accessible by running `npm start`. Tests and linters, for example, are welcomed (but not required).

Dynamic Content
---------------

The content within Accordion section displayed in the mockup, should be generated by making an AJAX request for the data from `/app/accordion.json`, which includes a list of objects. Each object contains the content required for each section of the accordion.

Consult the mockups about where to put this information and how to style it.