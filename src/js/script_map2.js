import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

document.addEventListener('DOMContentLoaded', () => {
    let url_segments =  window.location.href.split('/');
    WA.onInit().then(() => {
        if (WA.player.state["cardAccessStep4"] != null)
        {
            url_segments[url_segments.length - 1] = "map.tmj";
            WA.nav.goToRoom(url_segments.join('/'));
        }
    });
    
    WA.room.onEnterLayer("Tp/NextStep").subscribe(() => {
        url_segments[url_segments.length - 1] = "map.tmj#Reset";
        WA.nav.goToRoom(url_segments.join('/'));
    });
});
