// Chargement de la lib JS de WA
import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction, onTpCondition, tutorial, onEnterAuthorization, getVariableOnZone, createVariableWA, trapLayer} from './class';
import { phase_1 } from "./steps/script_phase1";
import { phase_2 } from "./steps/script_phase2";
import { phase_3 } from "./steps/script_phase3";

// VARIABLES ///////////////////////////////////////////////
const tutorialLink = "https://64ix.github.io/WA-Edited-Tutorial/tutorial.html";
//ZONE OUTGATE INFO
const popupLink = "https://brainsonic.github.io/UIMM-WA-Extras/popup.html";
const textOutGate = "Vous êtes sorti de la gare";

// SETUP ///////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {

  WA.onInit().then(() => {
    // désactiver les proximity meeting parceque peu utile
    WA.controls.disablePlayerProximityMeeting();
    WA.controls.disableMicrophone();
    WA.controls.disableWebcam();
  });


  let openInfoPopup = false; //Check if the popUp is already open
  WA.room.onLeaveLayer("Zones/OutGate").subscribe(() => {
      // open modal 
      WA.ui.modal.openModal({
        title: "Popup",
        src: popupLink,
        allow: "fullscreen; clipboard-read;",
        allowApi: !0,
        position: "center",
      });
  });

  //BUTTON TUTORIAL
  WA.ui.actionBar.addButton({
    id: 'tutorial-btn',
    label: 'Tutoriel',
    callback: (event) => {
      tutorial();
    }
  })

  phase_1();
  phase_2();
  phase_3();

});

//Log to check in the WA that the script has passed
console.log('VERSION 10');