---
title: Back to JS basics
subtitle: JS is here to stay, without you I got trouble.
description: JS is here to stay, without you I got trouble. To understand you here is a quick refresher on the intro of JavaScript.
slug: back-to-js-basics
date: 2017-06-25
tags: article
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

We all read [this article](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f) from last year. (NO!? you’ve been living under a rock or something?) It’s easy to get caught up in a JavaScript library and never get out. I’ve seen people know more about React and jQuery than pure vanilla JS.

When I started the [Minor Web Development](http://www.hva.nl/opleiding/communication-and-multimedia-design/communication-and-multimedia-design.html) at the University of Applied Sciences Amsterdam I had (what buddhist call) a **beginner’s mind.**
> It refers to having an attitude of openness, eagerness, and lack of preconceptions when studying a subject, even when studying at an advanced level, just as a beginner in that subject would.

People around me would sit behind their keyboard and start writing line after line of complex JS code. I would come in, and curious as I was, would ask ‘simple’ questions like;
> Where does this function gets invoked?
> What are the initial arguments of this function?
> Where do you declare this variable?

And what bothered me is that some people couldn’t give me straight up answers so I could learn from them. I had to ask twice or they didn’t really know the terminology.

Don’t get me wrong, most people are really great at handling complex JS stuff (and libraries) but to me it feels like they get caught up and lose sight of general JavaScript (programming) concepts.

So with this in mind I wanted to write a quick (yeah, you can call it a cheat sheet) refresher on basic JS concepts. Mostly for myself but also for all the other folks out there.

### Programming vs Scripting.

[People argue](https://www.quora.com/Is-JavaScript-a-scripting-or-a-programming-language) *programming *or *programming language *isn’t really the correct term to describe JS. JavaScript doesn’t stand by itself, it needs to use a **interpreter**. In most cases this is the browser or a standalone JS engine. It isn’t native machine code (binary 01010) but it needs to be **compiled **and that’s where the browser comes into play.

To play it safe I would call JavaScript a **scripting language** which falls under the larger category **programming language.**

### Variables.

Variables store data and manipulate it. They do this by using a **label **to point to the data. In JavaScript data can be one of the following 7 [data types](https://developer.mozilla.org/nl/docs/Web/JavaScript/Data_structures):

* undefined

* null

* boolean

* string

* symbol

* number

* object

They can store different values at different times.

* To **declare** a variable: var *keyword* with myVar*name* of the variable.

* **Store **value in a variable with the **assignment operator: =**

* **Initialize **the variable with a data type: 19 (in this case a number)

    var myVar = 19;

A variable that is only declared but has no initial value has the valueundefined.

    var a; // value is undefined

### Functions.

You can divide up your code in reusable parts by using **functions.**

    function myFunction() {

    // do stuff

    }

You can call or invoke the function by using the function name and place **parentheses behind them.**

    myFunction()

parameters are basically variables that act as placeholders for the values that are to be input to a function when it’s called. You pass a value as input to the function. Many people use the term parameter and argument interchangeably but there is a slight difference.

    function myFunction(param1, param2) { // These are parameters
       console.log(param1 + param2);
    }

    myFunction(1, 2); // These are arguments

Values that are passed into a function when it is called are arguments. The placeholders are parameters.

### Arrays.

With arrays you can store multiple data types in one variable. You declare it the same way as a variable but you put [] around the values and seperate each one with a comma. Every value in an array is called a entry.

You can access data inside array using indexes. Arrays use zero-based indexing. So the first item in the array starts with a 0.

### Objects.

Objects are similar to arrays, except that instead of using indexes you access the data in objects through what are called properties. Every property is made up of a key and a value.

    var dog = {
      "name": "Peter",
      "legs": "4"
    }
> The stuff above is a basic outline of some of the core JavaScript terminology. Some of the stuff that I need to remind myself of on the daily. Stuff that people, IMHO, need to refresh more often. Hope this helps and next time you want to sound cool; try to use the right terminology.
