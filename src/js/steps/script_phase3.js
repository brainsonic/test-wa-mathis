import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";
import { Interaction, InteractAction, Dialog, Modal, ModalAction, PopUpVideo, ItemOnLayer, ItemPickUpOnCondition, PopUpVideoAction, onTpCondition, tutorial, onEnterAuthorization, getVariableOnZone, createVariableWA, trapLayer} from '../class';
import { formLink } from '../script';

function phase_3()
{

    // Corridor trapped
    const linkYumiStep2Depart = "https://chat.csml.dev/s/kdcybqjeewfai4itensots5rud2mg4cj";
    const linkYumiStep2Final = "https://chat.csml.dev/s/dkhsdz2acozjcammiextxvgmqr6bi6al";

    // Lab Industrie
    const PaulygonesIndustrieVideoLink = "https://www.youtube.com/embed/R3GFX6387Hw";
    const LucieIndustrieVideoLink = "https://www.youtube.com/embed/jDIfPsnb5LI";
    const JadeIndustrieVideoLink = "https://www.youtube.com/embed/aH12YYBDZc8?si=bU2SA6-xTgUG8L0q";
    const ArnaudIndustrieVideoLink = "https://www.youtube.com/embed/yULRqI_KGb4";

    // Transporteur
    const YumiTransporteurBotLink = "https://chat.csml.dev/s/tgepml6az4lsuucyz4tr8ujisrxmxmb4";

    // Final Room
    const formLink = "https://0eb89b36.sibforms.com/serve/MUIFAMTWQq_m3rCQrgfnBO8-HUshniX2rebB99OuvGmVKli0cw-cqIAuuXmPLAf59d5fr3da55Y6I8vGYtYzUJYlP7Y1Fyqerb7hzo1g46RIoDQctc_3J1eAnLxeaf9_TDTFVFtxgL-yPG4vYXJyDTYTY91roQ8Dc_iPWu5Mk4jex5m-RA-4UEf_3X7zhPuKy2UIZmyYxyp7AEPK";
    const WorldUIMMYTBVideoLink = "https://www.youtube.com/embed/videoseries?si=lxOwHdwG2RZNgqBo&amp;list=PLFysjt-P1QCMOaJCY_jCO1HF7IXOoo8hO";
    const UIMMInstaLink = "https://www.instagram.com/uimm.lafabriquedelavenir/";
    const ForIndustrieLink = "https://univers.forindustrie.fr/";
    const IndustrizLink = "https://ajir.industriz.fr/Application/";
    const WorldSkillsStatuesLink = "https://www.worldskills-laserie.fr/";
    const UIMMRecruteLink = "https://www.lindustrie-recrute.fr";

    //ParkOutside (Out of the gate)

    let chat = new Dialog(
        "Interactions/ParkOutside/chat",
        "Appuyez sur espace pour parler au chat !",
        [
            "Chalut, Cha va ?",
            "Pour chauver Rayonance, ici vous gelez.",
            "Un concheil : trouvez la Yumi ingénieure.",
            "Un indice elle aura pour vous, ch'est chûr !"
        ],
        "chatText",
        "interact",
        "PNJ",
        "PNJ_Chat"
    );

    let Marlene = new Dialog(
        "Interactions/ParkOutside/Marlene",
        "Appuyez sur espace pour parler à Marlène !",
        [
            "Toi aussi, tu dois sauver Rayonance ?!",
            "Pour le moment, pas de Technophoby à l'horizon.",
            "Mais il y a urgence, il faut trouver un code. Tu sais, celui de la porte rouge dans le lab de Yumi.",
        ],
        "MarleneText",
        "interact",
        "PNJ",
        "PNJ_Marlene"
    );

    //ParkInside

    let ChatParkInside = new Dialog(
        "Interactions/ParkInside/ChatParkInside",
        "Appuyez sur espace pour parler au chat !",
        [
            "Chalut, Cha va ?",
            "Vous cherchez encore le code de la porte ?",
            "Allez, je vous aide.",
            "Quel est le point commun entre le paPIllon, le PIaf et le laPIn ?",
            "Oui, j'aime les chacher, mais c'est l'orthographe qu'il faut étudier !",
            "\"Pi\" se retrouve dans chaque mot. Ce sont deux lettres, mais c'est aussi un nombre infini qui commence par 3.",
        ],
        "ChatParkInsideText",
        "interact",
        "PNJ",
        "PNJ_ChatParkInside"
    );

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
        "Appuyez sur espace pour ramasser le badge d'accès",
        ["Vous avez récupéré le badge d'accès"],
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
        "Bonjour, dépêchez-vous les saboteurs sont à votre poursuite !",
        "Pour sortir d'ici, vous devez récupérer 4 indices éparpillés dans le labo.",
        "Mais, la mission se complique. Car un des messages est bloqué dans une caisse. Il faudra d'abord trouver la clé pour l'ouvrir.",
        "Tous les indices forment un mot qui vous donnera une indication pour trouver une trappe secrète. Celle-ci donnera accès à un sous-sol.",
        "Dans cet atelier, vous trouverez un transporteur pour vous échapper.",
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
        "Appuyez sur espace pour insérer le badge d'accès",
        ["La porte est ouverte"],
        ["Vous devez avoir le badge d'accès et avoir parlé à Yumi"],
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

    //Hide the card if the player already pick it
    WA.onInit().then(() => {
        if (WA.player.state['cardAccess'] == true)
        {
            WA.room.hideLayer("Items/TrappedRoom/CardAccess");
        }
    });

    /* ----- STEP 3 LABINDUSTRY----- */

    let PaulygoneVideo = new PopUpVideo(
        "Interactions/LabIndustrieRoom/PaulygoneVideo",
        "Appuyez sur espace pour regarder la vidéo",
        [
        "Le youtubeur Paulygones cherche à comprendre comment Robin s'y prend pour concevoir des robots mobiles autonomes."
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
        "Découvrez son parcours en vidéo."
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
        "Découvrez son parcours en vidéo."
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
        '"Arnaud explique son métier au vidéaste Paulygones"',
        "Intéressant, regardons !"
        ],
        "ArnaudVideoText",
        ArnaudIndustrieVideoLink,
        "interact",
        "Video",
        "Video_ArnaudIndustrie",
    );
    
    let trapAppear =  false;
    WA.onInit().then(() => {
        if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
            && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
            && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
            && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true
            && trapAppear == false)
        {
            trapAppear = true;
            let trapDoor = new InteractAction(
                "InteractAction/LabIndustry/TrapDoor",
                "Cha alors, tu as réuchi la troisième épreuve. Appuyez chur espace pour ouvrir la trappe. Chalut et bonne route, cha a été un plaisir de vous rencontrer !",
                [
                    "Vous entrez dans la trappe"
                ],
                ["Vous devez rassembler les 4 indices avant de pouvoir ouvrir la trappe"],
                'trapDoorText',
                () => {
                if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
                    && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
                    && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
                    && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true)
                {
                    createVariableWA("cardAccessStep4")
                    let url_segments =  window.location.href.split('/');
                    url_segments[url_segments.length - 1] = "map2.tmj";

                    setInterval(() => {
                        WA.nav.goToRoom(url_segments.join('/'));
                    }, 1000)
                    
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
        }
    });

    let coatRackHint = new InteractAction(
        "Items/LabIndustry/CoatRackHint",
        "Appuyez sur espace pour prendre l'indice.",
        ["Vous avez déjà récupéré l'indice 'C'."],
        ["Bravo, vous avez récupéré le premier indice, c'est la lettre C ! \n C _ _ _"],
        "coatRackText",
        () => {
            let itemObtained = true;
            if (WA.player.state["coatRackHint"] == null || WA.player.state["coatRackHint"] == false)
            {
                createVariableWA("coatRackHint");
                itemObtained = false;
            }
            if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
                    && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
                    && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
                    && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true
                    && trapAppear == false)
            {
                trapAppear = true;
                let trapDoor = new InteractAction(
                    "InteractAction/LabIndustry/TrapDoor",
                    "Cha alors, tu as réuchi la troisième épreuve. Appuyez chur espace pour ouvrir la trappe. Chalut et bonne route, cha a été un plaisir de vous rencontrer !",
                    [
                        "Vous entrez dans la trappe"
                    ],
                    ["Vous devez rassembler les 4 indices avant de pouvoir ouvrir la trappe"],
                    'trapDoorText',
                    () => {
                    if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
                        && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
                        && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
                        && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true)
                    {
                        createVariableWA("cardAccessStep4")
                        let url_segments =  window.location.href.split('/');
                        url_segments[url_segments.length - 1] = "map2.tmj";
            
                        setInterval(() => {
                            WA.nav.goToRoom(url_segments.join('/'));
                        }, 1000)
                        
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
            }
            return itemObtained;
        },
        "interract",
        "Object",
        "Object_coatRackItem"
    );
    
    let cafetHint = new InteractAction(
        "Items/LabIndustry/CafetHint",
        "Appuyez sur espace pour prendre l'indice",
        ["Vous avez déjà récupéré l'indice 'H'."],
        ["Félicitations, vous avez trouvé le deuxième indice, c'est la lettre H ! _ H _ _"],
        "cafetText",
        () => {
            let itemObtained = true;
            if (WA.player.state["cafetHint"] == null || WA.player.state["cafetHint"] == false)
            {
                createVariableWA("cafetHint");
                itemObtained = false;
            }
            if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
                    && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
                    && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
                    && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true
                    && trapAppear == false)
            {
                trapAppear = true;
                let trapDoor = new InteractAction(
                    "InteractAction/LabIndustry/TrapDoor",
                    "Cha alors, tu as réuchi la troisième épreuve. Appuyez chur espace pour ouvrir la trappe. Chalut et bonne route, cha a été un plaisir de vous rencontrer !",
                    [
                        "Vous entrez dans la trappe"
                    ],
                    ["Vous devez rassembler les 4 indices avant de pouvoir ouvrir la trappe"],
                    'trapDoorText',
                    () => {
                    if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
                        && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
                        && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
                        && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true)
                    {
                        createVariableWA("cardAccessStep4")
                        let url_segments =  window.location.href.split('/');
                        url_segments[url_segments.length - 1] = "map2.tmj";
            
                        setInterval(() => {
                            WA.nav.goToRoom(url_segments.join('/'));
                        }, 1000)
                        
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
            }
            return itemObtained;
        },
        "interract",
        "Object",
        "Object_keyItem",
    );
    
    let keyItem = new InteractAction(
        "Items/LabIndustry/Key",
        "Appuyez sur espace pour prendre la clé",
        ["Vous avez déjà récupéré la clé du coffre."],
        ["Vous avez récupéré la clé permettant d'ouvrir la caisse."],
        "keyText",
        () => {
            let itemObtained = true;
            if (WA.player.state["keyItem"] == null || WA.player.state["keyItem"] == false)
            {
                createVariableWA("keyItem");
                itemObtained = false;
            }
            
            return itemObtained;
        },
        "interract",
        "Object",
        "Object_keyItem",
    );
    
    let BinHint = new InteractAction(
        "Items/LabIndustry/BinHint",
        "Appuyez sur espace pour prendre l'indice",
        ["Vous avez déjà récupéré l'indice 'A'."],
        ["Bien joué, tu as le troisième indice, c'est la lettre A ! _ _ A _"],
        "binText",
        () => {
            let itemObtained = true;
            if (WA.player.state["binHint"] == null || WA.player.state["cafetHint"] == false)
            {
                createVariableWA("binHint");
                itemObtained = false;
            }
            if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
                    && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
                    && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
                    && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true
                    && trapAppear == false)
            {
                trapAppear = false;
                let trapDoor = new InteractAction(
                    "InteractAction/LabIndustry/TrapDoor",
                    "Cha alors, tu as réuchi la troisième épreuve. Appuyez chur espace pour ouvrir la trappe. Chalut et bonne route, cha a été un plaisir de vous rencontrer !",
                    [
                        "Vous entrez dans la trappe"
                    ],
                    ["Vous devez rassembler les 4 indices avant de pouvoir ouvrir la trappe"],
                    'trapDoorText',
                    () => {
                        if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
                            && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
                            && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
                            && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true)
                        {
                            createVariableWA("cardAccessStep4")
                            let url_segments =  window.location.href.split('/');
                            url_segments[url_segments.length - 1] = "map2.tmj";
                
                            setInterval(() => {
                                WA.nav.goToRoom(url_segments.join('/'));
                            }, 1000)
                            
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
            }
            return itemObtained;
        },
        "interract",
        "Object",
        "Object_binItem",
    );
    
    let chestHint = new InteractAction(
        "Items/LabIndustry/ChestHint",
        "Appuyez sur espace pour prendre l'indice",
        ["Super, tu viens de prendre le quatrième et dernier indice, c'est la lettre T ! _ _ _ T"],
        ["Vous n'avez pas la clé du coffre"],
        "chestText",
        () => {
            if (WA.player.state["keyItem"] != null && WA.player.state["keyItem"] == true)
            {
                createVariableWA("chestHint");
                if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
                    && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
                    && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
                    && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true
                    && trapAppear == false)
                {
                    trapAppear = true;
                    let trapDoor = new InteractAction(
                        "InteractAction/LabIndustry/TrapDoor",
                        "Cha alors, tu as réuchi la troisième épreuve. Appuyez chur espace pour ouvrir la trappe. Chalut et bonne route, cha a été un plaisir de vous rencontrer !",
                        [
                            "Vous entrez dans la trappe"
                        ],
                        ["Vous devez rassembler les 4 indices avant de pouvoir ouvrir la trappe"],
                        'trapDoorText',
                        () => {
                        if (WA.player.state["cafetHint"] != null && WA.player.state["cafetHint"] == true
                            && WA.player.state["chestHint"] != null && WA.player.state["chestHint"] == true
                            && WA.player.state["coatRackHint"] != null && WA.player.state["coatRackHint"] == true
                            && WA.player.state["binHint"] != null && WA.player.state["binHint"] == true)
                        {
                            createVariableWA("cardAccessStep4")
                            let url_segments =  window.location.href.split('/');
                            url_segments[url_segments.length - 1] = "map2.tmj";
                
                            setInterval(() => {
                                WA.nav.goToRoom(url_segments.join('/'));
                            }, 1000)
                            
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
                }
                return true;
            }
            return false;
        },
        "interract",
        "Object",
        "Object_chestItem",
    );
    
    let text = "Il n'y a rien ici";
    //Open trapDoor if all hint is gathered
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

    let redButtonForm = new InteractAction(
        "Step4/Last/Redbutton",
        "Appuyez sur espace pour sauver Rayonance !",
        [
        "Bravo !!!",
        "Vous avez réussi.",
        "Rayonance est en sécurité et notre monde est sauvé.",
        "Vous êtes notre héros.",
        "L'aventure dans le Monde de Yumi ne s'arrête pas là.",
        "Continuez à vous balader dans les différentes salles grâce au transporteur situé dans la prochaine pièce.",
        "Les professionnels de l'industrie qui peuplent ce monde vous attendent pour vous parler de leurs métiers et de leurs projets passionnants !", "Pour vous remercier, n'hésitez pas à remplir ce formulaire pour participer à notre jeu-concours et tenter de gagner une Nintendo switch et plein d'autres cadeaux."
        ],
        [
            "Bravo !!!",
            "Vous avez réussi.",
            "Rayonance est en sécurité et notre monde est sauvé.",
            "Vous êtes notre héros.",
            "L'aventure dans le Monde de Yumi ne s'arrête pas là.",
            "Continuez à vous balader dans les différentes salles grâce au transporteur situé dans la prochaine pièce.",
            "Les professionnels de l'industrie qui peuplent ce monde vous attendent pour vous parler de leurs métiers et de leurs projets passionnants !",
            "Pour vous remercier, n'hésitez pas à remplir ce formulaire pour participer à notre jeu-concours et tenter de gagner une Nintendo switch et plein d'autres cadeaux."
            ],
        "redButtonTxt",
        () => {
            createVariableWA("GameFinished");
            WA.room.hideLayer('Step4/Last/ButtonNotPressed');
            WA.room.hideLayer('Step4/Last/ButtonNotPressedAnimation');
        return true;
        },
        "right",
        "interact",
        "Form",
        "Formulaire_final"
    );
    let textredButtonFormEclair = [
        "Bravo !!!",
        "Vous avez réussi.",
        "Rayonance est en sécurité et notre monde est sauvé.",
        "Vous êtes notre héros.",
        "L'aventure dans le Monde de Yumi ne s'arrête pas là.",
        "Continuez à vous balader dans les différentes salles grâce au transporteur situé dans la prochaine pièce.",
        "Les professionnels de l'industrie qui peuplent ce monde vous attendent pour vous parler de leurs métiers et de leurs projets passionnants !",
        "Pour vous remercier, n'hésitez pas à remplir ce formulaire pour participer à notre jeu-concours et tenter de gagner un iphone et plein d'autres cadeaux."
    ];
    let redButtonFormEclair = new PopUpVideoAction(
        "Step4/Last/Redbutton",
        "Appuyez sur espace pour sauver Rayonance !",
        textredButtonFormEclair,
        textredButtonFormEclair,
        "redButtonTxt",
        formLink,
        () => {
            createVariableWA("GameFinished");
            WA.room.hideLayer('Step4/Last/ButtonNotPressed');
            WA.room.hideLayer('Step4/Last/ButtonNotPressedAnimation');
            return true;
        },
        "interact",
        "Form",
        "Formulaire_final"
    );

    let technophobys = new Dialog(
        'Step4/Last/ButtonNotPressed',
        "Appuyez sur espace pour parler aux Technophoby",
        [
            "Nous sommes les Technophoby.",
            "Nous voulons conserver le monde tel qu'il est aujourd'hui sans Rayonance.",
            "Ne vous approchez pas de ce bouton.",
            "Si vous appuyez, le Monde de Yumi aura accès à l'énergie infinie."
        ],
        "TechnophobysText",
        "interact",
        "PNJ",
        "PNJ_Technophoby"
    )

    /**---- FinalRoom ----**/

    let WorldUIMMYTB = new PopUpVideo(
        "Interactions/FinalRoom/WorldUIMMYTB",
        "Appuyez sur espace pour regarder les vidéos",
        [
        "Sur la page Youtube de l'UIMM La Fabrique de l'Avenir, vous pourrez découvrir tous les métiers de l'industrie."
        ],
        "WorldUIMMYTBText",
        WorldUIMMYTBVideoLink,
        "interact",
        "Video",
        "Video_WorldUIMMYTB"
    );

    let UIMMInsta = new Dialog(
        "Interactions/FinalRoom/UIMMInsta",
        "Appuyez sur espace pour lire l'affiche",
        [
        "Infos, témoignages, nouveautés, toutes nos actus sont sur Instagram.",
        "Suivez nous sur Instagram : @uimm.lafabriquedelavenir"
        ],
        "UIMMInstaText",
        "interact",
        "Link",
        "Link_UIMMInsta"
    );

    let ForIndustrie = new PopUpVideo(
        "Interactions/FinalRoom/ForIndustrie",
        "Appuyez sur espace pour allumer l'écran",
        [
        'Entrez dans le monde de "Forindustrie, l\'Univers Extraordinaire", un métavers qui présente de manière ludique et innovante les métiers et les entreprises de l’industrie !'
        ],
        "ForIndustrieText",
        ForIndustrieLink,
        "interact",
        "Link",
        "Link_ForIndustrie"
    );

    let Industriz = new PopUpVideo(
        "Interactions/FinalRoom/Industriz",
        "Appuyez sur espace pour lire la pancarte",
        [
        'Visitez sans tarder "Industriz", une plateforme 3D sur laquelle vous pourrez en apprendre plus sur le monde de l\'industrie, rencontrer des professionnels, participer à des événements ou encore tester vos connaissances !'
        ],
        "IndustrizText",
        IndustrizLink,
        "interact",
        "Link",
        "Link_Industriz"
    );

    let WorldSkillsStatues = new PopUpVideo(
        "Interactions/FinalRoom/WorldSkillsStatues",
        "Appuyez sur espace pour lire la pancarte",
        [
        'Connaissez-vous les WorldSkills, la grande compétition des métiers ? Venez découvrir ses compétiteurs, ses défis et ses rebondissements en regardant la websérie "WorldSkills, La Série" ! Accrochez-vous, sensations fortes garanties ! Mais qui se hissera sur les marches du podium ?!'
        ],
        "WorldSkillsStatuesText",
        WorldSkillsStatuesLink,
        "interact",
        "Link",
        "Link_WorldSkillsStatues"
    );

    let UIMMRecrute = new PopUpVideo(
        "Interactions/FinalRoom/UIMMRecrute",
        "Appuyez sur espace pour lire la pancarte",
        [
        'Vous êtes à la recherche d\'un stage, d\'une alternance ou d\'un emploi ? De nombreuses opportunités vous attendent sur le site "L\'Industrie Recrute" !',
        ],
        "UIMMRecruteText",
        UIMMRecruteLink,
        "interact",
        "Link",
        "Link_UIMMRecrute"
    );

    let TeleporteurFinalRoom = new InteractAction(
        "Interactions/FinalRoom/TeleporteurFinalRoom",
        "Appuyez sur espace pour vous téléporter ! Merci encore pour votre aide, vous avez sauvé le Monde de Yumi. Si vous prenez ce transporteur, vous irez directement dans le hub des métiers. Ce sera l'occasion pour vous de décrouvrir des femmes et des hommes passionants qui travailent dans l'industrie.",
        ["Vous avez été téléporté."],
        ["Vous avez été téléporté."],
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
    WA.onInit().then(() => {
        if (WA.player.state["GameFinished"] == true)
        {
            WA.room.hideLayer('Step4/Last/ButtonNotPressed');
            WA.room.hideLayer('Step4/Last/ButtonNotPressedAnimation');
        }
    });

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
            "Vous avez retrouvé ma clé.",
            "Vous avez ma gratitude éternelle !",
            "Je vous laisse ouvrir mon coffre pour récupérer ce que je craignais tant de perdre",
            "En guise de gratitude, voici une mystérieuse séquence, je ne suis pas sûr de sa signification, mais j'ai le sentiment que c'est très important pour vous.",
            "Concervez-la ou mémorisez-la, cela pourra vous être utile.",
        ],
        [
            "Ah, vous voilà enfin !",
            "Je suis dans une situation désespérée...",
            "Un habitant, avec qui j'ai eu une dispute récente, a volé la clé de mon coffre par vengeance.",
            "Le contenu de ce coffre est essentiel, il ne doit pas tomber entre de mauvaises mains.",
            "Je vous en prie, pouvez-vous m'aider à retrouver la clé et me la ramener ?",
            "Je ne peux pas quitter le coffre, mais je suis certain que les habitants du Monde de Yumi pourront vous aider à retrouver le voleur."
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
        'Gardez-la précieusement, elle vous servira pour les prochaines quêtes, vous la retrouverez en cliquant sur "Séquence secrète" en bas de l\'écran !'
        ],
        [
            "Vous avez besoin d'une clé pour ouvrir ce coffre !"
        ],
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
            "Ok, c'est moi qui ai volé la clé d'Anton.",
            "La voici !",
            "Vous pouvez lui rapporter sa précieuse clé.",
            "*Vous avez récupéré la clé*"
        ],
        [
            "Cette chaise est vraiment confortable !",
            "Vous cherchez quelque chose ?"
        ],
        "ArnaudText",
        () => {
        if (WA.player.state["arnaudRevealed"] != true) {
            
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
        console.log('sequenceObtained');
        if (WA.player.state['sequenceObtained'] != null && WA.player.state['sequenceObtained'] == true)
        {
        WA.ui.actionBar.addButton({
            id: 'sequence-btn',
            label: 'Séquence secrète',
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
            label: 'Séquence secrète',
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
}

export {
    phase_3,
};