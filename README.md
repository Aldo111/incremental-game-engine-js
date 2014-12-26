incremental-game-engine-js (v1.4)
==========================

A simple Javascript/jQuery framework to allow the quick creation, deployment, and expansion of incremental games.

[DOCUMENTATION](http://aldo111.github.io/incremental-game-engine-js/documentation.html "v1.3.1")

[DEMO](http://aldo111.github.io/incremental-game-engine-js/ "v1.0")

[TUTORIAL DEMO](http://aldo111.github.io/incremental-game-engine-js/tutorial/demo.html "Demo made with tutorial")

[v1.4 version of Tutorial Demo](http://aldo111.github.io/incremental-game-engine-js/demo.html "v1.3.1")


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
6. tutorial/ -> copy of the tutorial branch, which will soon be updated to reflect v1.2+
7. EntityExample.html -> very simply example of using an EntitySet and Entity independently and together



NOTES
====

1. Documentation is live! Check the link above.

2. While it was planned that jQuery would be removed to make this a vanilla JS library, jQuery has more than simplified certain sections of the code to avoid further unnecessary code. 
	As a result, jQuery will continue to be used for DOM and DOM Events manipulation. A vanilla JS version will also be provided once we have all core features implemented.
	



TODO (updated)
====

1. Supplementing Trackers using Timers -> Additional (optional) parameter to all tracker functions that will execute a function if a certain value is reached.
2. Saving/Loading - attempted earlier but ran into unexpected trouble. Will reattempt soon.
3. UI (User Interface) and other related helper functions to help streamline creation of dynamic page elements.


VERSION CHANGES
====

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



