import"https://unpkg.com/@workadventure/scripting-api-extra@^1";import{M as r,P as t}from"./class-0a66756a.js";document.addEventListener("DOMContentLoaded",()=>{let e=window.location.href.split("/");WA.onInit().then(()=>{WA.player.state.cardAccessStep4!=null&&(e[e.length-1]="map.tmj",WA.nav.goToRoom(e.join("/")))}),WA.room.onEnterLayer("Tp/NextStep").subscribe(()=>{e[e.length-1]="map.tmj#Reset",WA.nav.goToRoom(e.join("/"))});const o="https://chat.csml.dev/s/fcm79jpseev46kfx05r03r2mhzybz518",a="https://www.youtube.com/embed/5O2_m8PPMPQ?si=Vw-yhO1et_9fr3ic",i="https://www.youtube.com/embed/CmloVJf5rg4?si=0p90cKSxPGMIUxns",n="https://www.youtube.com/embed/bBCP2glQtC0?si=xBqubYQwaMkuWq7m";new r("Interactions/YumiTrap","Appuyez sur espace pour discuter avec Yumi !",o,"right","interact","PNJ","PNJ_YumiTrapMap"),new t("Interactions/SamathanVideo","Appuyez sur espace pour regarder la vidéo",["Hey, Yumi aime découvrir l’industrie, ses métiers et celles et ceux qui les exercent.","Elle a appelé Samatha pour découvrir son métier et son parcours."],"SamathanVideoText",a,"interact","Video","Video_SamathanTrapMap"),new t("Interactions/LeoVideo","Appuyez sur espace pour regarder la vidéo",["Léo a été interviewé par Yumi !","Découvrez son métier et son parcours."],"LeoVideoText",i,"interact","Video","Video_LeoTrapMap"),new t("Interactions/BenjaminVideo","Appuyez sur espace pour regarder la vidéo",["Yumi ne s'est pas arrêtée là, elle a également appelé Benjamin, regardez son témoignage !"],"BenjaminVideoText",n,"interact","Video","Video_BenjaminTrapMap")});