
			//particle object
			function Particle(x,y) {
			
				this.type="circle";
				this.x=x;
				this.y=y;
				this.size=0.5;
				this.opacity=rand(0.5,10);
				this.moveSpeed=this.opacity/10 * 2;
				this.modifier=0;
			};
			
			Particle.prototype.draw=function() {
				this.x-=(this.moveSpeed+this.modifier);
				if (this.x < 0) this.x=screenWidth;
				ctx.save();
				ctx.beginPath();
				ctx.globalAlpha=this.opacity/10;
				ctx.fillStyle="white";
				ctx.arc(this.x,this.y,this.size,0,2*Math.PI,false);
				ctx.fill();
				ctx.restore();
			
			};