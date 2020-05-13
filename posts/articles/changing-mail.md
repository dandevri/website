---
title: Changing my e-mail on 200+ accounts
subtitle: Your e-mail address is the basis of all your online accounts. We can't use any of them without an email to sign up.
description: Your e-mail address is the basis of all your online accounts. We can't use any of them without an email to sign up.
slug: changing-mail
date: 2020-05-11
tags: ['article', 'privacy']
layout: layouts/post.njk
permalink: /articles/{{ slug }}/index.html
---

Switching from mail providers was one of the first step towards [_ungoogling_][ungoogle] my life. Gmail was a big service I wanted to move away from. After some research I decided to go for [Soverin][soverin] which offers private mailbox for a cappucino a month. Mainly because they are a Dutch company, support your locals. Yes, I started paying for e-mail.

you make the 'independent choice' (no lock in) by not using a provider from big tech. If a service is free, you pay with something else. You [don't get something for nothing][nothing], in this case you pay with your data. And think about it for a second, e-mail probably contains most of our most privacy-senstive personal information. But enough about paying for e-mail, that's probably not what you're here for. As the title suggests, let's talk about changing that important virtual address on all of my online accounts.

[1Password][1password] is my password manager of choice which also gives you a nice overview of all the services you have a account on. My current counter is `167` unique login items, which means I have my personal information on 167 sites scattered around the web. 167 different data points, 167 databases that have some of my information. I went to each individual item on this list, logged into the website and looked for the profile settings to change my e-mailaddress. 

Aside from the time investment it took me it was really frustrating, the user experience on many profile pages wasn't something to write home about. 

I don't get why websites split these pages up into _profile_ and _settings_. Often I go to profile but that only **shows information**, there is no way for me to update the information on that page. Then I need to go into another freaking 'settings' page to actually update the information.

Updating your personal information isn't even the worst part. Don't get me started on actually trying to delete your account. Some services make this near impossible to do
on a service you no longer use. 

{% figure '/static/img/posts/articles/delete-account.png', '404 when clicking on the delete account button' %}

Most services don’t even offer the option directly from the profile page.. There is literally no button on the interface to delete your account. Your only way is to contact customer support. Or even worse: the service only offers customer support through evil Facebook or calling a phone number, no thanks.

That's if you can even find the customer support contact information somwhere. Most websites hide it in their customer support wiki and can only be found if you search long enough, click trough breadcrumbs or use the right keywords in your [search engine of choice][startpage]. And then, after all that time searching you'll be greeted with a 'He! Mail to service@support.com to have your account removed. We'll respond in about 5/6 months'. For some reason, clothing stores are the ones doing this the most. Why?

{% figure '/static/img/posts/articles/name-mail.png', 'Need to confirm my identity by proving my first/last name.' %}

There is some light at the end of the tunnel. I'm no security or privacy expert but not all is bad. Some services do this well, if you want four take aways for your own profile setting service:

1. Ask me to confirm my new e-mail address with a confirmation link on the **new email-adres**. 
2. Notify me (with an e-mail) about the account change on the _new mailaddress_ but also on **the old one**.
3. Be specific about what information was changed. Not 'your account has been updated' but 'your e-mail on your account as been updated'.
4. On the settings page, make the user fill in their password to confirm the updated details.

Moving away from Gmail was only the first step. Next up, Google Drive.

[nothing]: https://www.quora.com/Why-do-some-people-still-pay-for-their-email
[ungoogle]: https://gizmodo.com/c/goodbye-big-five
[soverin]: https://soverin.net/
[1password]: https://1password.com/
[startpage]: https://startpage.com/
