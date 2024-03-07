// Chargement de la lib JS de WA
import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction, onTpCondition, tutorial, onEnterAuthorization, getVariableOnZone, createVariableWA} from './class';
import { statfsSync } from "fs";
import { Console } from "console";

// VARIABLES ///////////////////////////////////////////////
const tutorialLink = "https://64ix.github.io/WA-Edited-Tutorial/tutorial.html";
const pongLink = "https://64ix.github.io/WA-Edited-Tutorial/pong.html";
const basketLink = "https://brainsonic.github.io/UIMM-WA-Extras/shooting-hoops.html";
const pianoLink = "https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html";
const scribbleLink = "https://brainsonic.github.io/WA-Misc-EasterEggs/scribble/index.html";
const poolLink = "https://brainsonic.github.io/WA-Misc-EasterEggs/pool/index.html";
const formLink = "https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn";

const linkChatBotAccueil = " https://chat.csml.dev/s/klex5ttuh9bmpen8gyo4tssus4liqxgb";
const linkChatBotIngénieure = "https://chat.csml.dev/s/modkshn4koeqaqdjiaj5pa7hfxah6s57";
const linkVideoJeune1 = "https://www.youtube.com/embed/9QDd6dH0-Xc?si=nVcJ4ryPrmNZ8c7u";
const linkVideoJeune2 = "https://www.youtube.com/embed/pDMzhgu_Qbo?si=VKqmGCg01AkfOIQJ";
const linkVideoJeune3 = "https://www.youtube.com/embed/mgX4eHVDlTc?si=DIfTDwIU92KX9KWg";
const linkVideoMoonbike = "https://www.youtube.com/embed/eE3kWcMZsuE";
const linkVideo = "https://www.youtube.com/embed/videoseries?si=wKcics6QWpDWdVob&amp;list=PLEe-8ZKtOy6Oxx1qU_qRhdcBmy-lXBtqQ";
const linkVideoMagaly = "https://www.youtube.com/embed/bIG_XU7XRbw?si=ADidl-gwJ42Jh5kB";

/* ------------ Phase 2 ------------ */

//MétierRoom
const nicolasVideoLink = "https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS";
const cariVideoLink = "https://www.youtube.com/embed/cM2U-uKXzts?si=HSPzO1A938ei964m";
const FannyVideoLink = "https://www.youtube.com/embed/DU7kScvKs6w?si=FIRpu9XituPJ3gMf";
const apprentiRobotLink = "https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8";
const apprentiChaudronniereVideoLink = "https://www.youtube.com/embed/Oxo69n0aoTo?si=jJ7e6AM-wAx4Gw6K";
const YumiMetierBot = "https://chat.csml.dev/s/39iezvakvlqapvdwnakm2gjw6f1czgdp";
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
const YumiITWBot = "https://chat.csml.dev/s/bpzoedzc279smw2i649rwhtst9rguvva";
const MaximeVideoLink = "https://www.youtube.com/embed/RV-WS11CLTk?si=RUVpvBUxVXbagXU4";

//ParkInside

const doigbyVideoLink = "https://www.youtube.com/embed/3An5XwFbKgM?si=Sm7VNc1OKJpUxyQz";
const tiboInShapeVideoLink = "https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s";
const RomaneBotLink = "https://chat.csml.dev/s/qhij8orytimyritlrayvf8fasphdijzv";
const InfluenceBotLink = "https://chat.csml.dev/s/2yh4lfxd7nba5zevmybgseb41bcn6h9b";

//Labo Yumi

const PaulygonesVideoLink = "https://www.youtube.com/embed/vqbbGDkOG30?si=0iaVf_eClMnZ0qRH";
const hiHacksVideoLink = "https://www.youtube.com/embed/BChzaJv_JzQ?si=K1G9ZNtbFTiTO3AA";
const YumiLabBotLink = "https://chat.csml.dev/s/fb5kvplgaqoxlqfq9c2solxxt5jbyfh5";

//DinningRoom

const apprenti_1VideoLink = "https://www.youtube.com/embed/bIG_XU7XRbw?si=TmzUGmFJ11DA-Mhz";
const apprenti_2VideoLink = "https://www.youtube.com/embed/gxCuiA3-L4Q?si=15Pm8Vsp_im5XbLO";
const apprenti_3VideoLink = "https://www.youtube.com/embed/XZlUUGS7qng?si=L9sT1Pkp2bRlEUVV";
const ingProdVideoLink = "https://www.youtube.com/embed/8HlmZkJX_UQ?si=UtR-dDF2PR8lzDof";
const apprenti_5VideoLink = "https://www.youtube.com/embed/G4lEOWcPYv4?si=wa9eJCX3TbsLQZS2";
const apprenti_6VideoLink = "https://www.youtube.com/embed/Y35a-PeWnCY?si=ssJEvtuE8AQ5yQ43";


/* ------------ Phase 3 ------------ */

const linkYumiStep2Depart = "https://chat.csml.dev/s/ufpg8pzg8tkimx0n67c88gzayopoizr2";
const linkYumiStep2Final = "https://chat.csml.dev/s/04fl66mlrmgxggs6vcsc2wsgc9e2cr3s";

// Lab Industrie
const PaulygonesIndustrieVideoLink = "https://www.youtube.com/shorts/R3GFX6387Hw";
const LucieIndustrieVideoLink = "https://www.youtube.com/shorts/jDIfPsnb5LI";
const JadeIndustrieVideoLink = "https://www.youtube.com/embed/aH12YYBDZc8?si=bU2SA6-xTgUG8L0q";
const ArnaudIndustrieVideoLink = "https://www.youtube.com/shorts/yULRqI_KGb4";

// SETUP ///////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', () => {

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


  WA.onInit().then(() => {
    // désactiver les proximity meeting parceque peu utile
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
        allow: "fullscreen; clipboard-read; clipboard-write",
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
  // TEXTES PNJ ///////////////////////////////////////////////
  
  // texte des pnj sous format de tableau de string, chaque string est un nouveau popup
  const textCaptain = [
    "Ahoy !",
    "Me revoilà !",
    "Ne pouvant pas être partout à la fois, Yumi a eu la bonne idée de se cloner, vous allez rencontrer beaucoup de Yumi différentes dans mon monde.",
    "Je suis Yumi Capitaine, ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?",
    "Allez, on met les voiles !",
    "La France possède le deuxième domaine maritime mondial, juste derrière les États-Unis.",
    "Alors forcément, la mer compte beaucoup dans l’économie !​",
    "Dans l’industrie navale, on fabrique des porte-avions, des sous-marins nucléaires, des frégates, des bateaux de pêche, mais aussi des hydroliennes et des éoliennes flottantes.",
    "En France, on est très fort pour les constructions complexes, comme les paquebots, les navires passagers et les navires militaires.",
    "Donc on a besoin de compétences techniques pointues pour concevoir, produire et entretenir des navires de plus en plus performants et écologiques.",
    "Cela concerne une grande diversité de métiers (plus de 300 !) qui sont en pleine évolution en raison des mutations technologiques et de l’émergence de nouveaux marchés.",
    "Bref l’horizon est prometteur avec de grosses perspectives de développement dans les énergies renouvelables, les ressources maritimes et les biocarburants.​",
    "Les océans sont un des enjeux stratégiques de notre siècle, matelot !​",
    "Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?",
    "Alors n’hésite pas à parler aux autres Yumi, bon vent !​"
  ];

  const textSkieuse = [
    "Hello !",
    "Saviez-vous que l’industrie est le secteur qui innove le plus en France, elle représente 72% de dépenses de R&D françaises.",
    "Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovations qui améliorent la production et le quotidien de celles et ceux qui y travaillent.",
    "Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail.",
    "Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.",
    "Le MoonBike en est un bel exemple !",
    "C’est le premier snowbike 100% électrique du marché : un mode de déplacement beaucoup plus écologique.​",
    "Vous pouvez aller le découvrir tout schuss avec Anthony."
  ];

  const textScientifique = [
    "Bienvenue à vous, je suis la scientifique de la bande.",
    "Ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.",
    "J’ai mis au point les transporteurs que vous verrez un peu partout sur l’île.",
    "Pour les essayer, il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.",
    "C'est très pratique, vous verrez."
  ];
  
  // PNJ ///////////////////////////////////////////////
  
  // instanciation des pnj, stockage dans des variables au cas où on voudrait les supprimer ou autre
  let Accueil = new Modal(
    "Interactions/pnj1",
    "Appuyez sur espace pour discuter avec Yumi !",
    linkChatBotAccueil,
    "right",
    "interact",
    "PNJ",
    "Yumi_accueil"
  
  );

  let Captain = new Dialog(
    "Interactions/pnj2",
    "Appuyez sur espace pour discuter avec le Capitaine !",
    textCaptain,
    "pnj2text",
    "interact",
    "PNJ",
    "PNJ_Capitaine"
  );

  let Skieuse = new Dialog(
    "Interactions/pnj3",
    "Appuyez sur espace pour discuter avec la Skieuse !",
    textSkieuse,
    "pnj3text",
    "interact",
    "PNJ",
    "PNJ_Skieuse"
  );
  
  let Scientifique = new Dialog(
    "Interactions/pnj5",
    "Appuyez sur espace pour discuter avec la Scientifique !",
    textScientifique,
    "pnj5text",
    "interact",
    "PNJ",
    "PNJ_Scientifique"
  );

  let Ingénieure = new Modal(
    "Interactions/pnj6",
    "Appuyez sur espace pour discuter avec l'Ingénieure !",
    linkChatBotIngénieure,
    "right",
    "interact",
    "PNJ",
    "PNJ_Ingénieure"
  );

  let Moonbike = new PopUpVideo(
    "Interactions/MoonbikePNJ",
    "Appuyez sur espace pour parler à Anthony !",
    [
      "Bonjour, moi c’est Anthony, je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet.",
    ],
    "Moonbike",
    linkVideoMoonbike,
    "interact",
    "PNJ",
    "PNJ_Anthony",
  );
  let Jeune1 = new PopUpVideo(
    "Interactions/Jeune1",
    "Appuyez sur espace pour parler à Antonin !",
    [
      "Salut moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :",
    ],
    "Jeune1",
    linkVideoJeune1,
    "interact",
    "PNJ",
    "PNJ_Antonin"
  );

  let Jeune2 = new PopUpVideo(
    "Interactions/Jeune2",
    "Appuyez sur espace pour parler à Killian !",
    [
      "Salut moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :",
    ],
    "Jeune2",
    linkVideoJeune2,
    "interact",
    "PNJ",
    "PNJ_Killian"
  );

  let Magaly = new PopUpVideo(
    "Interactions/Magaly",
    "Appuyer sur espace pour parler à Magaly",
    [
      "Bonjour, moi c’est Magaly, et grâce à l’industrie j’ai réussi à combiner ma passion et mon métier.",
      "Vous voulez savoir comment ?",
      "Allez, j'enfile mon casque et je vous montre !",
    ],
    "MagalyText",
    linkVideoMagaly,
    "interact",
    "PNJ",
    "PNJ_Magaly"
  );

  let Statue = new PopUpVideo(
    "Interactions/Statue",
    "Appuyez sur espace pour intéragir avec la statue !",
    [
      "Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine",
    ],
    "Statue",
    "https://www.youtube.com/embed/APBCjKv6nvA",
    "interact",
    "Video",
    "Video_Statue"
  );

  //salle vidéo
  let Vidéo = new PopUpVideoAction(
    "Zones/Vidéo",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Connaissez-vous les WorldSkills, la grande compétition des métiers ?",
      "Et bien c'est le moment de les découvrir en visionnant la saison 1 de 'WorldSkills, La Série', réalisée avec les apprentis de l'industrie !",
      "Accrochez-vous, sensations fortes garanties."
    ],
    [
      "Connaissez-vous les WorldSkills, la grande compétition des métiers ?",
      "Et bien c'est le moment de les découvrir en visionnant la saison 1 de 'WorldSkills, La Série', réalisée avec les apprentis de l'industrie !",
      "Accrochez-vous, sensations fortes garanties."
    ],
    "VidéoText",
    linkVideo,
    () => {
      return true;
    },
    "interact",
    "Video",
    "Video_Salle_Conf"
  );
  
  // Panneaux
  let PanneauPont = new Dialog(
    "Interactions/Panneau Pont",
    "Appuyez sur espace pour intéragir avec le panneau !",
    ["Au Nord, la gare. Au Sud, la place principale."],
    "Panneau Pont",
    "interact",
    "Panel",
    "Panneau_Pont"
  );

  let PanneauGare = new Dialog(
    "Interactions/Panneau Gare",
    "Appuyez sur espace pour intéragir avec le panneau !",
    ["Vous vous trouvez à la Gare du Monde de Yumi"],
    "Panneau Gare",
    "interact",
    "Panel",
    "Panneau_Gare"
  );

  let PanneauChemin = new Dialog(
    "Interactions/Panneau Chemin",
    "Appuyez sur espace pour intéragir avec le panneau !",
    ["À l'Ouest, la place principale. Au Sud, le port."],
    "Panneau Chemin",
    "interact",
    "Panel",
    "Panneau_Chemin"
  );

  let PanneauQuai = new Dialog(
    "Interactions/Panneau Quai",
    "Appuyez sur espace pour intéragir avec le panneau !",
    ["Vous vous trouvez au Port du Monde de Yumi"],
    "Panneau Quai",
    "interact",
    "Panel",
    "Panneau_Quai"
  );
  
  let PanneauTerrasse = new Dialog(
    "Interactions/Panneau Terrasse",
    "Appuyez sur espace pour intéragir avec le panneau !",
    [
      "Partez à la rencontre des habitants du Monde de Yumi, les femmes et les hommes qui font l'Industrie",
    ],
    "Panneau Terrasse",
    "interact",
    "Panel",
    "Panneau_Terrasse"
  );
  
  let PanneauParcCentre = new Dialog(
    "Interactions/Panneau Parc Centre",
    "Appuyez sur espace pour intéragir avec le panneau !",
    ["À gauche le hub des métiers - En haut à droite le lab de Yumi - En haut à gauche la cafet' des apprentis - En bas le salon des vocations"],
    "PanneauParcCentre",
    "interact",
    "Panel",
    "Panneau_ParcCentre"
  );
  
  let PanneauParcHaut = new Dialog(
    "Interactions/Panneau Parc Haut",
    "Appuyez sur espace pour intéragir avec le panneau !",
    ["Le lab de Yumi"],
    "PanneauParcHaut",
    "interact",
    "Panel",
    "Panneau_ParcHaut"
  );

  // Mini Jeux
  let Pong = new Modal(
    "Interactions/Pong",
    "Appuyez sur espace pour jouer au Pong !",
    pongLink,
    "center",
    "interact",
    "Game",
    "Game_Pong"
  );

  let Basket = new Modal(
    "Interactions/Basket",
    "Appuyez sur espace pour jouer au Basket !",
    basketLink,
    "center",
    "interact",
    "Game",
    "Game_Basket"
  );

  let Piano = new PopUpVideoAction(
    "Interactions/Piano",
    "Appuyez sur espace pour jouer du piano !",
    [
      "Appuyez sur les touches du clavier pour jouer du piano"
    ],
    [
      "Appuyez sur les touches du clavier pour jouer du piano"
    ],
    "pianoTxt",
    pianoLink,
    () => {
      return true;
    },
    "interact",
    "Game",
    "Game_Piano"
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
    "DataScientist",
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
    "Interactions/ShowRoom/Maxime",
    "Appuyez sur espace pour regarder la vidéo !",
    [
      "Quelqu'un peut me dire ce qu'est la mécatronique ?",
      "Écoutez bien Maxime, responsable de la R&D chez Otech, il vous dit tout."
    ],
    "WorldSkills",
    MaximeVideoLink,
    "interact",
    "Video",
    "Video_Maxime",
  );

  let Liebherr_aerospace = new PopUpVideo(
    "Interactions/ShowRoom/Liebherr_aerospace",
    "Appuyez sur espace pour regarder la vidéo !",
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
    "Appuyez sur espace pour regarder la vidéo !",
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
  
  let Apprenti_1 = new PopUpVideo(
    "Interactions/DinningRoom/Apprenti_1",
    "Appuyez sur espace pour parler à Magaly !",
    [
      "Bonjour, moi c’est Magaly, et grâce à l’industrie j’ai réussi à combiner ma passion et mon métier. Vous voulez savoir comment ? Allez, j'enfile mon casque et je vous montre !",
    ],
    "Apprenti_1",
    apprenti_1VideoLink,
    "interact",
    "PNJ",
    "PNJ_Magaly",
  );
  
  let Apprenti_2 = new PopUpVideo(
    "Interactions/DinningRoom/Apprenti_2",
    "Appuyez sur espace pour parler à Joris !",
    [
      "Salut, moi c’est Joris. Le point commun entre ma passion et mon métier, c’est l’esprit d’équipe. Vous voulez en savoir plus ? Alors regardez cette vidéo !",
    ],
    "Apprenti_2",
    apprenti_2VideoLink,
    "interact",
    "PNJ",
    "PNJ_Joris",
  );
  
  let Apprenti_3 = new PopUpVideo(
    "Interactions/DinningRoom/Apprenti_3",
    "Appuyez sur espace pour parler à Julien !",
    [
      "Bonjour, moi c’est Julien et je suis passionné d'informatique : j'en ai fait mon métier ! Découvrez mon parcours en vidéo."
    ],
    "Apprenti_3",
    apprenti_3VideoLink,
    "interact",
    "PNJ",
    "PNJ_Julien",
  );
  
  let Apprenti_4 = new PopUpVideo(
    "Interactions/DinningRoom/Apprenti_4",
    "Appuyez sur espace pour parler à Alexandra !",
    [
      "Bonjour, moi c’est Alexandra et je suis ingénieur de production. Je vous invite à découvrir mon parcours et mon quotidien dans cette vidéo.",
    ],
    "Apprenti_4",
    ingProdVideoLink,
    "interact",
    "PNJ",
    "PNJ_Alexandra",
  );
  
  let Apprenti_5 = new PopUpVideoAction(
    "Interactions/DinningRoom/Apprenti_5",
    "Appuyez sur espace pour parler à Nassredine !",
    [
      "Bonjour, je m’appelle Nasreddine et ce que j'aime dans mon métier c'est le côté à la fois pointu et technique. Regardez cette vidéo pour mieux comprendre !",
      "Avant ça, si tu cherches une personne possédant une clef.",
      "Il est parti vers le hub des métiers avec le ventre bien rempli."
    ],
    [
      "Bonjour, je m’appelle Nasreddine et ce que j'aime dans mon métier c'est le côté à la fois pointu et technique. Regardez cette vidéo pour mieux comprendre !",
    ],
    "Apprenti_5",
    apprenti_5VideoLink,
    () => {
      if (WA.player.state["startSideQuestStep4"] != null && WA.player.state["startSideQuestStep4"] == true)
      {
        WA.player.state["TalkHint_3"] = true;
        return true;
      }
      return false;
    },
    "interact",
    "PNJ",
    "PNJ_Nassredine",
  );
  
  let Apprenti_6 = new PopUpVideo(
    "Interactions/DinningRoom/Apprenti_6",
    "Appuyez sur espace pour parler à Mathis !",
    [
      "Salut, moi c’est Mathis, j'ai 19 ans et je suis apprenti en conception industrielle. Vous connaissez ? Non ? Alors je vous invite à découvrir mon métier en vidéo !",
    ],
    "Apprenti_6",
    apprenti_6VideoLink,
    "interact",
    "PNJ",
    "PNJ_Mathis",
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
  
  //Card of the trapped Room
  let cardAccess = new ItemPickUpOnCondition(
    "Items/TrappedRoom/CardAccess",
    "Appuyez sur espace pour ramasser la carte d'accès",
    ["Vous avez récuperé la carte d'accès"],
    ["Vous devez d'abord parler à Yumi avant de le ramasser"],
    "cardAccessText",
    "cardAccess",
    () => {
        return  WA.player.state["TalkToYumiDepartTrappedRoom"] != null ? true : false;
    },
    "interract",
    "Object",
    "Object_cardAccess"
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
        WA.player.state["TalkToYumiFinalTrappedRoom"] != null && WA.player.state["TalkYumiFinalTrappedRoom"] == true) 
      {
        WA.room.hideLayer('beforePlayer/TrappedRoom/DoorFinal');
        WA.room.hideLayer('beforePlayer/TrappedRoom/CollideDoorFinal');
        WA.room.showLayer('beforePlayer/TrappedRoom/DoorFinalOpen');
        
        WA.player.state.saveVariable("cardAccessStep3", true, {
          public: true,
          persist: true,
          ttl: 720 * 3600,
          scope: "world"
        });
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
        return true;
      }
      return false;
    },
    "interact",
    "PNJ",
    "PNJ_YumiStep2Final",
  );

  //Digicode Door infinite exit 
  WA.room.onEnterLayer('Step2/exitZoneDoor').subscribe(() => {
    WA.room.hideLayer('closed_lab_door');
  });
  WA.room.onLeaveLayer('Step2/exitZoneDoor').subscribe(() => {
    WA.room.showLayer('closed_lab_door');
  });
  /**
   * Function to add a trap to a layer
   * @param {string} _layer 
   */
    function trapLayer(_layer)
    {
      WA.room.onEnterLayer(_layer).subscribe(() => {
        WA.room.showLayer(_layer);
        WA.onInit().then(() => {
          WA.nav.goToRoom('#Depart');
        });
      });
    }
    
    let nb_hole = 23;
    for (let index = 1; index < nb_hole + 1; index++)
    {
      trapLayer('HideTile/TrappedRoom/Hole_' + index); 
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
    ["Vous devez rassemblé les 4 indices avant de pouvoir d'ouvrir la trappe"],
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
    YumiLabBotLink,
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
    "Appuyez sur espace pour ouvrir le formulaire !",
    [
      "Bravo ! Tu viens de sauver le monde Yumi !!"
    ],
    ["Erreur dialogue"],
    "redButtonTxt",
    formLink,
    () => {
      WA.room.hideLayer('Step4/Last/ButtonNotPressed');
      return true;
    },
    "right",
    "interact",
    "Form",
    "Formulaire_final"
  );
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
      "*Une mystérieuse séquence apparait en capture sous le texte*"
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
      "Vous pouvez lui rapporter sa précieuse clef."
    ],
    [
      "Cette chaise est vraiment confortable !",
      "Vous cherchez quelque chose ?"
    ],
    "ArnaudText",
    () => {
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
console.log('VERSION 4.7');