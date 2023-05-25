// Chargement de la lib JS de WA
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

let msgYumi;
let msgStud1;
let msgStud2;
let msgStud3;


WA.onInit().then(() => {
    userPseudo = WA.player.name;
    userWaId = WA.player.uuid;
    WA.player.state.score = 0;
    userScore = WA.player.state.score;
    // console.log("HEEEERE " + WA.player.uuid);
    // WA.player.setOutlineColor(255, 153, 51);
    // WA.chat.sendChatMessage('Hello world', 'Mr Robot');


});

WA.ui.modal.openModal({
    title: "Tutorial",
    src: "https://workadventure.github.io/scripting-api-extra/tutorialv1.html",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: !0,
    position: "right"
});

WA.room.onEnterLayer("pnj1").subscribe(() => {
    msgYumi = WA.ui.openPopup("pnj1text", "Yumi : ' Bienvenue sur le land ! Découvrez les différents espaces du jeu en vous promenant !''"
    , [{
        label: "Génial, je veux en savoir plus !",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://heroes.brainsonic.com/");
        }
    }]);

});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("pnj1").subscribe(() => {
    if(msgYumi != null)
    msgYumi.close();
})

///////////////////////////////////////////////

WA.room.onEnterLayer("pnj2").subscribe(() => {
    msgStud1 = WA.ui.openPopup("pnj2text", " Bonjour je suis étudiant 1", [{
        label: "Génial, je veux en savoir plus !",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://heroes.brainsonic.com/");
        }
    }]);

});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("pnj2").subscribe(() => {
    msgStud1.close();
})

///////////////////////////////////////////////

WA.room.onEnterLayer("pnj3").subscribe(() => {
    msgStud2 = WA.ui.openPopup("pnj3text", " Bonjour je suis étudiant 2", [{
        label: "Bonjour !",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://heroes.brainsonic.com/");
        }
    }]);

});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("pnj3").subscribe(() => {
    msgStud2.close();
})

///////////////////////////////////////////////

WA.room.onEnterLayer("pnj4").subscribe(() => {
    msgStud3 = WA.ui.openPopup("pnj4text", " Bonjour je suis étudiant 3", [{
        label: "Bonjour !",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://heroes.brainsonic.com/");
        }
    }]);

});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("pnj4").subscribe(() => {
    msgStud3.close();
})

///////////////////////////////////////////////


class Popup {

    close() {};
}