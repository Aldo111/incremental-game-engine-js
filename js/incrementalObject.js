	//incremental stuff
			function Game() {
				
				var score=0;
				var pointsPerSecond=1;
				var pointsPerClick=1;
				var fps=30;
				
				
				//privileged/public variables
				this.upgrades=new EntitySet("Upgrades");
				
				this.entities=[];
				
				this.addEntitySet=function(n_name) {
					//add an entity set
					this.entities[n_name]=new EntitySet(n_name);
				
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
				
				this.addScore=function(value) {
					//adds 'value' to score
					score+=value;
					
				
				};
				
				
			
			};
			
			Game.prototype.init=function() {
			
				
					//add binders
					$("#clicker").on("click", this.increaseScorePerClick);
			
			};
			
			
			
			
			
			
	//upgrades/Entitys system
	
			function EntitySet(n_name) {
			
				var name=n_name;//name of set
				var entities=[];//Entitys array
				
				//public variables
				this.length=0;
				
				//functions
				
				this.getName=function() {
				
					return name;
				
				};
				
				this.getSet=function() {
					//returns Entity set
					return entities;
				
				};
				
				
				this.addEntity=function(EntityT) {
					//this function adds an Entity and returns 1 if successful - 0 if not
					
					if (EntityT instanceof Entity) //make sure you're adding an Entity
					{
						entities.push(EntityT);
						this.length++;
						return 1;
					}
					else
						return 0;
					
					
				};
				
			
			};
			
			function Entity(n_name, mod) {
			
				var name=n_name;//name of Entity
				var modifier=mod;//modifier
				
				
				this.getName=function() {
				
					return name;
				
				};
				
				this.getModifier=function() {
				
					return modifier;
					
				};
				
				this.setModifier=function(mod) {
					
					modifier=mod;
				
				};
			
			};
