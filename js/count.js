const request = new XMLHttpRequest()

request.open('GET', 'https://api.apetrei.eu/getCounter', true)

request.onload = function() {
  if (request.status === 200) {
    data = request.responseText
    document.getElementById("counting").innerHTML = 'and this page has been viewed ' + data + ' times :-) '     
  } else if (request.status === 404) {
    document.getElementById("counting").innerHTML = "Gah, it's not working! Error 404!"
  }
}

request.send()