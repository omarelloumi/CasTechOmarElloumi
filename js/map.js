let prof1 = {
    name :"Madame Adeline Penloup",
    motifs: "Gynécologie | Grossesse | IVG",
    adresse: "50 Av. des Caillols, 13012 Marseille, France",
    //43.303652665448034, 5.427145849049315
    localisation: {
        lat: 43.303652665448034,
        lng: 5.427145849049315
    }
}

let prof2 = {
    name :"Madame Anais Goga",
    motifs: "Grossesse | Gynécologie",
    adresse: "270 BOULEVARD RASPAIL, Paris, 75014",
    //48.836503978662385, 2.331293682208894
    localisation: {
        lat: 48.836503978662385,
        lng: 2.331293682208894
    }
}

let prof3 = {
    name : "Madame Audrey Guerizec",
    motifs: "Grossesse | Gynécologie",
    adresse: "62 RUE DES ENTREPRENEURS, Paris, 75015",
    //48.84533150561026, 2.288436
    localisation: {
        lat: 48.84533150561026,
        lng: 2.288436
    }
}

let prof4 = {
    name : "Madame Aurelie Aldebert",
    motifs: "Grossesse | Gynécologie",
    adresse: "62 RUE DES ENTREPRENEURS, Paris, 75015",
    //48.83119683365884, 2.326526660969528
    localisation: {
        lat: 48.83119683365884,
        lng: 2.326526660969528
    }
}

let prof5 = {
    name : "Madame Celine Creveau",
    motifs: "Grossesse | Gynécologie",
    adresse: "27 RUE CAULAINCOURT, Paris, 75018",
    //48.888002195502544, 2.33349402331334
    localisation: {
        lat: 48.888002195502544,
        lng: 2.33349402331334
    }
}

let prof6 = {
    name : "Madame Stephanie Metairie",
    motifs: "Grossesse | Gynécologie",
    adresse: "20 RUE CAULAINCOURT, Paris, 75018",
    //48.887170723130424, 2.3332593411044464
    localisation: {
        lat: 48.887170723130424,
        lng: 2.3332593411044464
    }
}

let professionnels = [prof1, prof2, prof3, prof4, prof5, prof6];

function initMap() {
    // Create the map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.858093, lng: 	2.294694 },
    zoom: 14,
  });

  // Get the user's location

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      //center the map on the user's location
      map.setCenter(userLocation);
      const userMarker = new google.maps.Marker({
        position: userLocation,
        map: map,
        title: "Your Location",
        icon: {
            url: "../imgs/home.jpg",
            scaledSize: new google.maps.Size(100, 100),
        },
      });

      // Create an info window for the marker
      const infoWindow = new google.maps.InfoWindow({
        content: "Vous êtes ici",
      });

        // Open the info window when the marker is clicked
        userMarker.addListener("click", () => {
            infoWindow.open(map, userMarker);
        });

    });
  }
  // Add a marker for each professional
  professionnels.forEach(professionnel => {
    const marker = new google.maps.Marker({
        position: professionnel.localisation,
        map: map,
        title: professionnel.name,
    });

    // Create an info window for the marker
    const infoWindow = new google.maps.InfoWindow({
        content: `${professionnel.name} <br> ${professionnel.motifs} <br> ${professionnel.adresse}`,
    });

    // Open the info window when the marker is clicked
    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
    });
}
