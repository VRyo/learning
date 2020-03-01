<?php 


function cetakAngka(){
	for($i=1; $i<=100; $i++){
		if($i % 3 == 0){
			echo 'tiga';
		} else if($i % 7 == 0){
			echo 'tujuh';
		} else {
			echo $i;	
		}
		echo '<br>';
	}
}

cetakAngka();

?>