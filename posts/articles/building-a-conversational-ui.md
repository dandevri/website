---
title: Building conversational UI demystified
description: The last couple of weeks I’ve been really into conversational UI. (bots) When I started off the whole ‘bot world’ seemed full of buzzwords. As I spend time building a bot the terminology made more sense and here I am; demystifying some common jargon used in conversational UI.
slug: building-a-conversational-ui
date: 2017-06-27
tags: article
layout: layouts/default.njk
permalink: /articles/{{ slug }}/index.html
---

# {{ title }}

The examples are in **dutch** because the bot was born in the Netherlands. 🇳🇱 Maybe you won't get specific sentences but you will understand the general flow.

![](https://cdn-images-1.medium.com/max/3918/1*ZX00scoZ6HMG3ZUC2k_l1Q.jpeg)

Let’s start off with some buzzwords and the general flow of how it’s build.

### Natural language processing

The most important thing a bot needs to do is to understand sentences the user sends. Kinda off obvious but there is a general flow for this. In **wit.ai **the underlying structure that parses text is called [**duckling](https://github.com/facebookincubator/duckling). **It parses **natural language **(the way we humans talk) into **structured data.**

*Example from the GitHub repo:*

    "the first Tuesday of October"
    => {"value":"2017-10-03T00:00:00.000-07:00","grain":"day"}

It’s really fancy and I don’t want to go down the rabbit hole with **natural language processing**. I don’t even know half of it and it would be a whole book by itself. Let’s have a look at a simple implementation within wit.ai.

## Wit.ai flow

### Entities

When the users sends a sentence you want to detect what are called entities.
> # An entity is a piece of information you would want to detect from a user input.

<iframe src="https://medium.com/media/d0d6261b2e7d9caa0a41de7e421fc9ec" frameborder=0></iframe>

Above you can see how wit extracts all the important entities from a user sentence. This is the most important step, getting the entities right. If the parser gets the right entities you can hit **validatie.**

It will query the app and adds it to the processing. It makes the parser ‘smarter’ and it can extract the entities even better. Even with more complex sentences. Another useful feature is that you can make **synonyms. **For example *romance *and *romantic* can both be the entity **love.**

### Query

Now that you have validated some entities you can query you’re app and see what the response,mstructured data, is.

<iframe src="https://medium.com/media/835c0bb1ae7a0d7aea5447149946229c" frameborder=0></iframe>

Below is a structured version:

    {
      "msg_id": "0C5MyEdgPv3wBkgR3",
      "_text": "Ik zoek een Nederlands boek van Saskia Noort",
      "entities": {
        "language": [
          {
            "confidence": 0.72945154848646,
            "value": "dut",
            "type": "value"
          }
        ],
        "type": [
          {
            "confidence": 0.78767754925405,
            "value": "book",
            "type": "value"
          }
        ],
        "contact": [
          {
            "suggested": true,
            "confidence": 0.99960075112416,
            "value": "Saskia Noort",
            "type": "value"
          }
        ],
        "intent": [
          {
            "confidence": 0.99998293857858,
            "value": "search"
          }
        ]
      }
    }

You can see it detects the right entities. The confidence is a decimal number that wit.ai sends to show how well a word matches an entity.

### Stories

Now that the API gets the right entities you need to make sure you’re bot sends something back or even makes calls to external API’s. Within wit.ai these are called **stories. **Each story is basically a conversation you have with the bot. Let’s take a simple greeting for example:

    User: Hello, I am Danny.
    Bot: Hi Danny! My name is bot.

The user sentence in this case has an intent: greeting. Based on the structure of the sentence and the possible entities wit.ai detects that this is a greeting. To make it respond a little bit more personal you detect the name entity (in this case **Danny**) and store it in a variable. The bot now responds with a basic message to the user.

But what if you want to make more complex stories? What if you need more information or the user doesn’t provide enough information in the first place?

    User: I am searching for a dutch book.
    Bot: From what author?
    User: Saskia Noort
    Bot: 'Huidpijn' is the newest boek from Saskia Noort.

*In the above example the user doesn’t provide the name of the author.*

This type of conversation is called **slot-based. **The bot needs (more) information from the user. You use context branches for this. When entities are missing you can ask a follow up question.

### Actions

Based on the user’s sentence you might want to make API calls. These moments in the conversation are called actions. Let’s bring back the previous example:

    User: I am searching for a dutch book.
    Bot: From what author?
    User: Saskia Noort
    **apiCall(findBook)**
    Bot: 'Huidpijn' is the newest boek from Saskia Noort.

Between these basics message you can send actions. These are just keyword and names of methods. If you get these responses in you’re own tech stack you can then make API call’s and even store those in variables.

The response has a property called type which can have the following values:

1. msg: Message from the bot as a string

1. action: Name of the action you need to perform

1. stop: When the conversation is over

The stop command indicates when the story (conversation) is over and the user can then start any other story.

## Personality

Every bot still needs an interface. At its core, interfaces are always about communication.
> # Conversational interfaces are so fascinating because it is a form of communication that everyone uses and understands.

When a bot doesn’t give the right response they always blame the interface and the knowledge of the system. We type natural language so we expect the bot to respond in the same natural way. [This post](https://uxdesign.cc/skeuomorphism-in-conversational-design-6ff9aea98829) from Adrian and this [post from Intercom](https://blog.intercom.com/principles-bot-design/) really helped to shape the bot do this right.

### **Timing**

A bot can respond way faster than a human. You can build in a delay to make it look like it’s thinking. For example when it’s making external API calls.

### Voice

Voice is part of the branding. It shapes the identity of the bot. Once the user associates a voice with something, it becomes part of the identity.

### Emotion

A golden rule is:
> # *Don’t pretend to be human.*

You need to have empathy for the bot if it doesn’t give the right answer but don’t use the metaphor of making it human. Always emphasise the fact that it’s a system. Take error messages for example:

    ❌ No results are found.

    ✅ I couldn't find anything for you! Try searching again with different keywords.

Research shows that people prefer computers who are friendly and similar to them. Respond human-like but not human.
> These are just basic concepts of building conversational UI. Some of these terms are specific to wit.ai but most of them are generally accepted and good practices. Go out and try to build your first build 🤖. It’s a struggle in the beginning but once you get the hang of it, it’s not that bad after all. It feels really magical! ✨

![Or don’t care at all and have a nice beer in the sun. ☀️](https://cdn-images-1.medium.com/max/8064/1*JLiYlLsqzaiKHdLRBk3YIg.jpeg)*Or don’t care at all and have a nice beer in the sun. ☀️*

