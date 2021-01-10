class rope{
constructor(bodyA,bodyB,x,y){
    this.x=x
    this.y=y
var options={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x:this.x,y:this.y}
}
this.rope=Constraint.create(options)
World.add(world,this.rope)

}

display(){
strokeWeight(2)
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.x,this.rope.bodyB.position.y+this.y)


}




}