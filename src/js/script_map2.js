import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction, onTpCondition, tutorial, onEnterAuthorization, getVariableOnZone, createVariableWA} from './class';

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

    
    /** ----- TRAPMAP TOUCHPOINT ----- **/
    const linkYumiTrap = "https://chat.csml.dev/s/fcm79jpseev46kfx05r03r2mhzybz518";
    const SamathanVideoLink = "https://www.youtube.com/embed/5O2_m8PPMPQ?si=Vw-yhO1et_9fr3ic";
    const LeoVideoLink = "https://www.youtube.com/embed/CmloVJf5rg4?si=0p90cKSxPGMIUxns";
    const BenjaminVideoLink = "https://www.youtube.com/embed/bBCP2glQtC0?si=xBqubYQwaMkuWq7m";
    
    let YumiTrap = new Modal(
        "Interactions/YumiTrap",
        "Appuyez sur espace pour discuter avec Yumi !",
        linkYumiTrap,
        "right",
        "interact",
        "PNJ",
        "PNJ_YumiTrapMap"
    );

    let SamathanVideo = new PopUpVideo(
        "Interactions/SamathanVideo",
        "Appuyez sur espace pour regarder la vidéo",
        [
            "Hey, Yumi aime découvrir l’industrie, ses métiers et celles et ceux qui les exercent.",
            "Elle a appelé Samatha pour découvrir son métier et son parcours."
        ],
        "SamathanVideoText",
        SamathanVideoLink,
        "interact",
        "Video",
        "Video_SamathanTrapMap",
    );

    let LeoVideo = new PopUpVideo(
        "Interactions/LeoVideo",
        "Appuyez sur espace pour regarder la vidéo",
        [
            "Léo a été interviewé par Yumi !",
            "Découvrez son métier et son parcours."
        ],
        "LeoVideoText",
        LeoVideoLink,
        "interact",
        "Video",
        "Video_LeoTrapMap",
    );

    let BenjaminVideo = new PopUpVideo(
        "Interactions/BenjaminVideo",
        "Appuyez sur espace pour regarder la vidéo",
        [
            "Yumi ne s'est pas arrêtée là, elle a également appelé Benjamin, regardez son témoignage !"
        ],
        "BenjaminVideoText",
        BenjaminVideoLink,
        "interact",
        "Video",
        "Video_BenjaminTrapMap",
    );


});
