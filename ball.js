class ball{
constructor(x,y,radius){
var options={
restitution:0.75,
friction:0.35
}
this.body=Bodies.circle(x,y,radius,options)
this.radius=radius
World.add(world,this.body)
}
display(){
var pos=this.position
push()
translate(this.body.position.x,this.body.position.y)
ellipseMode(CENTER);
ellipse(0,0,this.radius,this.radius)
pop()
}

}