#pragma strict

var speed : float = 1.8;
var chaseAt : float = 5;

var player : GameObject;
//private var enemy : GameObject;
private var startingY : float;

function Start () {
	//Find and remember the player
	//player = GameObject.Find("Player");
	player = GameObject.FindGameObjectWithTag("Player");
	//enemy = GameObject.Find("Enemy");
	startingY = transform.position.y;
}

function Update () {
	
	//Calc the distance between the player and this enemy
	var distance = Vector3.Distance(transform.position, player.transform.position);
	
	
	//Check how close we are. If within the correct distance, chase, else stop chasing
	if(distance <= chaseAt){
	
		//Chase the player
		transform.Translate((player.transform.position - transform.position) * speed * Time.deltaTime);
		transform.position.y = startingY;
	}
}