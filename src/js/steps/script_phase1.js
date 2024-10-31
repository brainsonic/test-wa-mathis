import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction, onTpCondition, tutorial, onEnterAuthorization, getVariableOnZone, createVariableWA, trapLayer} from '../class';

function phase_1()
{
    const pongLink = "https://64ix.github.io/WA-Edited-Tutorial/pong.html";
    const basketLink = "https://brainsonic.github.io/UIMM-WA-Extras/shooting-hoops.html";
    const pianoLink = "https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html";

    const linkChatBotAccueil = "https://chat.csml.dev/s/qqr2rsopfpb7do1mhvqhu5wtmezc0qzg"; //
    const linkChatBotYumiTransporteurPhase1 = "https://chat.csml.dev/s/3pkrfecaabpnkm4evxotkvovoyhkc4o5"; //
    const linkChatBotIngénieure = "https://chat.csml.dev/s/cveg2t5ddnfrdlelb9vmzvpqvpzdlhew"
    const linkVideoJeune1 = "https://www.youtube.com/embed/9QDd6dH0-Xc?si=nVcJ4ryPrmNZ8c7u";
    const linkVideoJeune2 = "https://www.youtube.com/embed/pDMzhgu_Qbo?si=VKqmGCg01AkfOIQJ";
    const linkVideoJeune3 = "https://www.youtube.com/embed/mgX4eHVDlTc?si=DIfTDwIU92KX9KWg";
    const linkVideoMoonbike = "https://www.youtube.com/embed/eE3kWcMZsuE";
    const linkVideo = "https://www.youtube.com/embed/videoseries?si=wKcics6QWpDWdVob&amp;list=PLEe-8ZKtOy6Oxx1qU_qRhdcBmy-lXBtqQ";
    const linkVideoMagaly = "https://www.youtube.com/embed/bIG_XU7XRbw?si=ADidl-gwJ42Jh5kB";

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
        "Alors n'hésite pas à aller parler aux habitants de ce monde, bon vent !​"
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
        "Ce que j’adore, c’est trouver des solutions pour améliorer la vie de chacun.",
        "J’ai mis au point les transporteurs que vous verrez un peu partout sur l’île.",
        "Pour les essayer, il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.",
        "C'est très pratique, vous verrez.",
        "Ah ! J’ai autre chose à vous dire, bien joué, j’ai un ⚡️pour vous ! Ne le dites à personne, il vous permet de participer au jeu-concours directement sans avoir à finaliser la quête, bravo, et bonne chance !"
    ];

    let Accueil = new Modal(
        "Interactions/pnj1",
        "Appuyez sur espace pour discuter avec Yumi !",
        linkChatBotAccueil,
        "right",
        "interact",
        "PNJ",
        "Yumi_accueil",    
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

    let scienfiqueLink = "https://0eb89b36.sibforms.com/serve/MUIFANY_JLwqJR5cqCev_yJX9BfhJE7CVsQdK6ZY9WXlSHsQP9akteNwpJWGJ06PcwOqtb2lu99aJPKOHxbSgXIddTBkSWtak8TVdIvaDbwjawxKV4JbrxJxfyoyZLry1u4CHsZdCTkyMROC5PcjPT4C6Th5_VkfAzhkW55kkDBpnweiVBsLDwInXe5FZzaFgbDkCPGs_mmBBJC5";
    let Scientifique = new PopUpVideo(
        "Interactions/pnj5",
        "Appuyez sur espace pour discuter avec la Scientifique !",
        textScientifique,
        "pnj5text",
        scienfiqueLink,
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


    let YumiTransporteurPhase1 = new Modal(
        "Interactions/YumiTransporteurPhase1",
        "Appuyez sur espace pour discuter avec Yumi !",
        linkChatBotYumiTransporteurPhase1,
        "right",
        "interact",
        "PNJ",
        "PNJ_YumiTransporteurPhase1"
    );

    let Moonbike = new Dialog(
        "Interactions/MoonbikePNJ",
        "Appuyez sur espace pour parler à Anthony !",
        [
            "Dans le Monde de Yumi, il y a des vidéos, des podcasts, des interviews qui vous aident à mieux comprendre l'industrie. Mais pas que. Dans ces contenus se cachent parfois des indices.",
        ],
        "Moonbike",
        "interact",
        "PNJ",
        "PNJ_Anthony",
    );

    let PNJPontDebut = new Dialog(
        "Interactions/PNJPontDebut",
        "Appuyez sur espace pour parler à Sarah !",
        [
            "Hey ! Toi aussi tu veux sauver Rayonnance ? Va vite dans le lab de Yumi : pour commencer ta quête, il te faut trouver le code de la porte rouge. Parle aux habitants du Monde, ils auront des informations pour t'aider à le trouver.",
            "Le lab de Yumi ? Pour le trouver, suis le chemin puis entre dans le bâtiment et remonte vers le nord, traverse le jardin et tu y seras.",
        ],
        "PNJPontDebut",
        "interact",
        "PNJ",
        "PNJPontDebut",
    );

    let Jeune1 = new PopUpVideo(
        "Interactions/Jeune1",
        "Appuyez sur espace pour parler à Antonin !",
        [
            "Salut, moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé, c'est ici :",
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
            "Salut, moi c'est \n Killian ! Toi aussi tu es un passionné de l'industrie comme Yumi ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :",
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
            "Bonjour, moi c’est Magaly. Grâce à l’industrie j’ai réussi à combiner ma passion et mon métier.",
            "Vous voulez savoir comment ? Allez, j'enfile mon casque et je vous montre !",
            "Et si vous cherchez la clé d'Anton, je crois que Fanny a des informations pour vous. Une brune, chemise noire, qui travaille pour l'industrie, facile non ?",
        ],
        "MagalyText",
        linkVideoMagaly,
        "interact",
        "PNJ",
        "PNJ_Magaly"
    );

    let Statue = new PopUpVideo(
        "Interactions/Statue",
        "Appuyez sur espace pour lire la pancarte",
        [
            "Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur Hihacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine",
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
            'Et bien c\'est le moment de les découvrir en visionnant la saison 1 de "WorldSkills, La Série", réalisée avec les apprentis de l\'industrie !',
            "Accrochez-vous, sensations fortes garanties."
        ],
        [
            "Connaissez-vous les WorldSkills, la grande compétition des métiers ?",
            "Et bien, c'est le moment de les découvrir en visionnant la saison 1 de 'WorldSkills La Série', réalisée avec les apprentis de l'industrie !",
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
        ["Au Nord, la gare. Après le pont, suivez le chemin pour le lab de Yumi."],
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
        ["Continuez tout droit pour le lab de Yumi. Sinon vous trouverez le port au Sud."],
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
            "Partez à la rencontre des habitants du Monde de Yumi, les femmes et les hommes qui font l'Industrie. Ils vous aideront à sauver Rayonance !",
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
}
export {
    phase_1,
};