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
    
    let YumiTrap = new Modal(
        "Zones/TouchPoint/YumiTrap",
        "Appuyez sur espace pour discuter avec Yumi !",
        linkYumiTrap,
        "right",
        "interact",
        "PNJ",
        "Yumi_TrapMap"
      
      );
});
