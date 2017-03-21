<?php
	header('Access-Control-Allow-Origin: *');
	$rest_json = file_get_contents("php://input");
	$obj = json_decode($rest_json, true);

	//print_r($obj);
	//print_r($obj["surface_to_paint"]["selected"]);
	//$messagebody = json_encode($obj);
	//var_dump($_SERVER );
	//var_dump($_GET );
	//var_dump($_REQUEST );

	if(isset($obj)) {

		$surface_to_paint          = json_encode($obj['surface_to_paint']);
		$surface_to_paint_selected = json_encode($obj['surface_to_paint']['selected']);
		$surface_to_paint_other    = $obj['surface_to_paint']['other'];

		$size_of_project           = $obj['size_of_project'];

		$approximate_area          = $obj['approximate_area'];

		$location_type             = json_encode($obj['location_type']);
		$location_type_selected    = $obj['location_type']['selected'];
		$location_type_other       = $obj['location_type']['other'];

		$job_timeframe             = json_encode($obj['job_timeframe']);
		$job_timeframe_selected    = $obj['job_timeframe']['selected'];
		$job_timeframe_date        = $obj['job_timeframe']['date'];
		$job_timeframe_other       = $obj['job_timeframe']['other'];

		$job_location              = json_encode($obj['job_location']);

		$contact_by                = json_encode($obj['contact_by']);
		$contact_by_selected       = $obj['contact_by']['selected'];
		$contact_by_email          = $obj['contact_by']['email'];
		$contact_by_phone          = $obj['contact_by']['phone'];

		$full_name = $obj['full_name'];

		function clean_string($string) {
		  $bad = array("content-type","bcc:","to:","cc:","href");
		  return str_replace($bad,"",$string);
		}

		$emailto      = 'contact@sanjosepintor.com';
		$toname       = 'ME';
		$emailfrom    = $obj['contact_by']['email'];
		$fromname     = clean_string($full_name);
		$subject      = 'SanJosePintor Quote request from ' .clean_string($full_name);
		$messagebody = "Form details below.\n\n";
		$messagebody .= "What would you like painted? ".clean_string($surface_to_paint_selected)."\n";
		$messagebody .= "- Other: ".clean_string($surface_to_paint_other)."\n\n";

		$messagebody .= "How much painting is involved? ".clean_string($size_of_project)."\n\n";

		$messagebody .= "What is the approximate square footage of the area(s) to be painted? ".clean_string($approximate_area)."\n\n";

		$messagebody .= "Where would you like painting? ".clean_string($location_type_selected)."\n";
		$messagebody .= "- Other: ".clean_string($location_type_other)."\n\n";

		$messagebody .= "When do you need painting? ".clean_string($job_timeframe_selected)."\n";
		$messagebody .= "- On selected date: ".clean_string($job_timeframe_date)."\n";
		$messagebody .= "- Other: ".clean_string($job_timeframe_other)."\n\n";

		$messagebody .= "Please confirm where you need the painter. ".$job_location."\n\n";

		$messagebody .= "How would you like to receive quotes? ".clean_string($contact_by_selected)."\n";
		$messagebody .= "- Email address to contact by: ".clean_string($contact_by_email)."\n";
		$messagebody .= "- Phone to text at: ".clean_string($contact_by_phone)."\n";

		//$messagebody .= "Message json: ".json_encode($obj)."\n";


		$headers =
			'Return-Path: ' . $emailfrom . "\r\n" .
			'From: ' . $fromname . ' <' . $emailfrom . '>' . "\r\n" .
			'X-Priority: 3' . "\r\n" .
			'X-Mailer: PHP ' . phpversion() .  "\r\n" .
			'Reply-To: ' . $fromname . ' <' . $emailfrom . '>' . "\r\n" .
			'MIME-Version: 1.0' . "\r\n" .
			'Content-Transfer-Encoding: 8bit' . "\r\n" .
			'Content-Type: text/plain; charset=UTF-8' . "\r\n";
		$params = '-f ' . $emailfrom;
		$test = mail($emailto, $subject, $messagebody, $headers, $params);
		echo $test;

	} else {

		echo false;

	}

?>
