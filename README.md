incremental-game-engine-js (v1.2.1)
==========================

A simple Javascript/jQuery framework to allow the quick creation, deployment, and expansion of incremental games.

[DEMO](http://aldo111.github.io/incremental-game-engine-js/ "v1.0")

[TUTORIAL DEMO](http://aldo111.github.io/incremental-game-engine-js/tutorial/demo.html "Demo made with tutorial")

[v1.2 version of Tutorial Demo](http://aldo111.github.io/incremental-game-engine-js/demo.html "v1.2")


Goal
====
The goal of this is to create a very simple-to-use javascript framework for other incremental-game enthusiasts! I've often seen many people online who would like to embark upon their own ventures but lack either the time or skills to get some of the boring stuff out of the way.

So this is the purpose of the engine: get the boring stuff out of the way and onto the fun stuff!


FILES
====

#### Essential:
1. js/incrementalObject.js -> The main file
2. js/jquery.js -> jQuery file used. 

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
1. I will update this README with a quick how-to soon; for now, head over to the tutorial branch to get started!
2. Although jQuery is used very rarely, it is not at all required and the few jQuery portions of the code that exist can (and in the final version, will) be replaced by vanilla JS.



TODO
====

1. Allow programmers to add multiple stats of different type -> Attributes system in place, however no 'internal' support just yet
2. Allow greater control and manipulation of items and item sets. -> Entities System in place
3. Continue making this awesome and easy to use! -> Work in Progress

###As of v1.0:
4. Make the game loop internal to Game()
5. Handle out-of-focus window game loops

VERSION CHANGES
====

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



