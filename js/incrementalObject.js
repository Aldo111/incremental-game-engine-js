/*--------------------------------
	Incremental Game Engine v1.3
		Created at https://github.com/Aldo111/incremental-game-engine-js [Started Dec 21, 2014 by Aldo111 on GitHub]
		Purpose-built library to serve efficient design and development of Incremental/Idle/Clicker games.
		If you do use this in your game, please provide the proper attribution or linkback to the original creator of this library, that is all!
----------------------------------*/

//===
			
	//some constants -> if some function is not working as expected, check its return value, if any, against these errors
			const ERR_DOES_NOT_EXIST_CODE="errdne-999";
			const ERR_INVALID_PARAMS_CODE="errinvalid-989";
			const SUCC_CODE="success10101010";
	//other global variables
			var Tracks=[];
			
	//Function that stores common elements
			function Common(n_attributes) {
			
				this.attributes=new AttributeSet(n_attributes);
				
				
				//The following methods basically allow the Object containing an Attribute set to get/set/add/remove attributes directly
				//into that set by doing Object.getAttribute(...) instead of Object.attributes.getAttribute(..) although one
				//can even do that since these functions just use AttributeSet's methods
				this.getAttribute=function(attr) {
					return this.attributes.getAttribute(attr);
				};
				this.setAttribute=function(attr,value) {
					return this.attributes.setAttribute(attr,value);
				};
				this.addAttribute=function(attr,value,ele) {
					
					return this.attributes.addAttribute(attr,value,ele);
				};
				
				this.hasAttribute=function(attr) {
					return this.attributes.hasAttribute(attr);
				};
				
				this.removeAttribute=function(attr) {
					return this.attributes.removeAttribute(attr);
				};
				
				this.isDefined=function(a) {
				
					return (typeof a !=='undefined');
				
				};
				
				
				//the next function only returns a copy of the whole attributes set, not the attributes themselves -- to iterate over the actual attributes,
				//although not an intention of this system as these are meant to act as normal variables, you can run a for-in loop 
				/*
					var x=0;
					for (i in Object.attributes)
					{
						//code here
						
						
						x++;
						if (x==Object.attributes.size()) break; //this is so that the user doesn't get any of the Prototype methods as attriutes
					} 
				
				*/
				//this only gives us a copy of the attributes, not the actual attributes !! It's better to use the above way or just Obj.attributes.VARIABLE
				this.getAttributes=function() {
				
					return this.attributes.getAttributes();
					
				};
				
				//prototype- tracks a particular element in an html element
				this.track=function(attr,ele) {
					
					if (typeof attr !== 'undefined' && this.hasAttribute(attr) && typeof ele !=='undefined')
					{
					//	alert("Tracking");
						Tracks.push({container:this.attributes,name:attr,element:ele});
					}
					else
						return ERR_DOES_NOT_EXIST_CODE;
					
				};
				
				//untrack an attribute that belongs to this object
				this.untrack=function(attr) {
					var invoker=this.constructor.name; //Common object through which this method was invoked - either Game or EntitySet or Entity 
					//future use
					
					//stops tracking this.attribute's particular attribute of this particule object
					if (typeof attr !== 'undefined')
					{
				
						for (i in Tracks)
							if (Tracks[i].container===this.attributes && Tracks[i].name==attr) delete Tracks[i];
				
					}
				};
			
				
				
			};
			
			
			
			
	//The Main Game Function! var g=new Game(); this is what we need to get started!
			Game.prototype=new Common();
			
			function Game(a_fps) {
			
				Common.call(this);
				
				if (typeof a_fps === 'undefined')
					 a_fps=30;//default fps
				
				//PRIVATE variables
				var score=0;
				var pointsPerSecond=0;
				var pointsPerClick=0;
				var fps=a_fps;
				var seconds=1;
				
				
				//PRIVILEGED PUBLIC -> If you want to add your own variables, here is where you would do it : this.<variable_name>=0; accessed by game.<variable_name>
				
				this.sets=[];//Holds multiple ENTITY SETS -> eg. this can hold UPGRADES, ACHIEVEMENTS, INVENTORY..etc
							//accessed by game.entities.<entity set name>  -> eg. game.sets.UPGRADES
								

				//ACCESSOR METHODS
				this.getFPS=function() { return fps; }; //get fps of game
				
				this.getScore = function() { return Math.ceil(score); }; //get score
				
				this.getPointsPerSecond=function() { return pointsPerSecond; }; //return the main pointsPerSecond that affects the score
				
				this.getPointsPerClick=function() { return pointsPerClick; }; //return the main pointsPerClick that affects the score
				
				this.getSets=function() { return this.sets; }; //returns all sets
				
				this.getSet=function(set_name) { //gets a particular set
				
					if (set_name in this.sets && typeof set_name !== 'undefined')
						return this.sets[set_name];
					else
						return ERR_DOES_NOT_EXIST_CODE;
				
				};
				
				//MUTATOR METHODS
				
				this.increaseScorePerSecond=function() { //TODO - make this private - doesn't make sense to have it public
					//increment the score per second
					score+=pointsPerSecond/fps;
				
				};
				
				this.increaseScorePerClick=function() {
					//increment the score per click
					score+=pointsPerClick;
//					$('#money_value').html(game.getScore()) // -> we'll want a way to know which html element we track score in for quicker updates on low-FPS games -> integrate this with the attributes tracks system?
					
				
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
				
				//end single-variable game functions
				
				
					
				this.addSet=function(n_name) {
					//adds a set to sets
					
					if (!(n_name instanceof EntitySet)) //if the passed parameter is not an entity set itself
					{	
						this.sets[n_name]=new EntitySet(n_name);//create a new empty entity set with the name given
						return this.sets[n_name];//after adding a set, return it directly to the user for chaining/adding entities
					}
					else
					{	//store the entity set
						this.sets[n_name.getName()]=n_name;//because the user wants to add a pre-existing EntitySet --> current if you modify one, both get modified
						return this.sets[n_name.getName()];//return directly to user for chaining/adding entities
					}
					

					
					
				};		
				
				this.removeSet=function(n_name) {
				
					if (typeof n_name !== 'undefined' && (n_name in this.sets))
					{
						delete this.sets[n_name];
						return SUCC_CODE;
					
					}
					else
						return ERR_DOES_NOT_EXIST_CODE;
				
				};
				
				//Clicker -> Makes an object clickable
				this.addClicker=function(identifier,func,params)
				{
					//identifier of html element -> .class, #id ..etc
					//func -> function to call everytime this is clicked
					//params -> array of parameters
					
					if (this.isDefined(identifier) && this.isDefined(func))//make sure all arguments are defined
					{
						var list;
						if (this.isDefined(params) && params.constructor.name !== 'Array') //only one argument passed and it wasn't passed as an array
						{	
							//this allows us to add a Clicker with a single parameter function without having to use an array :)
							list=[params];
							params=list;
						}
						
						if (!this.isDefined(params))
						{	
							list=[];
							var params=[];
						}
						
						$(identifier).on("click", function() {
					
							func.apply(null,params);
					
						});
					}
					
				
				};
				
				this.removeClicker=function(identifier) {
					alert("done");
					$(identifier).off("click");//removes clickables
				
				};
				
				
				this.size=function(thing) {
					//gets the size of the sets variable or attributes
					
					//use this to count sets or attributes as they're associative object arrays and therefore .length cannot be used on them
					var size=0;
					var keys=Object.keys(thing);
					for (i in keys)
						size++;
					return size;
						
				};
				
				
				//main init
				
				this.init=function(options) {
				
					//add binders
					$("#clicker").on("click", this.increaseScorePerClick);
					
				
				};
				
				//main play function - ultimately will implement web workers and delta timers
				
				this.play=function(func) {
				
					setInterval(function() {
						//maintain our tracks
						for (i in Tracks)
							$(Tracks[i].element).html(Tracks[i].container[Tracks[i].name]);
						
						//execute our functions
						if (typeof func !== 'undefined') func();
					
					}, 1000/this.getFPS());
				
				};				
				
			};
			
	
			
			
			
			
	//Entitities system
	/*
	EntitySet -> name, entities[] -> collection of Entity objects, this.length
	Entity -> name, attributes[] -> collection of attributes/objects
	
	
	
	
	*/
			EntitySet.prototype=new Common();
			function EntitySet(n_name,n_attributes) {
				
				
				Common.call(this,n_attributes);
				
				//Private variables
				var name=n_name;//name of set
				var entities=[];//array of Entity objects -> entities.first_upgrade
				
				//public variables
				this.length=0;
				
				//functions
				
				//ACCESSORS
				
				this.size=function() { return this.length;}
				
				this.getName=function() { return name; };
				
				this.getEntities=function() { return entities;};
				this.getSet=function() { return this.getEntities(); }; //this needs to be deprecated with our next major version
				
				this.getEntity=function(n_name) {
				
					if (typeof n_name !== 'undefined' && (n_name in entities))
					{
						return entities[n_name];
						
					
					}
					else
						return ERR_DOES_NOT_EXIST_CODE;
				
				};
				
				this.hasEntity=function(n_name) {

					return (n_name in this.getEntities());
				
				
				};
				
				
				//MUTATORS
				
				this.addEntity=function(EntityT,attr) {
					//this function adds an Entity and returns 1 if successful - 0 if not
					
					if (EntityT instanceof Entity && !(EntityT.getName() in entities) && typeof attr === 'undefined') //make sure you're adding an Entity that doesn't already exist - UNIQUE NAMES
					{
						//receiving an entity object
						entities[EntityT.getName()]=new Entity(EntityT); // ---> NEED TO CHECK IF AN ENTITY IS PASSED TO ENTITY CONSTRUCTOR 
						this.length++;
						return entities[EntityT.getName()];//return this entity in this EntitySet
					}
					else if (typeof attr === 'undefined' && !(EntityT instanceof Entity) && !(EntityT in entities)) //else no attributes were given but no entity was passed either, it's just a name that we make sure doesn't exist in the current set already
					{
						
						entities[EntityT]=new Entity(EntityT);
						this.length++;
						return entities[EntityT]; //return this entity
						
					
					}
					else if (typeof attr !== 'undefined' && !(EntityT in entities))	//this means that the user has passed a name AND attributes, instead of an entity itself
					{
					
						var en=new Entity(EntityT,attr);
						entities[en.getName()]=en;
						this.length++;
						return entities[en.getName()];//return this entity in this EntitySet
					
					}
					else
						return ERR_INVALID_PARAMS_CODE;//either it's not an entity type but the name exists, or it is but the name exists
					
					
				};
				
				this.removeEntity=function(n_name) {
				
					if (typeof n_name !== 'undefined' && (n_name in entities))
					{
						delete entities[n_name];
						this.length-=1;
						return SUCC_CODE;
					
					}
					else
						return ERR_DOES_NOT_EXIST_CODE;
				
				};
				
			
			};
			
			
			
			
			
			//Entity -> essential building blocks of this whole system
			function Entity(n_name,n_attributes) {
			
				
				
				if (typeof n_name !== 'undefined' && typeof n_attributes === 'undefined' && n_name.constructor.name=="Entity" ) //->only n_name is passed, check if it's entity
				{
					//copy constructor CODE NOW since we were passed an entity only
					Common.call(this,n_name.getAttributes());
					var name=n_name.getName();
					
				
				}
				else
				{
					var name=n_name;//name of Entity -- must be unique
					Common.call(this,n_attributes);
				}
				
				
				//accessor/mutators
				this.getName=function() { return name;};
							
			};



	//AttributeSet-> regular javascript objects that hold attributes -> extended with some prototype functions

			//create a simple container object to hold attributes with some helper functions
			function AttributeSet(n_attributes) {
				
				if (typeof n_attributes !== 'undefined')
				{
					var keys=Object.keys(n_attributes);
					for (i in keys)
					{	
						if (keys[i] in this) //probably a prototype method
						{	
							return "SPECIAL KEY";
						}
						else
							this[keys[i]]=n_attributes[keys[i]];
					}
				}
			
			
			};
			
			AttributeSet.prototype.getAttributes=function() {
				//returns a COPY, not the original, list of attributes
				var list=[];
				var keys=Object.keys(this);
				for (i in keys) 
				{
					if (this.hasOwnProperty(keys[i]))
						list[keys[i]]=this[keys[i]];
				
				}
				//returns a copy
				return list;
				
			
			};
			
			AttributeSet.prototype.getAttribute=function(attr) {
				//prototype for getting an attribute
				if (typeof attr !== 'undefined' && this.hasOwnProperty(attr))
				{	
					return this[attr];
				}
				else
					return ERR_DOES_NOT_EXIST_CODE; 	

			};
			
			AttributeSet.prototype.hasAttribute=function(attr) {
				//checks if it has an attribute --> returns true or false
				return (typeof attr !== 'undefined' && (attr in this));
			
			};
			
			AttributeSet.prototype.setAttribute=function(attr,value) {
			
				if (typeof attr !== 'undefined' && typeof value !== 'undefined') //a valid attr and value have been provided
				{	

					this[attr]=value;
					return this;
				}
				else
					return ERR_INVALID_PARAMS_CODE;
			
			};
			
			AttributeSet.prototype.addAttribute=function(attr,value,ele) { 
				
				//incase someone accidentally does addAttribute instead of setAttribute because we have addEntity, addSet..etc
				if (typeof attr !== 'undefined' && typeof value !== 'undefined') //a valid attr and value have been provided
				{	

					this[attr]=value;
					
					//checking if the user wants to track this variable
					if (typeof ele !== 'undefined')//track it in this element
					{	
						Tracks.push({container:this,name:attr,element:ele});
						
					}
					
					return this;
				}
				else
					return ERR_DOES_NOT_EXIST_CODE;
			}
			
			AttributeSet.prototype.removeAttribute=function(attr) {
			
				if (typeof attr !=='undefined' && (attr in this))
				{
					delete this[attr];
					return SUCC_CODE;
				}
				else
					return ERR_DOES_NOT_EXIST_CODE+" OR "+ERR_INVALID_PARAMS_CODE;
			
			};
			
			
			
			AttributeSet.prototype.size=function() {
				//get total number of attributes in this object
				var l=0;
				var keys=Object.keys(this);
				for (i in keys)
				{
					
					if (this.hasOwnProperty(keys[i]))
						l++;
				
				}

					//l++;
					
				return l;
			
			};

		

	
			
				
				
		
			
			
//===