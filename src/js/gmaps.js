var map;
function initMap() {
    var php = {lat: 50.445940, lng: 30.502720};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: php
    });
    var marker = new google.maps.Marker({
        position: php,
        map: map,
    });


}