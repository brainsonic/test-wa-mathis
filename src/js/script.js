// Chargement de la lib JS de WA
import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction } from './class';

// VARIABLES ///////////////////////////////////////////////
const tutorialLink = "https://64ix.github.io/WA-Edited-Tutorial/tutorial.html";
const pongLink = "https://64ix.github.io/WA-Edited-Tutorial/pong.html";
const basketLink =
  "https://64ix.github.io/WA-Edited-Tutorial/shooting-hoops/dist/index.html";
const pianoLink =
  "https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html";

const scribbleLink = "https://brainsonic.github.io/WA-Misc-EasterEggs/scribble/index.html";
const poolLink = "https://brainsonic.github.io/WA-Misc-EasterEggs/pool/index.html";

const formLink =
  "https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn";

const linkChatBotAccueil =
  "https://chat.csml.dev/s/39iezvakvlqapvdwnakm2gjw6f1czgdp";

const linkChatBotIngénieure = "https://chat.csml.dev/s/modkshn4koeqaqdjiaj5pa7hfxah6s57";
const linkVideoJeune1 = "https://www.youtube.com/embed/9QDd6dH0-Xc";
const linkVideoJeune2 = "https://www.youtube.com/embed/pDMzhgu_Qbo";
const linkVideoJeune3 = "https://www.youtube.com/embed/mgX4eHVDlTc";
const linkVideoMoonbike = "https://www.youtube.com/embed/eE3kWcMZsuE";
const linkVideo = "https://www.youtube.com/embed/7Xe-xnqLoBI?rel=0";

/* ------------ Phase 2 ------------ */

//MétierRoom
const nicolasVideoLink = "https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS";
const cariVideoLink = "https://www.youtube.com/embed/cM2U-uKXzts?si=HSPzO1A938ei964m";
const ingProdVideoLink = "https://www.youtube.com/embed/8HlmZkJX_UQ?si=l0-8bOC_kMy2YYvv";
const apprentiRobotLink = "https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8";
const apprentiChaudronniereVideoLink = "https://www.youtube.com/embed/5zDXk6J0hHo?si=DQ3jPiXhQLJgWTOH";
const YumiMetierBot = "https://chat.csml.dev/s/klex5ttuh9bmpen8gyo4tssus4liqxgb";

//ShowRoom

const anaisVideoLink = "https://www.youtube.com/embed/eBuPRPSBXlc?si=r_3zCqDW0qUB3d8K";
const Liebherr_aerospaceVideoLink = "https://www.youtube.com/embed/eBuPRPSBXlc?si=iMw0riL5KJyYjfIe"; //TO CHANGE
const OtechVideoLink = "https://www.youtube.com/embed/eBuPRPSBXlc?si=iMw0riL5KJyYjfIe"; //TO CHANGE
const dessinateurInduVideoLink = "https://www.youtube.com/embed/IEtX1_vx98g?si=wt_aAReOPxkrhaAO";
const respRDVideoLink = "https://www.youtube.com/embed/dFBHOiedwkQ?si=3CJQ8h6MYL10nkSg";
const ajustMonteurVideoLink = "https://www.youtube.com/embed/oJQcLWtGmDY?si=wcUwCbNc-Yw7bSS-";
const dataScientistVideoLink = "https://www.youtube.com/embed/ixlo9WwbvuE?si=hhiUylKLOuW5i-Dj";
const chargeAffVideoLink = "https://www.youtube.com/embed/vVhIHuG0dgI?si=APRxPS1Q6Ws3Vs40";
const respBureauVideoLink = "https://www.youtube.com/embed/YzXnbdKdbwY?si=5Jt9ZcvzwENDE7nA";
const YumiITWBot = "https://chat.csml.dev/s/bpzoedzc279smw2i649rwhtst9rguvva";
const worldSkillsVideoLink = "https://www.youtube.com/embed/videoseries?si=wKcics6QWpDWdVob&amp;list=PLEe-8ZKtOy6Oxx1qU_qRhdcBmy-lXBtqQ";

//ParkInside

const doigbyVideoLink = "https://www.youtube.com/embed/3An5XwFbKgM?si=Sm7VNc1OKJpUxyQz";
const tiboInShapeVideoLink = "https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s";
const HiHacksBotLink = "https://chat.csml.dev/s/imk4tlho3spmxlis9e1ejs3wlita2aco";
const InfluenceBotLink = "https://chat.csml.dev/s/2yh4lfxd7nba5zevmybgseb41bcn6h9b";

//Labo Yumi

const drNozmanVideoLink = "https://www.youtube.com/embed/zZL1SjBGkNc?si=_z_dfadNSmzm-qOr";
const hiHacksVideoLink = "https://www.youtube.com/embed/BChzaJv_JzQ?si=K1G9ZNtbFTiTO3AA";
const YumiLabBotLink = "https://chat.csml.dev/s/fb5kvplgaqoxlqfq9c2solxxt5jbyfh5";

//DinningRoom

const apprenti_1VideoLink = "https://www.youtube.com/embed/bIG_XU7XRbw?si=TmzUGmFJ11DA-Mhz";
const apprenti_2VideoLink = "https://www.youtube.com/embed/gxCuiA3-L4Q?si=15Pm8Vsp_im5XbLO";
const apprenti_3VideoLink = "https://www.youtube.com/embed/XZlUUGS7qng?si=L9sT1Pkp2bRlEUVV";
const apprenti_4VideoLink = "https://www.youtube.com/embed/DU7kScvKs6w?si=4eaGA75dDZP0dIxT";
const apprenti_5VideoLink = "https://www.youtube.com/embed/G4lEOWcPYv4?si=wa9eJCX3TbsLQZS2";
const apprenti_6VideoLink = "https://www.youtube.com/embed/Y35a-PeWnCY?si=ssJEvtuE8AQ5yQ43";

/* ------------ Phase ?? ------------ */

// SETUP ///////////////////////////////////////////////

WA.onInit().then(() => {
  // désactiver les proximity meeting parceque peu utile
  WA.controls.disablePlayerProximityMeeting();
});

// tutorial
// pourquoi pas faire un truc qui se souvient si le joueur a déjà fait le tuto et qui ne l'affiche pas si c'est le cas
WA.ui.modal.openModal({
  title: "Tutorial",
  src: tutorialLink,
  allow: "fullscreen; clipboard-read; clipboard-write",
  allowApi: !0,
  position: "right",
});

//ZONE HELP ///////////////////////////////////////////////
WA.room.onEnterLayer("Zones/Help").subscribe(() => {
  WA.controls.restorePlayerProximityMeeting();
});

WA.room.onLeaveLayer("Zones/Help").subscribe(() => {
  WA.controls.disablePlayerProximityMeeting();
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
function tutorial() {
  WA.ui.modal.openModal({
    title: "Tutorial",
    src: tutorialLink,
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: !0,
    position: "right",
  });
}

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
  "Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?    ",
  "Allez, on met les voiles !",
  "La France possède le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !​",
  "Dans l’industrie navale, on fabrique des porte-avions, des sous-marins nucléaires, des frégates, des bateaux de pêche, mais aussi des hydroliennes et des éoliennes flottantes.",
  "En France, on est très fort pour les constructions complexes, comme les paquebots, les navires passagers et les navires militaires.",
  "Donc on a besoin de compétences techniques pointues pour concevoir, produire et entretenir des navires de plus en plus performants et écologiques.",
  "Cela concerne une grande diversité de métiers (plus de 300 !) qui sont en pleine évolution en raison des mutations technologiques et de l’émergence de nouveaux marchés. ",
  "Bref l’horizon est prometteur avec de grosses perspectives de développement dans les énergies renouvelables, les ressources maritimes et les biocarburants.​",
  "Les océans sont un des enjeux stratégiques de notre siècle, matelot !​",
  "Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?",
  "Alors n’hésite pas à parler aux autres Yumi, bon vent !​",
];
const textSkieuse = [
  "Hello !",
  "Vous voulez faire un tour de MoonBike ?",
  "D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie.",
  "L’industrie, c'est le secteur qui innove le plus en France, elle représente 72% des dépenses de R&D françaises.",
  "Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovations qui améliorent la production et le quotidien de celles et ceux qui y travaillent.​    ",
  "Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail. Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.    ",
  "Le MoonBike en est un bel exemple ! C’est le premier snowbike 100% électrique du marché : un mode de déplacement beaucoup plus écologique.​",
  "Allez maintenant vous pouvez aller le découvrir, tout schuss.    ",
];
const textScientifique = [
  "Bonjour à vous",
  "Je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.​",
  "Par exemple, j'ai pris part au projet AGV, automotrice à grande vitesse ! C'est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et plus seulement aux extrémités.",
  "Grâce à cette innovation, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie. Cela permet de parcourir 1000 km en 3 heures ! Impressionnant non ?",
  "J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer. Il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.​",
  "Bonne visite !",
];

// PNJ ///////////////////////////////////////////////

// instanciation des pnj, stockage dans des variables au cas où on voudrait les supprimer ou autre
let Accueil = new Modal(
  "Pnjs/pnj1",
  "Appuyez sur espace pour discuter avec Yumi !",
  linkChatBotAccueil,
  "right",
  "interact",
  "PNJ",
  "Yumi_accueil"

);
let Captain = new Dialog(
  "Pnjs/pnj2",
  "Appuyez sur espace pour discuter avec le Capitaine !",
  textCaptain,
  "pnj2text",
  "interact",
  "PNJ",
  "PNJ_Capitaine"
);
let Skieuse = new Dialog(
  "Pnjs/pnj3",
  "Appuyez sur espace pour discuter avec la Skieuse !",
  textSkieuse,
  "pnj3text",
  "interact",
  "PNJ",
  "PNJ_Skieuse"
);

let Scientifique = new Dialog(
  "Pnjs/pnj5",
  "Appuyez sur espace pour discuter avec la Scientifique !",
  textScientifique,
  "pnj5text",
  "interact",
  "PNJ",
  "PNJ_Scientifique"
);
let Ingénieure = new Modal(
  "Pnjs/pnj6",
  "Appuyez sur espace pour discuter avec l'Ingénieure !",
  linkChatBotIngénieure,
  "right",
  "interact",
  "PNJ",
  "PNJ_Ingénieure"
);
let Moonbike = new PopUpVideo(
  "Pnjs/MoonbikePNJ",
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
  "Pnjs/Jeune1",
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
  "Pnjs/Jeune2",
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
let Jeune3 = new PopUpVideo(
  "Pnjs/Jeune3",
  "Appuyez sur espace pour parler à Manon !",
  [
    "Bonjour, moi c'est Manon et pour découvrir sur quel super projet j'ai travaillé c'est ici :",
  ],
  "Jeune3",
  linkVideoJeune3,
  "interact",
  "PNJ",
  "PNJ_Manon"
);

// END PNJ ///////////////////////////////////////////////

// INTERACTIONS DIVERSES ///////////////////////////////////////////////

let Formulaire = new Modal(
  "Pnjs/Formulaire",
  "Appuyez sur espace pour ouvrir le formulaire !",
  formLink,
  "right",
  "interact",
  "Form",
  "Formulaire_debut"
);

let Statue = new PopUpVideo(
  "Pnjs/Statue",
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
let Vidéo = new Modal(
  "Zones/Vidéo",
  "Appuyez sur espace pour regarder la vidéo !",
  linkVideo,
  "center",
  "interact",
  "Video",
  "Video_Salle_Conf"
);

// Panneaux
let PanneauPont = new Dialog(
  "Pnjs/Panneau Pont",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["Au Nord, la gare. Au Sud, la place principale."],
  "Panneau Pont",
  "interact",
  "Panel",
  "Panneau_Pont"
);
let PanneauGare = new Dialog(
  "Pnjs/Panneau Gare",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["Vous vous trouvez à la Gare du Monde de Yumi"],
  "Panneau Gare",
  "interact",
  "Panel",
  "Panneau_Gare"
);
let PanneauChemin = new Dialog(
  "Pnjs/Panneau Chemin",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["À l'Ouest, la place principale. Au Sud, le port."],
  "Panneau Chemin",
  "interact",
  "Panel",
  "Panneau_Chemin"
);
let PanneauQuai = new Dialog(
  "Pnjs/Panneau Quai",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["Vous vous trouvez au Port du Monde de Yumi"],
  "Panneau Quai",
  "interact",
  "Panel",
  "Panneau_Quai"
);

let PanneauTerrasse = new Dialog(
  "Pnjs/Panneau Terrasse",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["Vous vous trouvez sur la place principale"],
  "Panneau Terrasse",
  "interact",
  "Panel",
  "Panneau_Terrasse"
);

let PanneauParcCentre = new Dialog(
  "Pnjs/Panneau Parc Centre",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["À gauche le hub des métiers - En haut à droite le lab de Yumi - En haut à gauche la cafet' des apprentis - En bas le salon des vocations"],
  "PanneauParcCentre",
  "interact",
  "Panel",
  "Panneau_ParcCentre"
);

let PanneauParcHaut = new Dialog(
  "Pnjs/Panneau Parc Haut",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["Le lab de Yumi"],
  "PanneauParcHaut",
  "interact",
  "Panel",
  "Panneau_ParcHaut"
);
//Phase 2

// Mini Jeux
let Pong = new Modal(
  "Pnjs/Pong",
  "Appuyez sur espace pour jouer au Pong !",
  pongLink,
  "center",
  "interact",
  "Game",
  "Game_Pong"
);
let Basket = new Modal(
  "Pnjs/Basket",
  "Appuyez sur espace pour jouer au Basket !",
  basketLink,
  "center",
  "interact",
  "Game",
  "Game_Basket"
);
let Piano = new Modal(
  "Pnjs/Piano",
  "Appuyez sur espace pour jouer du piano !",
  pianoLink,
  "center",
  "interact",
  "Game",
  "Game_Piano"
);

let Scribble = new Modal(
  "Pnjs/MetierRoom/Scribble",
  "Appuyez sur espace pour faire des dessins !",
  scribbleLink,
  "center",
  "interact",
  "Game",
  "Game_Scribble"
)

let Pool = new Modal(
  "Pnjs/ShowRoom/Pool",
  "Appuyer sur espace pour faire du billard !",
  poolLink,
  "center",
  "interact",
  "Game",
  "Game_Pool"
)

//Phase 2

//MetierRoom
let Nicolas = new PopUpVideo(
  "Pnjs/MetierRoom/Nicolas",
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
  "Pnjs/MetierRoom/Cari",
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

let IngProd = new PopUpVideo(
  "Pnjs/MetierRoom/IngProd",
  "Appuyez sur espace pour parler à Alexandra !",
  [
    "Bonjour, moi c’est Alexandra et je suis ingénieur de production. Je vous invite à découvrir mon parcours et mon quotidien dans cette vidéo.",
  ],
  "IngProd",
  ingProdVideoLink,
  "interact",
  "PNJ",
  "PNJ_Alexandra"
)

let ApprentiRobotVideo = new PopUpVideo(
  "Pnjs/MetierRoom/ApprentiRobot",
  "Appuyez sur espace pour regarder la vidéo !",
  [
    "Thomas est apprenti dans la robotique. Découvrez son métier en vidéo ! "
  ],
  "ApprentiRobot",
  apprentiRobotLink,
  "interact",
  "Video",
  "Video_Thomas"
)

let ApprentiChaudronniereVideo = new PopUpVideo(
  "Pnjs/MetierRoom/ApprentiChaudron",
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
  "Pnjs/MetierRoom/chatBot_1",
  "Appuyez sur espace pour discuter avec Yumi !",
  YumiMetierBot,
  "right",
  "interact",
  "PNJ",
  "PNJ_YumiMetier"
);

//ShowRoom

let Emma = new PopUpVideo(
  "Pnjs/ShowRoom/Anais",
  "Appuyez sur espace pour parler à Anaïs !",
  [
    "Salut, moi c’est Anaïs et je suis technicienne méthodes. Si vous ne savez pas en quoi ça consiste : venez, je vous montre ! ",
  ],
  "Anais",
  anaisVideoLink,
  "interact",
  "PNJ",
  "PNJ_Anais"
);

/*
let Liebherr_aerospace = new Modal(
  "Pnjs/ShowRoom/Liebherr_aerospace",
  "Appuyez sur espace pour regarder la vidéo !",
  Liebherr_aerospaceVideoLink,
  "center",
);

let Otech = new Modal(
  "Pnjs/ShowRoom/Otech",
  "Appuyez sur espace pour regarder la vidéo !",
  OtechVideoLink,
  "center",
);
*/

let DessinateurIndu = new PopUpVideo(
  "Pnjs/ShowRoom/DessinateurIndu",
  "Appuyez sur espace pour regarder la vidéo !",
  [
    "Ronan est dessinateur industriel. Découvrez son métier en vidéo !"
  ],
  "DessinateurIndu",
  dessinateurInduVideoLink,
  "interact",
  "Video",
  "Video_Ronan"
);

let RespRD = new PopUpVideo(
  "Pnjs/ShowRoom/RespR&D",
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
  "Pnjs/ShowRoom/AjustMonteur",
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

let DataScientist = new PopUpVideo(
  "Pnjs/ShowRoom/DataScientist",
  "Appuyez sur espace pour regarder la vidéo !",
  [
    "C'est quoi le métier de data scientist ? Pour le découvrir c'est ici."
  ],
  "DataScientist",
  dataScientistVideoLink,
  "interact",
  "Video",
  "Video_DataScientist",
);

let ChargAff = new PopUpVideo(
  "Pnjs/ShowRoom/ChargeAff",
  "Appuyez sur espace pour regarder la vidéo !",
  [
    "Quel est le rôle du chargé d'affaires ? Réponse en vidéo !"
  ],
  "ChargAff",
  chargeAffVideoLink,
  "interact",
  "Video",
  "Video_ChargeAff",
);

let RespBureau = new PopUpVideo(
  "Pnjs/ShowRoom/RespBureau",
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
  "Pnjs/ShowRoom/ITWBot",
  "Appuyez sur espace pour discuter avec Yumi Journaliste !",
  YumiITWBot,
  "right",
  "interact",
  "PNJ",
  "PNJ_YumiJournaliste",
);

let WorldSkills = new PopUpVideo(
  "Pnjs/ShowRoom/WorldSkills",
  "Appuyez sur espace pour regarder la vidéo !",
  [
    "Connaissez-vous les WorldSkills, la grande compétition des métiers ? Et bien c'est le moment de les découvrir en visionnant la saison 1 de 'WorldSkills, La Série', réalisée avec les apprentis de l'industrie ! Accrochez-vous, sensations fortes garanties."
  ],
  "WorldSkills",
  worldSkillsVideoLink,
  "interact",
  "Video",
  "Video_WorldSkills",
);

//ParkInside

let Doigby = new PopUpVideo(
  "Pnjs/ParkInside/Doigby",
  "Appuyez sur espace pour parler à Doigby !",
  [
    "Hello, moi c’est Doigby ! Je suis vidéaste et Yumi m’a mis au défi de construire une fusée dans Minecraft avec l'aide des internautes. Pensez-vous que j'ai réussi ? Je vous laisse la surprise...",
  ],
  "Doigby",
  doigbyVideoLink,
  "interact",
  "PNJ",
  "PNJ_Doigby",
);

let Tiboinshape = new PopUpVideo(
  "Pnjs/ParkInside/Tiboinshape",
  "Appuyez sur espace pour parler à Maëva !",
  [
    "Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !",
  ],
  "Tiboinshape",
  tiboInShapeVideoLink,
  "interact",
  "PNJ",
  "PNJ_Maeva",
);

let HiHacksBot = new Modal(
  "Pnjs/ParkInside/Hihacks",
  "Appuyez sur espace pour discuter avec Romane !",
  HiHacksBotLink,
  "right",
  "interact",
  "PNJ",
  "PNJ_Romane",
);

let InfluenceBot = new Modal(
  "Pnjs/ParkInside/Influence",
  "Appuyez sur espace pour discuter avec Yumi Créatrice !",
  InfluenceBotLink,
  "right",
  "interact",
  "PNJ",
  "PNJ_YumiCreatrice",
);

//Labo Yumi

let DrNozman = new PopUpVideo(
  "Pnjs/LaboRoom/DrNozman",
  "Appuyez sur espace pour parler à DrNozman !",
  [
    "Bonjour, moi c’est Dr Nozman et comme je suis un grand curieux, j’ai voulu découvrir comment étaient faites les prothèses d’aujourd’hui. Venez, je vous explique tout.",
  ],
  "DrNozman",
  drNozmanVideoLink,
  "interact",
  "PNJ",
  "PNJ_Nozman",
);

let HiHacks = new PopUpVideo(
  "Pnjs/LaboRoom/Hihacks_labo",
  "Appuyez sur espace pour parler à Henry !",
  [
    "Salut ! Moi c’est Henry Hihacks et grâce à Thiaifène, apprenti en BTS Maintenance des Systèmes, j’ai réalisé un projet complètement fou... Vous êtes curieux de le découvrir ? Alors regardez ma vidéo !",
  ],
  "Hihacks_labo",
  hiHacksVideoLink,
  "interact",
  "PNJ",
  "PNJ_HenryHihacks",
);

let YumiLabBot = new Modal(
  "Pnjs/LaboRoom/YumiLab",
  "Appuyez sur espace pour discuter avec Yumi Scientifique !",
  YumiLabBotLink,
  "right",
  "interact",
  "PNJ",
  "PNJ_YumiScientifique",
);
//Dinning Room

let Apprenti_1 = new PopUpVideo(
  "Pnjs/DinningRoom/Apprenti_1",
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
  "Pnjs/DinningRoom/Apprenti_2",
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
  "Pnjs/DinningRoom/Apprenti_3",
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
  "Pnjs/DinningRoom/Apprenti_4",
  "Appuyez sur espace pour parler à Fanny !",
  [
    "Moi c’est Fanny, et grâce à l'alternance j'ai pu effectuer un semestre universitaire à l'étranger. Ça vous intéresse ? Alors venez découvrir mon parcours !",
  ],
  "Apprenti_4",
  apprenti_4VideoLink,
  "interact",
  "PNJ",
  "PNJ_Fanny",
);

let Apprenti_5 = new PopUpVideo(
  "Pnjs/DinningRoom/Apprenti_5",
  "Appuyez sur espace pour parler à Nassredine !",
  [
    "Bonjour, je m’appelle Nasreddine et ce que j'aime dans mon métier c'est le côté à la fois pointu et technique. Regardez cette vidéo pour mieux comprendre !",
  ],
  "Apprenti_5",
  apprenti_5VideoLink,
  "interact",
  "PNJ",
  "PNJ_Nassredine",
);

let Apprenti_6 = new PopUpVideo(
  "Pnjs/DinningRoom/Apprenti_6",
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

//Phase 3 Item and hidden layer

//FUNCTION
/**
 * Function to check if the player is allowed to access the zone of the escape Game
 * @param {string} _layer Zone tiled du layer
 * @param {Array<string>} _variablesAccess List des variables à avoir pour accéder à la zone
 */
function onEnterAuthorization(_layer, _variablesAccess, _dialogError) {

  let popUp = false;
  WA.room.onEnterLayer(_layer).subscribe(() => {
    WA.onInit().then(() => {
      for(var access of _variablesAccess)
      {
        console.log(access);
        console.log('You have the access ? :', WA.player.state[access]);
        if (WA.player.state[access] == null){
          WA.nav.goToRoom('#ZoneStep1');
          popUp = true;
          return;
        }
      }
    }).catch((error) => {
      console.error('Error TELEPORT in :', _layer)
    }).then(() => {
      if (popUp)
      {
        WA.ui.openPopup(_dialogError, ["Zone interdit - Veuillez faire les étapes"], [{
          label: "Fermer",
          className: "primary",
          callback: (popup) => {
            popup.close();
          }
        }]);
      }
    });
  });

}

//TRAPPED ROOM STEP 2
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


let YumiTrappedBot = new ModalAction(
  "Pnjs/TrappedRoom/YumiDepart_1",
  "Appuyez sur espace pour discuter avec Yumi !",
  YumiLabBotLink,
  "right",
  () => {
      var variable = "TalkToYumiTrappedRoom";
      if (WA.player.state[variable] == null)
      {
        console.log('VARIABLE YUMMI');
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
      return  WA.player.state["TalkToYumiTrappedRoom"] != null ? true : false;
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
  ["Vous devez avoir la carte d'accès"],
  'doorTrappedRoomText',
  () => {
    if (WA.player.state["cardAccess"] != null && WA.player.state["cardAccess"] == true)
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
      console.log('ACCESS STEP 3', WA.player.state["cardAccessStep3"]);
      return true;
    }
    else
    {
      console.log('KO_2');
      return false;
    }
  },
  "interract",
  "InteractAction",
  "Object_doorTrappedRoom"
);


// ---- Lab de l'industrie  STEP 3 ---- 
onEnterAuthorization('Zones/ZoneStep3', ['cardAccessStep3'], 'EscapeGameText');

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
    console.log("Indice : ", WA.player.state["cafetHint"]);
    console.log("Indice : ", WA.player.state["chestHint"]);
    console.log("Indice : ", WA.player.state["coatRackHint"]);
    console.log("Indice : ", WA.player.state["binHint"]);
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
      console.log('KO_2');
      return false;
    }
  },
  "interract",
  "InteractAction",
  "Object_trapDoor"
);

//STEP 4
/**
 * Function to get variables on certain Zone
 * @param {string} _layer Zone correspondant au chemin du Tile
 * @param {array<string>} _variables Liste des variables à avoir pour être dans la zone
 */
function getVariableOnZone(_layer, _variables) {
  console.log('ENTERED VARIABLE ZONE');
  WA.room.onEnterLayer(_layer).subscribe(() => {
    WA.onInit().then(() => {
      for (var variable of _variables) {
        console.log(variable);
        if (WA.player.state[variable] == null || WA.player.state[variable] == undefined)
        {
          console.log('YES');
          WA.player.state.saveVariable(variable, true, {
            public: true,
            persist: true,
            ttl: 720 * 3600,
            scope: "world"
          });
          console.log("Variable obtained", variable,":", WA.player.state[variable]);
        }
      }
    });
  });
}

/**
 * Function to tp depending on the condition
 * @param {string} _layer Zone
 * @param {string} _tpTo Zone to TP generallly the #Room Cf https://docs.workadventu.re/map-building/tiled-editor/entry-exit/
 * @param {bool} _condition Condition (Write a function that's the condition and return true/false)
 * @param {string} _popUpDisplay Popup dans tiled floorLayer
 * @param {string} _popUpMg Message du Popup
 */
function onTpCondition(_layer, _tpTo, _condition, _popUpDisplay, _popUpMsg = "")
{
  WA.room.onEnterLayer(_layer).subscribe(() => {
    if(_condition)
    {
      WA.nav.goToRoom(_tpTo);
    }else
    {
      WA.ui.openPopup(_popUpDisplay, _popUpMsg == "" ? ["Vous n'avez pas les items requis pour accéder à la TP"] : _popUpMsg, [{
        label: "Fermer",
        className: "primary",
        callback: (popup) => {
          popup.close();
        }
      }]);
    }
  });
}

const zoneStep4 = 'Zones/ZoneStep4';
const zoneFirstTP = 'Step4/FirstTP/ZoneFirstTP';
const zoneSecondTP = 'Step4/SecondTP/ZoneSecondTP';
const zoneThirdTP = 'Step4/ThirdTP/ZoneThirdTP';
const zoneFourthTP = 'Step4/FourthTP/ZoneFourthTP';
const zoneFifthTP = 'Step4/FifthTP/ZoneFifthTP';
const zoneFinalStep4 = 'Step4/Last/TpArrive';

//Zone de départ

let YumiStep4 = new ModalAction(
  "Step4/Yumi",
  "Appuyez sur espace pour discuter avec Yumi !",
  YumiLabBotLink,
  "right",
  () => {
      var variable = "TalkToYumiStep4";
      console.log(WA.player.state[variable]);
      if (WA.player.state[variable] == null)
      {
        console.log('HEHEHEHE');
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

onEnterAuthorization(zoneStep4, ['cardAccessStep4'], 'EscapeGameText');
getVariableOnZone('Step4/TpDepart', ['cardAccessZoneFirstTP']);

onTpCondition('Step4/TpDepart', '#TpDepart_1', () => { 
  console.log('HAHAHAHA', WA.player.state['TalkToYumiStep4']);
  console.log(WA.player.state['cardAccessStep4'] != null && WA.player.state['TalkToYumiStep4'] != null);
  return WA.player.state['cardAccessStep4'] != null && WA.player.state['TalkToYumiStep4'] != null ? true : false},
  'tpDepartStep4', 'Vous devez parler à Yumi');


//Zone de TP_1
onEnterAuthorization(zoneFirstTP, ['cardAccessZoneFirstTP'], 'EscapeGameText');
getVariableOnZone('Step4/FirstTP/Tp1-3', ['cardAccessZoneSecondTP']);

onTpCondition('Step4/FirstTP/Tp1-1', '#Reset', true, 'tpDepart1Step4');
onTpCondition('Step4/FirstTP/Tp1-2', '#Reset', true, 'tpDepart1Step4');
onTpCondition('Step4/FirstTP/Tp1-3', '#TpDepart_2', () => {
  return WA.player.state['cardAccessZoneFirstTP'] != null ? true : false;
}, 'tpDepart1Step4');

//Zone de TP_2
onEnterAuthorization(zoneSecondTP, ['cardAccessZoneSecondTP'], 'EscapeGameText');
getVariableOnZone('Step4/SecondTP/Tp2-2', ['cardAccessZoneThirdTP']);

onTpCondition('Step4/SecondTP/Tp2-1', '#Reset', true, 'tpDepart2Step4');
onTpCondition('Step4/SecondTP/Tp2-2', '#TpDepart_3', () => {
  return WA.player.state['cardAccessZoneSecondTP'] != null ? true : false;
}, 'tpDepart2Step4');
onTpCondition('Step4/SecondTP/Tp2-3', '#Reset', true, 'tpDepart2Step4');

//Zone de TP_3
onEnterAuthorization(zoneThirdTP, ['cardAccessZoneThirdTP'], 'EscapeGameText');
getVariableOnZone('Step4/ThirdTP/Tp3-1', ['cardAccessZoneFourthTP']);

onTpCondition('Step4/ThirdTP/Tp3-1', '#TpDepart_4', () => {
  return WA.player.state['cardAccessZoneThirdTP'] != null ? true : false;
}, 'tpDepart3Step4');
onTpCondition('Step4/ThirdTP/Tp3-2', '#Reset', true, 'tpDepart3Step4');
onTpCondition('Step4/ThirdTP/Tp3-3', '#Reset', true, 'tpDepart3Step4');

//Zone de TP_4
onEnterAuthorization(zoneFourthTP, ['cardAccessZoneFourthTP'], 'EscapeGameText');
getVariableOnZone('Step4/FourthTP/Tp4-2', ['cardAccessZoneFifthTP']);

onTpCondition('Step4/FourthTP/Tp4-1', '#Reset', true, 'tpDepart2Step4');
onTpCondition('Step4/FourthTP/Tp4-2', '#TpDepart_5', () => {
  return WA.player.state['cardAccessZoneFourthTP'] != null ? true : false;
}, 'tpDepart2Step4');
onTpCondition('Step4/FourthTP/Tp4-3', '#Reset', true, 'tpDepart2Step4');

//Zone de TP_5
onEnterAuthorization(zoneFifthTP, ['cardAccessZoneFifthTP'], 'EscapeGameText');
getVariableOnZone('Step4/FifthTP/Tp5-3', ['cardAccessZoneFinalStep4']);

onTpCondition('Step4/FifthTP/Tp5-1', '#Reset', true, 'tpDepart2Step5');
onTpCondition('Step4/FifthTP/Tp5-2', '#Reset', true, 'tpDepart2Step5');
onTpCondition('Step4/FifthTP/Tp5-3', '#TpArrive', () => {
  return WA.player.state['cardAccessZoneFifthTP'] != null ? true : false;
}, 'tpDepart2Step5');
onTpCondition('Step4/FifthTP/Tp5-4', '#Reset', true, 'tpDepart2Step5');


//Zone d'arrivée
onEnterAuthorization(zoneFinalStep4, ['cardAccessZoneFinalStep4'], 'EscapeGameText');
onTpCondition('Step4/Last/TpBack', '#start', true, 'tpBackFinal');

let redButtonForm = new PopUpVideoAction(
  "Step4/Last/Redbutton",
  "Appuyez sur espace pour ouvrir le formulaire !",
  [
    "Bravo ! Tu viens de sauver le monde Yumi !!"
  ],
  "redButtonTxt",
  formLink,
  () => {
    WA.room.hideLayer('Step4/Last/ButtonNotPressed_1');
    WA.room.hideLayer('Step4/Last/ButtonNotPressed_2');
    WA.room.hideLayer('Step4/Last/ButtonNotPressed');
    return true;
  },
  "right",
  "interact",
  "Form",
  "Formulaire_final"
);