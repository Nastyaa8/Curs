var modal = document.getElementById("myModal");
var btn = document.getElementById("myForm");
var span = document.getElementsByClassName("close")[0];

btn.addEventListener('submit', function(event) {
    event.preventDefault();
    modal.style.display = "block";
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modalForm = document.getElementById("myModalForm");
var btnForm = document.querySelector(".btn");
var spanForm = document.getElementsByClassName("closeForm")[0];

btnForm.onclick = function() {
  modalForm.style.display = "block";
}

spanForm.onclick = function() {
    modalForm.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalForm) {
    modalForm.style.display = "none";
  }
}