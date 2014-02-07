#pragma strict

var speed : float = 4; // default speed is zero, = 4 is just a choice from playing around
var jumpHeight : float = 6;
var health : int = 5;


function FixedUpdate () { //FixedUpdate is dealing specfically with rigidbodys as opposed to Update

	//Horizontal movement of player
	//GetAxis - Horizontal refers to specific keys (a, d, leftArrow, rightArrow)
	//Input.GetAxis produces a number (1, 0, -1) depending on keypress
	
	rigidbody.velocity.x = speed * Input.GetAxis("Horizontal");
	
	//Jumping for the player (spacebar)
	
	if(Input.GetButton("Jump")&& IsGrounded()){
		rigidbody.velocity.y = jumpHeight;
	}	
	//Check if we are hitting sides of objects
	var distance : float = rigidbody.velocity.magnitude * Time.fixedDeltaTime;
	var hit : RaycastHit;
	
	if(rigidbody.SweepTest(rigidbody.velocity, hit, distance)){
	//Stop movement
		rigidbody.velocity.x = 0;
	}
	
}//end FixedUpdate

function IsGrounded(){

	//Fire Raycast to check for the ground. Returns Boolean (T or F)
	return Physics.Raycast(transform.position, Vector3.down, collider.bounds.extents.y + 0.01); //if raycast was to left or right, we use .x

}//end IsGrounded

function Hit(){
	//Remove one hit point and check for death
	health -= 1;
	if(health == 0){
		Debug.Log("You dead sucka");
		Destroy(gameObject);
	}
}

function OnCollisionEnter(collision : Collision){
	//Check if we hit something that hurts us
	if(collision.gameObject.tag == "EnemyHurt"){
		print("hit");
		rigidbody.position.x -= 2;
		Hit();
	}
}