---
title: The definition of APIs
description: You can’t have a conversation with a developer without him mentioning the word API atleast 50 times. In this post I want to explore what the definition of a API is and what types of APIs there are.
slug: definition-of-apis
date: 2017-06-30
tags: article
layout: layouts/default.njk
permalink: /articles/{{ slug }}/index.html
---

You can’t have a conversation with a developer without him mentioning the word API atleast 50 times. In this post I want to explore what the definition of a API is and what types of APIs there are.

![Really working hard on something here. Not sure what it was. 👨🏼‍💻](https://cdn-images-1.medium.com/max/5326/1*zn5MtJLVrTkf23fHJoe6tg.jpeg)*Really working hard on something here. Not sure what it was. 👨🏼‍💻*

### The definition

Connectivity is an amazing thing. How do different applications and devices connect to each other? It’s the Application Programming Interface.
> # APIs create connectivity between applications and devices.

Most computer programs provide data for humans in the form of a **User Interface, **to make the consumption of the data as enjoyable as possible. Operating Systems all provide GUI’s (graphical user interace) to interact with the system. The user doesn’t really care about the technical stuff. Similarly an API provides a simpler way for developers to interact with other kinds of software. The data needs to be consumed by another program instead of a ‘user’.
> # [As with a UI tailored to humans, software needs an interface that makes it easy to consume data and/or functionality.](https://www.programmableweb.com/news/apis-are-user-interfaces-just-different-users-mind/analysis/2015/12/03)

**The API is the messenger **that takes requests and tells the system what to do and returns the response. You can for example access the database of another company. The API has an interface and can ask for information about other systems. You can say that the API is the **middleman **to communicate between different programs.

The API layer help **standardise the coding process.** On the web that might be a **JavaScript **based API, it’s an abstraction of the underlying process.

### The Wall Socket Analogy

The programmable web published a great series; [*what are APIs and How Do They Work?](https://www.programmableweb.com/api-university/what-are-apis-and-how-do-they-work) *They have a great little analogy that I want to refer to;
> You can think of an API in the context of a wall socket. The electricity is the service and the device is the consumer of that service. The consumer in this case is outsourcing its power requirement to the provider of a service. Electrical sockets have predictable patterns. The plug is standard and the power it delivers (volt) is consistent and mostly the same value. Likewise, an API specifies how software components should interact with each other.

Imagine how you would get power without such a standard.

### The Benefits

APIs can not only help developers to write better pograms, it can help the community around the program aas a whole because of the API infrastructure;

* If the API is public everybody can plug into it and start working on projects.

* Other programs can easily be moved, the data remains the same.

* It adds a layer of abstraction to the underlying service.

* APIs make developers more productive (they don’t have to start from scratch)

On the web this means you can outsource functionality to the browser and add data from other services. Browsers offer a standard way for web applications to access, cameras, audio & bluetooth for example. This is the same for services / apps such as Slack or Twitter. You can use the [Real Time slack API](https://api.slack.com) to send messages without the Slack interface with just a few lines of code.

### Types of APIs

You can ask for specific information by calling endpoints with specific parameters. You basically ask for subsets of the large database from the service. There are no rules of how developers should connect their own applications to an API but several standards have arised.

The first distinction to make is if the API is **public **or** private.**

* If the API is *fully public* you can request data without any additional information.

* If the API is *public *you can request data with a public keyprovided by the service. By adding the key when you make the request you are allowed to make API calls. Be aware that with a public key most APIs will have limitations.

* If the API is *private *you will need a key as stated above but the key *isn’t publicly available.* The service will personally need to provide you with a key.

**Authentication:**
If you want to manipulate data from a specific user (the user has to sign in) most APIs use the OAuth open protocol.
> # An open protocol to allow secure authorization in a simple and standard method from web, mobile and desktop applications

It allows you to interact with protected data from a specific data of a user. For example; add playlists to a specific Spotify account without using a Spotify interface.

**Rest API:
**Most interfaces on the web make connections using the HTTP protocol. You can ask for data using the API endpoint addressable over the web with the HTTP protocol. (GET, PUT, POST & DELETE) You can make a request to a specific endpoint and because an HTTP request is always a round trip you get back the response for use in your own application. On the web most of the time this response is in .json format.

**RTM API:
**Some services take a slightly different approach and instead of using the HTTP protocol they use a WebSocket-based API which allows you to receive events in real time. Instead of *asking *for information the API can *push* information to you.

You can achieve a kind of similar result with a Res API by **Polling**. (Simply calling the endpoint very frequently) Polling is kind off the same as a refresh button. It works but it isn’t the best solution.

### WEB APIs

To be clear; most of this post cover APIs from other services to request data. There are also specific Web APIs. They are used for manipulating the DOM and can be accessed using JavaScript with object types. The Web APIs extend the functionality of a web browser and thus are browser specific.

* Standard JavaScript APIs. These are the same core JavaScript and DOM APIs that you can use in standard web apps.

* HTML features and other emerging APIs which are browser specific.

![Mozilla keeps a nice list of all the cool Web APIs 😎](https://cdn-images-1.medium.com/max/5744/1*9fecMqxHY30miR9hSt2XZw.png)*Mozilla keeps a nice list of all the cool Web APIs 😎*
