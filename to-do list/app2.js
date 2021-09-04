function newElement() {
          var li = document.createElement("li");
          var inputValue = document.getElementById("input").value;
          var t = document.createTextNode(inputValue);
          li.appendChild(t);

          if (inputValue === '') {
                    alert("write something!");
                  } else {
                    document.getElementById("List").appendChild(li);
                  }

          
}
function del() {
          document.getElementById("List").remove();
}


