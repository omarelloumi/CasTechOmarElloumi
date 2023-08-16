function submitFunction() {
    let motif = document.getElementById("motif").value; //get the value of the motif input field
    let specialty = document.getElementById("specialty").value; //get the value of the specialty input field
    let zip = document.getElementById("zip").value; //get the value of the zip input field
    let link ="https://www.oma-care.fr/pages/ton-ta-professionnel-le-de-sante/"+motif+"_"+specialty+"_"+zip;//create the link
    window.open(link, "_self");
}
