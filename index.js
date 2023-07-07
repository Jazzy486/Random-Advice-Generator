document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.adviceslip.com/advice")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        document.getElementById("advice-content").innerHTML = data.slip.advice;
        document.getElementById("advice-number").innerHTML = data.slip.id;
      })
      .catch(function(error) {
        console.log("Error fetching advice:", error);
      });
  });

  document.getElementById("advice-button").addEventListener("click", function(){
    fetch("https://api.adviceslip.com/advice")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        document.getElementById("advice-content").innerHTML = data.slip.advice;
        document.getElementById("advice-number").innerHTML = data.slip.id;
      })
      .catch(function(error) {
        console.log("Error fetching advice:", error);
      });
  }); 