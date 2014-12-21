	//incremental stuff
			function Game(a_fps) {
				
				if (typeof a_fps === 'undefined')
					 a_fps=30;//default fps
				
				//PRIVATE variables
				var score=0;
				var pointsPerSecond=1;
				var pointsPerClick=1;
				var fps=a_fps;
				
				
				//PRIVILEGED PUBLIC -> If you want to add your own variables, here is where you would do it : this.<variable_name>=0; accessed by game.<variable_name>
				
				this.sets=[];//Holds multiple ENTITY SETS -> eg. this can hold UPGRADES, ACHIEVEMENTS, INVENTORY..etc
							//accessed by game.entities.<entity set name>  -> eg. game.sets.UPGRADES
								
				this.attributes=[];//holds additional attributes/variables
				
				
				//adds a set to sets
				this.addSet=function(n_name) {
					if (!(n_name instanceof EntitySet)) //if the passed parameter is not an entity set itself
						//create a new empty entity set with the name given
						
						this.sets[n_name]=new EntitySet(n_name);
					else
					{	//store the entity set
						this.sets[n_name.getName()]=n_name;
					}
					
					
				};		
				
				//gets the size of the sets variable or attributes
				this.size=function(thing) {
					//use this to count sets or attributes as they're associative object arrays and therefore .length cannot be used on them
					var size=0;
					var keys=Object.keys(thing);
					for (i in keys)
					size++;
					return size;
						
				};
						

				//ACCESSOR METHODS
				this.getFPS=function() { return fps; }; //get fps of game
				
				this.getScore = function() { return Math.ceil(score); }; //get score
				
				this.getPointsPerSecond=function() { return pointsPerSecond; }; //return the main pointsPerSecond that affects the score

				
				//MUTATOR METHODS
				this.increasePointsPerSecond=function() {
					//increment the pointsPerSecond
					pointsPerSecond+=0.5;
				
				};
				
				this.increaseScorePerSecond=function() {
					//increment the score per second
					score+=pointsPerSecond/fps;
				
				};
				
				this.increaseScorePerClick=function() {
					//increment the score per click
					score+=pointsPerClick;
					
				
				};
				
				this.addToScore=function(value) {
					//adds 'value' to score
					score+=value;
					
				
				};
				
				this.addToPointsPerSecond=function(value) {
					//adds 'value' to pointsPerSecond
					pointsPerSecond+=value;
				};
				
				this.addToPointsPerClick=function(value) {
					//adds 'value' to pointsPerClick
					pointsPerClick+=value;
			
				};
			};
			
			Game.prototype.init=function() {
			
				
					//add binders
					$("#clicker").on("click", this.increaseScorePerClick);
			
			};
			
			
			
			
			
			
	//upgrades/Entitys system
	
			function EntitySet(n_name) {
			
				var name=n_name;//name of set
				var entities=[];//array of Entity objects -> entities.first_upgrade
				
				//public variables
				this.length=0;
				
				//functions
				
				this.size=function() { return this.length;}
				
				this.getName=function() {
				
					return name;
				
				};
				
				this.getSet=function() {
					//returns Entity set
					return entities;
				
				};
				
				
				this.addEntity=function(EntityT) {
					//this function adds an Entity and returns 1 if successful - 0 if not
					
					if (EntityT instanceof Entity && !(EntityT.getName() in entities)) //make sure you're adding an Entity that doesn't already exist - UNIQUE NAMES
					{
						entities[EntityT.getName()]=EntityT; 
						this.length++;
						return 1;
					}
					else
						return -999;//either it' snot an entity type, or it is but the name already exists
					
					
				};
				
			
			};
			
			function Entity(n_name,n_attributes) {
			
				var name=n_name;//name of Entity -- must be unique				
				this.attributes=[];
				
				//populate attributes
				var keys=Object.keys(n_attributes);
				for (i in keys)//get the keys
					this.attributes[keys[i]]=n_attributes[[keys[i]]]; //
				
				
				//accessor/mutators
				this.getName=function() {
				
					return name;
				
				};
				
				this.getAttribute=function(attr) {
					if (attr in this.attributes)
						return this.attributes[attr];
					else
						return -999;
					
				};
				
				this.setAttribute=function(attr,value) {
					
					if (attr in this.attributes)
						this.attributes[attr]=value;
				
				};
			
			};


//===
