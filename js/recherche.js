let gynecologie = {
  motif: "Gynécologie",
  specialties: [
    "Consultations classiques de gynécologie",
    "Pose de stérilet",
    "Implant contraceptif",
    "Douleurs pelvi-périnéales",
    "Santé sexuelle",
    "Vaccination HPV",
    "Echographie",
    "Symptothermie",
    "Depistage MST et IST",
  ],
};
let ivg = {
  motif: "IVG",
  specialties: ["Pose de stérilet", "Implant contraceptif"],
};

let motifs = [gynecologie, ivg];

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

// This function dynamically populates a list of specialities based on the selected motif in a dropdown.
function createSpecialities(motif) {
  let selectedMotif = null; //intialize selected motif
  let input = document.getElementById("specialty"); //get the input field
  input.value = ""; //reset the input field
    //loop through the motifs to find the selected motif
  for (let i = 0; i < motifs.length; i++) {
    if (motif.toUpperCase() == motifs[i].motif.toUpperCase()) {
      selectedMotif = motifs[i];
      break;
    }
  }
    //if the selected motif is found, populate the specialities list
  if (selectedMotif != null) {
    let div = document.getElementById("specialtyContent");//get the div that contains the specialities
    div.innerHTML = "";
    //loop through the specialities of the selected motif and create an anchor tag for each specialty
    for (let i = 0; i < selectedMotif.specialties.length; i++) {
      let a = document.createElement("a");
      a.textContent = selectedMotif.specialties[i];
      a.href = `#${selectedMotif.specialties[i]}`;
      a.onclick = function () {
        input.value = selectedMotif.specialties[i]; //set the value of the input field to the selected specialty
        document.activeElement.blur(); //close dropdown
      };
      div.appendChild(a);//append the anchor tag to the div
    }
  } else {
    let div = document.getElementById("specialtyContent");
    div.innerHTML = ""; //reset the specialities list
  }
}

/* This function fills the motif input field
and updates the associated specialities based on the selected motif.*/
function fillMotifInput(e) {
  let input = document.getElementById("motif");
  input.value = e.toString();
  createSpecialities(e.toString());
  document.activeElement.blur(); //close dropdown
}

/* This function is triggered when the motif input field is updated,
and it updates the associated specialities and applies filtering.*/
function motifFunction() {
  let input = document.getElementById("motif");
  createSpecialities(input.value);
  filterFunction(input);
}

/* This function fills the specialty input field
and updates the associated specialities based on the selected motif.*/
function specialtyFunction() {
  let input = document.getElementById("specialty");
  filterFunction(input);
}

/* This function is triggered when the "Rechercher" button is clicked */
function submitFunction() {
    let motif = document.getElementById("motif").value; //get the value of the motif input field
    let specialty = document.getElementById("specialty").value; //get the value of the specialty input field
    let zip = document.getElementById("zip").value; //get the value of the zip input field
    let link ="https://www.oma-care.fr/pages/ton-ta-professionnel-le-de-sante/"+motif+"_"+specialty+"_"+zip;//create the link
    //open the link in the same tab
    window.open(link, "_self");
}
