function background(){
    var xhr = new XMLHttpRequest();
    url = 'http://127.0.0.1:3000'
    xhr.onreadystatechange = alertContents;
    xhr.open('GET', url);
    xhr.send();

    function alertContents() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            alert(xhr.responseText);
          } else {
            alert('There was a problem with the request.');
          }
        }
      }
}

background();