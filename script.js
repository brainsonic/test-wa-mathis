// Chargement de la lib JS de WA
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

const tutorialLink = "https://64ix.github.io/WA-Edited-Tutorial/tutorial.html"
const formLink = "https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn";

// let msgStud2;
// let dialog2;

WA.onInit().then(() => {
});



// CLASS ///////////////////////////////////////////////
class Interaction {
    constructor(_layer, _message){
        this.layer = _layer;
        this.message = _message;
        this.setup();
    }
    setup(){
        WA.room.onEnterLayer(this.layer).subscribe(() => {
            this.triggerMessage = WA.ui.displayActionMessage({
                message: this.message,
                callback: () => {
                    this.interact();
                }
            })
        });
        WA.room.onLeaveLayer(this.layer).subscribe(() => {
            if (this.triggerMessage !== undefined)
            this.close();
        }
        );
    }   
    interact(){
        // override this
    }
    close(){
        if (this.triggerMessage !== undefined)
        this.triggerMessage.remove();
        this.exit();
    }
    exit(){
        // override this
    }
}
class Dialog extends Interaction{
    
    constructor(_layer, _message, _dialog, _object) {
        super(_layer, _message);
        this.object = _object;
        this.dialog = _dialog;
        this.state = 0;
    }

    interact(){
        this.open();
    }
    open(){
        this.currentState = WA.ui.openPopup(this.object, this.dialog[this.state], [{
            label: "Suivant",
            className: "primary",
            callback: (popup) => {
                this.next();            
            }
        }]);
        this.finished = false;
    }
    next(){
        this.state++;
        if(this.state >= this.dialog.length){
            if(this.currentState !== undefined)
            this.currentState.close();
            this.currentState = undefined;
            this.finished = true;
            this.state = 0;
        }
        else{
            if(this.currentState !== undefined)
            this.currentState.close();
            this.currentState = undefined;

            this.open();
        }
    }
    exit(){
        if(!this.finished && this.currentState !== undefined)
        this.currentState.close();
        this.currentState = undefined;
    }
}
class Modal extends Interaction{
    position = "right";
    constructor(_layer, _message, _modal, _position) {
        super(_layer, _message);
        this.modal = _modal;
        if(_position !== undefined)
        this.position = _position;
    }
    interact(){
        this.open();
    }
    open(){
        WA.ui.modal.openModal({
            title: "Yumi",
            src: this.modal,
            allow: "fullscreen; clipboard-read; clipboard-write",
            allowApi: !0,
            position: this.position
        });
    }
    exit(){
        WA.ui.modal.closeModal();
    }
}
class PopUpVideo extends Dialog{
    constructor(_layer, _message, _dialog, _object, _video) {
        super(_layer, _message, _dialog, _object);
        this.video = _video;
    }
    next(){
        this.finished = true;
        this.currentState.close();
        this.currentState = undefined;
        WA.ui.modal.openModal({
            title: "UIMM",
            src: this.video,
            allow: "fullscreen; clipboard-read; clipboard-write",
            allowApi: !0,
            position: "right"
        });
    }
}

// END CLASS ///////////////////////////////////////////////

// tutorial
WA.ui.modal.openModal({
    title: "Tutorial",
    src: tutorialLink ,
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: !0,
    position: "right"
});

// PNJs

const textCaptain = [
    "Ahoy !",
    "Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?    ",
    "Allez, on met les voiles !",
    "La France a beau être un petit pays, elle compte le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !    ",
    "Dans l’industrie navale, on inclut la construction et la déconstruction navales, mais aussi les activités utilisant le même savoir-faire, comme les énergies maritimes renouvelables (EMR) et la sécurité maritime e.",
    "Si l’industrie navale mondiale est dominée par l’Asie, la France reste dans la régate en misant sur la construction de paquebots et de navires de défense, comme c’est le cas à Saint-Nazaire, aux chantiers de l’Atlantique.",
    "En gros, on se démarque grâce à nos technologies de pointe, mais aussi par nos engagements environnementaux et nos bonnes conditions de travail.",
    "Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?",
    "Alors n’hésite pas à parler aux autres Yumi !",
    "Allez, bon vent !"
]
const textSkieuse = [
    "Hello !",
    "Vous voulez faire un tour de Moonbike ?",
    "D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie. C’est vrai que, quand on parle d’innovation industrielle, on pense souvent à des machines super sophistiquées, mais c’est aussi de nouvelles méthodes de production.",
    "L’industrie, c'est le secteur qui innove le plus en France, avec 75% des dépenses de R&D françaises et 7 entreprises figurant dans le top 10 des déposants de brevets.    ",
    "Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovation qui améliorent la production.    ",
    "Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail. Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.    ",
    "Le Moonbikes en est un bel exemple ! C’est le premier snowbike électrique du marché : un mode de déplacement beaucoup plus écologique que ces ancêtres à moteur thermique    ",
    "Allez maintenant vous pouvez aller le découvrir, tout schuss.    "
];
const textScientifique = [
    "Bonjour à vous",
    "Moi je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.",
    "Pour exemple j’ai travaillé sur le projet de l’AGV, l’automotrice à grande vitesse, c’est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et pas seulement aux extrémités.",
    "Grâce à cette innovation, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie. Cela permet de parcourir 1000 km en 3 heures ! Impressionnant non ?",
    "J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer.",
    "En ce moment, je travaille sur un nouveau projet : où je vais pouvoir mettre en lumière toutes les inventions et les témoignages de pros de l’industrie !    ",
    "Il n’est pas encore ouvert au public, mais il le sera bientôt.",
    "Je vous tiendrais au courant !",
    "À plus tard !"
];

let Accueil = new Modal("Pnjs/pnj1", "Appuyez sur espace pour discuter avec Yumi !", "https://chat.csml.dev/s/nyf8dzadrsfgpyk11xotf451cpw7y3ts");
let Captain = new Dialog("Pnjs/pnj2", "Appuyez sur espace pour discuter avec le Capitaine !", textCaptain, "pnj2text");
let Skieuse = new Dialog("Pnjs/pnj3", "Appuyez sur espace pour discuter avec la Skieuse !", textSkieuse, "pnj3text");
let Chantier = new Modal("Pnjs/pnj4", "Appuyez sur espace pour discuter avec la Cheffe de chantier !", "https://chat.csml.dev/s/8vkjunics58v1iooxyh81mok17zjbcqs");
let Scientifique = new Dialog("Pnjs/pnj5", "Appuyez sur espace pour discuter avec la Scientifique !", textScientifique, "pnj5text");
let Ingénieur = new Modal("Pnjs/pnj6", "Appuyez sur espace pour discuter avec l'Ingénieur !", "https://chat.csml.dev/s/2bxcjwpr0pzbufgnptzcejhomq4ajror");
let PanneauPont = new Dialog("Pnjs/Panneau Pont", "Appuyez sur espace pour intéragir avec le panneau !", ["Au Nord, la gare. Au Sud, la place principale."], "Panneau Pont");
let PanneauGare = new Dialog("Pnjs/Panneau Gare", "Appuyez sur espace pour intéragir avec le panneau !", ["Vous vous trouvez à la Gare du Monde de Yumi"], "Panneau Gare");
let PanneauChemin = new Dialog("Pnjs/Panneau Chemin", "Appuyez sur espace pour intéragir avec le panneau !", ["À l'Ouest, la place principale. Au Sud, le port."], "Panneau Chemin");
let PanneauQuai = new Dialog("Pnjs/Panneau Quai", "Appuyez sur espace pour intéragir avec le panneau !", ["Vous vous trouvez au Port du Monde de Yumi"], "Panneau Quai");
let PanneauTerrasse = new Dialog("Pnjs/Panneau Terrasse", "Appuyez sur espace pour intéragir avec le panneau !", ["Vous vous trouvez sur la place principale"], "Panneau Terrasse");
let Formulaire = new Modal("Pnjs/Formulaire", "Appuyez sur espace pour ouvrir le formulaire !", formLink);
let Statue = new PopUpVideo("Pnjs/Statue", "Appuyez sur espace pour intéragir avec la statue !", ["Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine"], "Statue","https://www.youtube.com/embed/APBCjKv6nvA");
let Pong = new Modal("Pnjs/Pong", "Appuyez sur espace pour jouer au Pong !", "https://64ix.github.io/WA-Edited-Tutorial/pong.html", "center");
let Basket = new Modal("Pnjs/Basket", "Appuyez sur espace pour jouer au Basket !", "https://64ix.github.io/WA-Edited-Tutorial/shooting-hoops/dist/index.html", "center");
let Moonbike = new PopUpVideo("Pnjs/MoonbikePNJ", "Appuyez sur espace pour parler à Anthony !", ["Bonjour, moi c’est Anthony, je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet."], "Moonbike","https://www.youtube.com/embed/eE3kWcMZsuE");
let Piano = new Modal("Pnjs/Piano", "Appuyez sur espace pour jouer du piano !", "https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html", "center");
let Jeune1 = new PopUpVideo("Pnjs/Jeune1", "Appuyez sur espace pour parler à Anthonin !", ["Salut moi c'est Anthonin ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"], "Jeune1","https://www.youtube.com/embed/9QDd6dH0-Xc");
let Jeune2 = new PopUpVideo("Pnjs/Jeune2", "Appuyez sur espace pour parler à Killian !", ["Salut moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"], "Jeune2","https://www.youtube.com/embed/pDMzhgu_Qbo");
let Jeune3 = new PopUpVideo("Pnjs/Jeune3", "Appuyez sur espace pour parler à Manon!", ["Bonjour, moi c'est Manon et pour découvrir sur quel super projet j'ai travaillé c'est ici :"], "Jeune3","https://www.youtube.com/embed/mgX4eHVDlTc");