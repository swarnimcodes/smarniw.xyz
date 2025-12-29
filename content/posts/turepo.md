+++
title = "My Emacs plugin got accepted in Melpa!"
date = 2025-12-27
[taxonomies]
tags = ["emacs", "lisp", "plugin"]
categories = ["emacs"]

[extra]
lang = "en"
reaction = true
+++


# Me and Emacs

I have been an Emacs user since 4-5 years now. Although admittedly I have also been a 
(Neo)Vim user for a longer duration than I have used Emacs. I still switch back-and-forth
between the two depending on the task at hand and my mood. I have also tried 100s of other
text-editors but none seem to stick with me as these two. I can never get enough of the
extensibility of Emacs and obviously [Magit](https://magit.vc/) holds me hostage, like
every other Emacs user xD. And obviously the efficieny of vim is not unknown.

Each day I used Emacs, I felt like the power to create was at my fingertips but I could
never find something to create that I found worthwhile; something that I myself would use
everyday in my development cycle. I tried learning common lisp and elisp, and the syntax
felt weird because anything I wrote, was a nightmare to read.


# Elisp

Needless to say, I am not a lisp developer by any stretch of the imagination. I use
web & related technologies at work and all those follow procedural or imperative paradigm
and are pretty straightforward to read. And since I was not acclimated to reading lisps,
Elisp felt intimidating and a language for someone more intelligent than me. For instance,
[Protesilaos'](https://protesilaos.com/) work felt like something I could never achieve
even after his brilliant videos that helped me in usage of Emacs. I had given up the idea
of anything relating to writing lisps; but then came along a ray of sunshine in a rainstorm.


# Tsoding writes an Emacs Plugin

Probably doesn't come as a surprise but I absolutely adore 
[Tsoding](https://tsoding.github.io/).
It's astonishing the level of programming he showcases while bringing fun and
rigour to "recreational" programming. He actually might be the reason I am still
programming. All glazing aside, he posted this video:

<div style="text-align: center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QH6KOEVnSZA?si=2qL2gVHgWxE9dYvj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

This video was so fun to watch while he whooshes his magic wand while making elisp look
not just readable, but something fun and something I desired to write programs in.
It was almost enlightening to watch him go through a language that he doesnt program in
and writing code that makes sense to me, sitting probably 1000 miles away.


# AoC in Elisp

All inspired from watching tsoding's video and ready to write some elisp, turned to
[Advent of Code](https://adventofcode.com/). 
That seemed like a challenge I could take. And surprisingly, I could
solve some AoC problems without help from the clanker! Feels so rewarding to
accomplish something without help from generative AI :)

You can find the code here: [Advent of Code](https://github.com/swarnimcodes/advent-of-code.git)

It felt quite nice to be able to build on the momentum and actually put it into
practice. Here is an excerpt from one of the solutions:

```lisp
(setq-local pointer (% (+ 100 (% (+ pointer (* steps -1)) 100)) 100))
```

As you might be able to tell, we are implementing wraparound arithmetic here.
Whether you take a step backwards or forwards, you always stay between 0 and 99.
This one liner elegantly models the circular knob being talked about in the
AoC poblem.

This was my first glimpse into the potential of elegance that lisp holds
while not being apologetic for making a mess.


# Inspiration for my plugin

The idea was stolen directly from [Sylvan Franklin](https://sylvanfranklin.com/).
I won't go into the details of what I think about him and his content because
most of his content is irony based on irony lmao.

But this is the video where he implements a convinience script for himself
in neovim that does the same thing as my plugin:

<div style="text-align: center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/YDd0MYtfIp8?si=yJPcyiILxc4mWPm1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


I watched this and realised I literally face the same problem at my day job as
well as when I'm programming _recreationally_. Everytime I have to take certain actions
through GitHub's web UI, I have to navigate away from my code editor to my browser,
create a new browser tab, manually enter the URL of the project at hand,
pray that the browser's auto-complete completes the correct URL, and the proceed
with whatever I wanted to accomplish; be it merging pull requests or what not.

This had to be either repeated or I would have to give real-estate to the project's
github in my browser at all times to prevent repeating this action.
This always bugged me but I never thought of solving this, since it is a
relatively minor inconvenience; until I saw the video and realised how much
unnecessary mental overload would I have been relieved of if I had solved this
earlier. 

Hence [turepo](https://github.com/swarnimcodes/turepo) came into being.


# Getting turepo into Melpa

This was my first ever interaction with such a huge and well-maintained open-source
project. It was quite intimidating to even think that my silly little plugin could
be of use to someone and could reach a platform like melpa. But I said to myself,
why not let the Melpa maintainers reject it rather than me rejecting it myself.
So I got to reading the project contribution guidelines so as to not make a fool
of myself xD. The process was quite straightforward to follow. Essentially, I
just had to make sure my elisp code compiles cleanly, lint the code with emacs'
in-built `checkdoc` and then with purcell's (package-lint)[https://github.com/purcell/package-lint].
This exposed quite a few ways I could make the plugin better and suited for
a wider audience. I read tsoding's old plugin that he had submitted for reference.
And just pressed the submit button and let the anxiousness begin.

[Riscy's](https://github.com/riscy) feedback came in just a few days after. I honestly
thought no one would ever have a look at the plugin. But here it was, a well-revered
developer in the emacs community, actually went through my naive code and gave 
precise and extremely helpful pointers as to how I could rise above the attitude
of making a plugin for my own convenience sake and start to approach it as how
it could be useful to most amount of people that use emacs.

The feedback discussions were my first foray into the world of actual open-source
contributions. I realised an open-source org like melpa cares more about the
users and the people in general than many enterprise level organisations
developing critical applications. Melpa has standards and it tries its best
to adhere to them unlike so many organisations and startups who try to
introduce standard practices, but introduce unnecessary meetings and
bureacracy instead. I guess the difference lies in the mindset; open-source
cares about people, enterprises' livelihood lies in money-making.

Keeping that aside, I learned a lot from developing and publishing such a simple
but practical plugin. The sense of accomplishment was more than delivering
entire full-stack applications. Even after publishing the plugin, I never thought
anyone would even have a look at it. But to my surprise, it has received
12 whole downloads (at the time of writing). That is 12 people in the world who
found my plugin and tried it! I have even received 1 pull request from an
engineer in Taiwan who introduced a small but very useful patch to my code.

Again, it is quite unbelievable that some person from Taiwan literally used
my code to make his life better and made the efforts to make the plugin better
for everyone else! 

I dont know how to conclude this but I guess, if anyone is even reading this line,
good luck to you! Try that thing that you've always wanted to do. The world would
definitely be a better place with your creativity in it :)

# Links
- [Turepo GitHub](https://github.com/swarnimcodes/turepo)
- [Turepo Melpa](https://melpa.org/#/turepo)
- [Turepo PR Discussion](https://github.com/melpa/melpa/pull/9726)

