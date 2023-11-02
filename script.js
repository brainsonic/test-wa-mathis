// Chargement de la lib JS de WA
import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

// VARIABLES ///////////////////////////////////////////////
const tutorialLink = "https://64ix.github.io/WA-Edited-Tutorial/tutorial.html";
const pongLink = "https://64ix.github.io/WA-Edited-Tutorial/pong.html";
const basketLink =
  "https://64ix.github.io/WA-Edited-Tutorial/shooting-hoops/dist/index.html";
const pianoLink =
  "https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html";
const formLink =
  "https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn";
const linkChatBotAccueil =
  "https://chat.csml.dev/s/nyf8dzadrsfgpyk11xotf451cpw7y3ts";
const linkChatBotChantier =
  "https://chat.csml.dev/s/8vkjunics58v1iooxyh81mok17zjbcqs";
const linkChatBotIngénieure =
  "https://chat.csml.dev/s/2bxcjwpr0pzbufgnptzcejhomq4ajror";
const linkVideoJeune1 = "https://www.youtube.com/embed/9QDd6dH0-Xc";
const linkVideoJeune2 = "https://www.youtube.com/embed/pDMzhgu_Qbo";
const linkVideoJeune3 = "https://www.youtube.com/embed/mgX4eHVDlTc";
const linkVideoMoonbike = "https://www.youtube.com/embed/eE3kWcMZsuE";
const linkVideo = "https://www.youtube.com/embed/9QDd6dH0-Xc"; // temporaire, à modifier quand la vidéo sera uploadée

//Phase 2

//MétierRoom
const lauakVideoLink = "https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS";
const cariVideoLink = "https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS"; //TO CHANGE
const ingProdVideoLink = "https://www.youtube.com/embed/8HlmZkJX_UQ?si=l0-8bOC_kMy2YYvv";
const apprentiRobotLink = "https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8";
const apprentiChaudronniereVideoLink = "https://www.youtube.com/embed/yz_6sGfsP2Q?si=BRitYLOYLMKJgEqr";
const YumiMetierBot = "https://chat.csml.dev/s/klex5ttuh9bmpen8gyo4tssus4liqxgb";

//ShowRoom

const emmaVideoLink = "https://www.youtube.com/embed/eBuPRPSBXlc?si=iMw0riL5KJyYjfIe";
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

//Labo Yumi

const drNozmanVideoLink = "https://www.youtube.com/embed/zZL1SjBGkNc?si=_z_dfadNSmzm-qOr";
const hiHacksVideoLink = "https://www.youtube.com/watch?v=BChzaJv_JzQ&t=102s";

//DinningRoom

const apprenti_1VideoLink = "https://www.youtube.com/embed/bIG_XU7XRbw?si=TmzUGmFJ11DA-Mhz";
const apprenti_2VideoLink = "https://www.youtube.com/embed/gxCuiA3-L4Q?si=15Pm8Vsp_im5XbLO";
const apprenti_3VideoLink = "https://www.youtube.com/embed/XZlUUGS7qng?si=L9sT1Pkp2bRlEUVV";
const apprenti_4VideoLink = "https://www.youtube.com/embed/DU7kScvKs6w?si=4eaGA75dDZP0dIxT";
const apprenti_5VideoLink = "https://www.youtube.com/embed/G4lEOWcPYv4?si=wa9eJCX3TbsLQZS2";

// SETUP ///////////////////////////////////////////////
WA.onInit().then(() => {
  // désactiver les proximity meeting parceque peu utile
  WA.controls.disablePlayerProximityMeeting();
});

// CLASS ///////////////////////////////////////////////

// class Interaction : endroit sur la map où l'on peut intéragir
// layer : string : nom de la layer sur laquelle l'interaction est possible
// message : string : message affiché au joueur pour l'inviter à intéragir
class Interaction {
  constructor(_layer, _message) {
    //setup des variables
    this.layer = _layer;
    this.message = _message;
    //setup des listeners WA pour les layers prévus
    this.setup();
  }
  setup() {
    //listener d'entrée sur le layer, créé le message d'interaction
    WA.room.onEnterLayer(this.layer).subscribe(() => {
      this.triggerMessage = WA.ui.displayActionMessage({
        message: this.message,
        callback: () => {
          this.interact();
        },
      });
    });
    //listener de sortie, lance la fonction de sortie qui fermera le message d'interaction si il est ouvert
    WA.room.onLeaveLayer(this.layer).subscribe(() => {
      if (this.triggerMessage !== undefined) this.close();
    });
  }
  //fonction d'intéraction, à override
  interact() {
    // override this
  }
  //fonction de sortie
  close() {
    if (this.triggerMessage !== undefined) this.triggerMessage.remove();
    // lance la fonction exit, à override selon les besoins des sous-classes
    this.exit();
  }
  //fonction de sortie, à override selon les besoins des sous-classes
  exit() {
    // override this
  }
}
// class Dialog
// layer : string : nom de la layer sur laquelle l'interaction est possible
// message : string : message affiché au joueur pour l'inviter à intéragir
// dialog : string[] : tableau de string, chaque string est un nouveau popup
// object : string : nom de l'objet sur lequel le popup s'ouvre
class Dialog extends Interaction {
  constructor(_layer, _message, _dialog, _object) {
    super(_layer, _message);
    this.object = _object;
    this.dialog = _dialog;
    this.state = 0;
  }
  //fonction d'intéraction, ouvre le popup
  interact() {
    this.open();
  }
  //fonction d'ouverture du popup en fonction du state du dialogue
  open() {
    // ouvre le popup avec le texte correspondant au state actuel
    // bouton change de label si c'est le dernier popup
    this.currentState = WA.ui.openPopup(this.object, this.dialog[this.state], [
      {
        label: this.state < this.dialog.length - 1 ? "Suivant" : "Fermer",
        className: "primary",
        callback: (popup) => {
          // appel de la fonction next qui gère le changement de state et d'autres choses
          this.next();
        },
      },
    ]);
    this.finished = false;
  }
  next() {
    this.state++;
    // ferme le popup actuel, set en undefined pour éviter les bugs
    if (this.currentState !== undefined) this.currentState.close();
    this.currentState = undefined;
    // check si fini, sinon ouvre le popup suivant
    if (this.state >= this.dialog.length) {
      this.finished = true;
      this.state = 0;
    } else this.open();
  }
  exit() {
    if (!this.finished && this.currentState !== undefined)
      this.currentState.close();
    this.currentState = undefined;
  }
}
// class Modal : Ouvrir une fenetre modale
// layer : string : nom de la couche sur laquelle l'interaction est possible
// message : string : message affiché au joueur pour l'inviter à intéragir
// modal : string : lien vers le modal
// position : string : position du modal
class Modal extends Interaction {
  //par defaut, position à droite
  position = "right";
  constructor(_layer, _message, _modal, _position) {
    super(_layer, _message);
    this.modal = _modal;
    if (_position !== undefined) this.position = _position;
  }
  interact() {
    this.open();
  }
  open() {
    // ouvre le modal
    WA.ui.modal.openModal({
      title: "Yumi",
      src: this.modal,
      allow: "fullscreen; clipboard-read; clipboard-write",
      allowApi: !0,
      position: this.position,
    });
  }
  exit() {
    WA.ui.modal.closeModal();
  }
}
// class PopUpVideo : Popup qui ouvre un site web à la sortie
class PopUpVideo extends Dialog {
  constructor(_layer, _message, _dialog, _object, _video) {
    super(_layer, _message, _dialog, _object);
    this.video = _video;
  }
  // override de la fonction next pour ouvrir le site web, async car cowebsite est une fonction asynchrone
  async next() {
    this.finished = true;
    this.currentState.close();
    this.currentState = undefined;
    await WA.nav.openCoWebSite(this.video, true, "", 50, 1, true, false);
  }
}

// END CLASS ///////////////////////////////////////////////

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
/*
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
*/
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
  "L’industrie, c'est le secteur qui innove le plus en France, avec 72% des dépenses de R&D françaises.",
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
  "En ce moment, je travaille sur un nouveau projet : le Showroom de l’industrie, où je vais pouvoir mettre en lumière toutes les inventions et les témoignages de professionnels de l’industrie !​",
  "Il n’est pas encore ouvert au public, mais il le sera bientôt.",
  "Je vous tiendrai au courant !",
  "À plus tard !",
];

// PNJ ///////////////////////////////////////////////

// instanciation des pnj, stockage dans des variables au cas où on voudrait les supprimer ou autre
let Accueil = new Modal(
  "Pnjs/pnj1",
  "Appuyez sur espace pour discuter avec Yumi !",
  linkChatBotAccueil
);
let Captain = new Dialog(
  "Pnjs/pnj2",
  "Appuyez sur espace pour discuter avec le Capitaine !",
  textCaptain,
  "pnj2text"
);
let Skieuse = new Dialog(
  "Pnjs/pnj3",
  "Appuyez sur espace pour discuter avec la Skieuse !",
  textSkieuse,
  "pnj3text"
);
let Chantier = new Modal(
  "Pnjs/pnj4",
  "Appuyez sur espace pour discuter avec la Cheffe de chantier !",
  linkChatBotChantier
);
let Scientifique = new Dialog(
  "Pnjs/pnj5",
  "Appuyez sur espace pour discuter avec la Scientifique !",
  textScientifique,
  "pnj5text"
);
let Ingénieure = new Modal(
  "Pnjs/pnj6",
  "Appuyez sur espace pour discuter avec l'Ingénieure !",
  linkChatBotIngénieure
);
let Moonbike = new PopUpVideo(
  "Pnjs/MoonbikePNJ",
  "Appuyez sur espace pour parler à Anthony !",
  [
    "Bonjour, moi c’est Anthony, je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet.",
  ],
  "Moonbike",
  linkVideoMoonbike
);
let Jeune1 = new PopUpVideo(
  "Pnjs/Jeune1",
  "Appuyez sur espace pour parler à Antonin !",
  [
    "Salut moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :",
  ],
  "Jeune1",
  linkVideoJeune1
);
let Jeune2 = new PopUpVideo(
  "Pnjs/Jeune2",
  "Appuyez sur espace pour parler à Killian !",
  [
    "Salut moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :",
  ],
  "Jeune2",
  linkVideoJeune2
);
let Jeune3 = new PopUpVideo(
  "Pnjs/Jeune3",
  "Appuyez sur espace pour parler à Manon!",
  [
    "Bonjour, moi c'est Manon et pour découvrir sur quel super projet j'ai travaillé c'est ici :",
  ],
  "Jeune3",
  linkVideoJeune3
);

// END PNJ ///////////////////////////////////////////////

// INTERACTIONS DIVERSES ///////////////////////////////////////////////

let Formulaire = new Modal(
  "Pnjs/Formulaire",
  "Appuyez sur espace pour ouvrir le formulaire !",
  formLink
);
let Statue = new PopUpVideo(
  "Pnjs/Statue",
  "Appuyez sur espace pour intéragir avec la statue !",
  [
    "Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine",
  ],
  "Statue",
  "https://www.youtube.com/embed/APBCjKv6nvA"
);
//salle vidéo
let Vidéo = new Modal(
  "Zones/Vidéo",
  "Appuyez sur espace pour regarder la vidéo !",
  linkVideo,
  "center"
);

// Panneaux
let PanneauPont = new Dialog(
  "Pnjs/Panneau Pont",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["Au Nord, la gare. Au Sud, la place principale."],
  "Panneau Pont"
);
let PanneauGare = new Dialog(
  "Pnjs/Panneau Gare",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["Vous vous trouvez à la Gare du Monde de Yumi"],
  "Panneau Gare"
);
let PanneauChemin = new Dialog(
  "Pnjs/Panneau Chemin",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["À l'Ouest, la place principale. Au Sud, le port."],
  "Panneau Chemin"
);
let PanneauQuai = new Dialog(
  "Pnjs/Panneau Quai",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["Vous vous trouvez au Port du Monde de Yumi"],
  "Panneau Quai"
);
let PanneauTerrasse = new Dialog(
  "Pnjs/Panneau Terrasse",
  "Appuyez sur espace pour intéragir avec le panneau !",
  ["Vous vous trouvez sur la place principale"],
  "Panneau Terrasse"
);

// Mini Jeux
let Pong = new Modal(
  "Pnjs/Pong",
  "Appuyez sur espace pour jouer au Pong !",
  pongLink,
  "center"
);
let Basket = new Modal(
  "Pnjs/Basket",
  "Appuyez sur espace pour jouer au Basket !",
  basketLink,
  "center"
);
let Piano = new Modal(
  "Pnjs/Piano",
  "Appuyez sur espace pour jouer du piano !",
  pianoLink,
  "center"
);

//Phase 2

//MetierRoom
let Lauak = new PopUpVideo(
  "Pnjs/MetierRoom/Lauak",
  "Appuyez sur espace pour parler à Lauak!",
  [
    "Bonjour, moi c’est Lauak !",
  ],
  "Lauak",
  lauakVideoLink,
)

let Cari = new PopUpVideo(
  "Pnjs/MetierRoom/Cari",
  "Appuyez sur espace pour parler à Cari!",
  [
    "Bonjour, moi c’est Cari !",
  ],
  "Cari",
  lauakVideoLink,
)

let IngProd = new PopUpVideo(
  "Pnjs/MetierRoom/IngProd",
  "Appuyez sur espace pour parler à l'ingénieur de production!",
  [
    "Bonjour, je suis l'ingénieur de production!",
  ],
  "IngProd",
  ingProdVideoLink,
)

let ApprentiRobotVideo = new Modal(
  "Pnjs/MetierRoom/ApprentiRobot",
  "Appuyez sur espace pour regarder la vidéo !",
  apprentiRobotLink,
  "center",
)

let ApprentiChaudronniereVideo = new Modal(
  "Pnjs/MetierRoom/ApprentiChaudron",
  "Appuyez sur espace pour regarder la vidéo !",
  apprentiChaudronniereVideoLink,
  "center",
);

let yumiMetier = new Modal(
  "Pnjs/MetierRoom/chatBot_1",
  "Appuyez sur espace pour discuter avec Yumi!",
  YumiMetierBot
);

//ShowRoom

let Emma = new PopUpVideo(
  "Pnjs/ShowRoom/Emma",
  "Appuyez sur espace pour parler à Emma!",
  [
    "Bonjour, moi c’est Emma !",
  ],
  "Emma",
  emmaVideoLink,
);

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

let DessinateurIndu = new Modal(
  "Pnjs/ShowRoom/DessinateurIndu",
  "Appuyez sur espace pour regarder la vidéo !",
  dessinateurInduVideoLink,
  "center",
);

let RespRD = new Modal(
  "Pnjs/ShowRoom/RespR&D",
  "Appuyez sur espace pour regarder la vidéo !",
  respRDVideoLink,
  "center",
);

let AjustMonteur = new Modal(
  "Pnjs/ShowRoom/AjustMonteur",
  "Appuyez sur espace pour regarder la vidéo !",
  ajustMonteurVideoLink,
  "center",
);

let DataScientist = new Modal(
  "Pnjs/ShowRoom/DataScientist",
  "Appuyez sur espace pour regarder la vidéo !",
  dataScientistVideoLink,
  "center",
);

let ChargAff = new Modal(
  "Pnjs/ShowRoom/ChargeAff",
  "Appuyez sur espace pour regarder la vidéo !",
  chargeAffVideoLink,
  "center",
);

let RespBureau = new Modal(
  "Pnjs/ShowRoom/RespBureau",
  "Appuyez sur espace pour regarder la vidéo !",
  respBureauVideoLink,
  "center",
);

let yumiITW = new Modal(
  "Pnjs/ShowRoom/ITWBot",
  "Appuyez sur espace pour discuter avec Yumi!",
  YumiITWBot
);

let WorldSkills = new Modal(
  "Pnjs/ShowRoom/WorldSkills",
  "Appuyez sur espace pour regarder la vidéo !",
  worldSkillsVideoLink,
  "center",
);

//ParkInside

let Doigby = new PopUpVideo(
  "Pnjs/ParkInside/Doigby",
  "Appuyez sur espace pour parler à Doigby!",
  [
    "Coucou tout le monde, c'est Doigby et aujourd'hui je vous fait découvrir les métiers de l'UIMM!",
  ],
  "Doigby",
  doigbyVideoLink,
);

let Tiboinshape = new PopUpVideo(
  "Pnjs/ParkInside/Tiboinshape",
  "Appuyez sur espace pour parler à Tiboinshape!",
  [
    "Daaamn la teamShape !!, aujourd'hui je vous fait découvrir les métiers que l'on retrouve à l'UIMM !",
  ],
  "Tiboinshape",
  tiboInShapeVideoLink,
);

let HiHacksBot = new Modal(
  "Pnjs/ParkInside/Hihacks",
  "Appuyez sur espace pour discuter avec Hihacks!",
  HiHacksBotLink
);

//Labo Yumi

let DrNozman = new PopUpVideo(
  "Pnjs/LaboRoom/DrNozman",
  "Appuyez sur espace pour parler à DrNozman!",
  [
    "Salut à tous !! Ici Nozman, aujourd'hui je vais vous présenter une vidéo un peu spécial concernant l'UIMM",
  ],
  "DrNozman",
  drNozmanVideoLink,
);

let HiHacks = new PopUpVideo(
  "Pnjs/LaboRoom/Hihacks_labo",
  "Appuyez sur espace pour parler à Hihacks!",
  [
    "Bonjour, c'est moi Hihacks. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM",
  ],
  "Hihacks_labo",
  hiHacksVideoLink,
);

//Dinning Room

let Apprenti_1 = new PopUpVideo(
  "Pnjs/DinningRoom/Apprenti_1",
  "Appuyez sur espace pour parler à Magaly!",
  [
    "Bonjour, c'est moi Magaly. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM",
  ],
  "Apprenti_1",
  apprenti_1VideoLink,
);

let Apprenti_2 = new PopUpVideo(
  "Pnjs/DinningRoom/Apprenti_2",
  "Appuyez sur espace pour parler à Joris!",
  [
    "Bonjour, c'est moi Joris. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM",
  ],
  "Apprenti_2",
  apprenti_2VideoLink,
);

let Apprenti_3 = new PopUpVideo(
  "Pnjs/DinningRoom/Apprenti_3",
  "Appuyez sur espace pour parler à Julien!",
  [
    "Bonjour, c'est moi Julien. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM",
  ],
  "Apprenti_3",
  apprenti_3VideoLink,
);

let Apprenti_4 = new PopUpVideo(
  "Pnjs/DinningRoom/Apprenti_4",
  "Appuyez sur espace pour parler à Fanny!",
  [
    "Bonjour, c'est moi Fanny. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM",
  ],
  "Apprenti_4",
  apprenti_4VideoLink,
);

let Apprenti_5 = new PopUpVideo(
  "Pnjs/DinningRoom/Apprenti_5",
  "Appuyez sur espace pour parler à Nassredine!",
  [
    "Bonjour, c'est moi Nassredine. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM",
  ],
  "Apprenti_5",
  apprenti_5VideoLink,
);


// END INTERACTIONS DIVERSES ///////////////////////////////////////////////
