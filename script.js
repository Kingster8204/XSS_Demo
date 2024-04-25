function alert1(){
    let name1 = document.getElementById("name").value;
    let disease = document.getElementById("diseases").value;

    
    var displayDiv = document.createElement('div');
    displayDiv.innerHTML = "<p>Name -: " + name1 + "!</p> Disease -: " + disease;
    document.body.appendChild(displayDiv);
}
