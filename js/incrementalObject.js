	//incremental stuff
			function Game() {
				
				var score=0;
				var pointsPerSecond=1;
				var pointsPerClick=1;
				var fps=30;
				
				
				//privileged/public variables
				this.upgrades=new ItemSet("Upgrades");
				

				//methods
				this.getFPS=function() {
					//return the game fps
					return fps;
					
				
				};
				
				this.getScore = function() {
					//return the main 'score' stat
					return Math.ceil(score);
				
				};
				
				this.getPointsPerSecond=function() {
					//return the main pointsPerSecond that affects the score
					return pointsPerSecond;
				
				};
				
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
			
			
			
			
			
			
	//upgrades/items system
	
			function ItemSet(n_name) {
			
				var name=n_name;//name of set
				var items=[];//items array
				
				//functions
				
				this.getName=function() {
				
					return name;
				
				};
				
				this.getItemSet=function() {
					//returns item set
					return items;
				
				};
				
				
				this.addItem=function(item) {
					//this function adds an item and returns 1 if successful - 0 if not
					
					if (item instanceof Item) //make sure you're adding an item
					{
						items.push(item);
						return 1;
					}
					else
						return 0;
					
					
				};
				
			
			};
			
			function Item(n_name, mod) {
			
				var name=n_name;//name of item
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
