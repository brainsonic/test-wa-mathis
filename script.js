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
            this.currentState.close();
            this.finished = true;
            this.state = 0;
        }
        else{
            this.currentState.close();
            this.open();
        }
    }
    exit(){
        if(!this.finished && this.currentState !== undefined)
        this.currentState.close();
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
    "Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie maritime ?",
    "Allez, on met les voiles !",
    "La France a beau être un petit pays, elle compte le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !",
    "Les industries de la mer regroupent 4 secteurs : l’industrie navale, l’industrie nautique, les énergies marines renouvelables et l’offshore.",
    "Cela représente 125 000 emplois, qui sont concentrés sur le littoral avec des ports industriels comme Dunkerque et d’autres tournées vers le transport de marchandises à l’image de Marseille.",
    "Aujourd’hui, les principaux défis du secteur sont la décarbonation, le recrutement et la transition numérique.",
    "Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?",
    "Alors n’hésite pas à parler aux autres Yumi !",
    "Allez, bon vent !"
]
const textSkieuse = [
    "Hello !",
    "Vous voulez faire un tour de Moonbike ?",
    "D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie. C’est vrai que, quand on parle d’innovation industrielle, on pense souvent à des machines super sophistiquées, mais c’est aussi de nouvelles méthodes de production.",
    "On utilise par exemple des robots dans l’industrie depuis longtemps pour remplacer l’homme ou des cobots, des robots collaboratifs, pour travailler avec lui.",
    "Cela a beaucoup fait évoluer les métiers, comme le dessin assisté par ordinateur qui permet de réaliser des objets à l’aide d’une imprimante 3D.",
    "Mais l’innovation cherche aujourd’hui à prendre en compte les considérations sociales et environnementales en améliorant les bien-être des employés et la protection de l’environnement.",
    "Le moonbike en est un bel exemple : c’est le premier snowbike électrique du marché !",
    "Allez maintenant vous pouvez l’essayer, tout schuss !"
];
const textChantier = [
    "Hop hop hop",
    "Pardon, mais on ne passe pas.",
    "Le showroom est en travaux et il ouvrira dans quelques mois.",
    "Pour en savoir plus, je vous invite à discuter avec ma collègue scientifique dans son labo.",
    "Bonne journée !"
];
const textScientifique = [
    "Bonjour à vous",
    "Moi je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.",
    "Pour exemple j’ai travaillé sur le projet de l’AGV, l’automotrice à grande vitesse, c’est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et pas seulement aux extrémités.",
    "Grâce à ça, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie, tout en parcourant 1000 km en 3 heures. Impressionnant non ?",
    "J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer.",
    "En ce moment, je travaille sur un nouveau projet : le showroom de l’industrie, où je vais pouvoir exposer toutes mes inventions !",
    "Il n’est pas encore ouvert au public, mais il le sera bientôt.",
    "Je vous tiendrais au courant !",
    "À plus tard !"
];

let Accueil = new Modal("Pnjs/pnj1", "Appuyez sur espace pour discuter avec Yumi !", "https://chat.csml.dev/s/nyf8dzadrsfgpyk11xotf451cpw7y3ts");
let Captain = new Dialog("Pnjs/pnj2", "Appuyez sur espace pour discuter avec le Capitaine !", textCaptain, "pnj2text");
let Skieuse = new Dialog("Pnjs/pnj3", "Appuyez sur espace pour discuter avec la Skieuse !", textSkieuse, "pnj3text");
let Chantier = new Dialog("Pnjs/pnj4", "Appuyez sur espace pour discuter avec la Cheffe de chantier !", textChantier, "pnj4text");
let Scientifique = new Dialog("Pnjs/pnj5", "Appuyez sur espace pour discuter avec la Scientifique !", textScientifique, "pnj5text");
let PanneauPont = new Dialog("Pnjs/Panneau Pont", "Appuyez sur espace pour intéragir avec le panneau !", ["Au Nord, la gare. Au Sud, la place principale."], "Panneau Pont");
let PanneauGare = new Dialog("Pnjs/Panneau Gare", "Appuyez sur espace pour intéragir avec le panneau !", ["Vous vous trouvez à la Gare du Monde de Yumi"], "Panneau Gare");
let PanneauChemin = new Dialog("Pnjs/Panneau Chemin", "Appuyez sur espace pour intéragir avec le panneau !", ["À l'Ouest, la place principale. Au Sud, le port."], "Panneau Chemin");
let PanneauQuai = new Dialog("Pnjs/Panneau Quai", "Appuyez sur espace pour intéragir avec le panneau !", ["Vous vous trouvez au Port du Monde de Yumi"], "Panneau Quai");
let PanneauTerrasse = new Dialog("Pnjs/Panneau Terrasse", "Appuyez sur espace pour intéragir avec le panneau !", ["Vous vous trouvez sur la place principale"], "Panneau Terrasse");
let Formulaire = new Modal("Pnjs/Formulaire", "Appuyez sur espace pour ouvrir le formulaire !", formLink);
let Statue = new Dialog("Pnjs/Statue", "Appuyez sur espace pour intéragir avec la statue !", ["Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine"], "Statue");
Statue.next = function(){
    this.currentState.close();
    this.currentState = WA.ui.modal.openModal({
        title: "Yumi",
        src: "https://www.youtube.com/embed/APBCjKv6nvA",
        allow: "fullscreen; clipboard-read; clipboard-write",
        allowApi: !0,
        position: "right"
    });
}
let Pong = new Modal("Pnjs/Pong", "Appuyez sur espace pour jouer au Pong !", "https://64ix.github.io/WA-Edited-Tutorial/pong.html", "center");

