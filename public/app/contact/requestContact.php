<?php
/**
 * @author Rizart Dokollari
 * @version 2/13/15
 */
if ($_SERVER['REQUEST_METHOD'] !== 'POST')
{
	header("Location: /error-403");
	exit();
}

require __DIR__ . '/../../../vendor/autoload.php';
use Mailgun\Mailgun;

// See #14.
if (!getenv('APP_ENV'))
{
	Dotenv::load(__DIR__ . '/../../../');
}

# mailgun. First, instantiate the SDK with your API credentials and define your domain.
$mg = new Mailgun(getenv('MAILGUN_API_KEY'));
$domain = getenv('MAILGUN_DOMAIN_NAME');

// Load mail template
$html = file_get_contents(__DIR__ . '/contactMessageTemplate.html');

// Retrieve data from angularjs
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

// Force Greece/Athens timezone
date_default_timezone_set('Europe/Athens');
$currentDate = date('m/d/Y h:i:s a', time());

$recipientEmail = getenv('RECIPIENT_CONTACT_EMAIL');
$websiteDomain = $_SERVER['SERVER_NAME'];;
$websiteTitle = getenv('WEBSITE_TITLE');
$emailSubject = "$websiteTitle | $request->subject";
$subject = $request->subject;

# Now, compose and send the message.
$mg->sendMessage(
	$domain,
	['from'                => "no-reply@$websiteDomain",
	 'to'                  => $recipientEmail,
	 'subject'             => $emailSubject,
	 'text'                => 'Your mail does not support html',
	 'html'                => $html,
	 'o:testmode'          => 'yes',
	 'recipient-variables' =>
		 '{
			"' . $recipientEmail . '":
				{
					"name":"' . $request->name . '",
					"currentDate":"' . $currentDate . '",
					"email":"' . $request->email . '",
					"message":"' . $request->message . '",
					"websiteTitle":"' . $websiteTitle . '",
					"websiteDomain":"' . $websiteDomain . '",
					"subject":"' . $subject . '"
				}
		}'
	]);