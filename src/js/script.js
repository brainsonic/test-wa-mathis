// Chargement de la lib JS de WA
import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction, onTpCondition, tutorial, onEnterAuthorization, getVariableOnZone, createVariableWA, trapLayer} from './class';
import { phase_1 } from "./steps/script_phase1";
import { phase_2 } from "./steps/script_phase2";
import { phase_3 } from "./steps/script_phase3";


// VARIABLES ///////////////////////////////////////////////
const tutorialLink = "https://64ix.github.io/WA-Edited-Tutorial/tutorial.html";
//ZONE OUTGATE INFO
const popupLink = "https://brainsonic.github.io/UIMM-WA-Extras/popupSansPlay.html";
const textOutGate = "Vous êtes sorti de la gare";
export const formLink = "https://0eb89b36.sibforms.com/serve/MUIFAMTWQq_m3rCQrgfnBO8-HUshniX2rebB99OuvGmVKli0cw-cqIAuuXmPLAf59d5fr3da55Y6I8vGYtYzUJYlP7Y1Fyqerb7hzo1g46RIoDQctc_3J1eAnLxeaf9_TDTFVFtxgL-yPG4vYXJyDTYTY91roQ8Dc_iPWu5Mk4jex5m-RA-4UEf_3X7zhPuKy2UIZmyYxyp7AEPK";

// SETUP ///////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {

  WA.onInit().then(() => {
    // désactiver les proximity meeting parceque peu utile
    WA.controls.disablePlayerProximityMeeting();
    WA.controls.disableMicrophone();
    WA.controls.disableWebcam();
  });
  
  WA.room.onLeaveLayer("Zones/StartingPoint").subscribe(() => {
    // open modal
    WA.ui.modal.openModal({
      title: "Popup",
      src: popupLink,
      allow: "fullscreen; clipboard-read;",
      allowApi: !0,
      position: "center",
    });
    tracking();
  });

  
  phase_1();
  phase_2();
  phase_3();

});

function tracking(){
  const url_api = "https://uimm-trackers-api-stg-0b60361e2cd1.herokuapp.com/api/tracker_events";
  console.log("Nouveau Visiteur");
  const data = {
    type: "Popup",
    category: "Popup",
    name: WA.player.name,
  }

  const request = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/ld+json'
    },
    body: JSON.stringify(data)
  }

  fetch(url_api, request)
    .then(response => {
      if(!response.ok) {
        console.log('Erreur tracker');
        throw new Error('Network response was not OK')
      }
      return response.json();
    })
    .then(data => {

      //console.log('Response :', data);

    })
    .catch(error => {
      console.error('Error:', error)
    }) 
}



//Log to check in the WA that the script has passed
console.log('VERSION 11');