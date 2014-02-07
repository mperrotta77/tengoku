#pragma strict

var speed : float = 2; //How fast
var distance : float = 3; //How far
var direction : int = 1; // Checks up or down

private var elapsed : float = 0;

function Update () {

	//Move the platform
	transform.Translate(Vector3.right * direction * speed * Time.deltaTime);
	
	//Add the distance travelled
	elapsed += speed * Time.deltaTime;
	
	//Check if moved enough to turn around
	if(elapsed >= distance){
		
		//Check the over movement (over time will change) and move back 
		//elapsed -= distance;
		//transform.Translate(Vector3.up *-distance * elapsed);
		
		direction *= -1;
		elapsed = 0;
		
	}

}