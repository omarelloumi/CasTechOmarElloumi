/* This function is triggered when the "Rechercher" button is clicked */
function submitFunction() {
    let motif = document.getElementById("motif").value; //get the value of the motif input field
    let specialty = document.getElementById("specialty").value; //get the value of the specialty input field
    let zip = document.getElementById("zip").value; //get the value of the zip input field
    let link ="https://www.oma-care.fr/pages/ton-ta-professionnel-le-de-sante/"+motif+"_"+specialty+"_"+zip;//create the link
    window.open(link, "_self");
}

// This function filters and displays options based on user input in a dropdown menu.
function filterFunction(input) {
    let filter, a, i;
    filter = input.value.toUpperCase();
    divId = input.id.toString() + "Dropdown"; //get the id of the div that contains the options
    div = document.getElementById(divId); //select the div that contains the options
    a = div.getElementsByTagName("a");//get all the options
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText; //get the text of the option
      //check if the text of the option contains the user input
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = ""; //display the option
      } else {
        a[i].style.display = "none"; //hide the option
      }
    }
}

function motifFunction() {
    let input = document.getElementById("motif");
    filterFunction(input);
}


function fillMotifInput(e) {
    let input = document.getElementById("motif");
    input.value = e.toString();
    document.activeElement.blur(); //close dropdown
}

