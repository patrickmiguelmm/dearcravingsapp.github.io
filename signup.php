<?php
// Retrieve form data
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Perform necessary validation and sanitization

// Save the user data to a file
$userData = [
    'username' => $username,
    'email' => $email,
    'password' => password_hash($password, PASSWORD_DEFAULT)
];

$users = json_decode(file_get_contents('users.json'), true); // Read user data from file
$users[] = $userData; // Add the new user data
file_put_contents('users.json', json_encode($users)); // Write updated user data to file

// Redirect the user to the home page or a success page
header('Location: index.html');
exit();
?>
