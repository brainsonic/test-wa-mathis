// Chargement de la lib JS de WA
import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction, onTpCondition, tutorial, onEnterAuthorization, getVariableOnZone, createVariableWA, trapLayer} from './class';
import { step_1 } from "./steps/script_step1";

// VARIABLES ///////////////////////////////////////////////
const tutorialLink = "https://64ix.github.io/WA-Edited-Tutorial/tutorial.html";

/* ------------ Phase 2 ------------ */

//MétierRoom
const poolLink = "https://brainsonic.github.io/WA-Misc-EasterEggs/pool/index.html";
const scribbleLink = "https://brainsonic.github.io/WA-Misc-EasterEggs/scribble/index.html";
const nicolasVideoLink = "https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS";
const cariVideoLink = "https://www.youtube.com/embed/cM2U-uKXzts?si=HSPzO1A938ei964m";
const FannyVideoLink = "https://www.youtube.com/embed/DU7kScvKs6w?si=FIRpu9XituPJ3gMf";
const apprentiRobotLink = "https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8";
const apprentiChaudronniereVideoLink = "https://www.youtube.com/embed/Oxo69n0aoTo?si=jJ7e6AM-wAx4Gw6K";
const YumiMetierBot = "https://chat.csml.dev/s/y8l6b6nctclj5edykh5uig5furqheumt"; //
const MelodyVideoLink = "https://www.youtube.com/embed/Oxo69n0aoTo?si=jJ7e6AM-wAx4Gw6K";

//ShowRoom

const anaisVideoLink = "https://www.youtube.com/embed/DE_sTYDs4rg?si=EvU29NiQVEYlUMBs";
const Liebherr_aerospaceVideoLink = "https://www.youtube.com/embed/unodEN9Xwls?si=xgK0E-M33XjEG1kz";
const LucieVideoLink = "https://www.youtube.com/embed/7mUgmZgLrxM?si=MIFAXrMjrElzpuI9";
const OtechVideoLink = "https://www.youtube.com/embed/eBuPRPSBXlc?si=iMw0riL5KJyYjfIe"; //TO CHANGE
const FrankVideoLink = "https://www.youtube.com/embed/hCydgXRsT_s?si=n075VkCZefobeWDY";
const respRDVideoLink = "https://www.youtube.com/embed/dFBHOiedwkQ?si=3CJQ8h6MYL10nkSg";
const ajustMonteurVideoLink = "https://www.youtube.com/embed/oJQcLWtGmDY?si=wcUwCbNc-Yw7bSS-";
const GalvanoplasteVideoLink = "https://www.youtube.com/embed/QFpgqyR30Lw?si=YbXrJHJ5YnFtyqm6";
const RafaelVideoLink = "https://www.youtube.com/embed/jIVCWY2mxjs?si=3MTDTHHaeCGGYpeN";
const respBureauVideoLink = "https://www.youtube.com/embed/YzXnbdKdbwY?si=5Jt9ZcvzwENDE7nA";
const YumiITWBot = "https://chat.csml.dev/s/hbw8pdiu5ok2a7iyycx0vxix0ujwnrbm";
const MaximeVideoLink = "https://www.youtube.com/embed/RV-WS11CLTk?si=RUVpvBUxVXbagXU4";

//ParkInside

const doigbyVideoLink = "https://www.youtube.com/embed/3An5XwFbKgM?si=Sm7VNc1OKJpUxyQz";
const tiboInShapeVideoLink = "https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s";
const RomaneBotLink = "https://chat.csml.dev/s/dwszjr5yty6xglcsycmtcts4p0xmvjid"; //
const InfluenceBotLink = "https://chat.csml.dev/s/2yh4lfxd7nba5zevmybgseb41bcn6h9b";
const linkVideoJeune3 = "https://www.youtube.com/embed/mgX4eHVDlTc?si=DIfTDwIU92KX9KWg";

//Labo Yumi

const PaulygonesVideoLink = "https://www.youtube.com/embed/vqbbGDkOG30?si=0iaVf_eClMnZ0qRH";
const hiHacksVideoLink = "https://www.youtube.com/embed/BChzaJv_JzQ?si=K1G9ZNtbFTiTO3AA";
const YumiLabBotLink = "https://chat.csml.dev/s/klxfbaancmfkzzwaxqge99dx3ayvksex";

//DinningRoom

const AurelienChatLink = "https://chat.csml.dev/s/mdpagk2kgwff7cjjjlqxfbkmtaegcc8z"; //
const AdrienChatLink = "https://chat.csml.dev/s/eimrkwagnizsgkt2exfyzpqikxvsiqok"; //
const AnneChatLink = "https://chat.csml.dev/s/urfgrirj0fzedjnkgdtc8pndlybbirja"; //
const AurelieChatLink = "https://chat.csml.dev/s/nzulmz6enql33he6f7ghqv6vmw9iyqai"; //
const LaureChatLink = "https://chat.csml.dev/s/cjue6rorfvlktkzitr71bdjrxchv8rg9"; //
const LudivineChatLink = "https://chat.csml.dev/s/oegmltlziitgfljossd3gdvstkoggde7"; //
const LudovicChatLink = " https://chat.csml.dev/s/5swwzc2ho5ldzer5orwie8uksvsymrjj"; //
const SeverineChatLink = "https://chat.csml.dev/s/iofny0f6wdowp8avygfofsqg5lm5hmx8"; //

//Transporteur

const YumiTransporteurBotLink = "https://chat.csml.dev/s/tgepml6az4lsuucyz4tr8ujisrxmxmb4";

/* ------------ Phase 3 ------------ */

const linkYumiStep2Depart = "https://chat.csml.dev/s/kdcybqjeewfai4itensots5rud2mg4cj";
const linkYumiStep2Final = "https://chat.csml.dev/s/dkhsdz2acozjcammiextxvgmqr6bi6al";

// Lab Industrie
const PaulygonesIndustrieVideoLink = "https://www.youtube.com/embed/R3GFX6387Hw";
const LucieIndustrieVideoLink = "https://www.youtube.com/embed/jDIfPsnb5LI";
const JadeIndustrieVideoLink = "https://www.youtube.com/embed/aH12YYBDZc8?si=bU2SA6-xTgUG8L0q";
const ArnaudIndustrieVideoLink = "https://www.youtube.com/embed/yULRqI_KGb4";

// Final Room

const formLink = "https://0eb89b36.sibforms.com/serve/MUIFAMTWQq_m3rCQrgfnBO8-HUshniX2rebB99OuvGmVKli0cw-cqIAuuXmPLAf59d5fr3da55Y6I8vGYtYzUJYlP7Y1Fyqerb7hzo1g46RIoDQctc_3J1eAnLxeaf9_TDTFVFtxgL-yPG4vYXJyDTYTY91roQ8Dc_iPWu5Mk4jex5m-RA-4UEf_3X7zhPuKy2UIZmyYxyp7AEPK";
const WorldUIMMYTBVideoLink = "https://www.youtube.com/embed/videoseries?si=lxOwHdwG2RZNgqBo&amp;list=PLFysjt-P1QCMOaJCY_jCO1HF7IXOoo8hO";
const UIMMInstaLink = "https://www.instagram.com/uimm.lafabriquedelavenir/";
const ForIndustrieLink = "https://univers.forindustrie.fr/";
const IndustrizLink = "https://ajir.industriz.fr/Application/";
const WorldSkillsStatuesLink = "https://www.worldskills-laserie.fr";
const UIMMRecruteLink = "https://www.lindustrie-recrute.fr";

// SETUP ///////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {

  WA.onInit().then(() => {
    // désactiver les proximity meeting parceque peu utile
    console.log("DEBUT :",WA.player.state['TutorialRead']);
    if (WA.player.state['TutorialRead'] != true)
    {
       WA.ui.modal.openModal({
         title: "Tutorial",
         src: tutorialLink,
         allow: "fullscreen; clipboard-read; clipboard-write",
         allowApi: !0,
         position: "right",
       });
    }
    WA.controls.disablePlayerProximityMeeting();
    createVariableWA('TutorialRead');
    console.log("APRES :",WA.player.state['TutorialRead']);
  });

  //ZONE OUTGATE INFO
  const popupLink = "https://brainsonic.github.io/UIMM-WA-Extras/popup.html";
  const textOutGate = "Vous êtes sorti de la gare";
  let openInfoPopup = false; //Check if the popUp is already open
  WA.room.onLeaveLayer("Zones/OutGate").subscribe(() => {
    if (openInfoPopup == false)
    {
      openInfoPopup = true;
      // open modal 
      WA.ui.modal.openModal({
        title: "Popup",
        src: popupLink,
        allow: "fullscreen; clipboard-read;",
        allowApi: !0,
        position: "center",
      });
    }
  });
  //BUTTON TUTORIAL
  WA.ui.actionBar.addButton({
    id: 'tutorial-btn',
    label: 'Tutoriel',
    callback: (event) => {
      tutorial();
    }
  })

  step_1();

  //Phase 2
  
  //MetierRoom
  let Nicolas = new PopUpVideo(
    "Interactions/MetierRoom/Nicolas",
    "Appuyez sur espace pour parler à Nicolas !",
    [
      "Bonjour, moi c’est Nicolas et je suis soudeur dans l’industrie aéronautique. Venez découvrir mon métier !",
    ],
    "Nicolas",
    nicolasVideoLink,
    "interact",
    "PNJ",
    "PNJ_Nicolas"
  )
  
  let Cari = new PopUpVideo(
    "Interactions/MetierRoom/Cari",
    "Appuyez sur espace pour parler à Jordan !",
    [
      "Bonjour, moi c’est Jordan et je suis concepteur de systèmes embarqués. Vous connaissez ? Non ? Alors venez découvrir mon métier !",
    ],
    "Cari",
    cariVideoLink,
    "interact",
    "PNJ",
    "PNJ_Cari"
  )
  
  let Fanny = new PopUpVideoAction(
    "Interactions/MetierRoom/Fanny",
    "Appuyez sur espace pour parler à Fanny !",
    [
      "Moi, c’est Fanny, et grâce à l'apprentissage, j'ai pu effectuer un semestre universitaire à l'étranger.",
      "Avant de vous en dire plus, si vous cherchez quelqu'un avec une clé, je l'ai vu partir vers le jardin.",
      "Mais ne partez pas tout de suite et découvrez mon parcours !"
    ],
    [
      "Moi, c’est Fanny, et grâce à l'apprentissage, j'ai pu effectuer un semestre universitaire à l'étranger."
    ],
    "IngProd",
    FannyVideoLink,
    () => {
      if (WA.player.state["startSideQuestStep4"] != null && WA.player.state["startSideQuestStep4"] == true)
      {
        WA.player.state["TalkHint_1"] = true;
        return true;
      }
      return false;
    },
    "interact",
    "PNJ",
    "PNJ_Fanny"
  );
  
  let ApprentiRobotVideo = new PopUpVideo(
    "Interactions/MetierRoom/ApprentiRobot",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Thomas est apprenti dans la robotique. Découvrez son métier en vidéo ! "
    ],
    "ApprentiRobot",
    apprentiRobotLink,
    "interact",
    "Video",
    "Video_Thomas"
  );
  
  let ApprentiChaudronniereVideo = new PopUpVideo(
    "Interactions/MetierRoom/ApprentiChaudron",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Découvrez en vidéo le métier de Pauline, apprentie en chaudronnerie navale."
    ],
    "ApprentiChaudronniere",
    apprentiChaudronniereVideoLink,
    "interact",
    "Video",
    "Video_Pauline"
  );
  
  let yumiMetier = new Modal(
    "Interactions/MetierRoom/chatBot_1",
    "Appuyez sur espace pour discuter avec Yumi !",
    YumiMetierBot,
    "right",
    "interact",
    "PNJ",
    "PNJ_YumiMetier"
  );

  let Melody = new PopUpVideo(
    "Interactions/MetierRoom/Melody",
    "Appuyez sur espace pour parler à Melody",
    [
      "Melody est rigoureuse, minutieuse même.",
      "C'est normal, elle s'occupe de la conformité de pièces complexes",
      "Car dans le nucléaire, on ne rigole pas avec la sécurité.",
      "Regardez."
    ],
    "MelodyText",
    MelodyVideoLink,
    "interact",
    "PNJ",
    "PNJ_Melody"
  );

  let Scribble = new Modal(
    "Interactions/MetierRoom/Scribble",
    "Appuyez sur espace pour faire des dessins !",
    scribbleLink,
    "center",
    "interact",
    "Game",
    "Game_Scribble"
  );
  
  let Pool = new Modal(
    "Interactions/ShowRoom/Pool",
    "Appuyer sur espace pour faire du billard !",
    poolLink,
    "center",
    "interact",
    "Game",
    "Game_Pool"
  );
  
  //ShowRoom
  
  let Anais = new PopUpVideo(
    "Interactions/ShowRoom/Anais",
    "Appuyez sur espace pour parler à Anaïs !",
    [
      "Salut, moi c’est Anaïs et je suis technicienne méthodes. Si vous ne savez pas en quoi ça consiste : venez, je vous montre !",
    ],
    "Anais",
    anaisVideoLink,
    "interact",
    "PNJ",
    "PNJ_Anais"
  );
    
  let FrankVideo = new PopUpVideo(
    "Interactions/ShowRoom/FrankVideo",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Franck est responsable d'un atelier de montage chez SOFINOR.",
      "Découvrez son témoignage en vidéo !"
    ],
    "DessinateurIndu",
    FrankVideoLink,
    "interact",
    "Video",
    "Video_Frank"
  );
  
  let RespRD = new PopUpVideo(
    "Interactions/ShowRoom/RespR&D",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Isabelle est responsable R&D. Découvrez son métier en vidéo !"
    ],
    "RespRD",
    respRDVideoLink,
    "interact",
    "Video",
    "Video_Isabelle"
  
  );
  
  let AjustMonteur = new PopUpVideo(
    "Interactions/ShowRoom/AjustMonteur",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "C'est quoi le métier d'ajusteur-monteur ? Pour le découvrir c'est ici."
    ],
    "AjustMonteur",
    ajustMonteurVideoLink,
    "interact",
    "Video",
    "Video_Nicolas"
  );
  
  let XavierVideo = new PopUpVideo(
    "Interactions/ShowRoom/GalvanoplasteVideo",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Galvanoplaste, mais qu'est-ce que c'est ?",
      "La réponse en vidéo !"
    ],
    "GalvanoplasteVideoText",
    GalvanoplasteVideoLink,
    "interact",
    "Video",
    "Video_Galvanoplaste",
  );
  
  let RafaelVideo = new PopUpVideo(
    "Interactions/ShowRoom/RafaelVideo",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Raphaël a géré le remplacement de la télécabine de Font-Romeu.",
      "Un projet gigantesque et ambitieux.",
      "Regardez !"
    ],
    "ChargAff",
    RafaelVideoLink,
    "interact",
    "Video",
    "Video_Rafael",
  );
  
  let RespBureau = new PopUpVideo(
    "Interactions/ShowRoom/RespBureau",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Comment devenir responsable bureau d'études et méthodes ? Réponse en vidéo !"
    ],
    "RespBureau",
    respBureauVideoLink,
    "interact",
    "Video",
    "Video_RespBureau",
  );
  
  let yumiITW = new Modal(
    "Interactions/ShowRoom/ITWBot",
    "Appuyez sur espace pour discuter avec Yumi Journaliste !",
    YumiITWBot,
    "right",
    "interact",
    "PNJ",
    "PNJ_YumiJournaliste",
  );
  
  let MaximeVideo = new PopUpVideo(
    "Interactions/ShowRoom/MaximeVideo",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Quelqu'un peut me dire ce qu'est la mécatronique ?",
      "Écoutez bien Maxime, responsable de la R&D chez Otech, il vous dit tout."
    ],
    "MaximeVideoText",
    MaximeVideoLink,
    "interact",
    "Video",
    "Video_Maxime",
  );

  let Liebherr_aerospace = new PopUpVideo(
    "Interactions/ShowRoom/LiebherrAerospace",
    "Appuyez sur espace pour écouter le podcast !",
    [
      "Quel est le point commun entre l'aéronautique et l'automobile ?",
      "Capucine, ingénieure système chez Liebherr-Aerospace Toulouse, vous donne la réponse.",
      "Soyez attentif."
    ],
    "LiebherrAerospaceText",
    Liebherr_aerospaceVideoLink,
    "interact",
    "Video",
    "Video_LiebherrAerospace",
  );

  let LucieVideo = new PopUpVideo(
    "Interactions/ShowRoom/LucieVideo",
    "Appuyez sur espace pour écouter le podcast !",
    [
      "La robotique mobile, qu'est-ce que c'est ?",
      "Lucie, ingénieure d'application chez Meanwhile, vous explique tout.",
    ],
    "LucieVideoText",
    LucieVideoLink,
    "interact",
    "Video",
    "Video_LucieVideo",
  );
  
  //ParkInside
  
  let Maeva = new PopUpVideoAction(
    "Interactions/ParkInside/Maeva",
    "Appuyez sur espace pour parler à Maëva !",
    [
      "Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !",
      "Avant ça, si tu cherches une personne possédant une clef.",
      "Je l'ai vu partir vers la cafeteria, il avait du bleu sur lui",
    ],
    [
      "Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !",
    ],
    "MaevaText",
    tiboInShapeVideoLink,
    () => {
      if (WA.player.state["startSideQuestStep4"] != null && WA.player.state["startSideQuestStep4"] == true)
      {
        WA.player.state["TalkHint_2"] = true;
        return true;
      }
      return false;
    },
    "interact",
    "PNJ",
    "PNJ_Maeva",
  );
  
  let RomaneBot = new Modal(
    "Interactions/ParkInside/Hihacks",
    "Appuyez sur espace pour discuter avec Romane !",
    RomaneBotLink,
    "right",
    "interact",
    "PNJ",
    "PNJ_Romane",
  );

  let Jeune3 = new PopUpVideo(
    "Interactions/ParkInside/Manon",
    "Appuyez sur espace pour parler à Manon !",
    [
      "J'ai 22 ans.",
      "Je crée des objets de A à Z.",
      "Je dessine beaucoup.",
      "J'adore la mécanique.",
      "Je m'appelle Manon et je suis spécialisée en Conception 3D et Fabrication Additive.",
      "Venez décrouvrir ma passion !"
    ],
    "ManonText",
    linkVideoJeune3,
    "interact",
    "PNJ",
    "PNJ_Manon"
  );
  
  
  //Labo Yumi

  
  let Paulygones = new PopUpVideo(
    "Interactions/LaboRoom/Paulygones",
    "Appuyez sur espace pour parler à Paulygones !",
    [
      "Je m'appelle Paulygones.",
      "Bon en vrai, c'est Paul Guillotel.",
      "Mais ce qui est sûr, c'est que j'aime fabriquer des trucs.",
      "Ça tombe bien car ici, tout le monde aime créer de nouvelles choses !",
      "Dans cette vidéo, vous apprendrez à fabriquer un aspirateur à vêtements géant."
    ],
    "DrNozman",
    PaulygonesVideoLink,
    "interact",
    "PNJ",
    "PNJ_Paulygones",
  );

  let HiHacks = new PopUpVideo(
    "Interactions/LaboRoom/Hihacks_labo",
    "Appuyez sur espace pour parler à Henri !",
    [
      "Salut ! Moi c’est Henri Hihacks et grâce à Thiaifène, apprenti en BTS Maintenance des Systèmes, j’ai réalisé un projet complètement fou... Vous êtes curieux de le découvrir ? Alors regardez ma vidéo !",
    ],
    "Hihacks_labo",
    hiHacksVideoLink,
    "interact",
    "PNJ",
    "PNJ_HenriHihacks",
  );
  
  let YumiLabBot = new Modal(
    "Interactions/LaboRoom/YumiLab",
    "Appuyez sur espace pour discuter avec Yumi Scientifique !",
    YumiLabBotLink,
    "right",
    "interact",
    "PNJ",
    "PNJ_YumiScientifique",
  );
  //Dinning Room
  
  let Adrien = new PopUpVideo(
    "Interactions/DinningRoom/Adrien",
    "Appuyez sur espace pour discuter avec Adrien !",
    [
      "Non, le chaudronnier ne fait pas de magie.",
      "Ou peut-être que si finalement.",
      "La réponse avec Adrien."
    ],
    "Adrientext",
    AdrienChatLink,
    "interact",
    "PNJ",
    "PNJ_AdrienDinningRoom",
    "right",
  );

  let Aurelie = new PopUpVideo(
    "Interactions/DinningRoom/Aurelie",
    "Appuyez sur espace pour discuter avec Aurelie !",
    [
      "Connaissez-vous l'automatisme ?",
      "Aurélie vous explique tout.",
      "Suivez le guide."
    ],
    "AurelieText",
    AurelieChatLink,
    "interact",
    "PNJ",
    "PNJ_AurelieDinningRoom",
    "right",
  );

  let Anne = new PopUpVideo(
    "Interactions/DinningRoom/Anne",
    "Appuyez sur espace pour discuter avec Anne !",
    [
      "Anne est technicienne QHSE.",
      "Quésaco ?",
      "Elle vous dit tout."
    ],
    "AnneText",
    AnneChatLink,
    "interact",
    "PNJ",
    "PNJ_AnneDinningRoom",
    "right",
  );

  let Severine = new PopUpVideo(
    "Interactions/DinningRoom/Severine",
    "Appuyez sur espace pour discuter avec Severine !",
    [
      "Je dessine des compresseurs, des condenseurs, des détendeurs, des évaporateurs…",
      "Je suis dessinatrice industrielle.",
      "Venez découvrir mon métier."
    ],
    "SeverineText",
    SeverineChatLink,
    "interact",
    "PNJ",
    "PNJ_SeverineDinningRoom",
    "right",
  );

  let Ludovic = new PopUpVideo(
    "Interactions/DinningRoom/Ludovic",
    "Appuyez sur espace pour discuter avec Ludovic !",
    [
      "Savez-vous ce qu'est l'usinage ?",
      "Pour en savoir plus, écoutez Ludovic !"
    ],
    "LudovicText",
    LudovicChatLink,
    "interact",
    "PNJ",
    "PNJ_LudovicDinningRoom",
    "right",
  );

  let Laure = new PopUpVideo(
    "Interactions/DinningRoom/Laure",
    "Appuyez sur espace pour discuter avec Laure !",
    LaureChatLink,
    "right",
    "interact",
    "PNJ",
    "PNJ_LaureDinningRoom"
  );

  let Aurelien = new PopUpVideo(
    "Interactions/DinningRoom/Aurelien",
    "Appuyez sur espace pour discuter avec Aurelien !",
    [
      "Moi, c'est Aurélien.",
      "Je travaille le titane, l'inox ou l'inconel.",
      "J'aime jouer des coudes.",
      "Je suis …"
    ],
    "AurelienText",
    AurelienChatLink,
    "interact",
    "PNJ",
    "PNJ_AurelienDinningRoom",
    "right"
  );

  let Ludivine = new PopUpVideo(
    "Interactions/DinningRoom/Ludivine",
    "Appuyez sur espace pour discuter avec Ludivine !",
    [
      "Réparer des moteurs d'avions, un rêve de gosse ?!",
      "Pour Ludivine, c'est son quotidien."
    ],
    "LudivineText",
    LudivineChatLink,
    "interact",
    "PNJ",
    "PNJ_LudivineDinningRoom",
    "right"
  );
  
  // END INTERACTIONS DIVERSES ///////////////////////////////////////////////
  
  /* ----- STEP 2 ----- */

  let YumiStep2Depart = new ModalAction(
    "Step2/YumiStep2Depart",
    "Appuyez sur espace pour discuter avec Yumi !",
    linkYumiStep2Depart,
    "right",
    () => {
        if (WA.player.state["TalkToYumiDepartTrappedRoom"] == null)
        {
          createVariableWA("TalkToYumiDepartTrappedRoom");
        }
        return true;
    },
    "interact",
    "PNJ",
    "PNJ_YumiDepartTrappedRoom",
  );
  
  //Hide the card if the player already pick it
  if (WA.player.state['cardAccess'] == true)
  {
    WA.room.hideLayer("Items/TrappedRoom/CardAccess");
  }
  //Card of the trapped Room
  let cardAccess = new ItemPickUpOnCondition(
    "Items/TrappedRoom/CardAccess",
    "Appuyez sur espace pour ramasser la carte d'accès",
    ["Vous avez récuperé la carte d'accès"],
    ["Vous devez d'abord parler à Yumi avant de le ramasser"],
    "cardAccessText",
    "cardAccess",
    () => {
        if (WA.player.state["TalkToYumiDepartTrappedRoom"] != null)
        {
          WA.room.hideLayer("Items/TrappedRoom/CardAccess");
          return true;
        }
        else
        {
          return false;
        }
    },
    "interract",
    "Object",
    "Object_cardAccess"
  );
  
  let YumiStep2Final = new InteractAction(
    "Step2/YumiStep2Final",
    "Appuyez sur espace pour discuter avec Yumi !",
    [
      "Bonjour, dépéchez-vous les saboteurs sont à votre poursuite",
      "Pour sortir d'ici, vous devez fabriquer un transporteur.",
      "C'est le seul moyen pour échapper aux Technophoby.",
      "Dans le labo, il y a en tout 4 éléments à récupérer pour le fabriquer.",
      "Mais attention, la mission se complique.",
      "Car un des objets est bloqué dans une caisse.",
      "Pour l'obtenir, il faudra d'abord trouver la clé, puis ouvrir la caisse.",
      "Ensuite, quand vous aurez les quatre objets en votre possession, cherchez une trappe secrète.",
      "Elle donnera accès à un sous-sol. Dans cet atelier, vous serrez tranquille pour assembler le transporteur.",
      "Allez-y maintenant, ils arrivent."
    ],
    [
      "Salut !",
      "Avez-vous bien le badge d'accès ?",
      "Sans lui, vous ne pouvez pas rentrer dans le lab de l'industrie.",
      "Retournez dans le couloir piégé pour le récupérer."
    ],
    "YumiStep2FinalText",
    () => {
      if (WA.player.state["cardAccess"] != null && WA.player.state["cardAccess"] == true)
      {
        createVariableWA("TalkToYumiFinalTrappedRoom");
        console.log("CARTE ACCES :", WA.player.state["TalkToYumiFinalTrappedRoom"]);
        return true;
      }
      return false;
    },
    "interact",
    "PNJ",
    "PNJ_YumiStep2Final",
  );

    //Open Door TrappedRoom
  let doorTrappedRoom = new InteractAction(
    "InteractAction/TrappedRoom/FinalDoor",
    "Appuyez sur espace pour insérer la carte d'accès",
    ["La porte est ouverte"],
    ["Vous devez avoir la carte d'accès et avoir parler à Yumi"],
    'doorTrappedRoomText',
    () => {
      if (WA.player.state["cardAccess"] != null && WA.player.state["cardAccess"] == true &&
        WA.player.state["TalkToYumiFinalTrappedRoom"] != null && WA.player.state["TalkToYumiFinalTrappedRoom"] == true) 
      {
        WA.room.hideLayer('beforePlayer/TrappedRoom/DoorFinal');
        WA.room.hideLayer('beforePlayer/TrappedRoom/CollideDoorFinal');
        WA.room.showLayer('beforePlayer/TrappedRoom/DoorFinalOpen');
        createVariableWA("cardAccessStep3");
        return true;
      }
      else
      {
        return false;
      }
    },
    "interract",
    "InteractAction",
    "Object_doorTrappedRoom"
  );

  //Digicode Door infinite exit 
  WA.room.onEnterLayer('Step2/exitZoneDoor').subscribe(() => {
    WA.room.hideLayer('closed_lab_door');
  });
  WA.room.onLeaveLayer('Step2/exitZoneDoor').subscribe(() => {
    WA.room.showLayer('closed_lab_door');
  });

  let nb_hole = 23;
  for (let index = 1; index < nb_hole + 1; index++)
  {
    trapLayer('HideTile/TrappedRoom/Hole_' + index, '#Depart'); 
  }

  /* ----- STEP 3 LABINDUSTRY----- */

  let PaulygoneVideo = new PopUpVideo(
    "Interactions/LabIndustrieRoom/PaulygoneVideo",
    "Appuyez sur espace pour regarder la vidéo",
    [
      "Le youtubeur Paulygones cherche à comprendre comment Robin s'y prend pour concevoir des robots mobiles autonomes.",
      "Regardez."
    ],
    "PaulygoneVideoText",
    PaulygonesIndustrieVideoLink,
    "interact",
    "Video",
    "Video_PaulygoneIndustrie",
  );

  let LucieIndustrieVideo = new PopUpVideo(
    "Interactions/LabIndustrieRoom/LucieIndustrieVideo",
    "Appuyez sur espace pour regarder la vidéo",
    [
      "Faut-il se former pour utiliser un robot mobile autonome ?",
      "Et bien oui nous apprend Lucie, ingénieure d'application !",
      "Découvrez pourquoi en vidéo."
    ],
    "LucieIndustrieVideoText",
    LucieIndustrieVideoLink,
    "interact",
    "Video",
    "Video_LucieIndustrie",
  );

  let JadeVideo = new PopUpVideo(
    "Interactions/LabIndustrieRoom/JadeVideo",
    "Appuyez sur espace pour regarder la vidéo",
    [
      "Jade a seulement 18 ans.",
      "Pourtant, elle travaille déjà dans une centrale nucléaire.",
      "Découvrez pourquoi en vidéo."
    ],
    "JadeVideoText",
    JadeIndustrieVideoLink,
    "interact",
    "Video",
    "Video_JadeIndustrie",
  );

  let ArnaudVideo = new PopUpVideo(
    "Interactions/LabIndustrieRoom/ArnaudVideo",
    "Appuyez sur espace pour regarder la vidéo",
    [
      "Tiens, on dirait... un extrait vidéo ?",
      "'Arnaud explique son métier au vidéaste Paulygones'",
      "Intéressant, regardons !"
    ],
    "ArnaudVideoText",
    ArnaudIndustrieVideoLink,
    "interact",
    "Video",
    "Video_ArnaudIndustrie",
  );
  
  let coatRackHint = new ItemOnLayer(
    "Items/LabIndustry/CoatRackHint",
    "Appuyez sur espace pour ramasser l'indice",
    ["Vous avez récuperé l'indice"],
    "coatRackText",
    "coatRackHint",
    "interract",
    "Object",
    "Object_coatRackItem"
  );
  
  let cafetHint = new ItemOnLayer(
    "Items/LabIndustry/CafetHint",
    "Appuyez sur espace pour ramasser l'indice",
    ["Vous avez récuperé l'indice"],
    "cafetText",
    "cafetHint",
    "interract",
    "Object",
    "Object_keyItem",
  );
  
  let keyItem = new ItemOnLayer(
    "Items/LabIndustry/Key",
    "Appuyez sur espace pour prendre la clef",
    ["Vous avez récuperé la clef du coffre"],
    "keyText",
    "keyItem",
    "interract",
    "Object",
    "Object_keyItem",
  );
  
  let BinHint = new ItemOnLayer(
    "Items/LabIndustry/BinHint",
    "Appuyez sur espace pour ramasser l'indice",
    ["Vous avez récuperé l'indice"],
    "binText",
    "binHint",
    "interract",
    "Object",
    "Object_binItem",
  );
  
  let chestHint = new ItemPickUpOnCondition(
    "Items/LabIndustry/ChestHint",
    "Appuyez sur espace pour ouvrir le coffre",
    ["Vous avez récuperé l'indice"],
    ["Vous n'avez pas la clef du coffre"],
    "chestText",
    "chestHint",
    () => {
      return  WA.player.state["keyItem"] != null && WA.player.state["keyItem"] == true ? true : false;
    },
    "interract",
    "Object",
    "Object_chestItem",
  );
  
  //Open trapDoor if all hint is gathered
  let trapDoor = new InteractAction(
    "InteractAction/LabIndustry/TrapDoor",
    "Appuyez sur espace pour ouvrir la trappe",
    ["Vous entrez dans la trappe"],
    ["Vous devez rassembler les 4 indices avant de pouvoir ouvrir la trappe"],
    'trapDoorText',
    () => {
      /*
      console.log("Indice : ", WA.player.state["cafetHint"]);
      console.log("Indice : ", WA.player.state["chestHint"]);
      console.log("Indice : ", WA.player.state["coatRackHint"]);
      console.log("Indice : ", WA.player.state["binHint"]);
      */
      if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
        && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
        && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
        && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true)
      {
        WA.player.state.saveVariable("cardAccessStep4", true, {
            public: true,
            persist: true,
            ttl: 720 * 3600,
            scope: "world"
        });
        let url_segments =  window.location.href.split('/');
        url_segments[url_segments.length - 1] = "map2.tmj";
        WA.nav.goToRoom(url_segments.join('/'));
        return true;
      }
      else
      {
        return false;
      }
    },
    "interract",
    "InteractAction",
    "Object_trapDoor"
  );
  onEnterAuthorization('Zones/ZoneStep3', ['cardAccessStep3'], 'EscapeGameText');
  
  /* ----- STEP 4 ----- */
  
  const zoneStep4 = 'Zones/ZoneStep4';
  const zoneFirstTP = 'Step4/FirstTP/ZoneFirstTP';
  const zoneSecondTP = 'Step4/SecondTP/ZoneSecondTP';
  const zoneThirdTP = 'Step4/ThirdTP/ZoneThirdTP';
  const zoneFourthTP = 'Step4/FourthTP/ZoneFourthTP';
  const zoneFifthTP = 'Step4/FifthTP/ZoneFifthTP';
  const zoneFinalStep4 = 'Step4/Last/ZoneLast';
  
  //Zone de départ
  
  let YumiStep4 = new ModalAction(
    "Step4/Yumi",
    "Appuyez sur espace pour discuter avec Yumi !",
    YumiTransporteurBotLink,
    "right",
    () => {
        var variable = "TalkToYumiStep4";
        if (WA.player.state[variable] == null)
        {
          WA.player.state.saveVariable(variable, true, {
            public: true,
            persist: true,
            ttl: 720 * 3600,
            scope: "world"
          })
        }
        return true;
    },
    "interact",
    "PNJ",
    "PNJ_YumiStep4",
  );

  let redButtonForm = new PopUpVideoAction(
    "Step4/Last/Redbutton",
    "Appuyez sur espace pour sauver Rayonance!",
    [
      "Bravo !!!",
      "Vous avez réussi.",
      "Rayonance est en sécurité et notre monde est sauvé.",
      "Vous êtes notre héros.",
      "Pour vous remercier, n'hésitez pas à remplir ce formulaire pour participer à notre jeu concours et tenter de gagner une playstation 5 slim et plein d'autres cadeaux bien stylés.",
      "L'aventure dans le Monde de Yumi ne s'arrête pas là.",
      "Continuez à vous balader dans les différentes salles grâce au transporteur situé dans la prochaine pièce.",
      "Les professionnels de l'industrie qui peuplent ce monde vous attendent pour vous parler de leurs métiers et de leurs projets passionnants !"
    ],
    ["Erreur dialogue"],
    "redButtonTxt",
    formLink,
    () => {
      createVariableWA("GameFinished");
      WA.room.hideLayer('Step4/Last/ButtonNotPressed');
      return true;
    },
    "right",
    "interact",
    "Form",
    "Formulaire_final"
  );

  /**---- FinalRoom ----**/

  let WorldUIMMYTB = new PopUpVideo(
    "Interactions/FinalRoom/WorldUIMMYTB",
    "Appuyez sur espace pour regarder les vidéos",
    [
      "Sur la page Youtube de l'UIMM, la fabrique de l'avenir, vous pourrez décrouvrir tous les métiers de l'industrie."
    ],
    "WorldUIMMYTBText",
    WorldUIMMYTBVideoLink,
    "interact",
    "Video",
    "Video_WorldUIMMYTB"
  );

  let UIMMInsta = new Dialog(
    "Interactions/FinalRoom/UIMMInsta",
    "Appuyez sur espace pour regarder l'affiche",
    [
      "Infos, témoignages, nouveautés, toutes nos actus sont sur Instagram.",
      "Suivez-nous ! https://www.instagram.com/uimm.lafabriquedelavenir/"
    ],
    "UIMMInstaText",
    "interact",
    "Link",
    "Link_UIMMInsta"
  );

  let ForIndustrie = new PopUpVideo(
    "Interactions/FinalRoom/ForIndustrie",
    "Appuyez sur espace pour regarder l'affiche",
    [
      "Entrez dans le monde de 'Forindustrie, l'Univers Extraordinaire', un métavers qui présente de manière ludique et innovante les métiers et les entreprises de l’industrie !"
    ],
    "ForIndustrieText",
    ForIndustrieLink,
    "interact",
    "Link",
    "Link_ForIndustrie"
  );

  let Industriz = new PopUpVideo(
    "Interactions/FinalRoom/Industriz",
    "Appuyez sur espace pour regarder l'affiche",
    [
      "Visitez sans tarder 'Industriz', une plateforme 3D sur laquelle vous pourrez en apprendre plus sur le monde de l'industrie, rencontrer des professionnels, participer à des rencontres ou encore tester vos connaissances !"
    ],
    "IndustrizText",
    IndustrizLink,
    "interact",
    "Link",
    "Link_Industriz"
  );

  let WorldSkillsStatues = new PopUpVideo(
    "Interactions/FinalRoom/WorldSkillsStatues",
    "Appuyez sur espace pour lire les statues",
    [
      "Visitez sans tarder 'Industriz', une plateforme 3D sur laquelle vous pourrez en apprendre plus sur le monde de l'industrie, rencontrer des professionnels, participer à des rencontres ou encore tester vos connaissances !"
    ],
    "WorldSkillsStatuesText",
    WorldSkillsStatuesLink,
    "interact",
    "Link",
    "Link_WorldSkillsStatues"
  );

  let UIMMRecrute = new PopUpVideo(
    "Interactions/FinalRoom/UIMMRecrute",
    "Appuyez sur espace pour lire le livre",
    [
      "Plus d'un million de postes à pourvoir d'ici 2030.",
      "N'hésitez plus et rejoignez-nous."
    ],
    "UIMMRecruteText",
    UIMMRecruteLink,
    "interact",
    "Link",
    "Link_UIMMRecrute"
  );

  let TeleporteurFinalRoom = new InteractAction(
    "Interactions/FinalRoom/TeleporteurFinalRoom",
    "Merci encore pour ton aide, tu as sauvé le Monde de Yumi. Si tu prends ce transporteur, tu iras directement dans le hub des métiers. Ce sera l'occasion pour toi de décrouvrir des femmes et des hommes passionants qui travailent dans l'industrie.",
    [
      "Merci encore pour ton aide, tu as sauvé le Monde de Yumi."    
    ],
    [
      "Merci encore pour ton aide, tu as sauvé le Monde de Yumi."    
    ],
    "TeleporteurFinalRoomText",
    () => {
      WA.nav.goToRoom("#tpShowRoom");
      return true;
    },
    "interact",
    "Teleport",
    "Teleport_FinalRoom"
  )

  //Condition si le joueur a déjà fait le jeu on ouvre la porte
  if (WA.player.state["GameFinished"] == true)
  {
    WA.room.hideLayer('Step4/Last/ButtonNotPressed');
  }

  /*
  * The code below is to check if the player has the access to certain zone of the TP
  * It permits to avoid player to cheat by using the URL to access in a certain zone
  */

  //Zone de Départ
  onEnterAuthorization(zoneStep4, ['cardAccessStep4'], 'EscapeGameText');
  getVariableOnZone('Step4/TpDepart', ['cardAccessZoneFirstTP']);
  onTpCondition('Step4/TpDepart', '#TpDepart_1', () => {
    return WA.player.state['cardAccessStep4'] != null && WA.player.state['TalkToYumiStep4'] != null ? true : false},
    'tpDepartStep4', 'Vous devez parler à Yumi');
  
  
  //Zone de TP_1
  onEnterAuthorization(zoneFirstTP, ['cardAccessZoneFirstTP'], 'EscapeGameText');
  getVariableOnZone('Step4/FirstTP/Tp1-3', ['cardAccessZoneSecondTP']);
  onTpCondition('Step4/FirstTP/Tp1-1', '#Reset', () => { return true }, 'tpDepart1Step4');
  onTpCondition('Step4/FirstTP/Tp1-2', '#Reset', () => { return true }, 'tpDepart1Step4');
  onTpCondition('Step4/FirstTP/Tp1-3', '#TpDepart_2', () => {
    return WA.player.state['cardAccessZoneFirstTP'] != null ? true : false;
  }, 'tpDepart1Step4');



  //Zone de TP_2
  onEnterAuthorization(zoneSecondTP, ['cardAccessZoneSecondTP'], 'EscapeGameText');
  getVariableOnZone('Step4/SecondTP/Tp2-2', ['cardAccessZoneThirdTP']);
  onTpCondition('Step4/SecondTP/Tp2-1', '#Reset', () => { return true }, 'tpDepart2Step4');
  onTpCondition('Step4/SecondTP/Tp2-2', '#TpDepart_3', () => {
    return WA.player.state['cardAccessZoneSecondTP'] != null ? true : false;
  }, 'tpDepart2Step4');
  onTpCondition('Step4/SecondTP/Tp2-3', '#Reset', () => { return true }, 'tpDepart2Step4');
  


  //Zone de TP_3
  onEnterAuthorization(zoneThirdTP, ['cardAccessZoneThirdTP'], 'EscapeGameText');
  getVariableOnZone('Step4/ThirdTP/Tp3-1', ['cardAccessZoneFourthTP']);
  onTpCondition('Step4/ThirdTP/Tp3-1', '#TpDepart_4', () => {
    return WA.player.state['cardAccessZoneThirdTP'] != null ? true : false;
  }, 'tpDepart3Step4');
  onTpCondition('Step4/ThirdTP/Tp3-2', '#Reset', () => { return true }, 'tpDepart3Step4');
  onTpCondition('Step4/ThirdTP/Tp3-3', '#Reset', () => { return true }, 'tpDepart3Step4');
  


  //Zone de TP_4
  onEnterAuthorization(zoneFourthTP, ['cardAccessZoneFourthTP'], 'EscapeGameText');
  getVariableOnZone('Step4/FourthTP/Tp4-2', ['cardAccessZoneFifthTP']);
  onTpCondition('Step4/FourthTP/Tp4-1', '#Reset', () => { return true }, 'tpDepart2Step4');
  onTpCondition('Step4/FourthTP/Tp4-2', '#TpDepart_5', () => {
    return WA.player.state['cardAccessZoneFourthTP'] != null ? true : false;
  }, 'tpDepart2Step4');
  onTpCondition('Step4/FourthTP/Tp4-3', '#Reset', () => { return true }, 'tpDepart2Step4');
  


  //Zone de TP_5
  onEnterAuthorization(zoneFifthTP, ['cardAccessZoneFifthTP'], 'EscapeGameText');
  getVariableOnZone('Step4/FifthTP/Tp5-3', ['cardAccessZoneFinalStep4']);
  onTpCondition('Step4/FifthTP/Tp5-1', '#Reset', () => { return true }, 'tpDepart2Step5');
  onTpCondition('Step4/FifthTP/Tp5-2', '#Reset', () => { return true }, 'tpDepart2Step5');
  onTpCondition('Step4/FifthTP/Tp5-3', '#TpArrive', () => {
    return WA.player.state['cardAccessZoneFifthTP'] != null ? true : false;
  }, 'tpDepart2Step5');
  onTpCondition('Step4/FifthTP/Tp5-4', '#Reset', () => { return true }, 'tpDepart2Step5');
  
  

  //Zone d'arrivée
  onEnterAuthorization(zoneFinalStep4, ['cardAccessZoneFinalStep4'], 'EscapeGameText');
  onTpCondition('Step4/Last/TpBack', '#start', () => { return true }, 'tpBackFinal');
  



  /* ----- Step 4 bis ----- */

  let Anton = new InteractAction(
    "Step4bis/Anton",
    "Appuyez sur espace pour parler à Anton !",
    [
      "Vous avez retrouvé ma clef.",
      "Vous avez ma gratitude éternelle !",
      "Voilà ce que je craignais tant de perdre",
      "Je ne suis pas sûr de sa signification, mais j'ai le sentiment que c'est très important pour vous.",
      "Concervez-la ou mémorisez-la, cela pourra vous être utile.",
    ],
    [
      "Ah, vous voilà enfin !",
      "Je suis dans une situation désespérée...",
      "Un habitant, avec qui j'ai eu une dispute récente, a volé la clef de mon coffre par vengeance.",
      "Le contenu de ce coffre est essentiel, il ne doit pas tomber entre de mauvaises mains.",
      "Je vous en prie, pouvez-vous m'aider à retrouver la clef et me la ramener ?",
      " Je ne peux pas quitter le coffre, mais je suis certain que les habitants du Monde de Yumi pourront vous aider à retrouver le voleur."
    ],
    "AntonText",
    () => {
      if (WA.player.state["startSideQuestStep4"] != null && WA.player.state["startSideQuestStep4"] == true
          && WA.player.state["chestDidierKey"] != null && WA.player.state["chestDidierKey"] == true) 
      {
        WA.player.state["allowOpenChest"] = true;
        return true;
      }
      else {
        WA.player.state["startSideQuestStep4"] = true;
        return false;
      }
    },
    "interact",
    "PNJ",
    "Didier"
  );

  let chestDidier = new InteractAction(
    "Step4bis/ChestDidier",
    "Appuyez sur espace pour ouvrir le coffre !",
    [
      "Vous avez récupéré une mystérieuse séquence !",
      "Gardez-la précieusement, elle vous servira pour les prochaines quêtes"
    ],
    ["Vous n'avez pas l'autorisation d'ouvrir le coffre !"],
    "ChestDidierText",
    () => {
      if (WA.player.state["allowOpenChest"] == true ) {
        createVariableWA("sequenceObtained");
        return true;
      }
      else {
        return false;
      }
    },
    "interact",
    "Object",
    "Object_sequence"
  );

  let Arnaud = new InteractAction(
    "Step4bis/Arnaud",
    "Appuyez sur espace pour parler à Arnaud !",
    [
      "Cette chaise est vraiment confortable !",
      "Vous cherchez quelque chose ?",
      "À me regarder comme ça, vous me rendez nerveux.",
      "Ok, c'est moi qui ai volé la clef d'Anton.",
      "La voici !",
      "Vous pouvez lui rapporter sa précieuse clef.",
      "*Vous avez récupéré la clef*"
    ],
    [
      "Cette chaise est vraiment confortable !",
      "Vous cherchez quelque chose ?"
    ],
    "ArnaudText",
    () => {
      console.log("1: ", WA.player.state["arnaudRevealed"] );
      console.log("2: ", WA.player.state["startSideQuestStep4"]);
      console.log("3: ", WA.player.state["TalkHint_1"]);
      console.log("4: ", WA.player.state["TalkHint_2"]);
      console.log("5: ", WA.player.state["TalkHint_3"]);
      if (WA.player.state["arnaudRevealed"] != true
      && WA.player.state["startSideQuestStep4"] != null && WA.player.state["startSideQuestStep4"] == true 
      && WA.player.state["TalkHint_1"] != null && WA.player.state["TalkHint_1"] == true
      && WA.player.state["TalkHint_2"] != null && WA.player.state["TalkHint_2"] == true
      && WA.player.state["TalkHint_3"] != null && WA.player.state["TalkHint_3"] == true) {
        
        //Variable pour revenir au dialogue de départ quand arnaud a été démasqué
        createVariableWA('arnaudRevealed');
        createVariableWA("chestDidierKey");
        return true;
      }
      else {
        return false;
      }
    },
    "interact",
    "PNJ",
    "Arnaud"
  );

  WA.onInit().then(() => {
    if (WA.player.state['sequenceObtained'] != null && WA.player.state['sequenceObtained'] == true)
    {
      WA.ui.actionBar.addButton({
        id: 'sequence-btn',
        label: 'Carte Secrète',
        callback: (event) => {
          WA.player.state['sequenceButtonDisplayed'] = true;
          WA.ui.modal.openModal({
            title: 'Sequence',
            src: 'https://brainsonic.github.io/UIMM-WA-Extras/sequence.html',
            allow: "fullscreen; clipboard-read;",
            allowApi: !0,
            position: "center",
          })
        }
      })
    }

    //Variable if player has obtained the sequence
    WA.player.state.onVariableChange('sequenceObtained').subscribe(() => {
      if (WA.player.state['sequenceObtained'] != null && WA.player.state['sequenceObtained'] == true
        && WA.player.state['sequenceButtonDisplayed'] != true)
      {
        WA.ui.actionBar.addButton({
          id: 'sequence-btn',
          label: 'Carte Secrète',
          callback: (event) => {
            createVariableWA("sequenceButtonDisplayed");
            WA.ui.modal.openModal({
              title: 'Sequence',
              src: 'https://brainsonic.github.io/UIMM-WA-Extras/sequence.html',
              allow: "fullscreen; clipboard-read;",
              allowApi: !0,
              position: "center",
            })
          }
        });
      }
    })
  });

});

/** --- TOUCHPOINT EPREUVE --- */

/** STEP 2 */


//Log to check in the WA that the script has passed
console.log('VERSION 6.5');