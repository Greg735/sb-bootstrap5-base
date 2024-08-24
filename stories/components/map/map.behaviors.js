document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll("[data-map-id]");

    elements.forEach(function(element) {
        var long = element.getAttribute("data-long");
        var lat = element.getAttribute("data-lat");
        var zoom = element.getAttribute("data-zoom");
        var popup = element.getAttribute("data-marker-descr");
        var popup_open = element.getAttribute("data-marker-open");
        var map_id = element.getAttribute("id");

        var map = L.map(map_id).setView({
            'lat': lat,
            'lng': long
        }, zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: ' <a href="https://www.openstreetmap.org/copyright">OpStrMap</a>'
        }).addTo(map);

        var icon = L.icon({
            iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
            iconSize: [38, 95], // taille de l'icône
            iconAnchor: [22, 94], // point de l'icône correspondant à la position du marqueur
            popupAnchor: [-3, -76] // point d'où le popup s'ouvre par rapport à iconAnchor
          });

        // var themark = L.marker([lat, long], {
        //     icon: myDivIcon
        // }).addTo(map);

        // var icon = L.icon({
        //     iconUrl: '{{ icon }}',
        //     iconSize: [38, 95], // taille de l'icône
        //     iconAnchor: [22, 94], // point de l'icône correspondant à la position du marqueur
        //     popupAnchor: [-3, -76] // point d'où le popup s'ouvre par rapport à iconAnchor
        //   });
      
        //   var marker = L.marker([ lat ,  long ], { icon: icon }).addTo(map);

          var marker = L.marker([ lat ,  long ], {'alt': popup}).addTo(map);

        if (popup && popup.length > 0) {
            marker.bindPopup(popup);
            if (popup_open == 1) {
                marker.bindPopup(popup).openPopup();
            }
        }
    });
});
