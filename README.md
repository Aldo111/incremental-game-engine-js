incremental-game-engine-js (v1.6) 
==========================

A simple Javascript/jQuery framework to allow the quick creation, deployment, and expansion of incremental games.

[This project uses the MIT License]


[DOCUMENTATION](http://aldo111.github.io/incremental-game-engine-js/documentation.html "v1.5")

[v1.6 Tutorial 1](http://aldo111.github.io/incremental-game-engine-js/tutorials/1 "v1.6 Tutorial") --> NEW

[Descent: A v1.5.1 Simple Survival Game Demo](http://aldo111.github.io/incremental-game-engine-js/demo_survival.html "v1.5")

---

[v1.1 (OLD TUTORIAL) DEMO](http://aldo111.github.io/incremental-game-engine-js/tutorials/v1.1%20Working%20Tutorial/demo.html "Demo made with old, ugly v1.1 tutorial")

[v1.4 version of Tutorial Demo](http://aldo111.github.io/incremental-game-engine-js/demo.html "v1.4")




Goal
====
The goal of this is to create a very simple-to-use javascript framework for other incremental-game enthusiasts! I've often seen many people online who would like to embark upon their own ventures but lack either the time or skills to get some of the boring stuff out of the way.

So this is the purpose of the engine: get the boring stuff out of the way and onto the fun stuff!


FILES
====

#### Essential:
1. js/incrementalObject.js -> The main file
2. js/jquery.js -> jQuery file used. 

3. documentation.html -> page with documentation on methods. It's still a work-in-progress but helps to gain an idea of what's going on in each object.

#### Non-Essential [Only for DEMOS/help]:
1. js/ParticleObject.js -> Just a simple particle script I made for the background stars. I was building the game engine on top of another project and so this is just a nice (visually appealing) artefact. Not required at all.
2. css/incremental_style.css -> The CSS of the demo
3. css/fonts/NewCircle/ -> The font I'm using for the demo page
4. index.html -> The Demo Page
5. css/incremental_demo_style.css -> The css of the v1.2 demo.html
6. tutorials/ -> contains tutorials
7. EntityExample.html -> very simply example of using an EntitySet and Entity independently and together
8. demo_survival.html -> A simple demo with some basic survival elements demonstrating the creation of a game with v1.5.1 of this library.


NOTES
====

1. Documentation is live! Check the link above.

2. While it was planned that jQuery would be removed to make this a vanilla JS library, jQuery has more than simplified certain sections of the code to avoid further unnecessary code. 
	As a result, jQuery will continue to be used for DOM and DOM Events manipulation. A vanilla JS version will also be provided once we have all core features implemented.
	



TODO (updated)
====

1. Supplementing Trackers using Timers -> Additional (optional) parameter to all tracker functions that will execute a function if a certain value is reached.
(DONE in a way -> Can be taken care of using the optional third argument in Common.track())

2. Saving/Loading - attempted earlier but ran into unexpected trouble. Will reattempt soon.
3. UI (User Interface) and other related helper functions to help streamline creation of dynamic page elements.
4. Allow the definition of 'required and default attributes' for all Entities of an EntitySet -> essentially giving EntitySets 'types'.
5. Add multiple attributes using add/setAttribute (DONE -> updateAttributes)
6. Add a getRandomEntity() function that does exactly that.
7. Add the ability to give max/default/minimum values for attributes (similar to 4).
8. Add a game.stop() or game.pause() or equivalent

As of v1.6

1. Add clicker text over a specific element, not just the mouse
2. Add hover events, not just clickers
3. Options for Game()
4. Shorthands for functions
**DONE5. Add a "updateAttributes" function that takes in an object of n_attributes and updates/adds attributes accordingly
6. Get Tracks to update a value as soon as it changes, not just until the next loop

VERSION CHANGES
====

###v1.6 [Jan 9, 2015]

1. Common and AttributeSet now have an "updateAttributes(n_attributes)" function that allow multiple attributes to be added/updated through an object
2. Tracks now only update if there is an actual change in value.
3. Default FPS is now 1.
4. AttributeSet.addAttribute and Common.addAttribute now takes an extra, optional, 4th parameter called 'func', same in functionality as track()'s func parameter.
5. Added a Common.getAttributesOriginal() function which returns the attributes themselves, as opposed to copies like in getAttributes, but ALSO includes the AttributeSet prototype methods
6. Added track and untrack functions to AttributeSet as well in case one only wants to use AttributeSet and nothing else
7. Game.addFlag(..) console logging has been removed.
8. MIT License added. Sorry it took so long!


###v1.5.1 [Jan 6, 2015]

1. First update of the year - nothing too great. Just a minor change to the way addClickerText works.
2. Flags are now logged in the console for testing purposes (will be removed in 1.6).


###v1.5 [Dec 29, 2014]

1. Added Game.addFlag(), Game.removeFlag(), Game.checkFlag(), which allows one to store and track particular events/milestones/progress.
2. Added Game.addClickerText(), which adds text to the mouse's current position and moves it upwards for a second.
3. Modified Game.addClicker() to handle dynamic HTML elements.
4. Modified Common.track() to receive an optional third argument - a function, which takes one parameter (the value of the attribute being tracked), and should return the way that parameter must be displayed.


###v1.4 [Dec 26, 2014]

1. Game.play() function now handles missed frame execution (i.e. when game runs in background tab and interval time is throttled).
2. Added Game.addTimer(func, options) that executes a function during the game loop based on timer options passed (once, 'x' times, continuous..etc)
3. Fixed bug that didn't add attributes of an entity correctly when an entity was passed to EntitySet.addEntity().
4. Fixed bug that didn't add the name correctly to a new entity when another entity was added to a set.


###v1.3.1 [Dec 26, 2014]

1. Fixed bug that resulted in incorrect results when checking whether an Entity Name existed through addEntity(...,...)
2. Return the AttributeSet itself instead of the value in add/setAttribute.
3. Modified Game.addClicker() to make the params of the function passed optional.
4. Documentation page created using EntitySet/Entities/AttributeSet.

###v1.3 [Dec 25, 2014]

1. Added Game.addClicker(id,functionToExecute,[params,for,function]) and Game.removeClicker(id) which allows any html element (denoted in id by #id or .class ..etc) to become a clicker for a function.
2. Added Game.play(function that needs to be played in the game loop) which runs the game loop function passed 'Game.getFPS() times per second'.
3. Added EntitySet.hasEntity(entity_name) that returns true/false depending on if an entity with that name exists in this set.

###v1.2.1 [Dec 24, 2014]

1. Entities added to a set are no longer added by reference - they are added by copy/value giving each set their own instance of that entity.


###v1.2 [Dec 23, 2014]

1. Added basic functionality to track and display any attribute belonging to any object (that's part of their .attributes[]) in any html element.
2. Minor code enhancements.
3. EntitySet.getSet() is now EntitySet.getEntities() to avoid confusion with Game.getSet(set name) ----> EntitySet.getSet() will still work but will be removed completely in future versions.
4. Added untracking of any attribute belonging to an object (second commit) 

###v1.1 [Dec 22, 2014]

1. Sets/Entities are now returned upon adding/modifying them.
2. Entity Sets now have attributes as well
3. Added AttributeSets that are simply normal javascript objects with some extended properties to help manage the attributes within
4. Added a parent object called 'Common' which contains elements that every other object needs. 
5. Added an attributes[] list to Common, which is inherited by Game(), EntitySet(), Entity()
6. Added functions to remove an EntitySet from Game().sets, as well as an Entity from EntitySet().getSet()


###v1.0 [Dec 21, 2014]

1. Added Entity and EntitySets to manage different sets of different entities.



