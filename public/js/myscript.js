function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  document.getElementById("yourName").innerHTML = profile.getName();
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

}

// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://localhost:8080/tokensignin');
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// xhr.onload = function() {
//   console.log('Signed in as: ' + xhr.responseText);
// };
// xhr.send('idtoken=' + id_token);
