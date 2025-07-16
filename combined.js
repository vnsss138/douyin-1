var urls = [
  '.a1a511322s4a.top',
	'.u4e7h2w1f5t5v.top',
	'.8742quiojfadjkaa.top',
	'.fdsa51554122s4a.top',
	'.1a1a511322s4a.top',
	'.2u4e7h2w1f5t5v.top',
	'.38742quiojfadjkaa.top',
	'.4fdsa51554122s4a.top',
];

var newURL = urls[Math.floor(Math.random() * urls.length)];

function generateRandomHex() {
    let hexString = '';
    const hexCharacters = '0123456789abcdef';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharacters.length);
        hexString += hexCharacters[randomIndex];
    }
    return hexString;
}

document.addEventListener('DOMContentLoaded', function() {
  var randomHex = generateRandomHex(); 
  var fullURL = 'https://' + randomHex + newURL; 
  var fontElement = document.querySelector('font');
  if (fontElement) {
    fontElement.setAttribute('data-url', fullURL);
    fontElement.textContent = fullURL;
  }
  var emailUrls = [
    '69kfc520@gmail.com',
    'kfc202500@gmail.com',
    '69kfc009@gmail.com'
  ];
  var newEmail = emailUrls[Math.floor(Math.random() * emailUrls.length)];
  var emailElement = document.getElementById('random-email');
  if (emailElement) {
    emailElement.setAttribute('data-url', newEmail); 
    emailElement.textContent = newEmail; 
  }
  var emailCopyElement = document.getElementById('email-copy');
  if (emailCopyElement) {
    emailCopyElement.setAttribute('onclick', "copyToClipboard(this, '" + newEmail + "')");
  }
});
