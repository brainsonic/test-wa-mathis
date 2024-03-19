import"https://unpkg.com/@workadventure/scripting-api-extra@^1";import{M as n,D as a,P as e,a as z,b as V,c as s,I as M,d as u,t as O,e as P,o as i,g as p,f as t,h as G}from"./class-dc915d75.js";function U(){const o="https://64ix.github.io/WA-Edited-Tutorial/pong.html",c="https://brainsonic.github.io/UIMM-WA-Extras/shooting-hoops.html",l="https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html",d="https://chat.csml.dev/s/qqr2rsopfpb7do1mhvqhu5wtmezc0qzg",m="https://chat.csml.dev/s/cveg2t5ddnfrdlelb9vmzvpqvpzdlhew",v="https://www.youtube.com/embed/9QDd6dH0-Xc?si=nVcJ4ryPrmNZ8c7u",h="https://www.youtube.com/embed/pDMzhgu_Qbo?si=VKqmGCg01AkfOIQJ",A="https://www.youtube.com/embed/eE3kWcMZsuE",b="https://www.youtube.com/embed/videoseries?si=wKcics6QWpDWdVob&amp;list=PLEe-8ZKtOy6Oxx1qU_qRhdcBmy-lXBtqQ",y="https://www.youtube.com/embed/bIG_XU7XRbw?si=ADidl-gwJ42Jh5kB",w=["Ahoy !","Me revoilà !","Ne pouvant pas être partout à la fois, Yumi a eu la bonne idée de se cloner, vous allez rencontrer beaucoup de Yumi différentes dans mon monde.","Je suis Yumi Capitaine, ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?","Allez, on met les voiles !","La France possède le deuxième domaine maritime mondial, juste derrière les États-Unis.","Alors forcément, la mer compte beaucoup dans l’économie !​","Dans l’industrie navale, on fabrique des porte-avions, des sous-marins nucléaires, des frégates, des bateaux de pêche, mais aussi des hydroliennes et des éoliennes flottantes.","En France, on est très fort pour les constructions complexes, comme les paquebots, les navires passagers et les navires militaires.","Donc on a besoin de compétences techniques pointues pour concevoir, produire et entretenir des navires de plus en plus performants et écologiques.","Cela concerne une grande diversité de métiers (plus de 300 !) qui sont en pleine évolution en raison des mutations technologiques et de l’émergence de nouveaux marchés.","Bref l’horizon est prometteur avec de grosses perspectives de développement dans les énergies renouvelables, les ressources maritimes et les biocarburants.​","Les océans sont un des enjeux stratégiques de notre siècle, matelot !​","Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?","Alors n'hésite pas à aller parler aux habitants de ce monde, bon vent !​"],T=["Hello !","Saviez-vous que l’industrie est le secteur qui innove le plus en France, elle représente 72% de dépenses de R&D françaises.","Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovations qui améliorent la production et le quotidien de celles et ceux qui y travaillent.","Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail.","Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.","Le MoonBike en est un bel exemple !","C’est le premier snowbike 100% électrique du marché : un mode de déplacement beaucoup plus écologique.​","Vous pouvez aller le découvrir tout schuss avec Anthony."],g=["Bienvenue à vous, je suis la scientifique de la bande.","Ce que j’adore, c’est trouver des solutions pour améliorer la vie de chacun.","J’ai mis au point les transporteurs que vous verrez un peu partout sur l’île.","Pour les essayer, il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.","C'est très pratique, vous verrez."];new n("Interactions/pnj1","Appuyez sur espace pour discuter avec Yumi !",d,"right","interact","PNJ","Yumi_accueil"),new a("Interactions/pnj2","Appuyez sur espace pour discuter avec le Capitaine !",w,"pnj2text","interact","PNJ","PNJ_Capitaine"),new a("Interactions/pnj3","Appuyez sur espace pour discuter avec la Skieuse !",T,"pnj3text","interact","PNJ","PNJ_Skieuse"),new a("Interactions/pnj5","Appuyez sur espace pour discuter avec la Scientifique !",g,"pnj5text","interact","PNJ","PNJ_Scientifique"),new n("Interactions/pnj6","Appuyez sur espace pour discuter avec l'Ingénieure !",m,"right","interact","PNJ","PNJ_Ingénieure"),new e("Interactions/MoonbikePNJ","Appuyez sur espace pour parler à Anthony !",["Dans le Monde de Yumi, il y a des vidéos, des podcats, des interviews qui vous aident à mieux comprendre l'industrie. Mais pas que. Dans ces contenus se cachent parfois des indices. En fait, moi, c'est Anthony. Je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet."],"Moonbike",A,"interact","PNJ","PNJ_Anthony"),new e("Interactions/Jeune1","Appuyez sur espace pour parler à Antonin !",["Salut, moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé, c'est ici :"],"Jeune1",v,"interact","PNJ","PNJ_Antonin"),new e("Interactions/Jeune2","Appuyez sur espace pour parler à Killian !",["Salut, moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé, c'est ici :"],"Jeune2",h,"interact","PNJ","PNJ_Killian"),new e("Interactions/Magaly","Appuyer sur espace pour parler à Magaly",["Bonjour, moi c’est Magaly. Grâce à l’industrie j’ai réussi à combiner ma passion et mon métier.","Vous voulez savoir comment ? Allez, j'enfile mon casque et je vous montre !","Et si vous cherchez la clé d'Anton, je crois que Fanny a des informations pour vous. Une brune, chemise noire, qui travaille pour l'industrie, facile non ?"],"MagalyText",y,"interact","PNJ","PNJ_Magaly"),new e("Interactions/Statue","Appuyez sur espace pour lire la pancarte",["Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine"],"Statue","https://www.youtube.com/embed/APBCjKv6nvA","interact","Video","Video_Statue"),new z("Zones/Vidéo","Appuyez sur espace pour regarder la vidéo !",["Connaissez-vous les WorldSkills, la grande compétition des métiers ?",`Et bien c'est le moment de les découvrir en visionnant la saison 1 de "WorldSkills, La Série", réalisée avec les apprentis de l'industrie !`,"Accrochez-vous, sensations fortes garanties."],["Connaissez-vous les WorldSkills, la grande compétition des métiers ?","Et bien, c'est le moment de les découvrir en visionnant la saison 1 de 'WorldSkills La Série', réalisée avec les apprentis de l'industrie !","Accrochez-vous, sensations fortes garanties."],"VidéoText",b,()=>!0,"interact","Video","Video_Salle_Conf"),new a("Interactions/Panneau Pont","Appuyez sur espace pour intéragir avec le panneau !",["Au Nord, la gare. Après le pont, suivez le chemin pour le lab de Yumi."],"Panneau Pont","interact","Panel","Panneau_Pont"),new a("Interactions/Panneau Gare","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez à la Gare du Monde de Yumi"],"Panneau Gare","interact","Panel","Panneau_Gare"),new a("Interactions/Panneau Chemin","Appuyez sur espace pour intéragir avec le panneau !",["Continuez tout droit pour le lab de Yumi. Sinon vous trouverez le port au Sud."],"Panneau Chemin","interact","Panel","Panneau_Chemin"),new a("Interactions/Panneau Quai","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez au Port du Monde de Yumi"],"Panneau Quai","interact","Panel","Panneau_Quai"),new a("Interactions/Panneau Terrasse","Appuyez sur espace pour intéragir avec le panneau !",["Partez à la rencontre des habitants du Monde de Yumi, les femmes et les hommes qui font l'Industrie. Ils vous aideront à sauver Rayonance !"],"Panneau Terrasse","interact","Panel","Panneau_Terrasse"),new a("Interactions/Panneau Parc Centre","Appuyez sur espace pour intéragir avec le panneau !",["À gauche le hub des métiers - En haut à droite le lab de Yumi - En haut à gauche la cafet' des apprentis - En bas le salon des vocations"],"PanneauParcCentre","interact","Panel","Panneau_ParcCentre"),new a("Interactions/Panneau Parc Haut","Appuyez sur espace pour intéragir avec le panneau !",["Le lab de Yumi"],"PanneauParcHaut","interact","Panel","Panneau_ParcHaut"),new n("Interactions/Pong","Appuyez sur espace pour jouer au Pong !",o,"center","interact","Game","Game_Pong"),new n("Interactions/Basket","Appuyez sur espace pour jouer au Basket !",c,"center","interact","Game","Game_Basket"),new z("Interactions/Piano","Appuyez sur espace pour jouer du piano !",["Appuyez sur les touches du clavier pour jouer du piano"],["Appuyez sur les touches du clavier pour jouer du piano"],"pianoTxt",l,()=>!0,"interact","Game","Game_Piano")}function Z(){const o="https://brainsonic.github.io/WA-Misc-EasterEggs/pool/index.html",c="https://brainsonic.github.io/WA-Misc-EasterEggs/scribble/index.html",l="https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS",d="https://www.youtube.com/embed/cM2U-uKXzts?si=HSPzO1A938ei964m",m="https://www.youtube.com/embed/DU7kScvKs6w?si=FIRpu9XituPJ3gMf",v="https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8",h="https://www.youtube.com/embed/Oxo69n0aoTo?si=jJ7e6AM-wAx4Gw6K",A="https://chat.csml.dev/s/y8l6b6nctclj5edykh5uig5furqheumt",b="https://www.youtube.com/embed/Oxo69n0aoTo?si=jJ7e6AM-wAx4Gw6K",y="https://www.youtube.com/embed/DE_sTYDs4rg?si=EvU29NiQVEYlUMBs",w="https://www.youtube.com/embed/unodEN9Xwls?si=xgK0E-M33XjEG1kz",T="https://www.youtube.com/embed/7mUgmZgLrxM?si=MIFAXrMjrElzpuI9",g="https://www.youtube.com/embed/hCydgXRsT_s?si=n075VkCZefobeWDY",f="https://www.youtube.com/embed/dFBHOiedwkQ?si=3CJQ8h6MYL10nkSg",S="https://www.youtube.com/embed/oJQcLWtGmDY?si=wcUwCbNc-Yw7bSS-",I="https://www.youtube.com/embed/QFpgqyR30Lw?si=YbXrJHJ5YnFtyqm6",k="https://www.youtube.com/embed/jIVCWY2mxjs?si=3MTDTHHaeCGGYpeN",L="https://www.youtube.com/embed/YzXnbdKdbwY?si=5Jt9ZcvzwENDE7nA",R="https://chat.csml.dev/s/hbw8pdiu5ok2a7iyycx0vxix0ujwnrbm",q="https://www.youtube.com/embed/RV-WS11CLTk?si=RUVpvBUxVXbagXU4",r="https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s",x="https://chat.csml.dev/s/dwszjr5yty6xglcsycmtcts4p0xmvjid",W="https://www.youtube.com/embed/mgX4eHVDlTc?si=DIfTDwIU92KX9KWg",J="https://www.youtube.com/embed/vqbbGDkOG30?si=0iaVf_eClMnZ0qRH",_="https://www.youtube.com/embed/BChzaJv_JzQ?si=K1G9ZNtbFTiTO3AA",D="https://chat.csml.dev/s/klxfbaancmfkzzwaxqge99dx3ayvksex",j="https://chat.csml.dev/s/mdpagk2kgwff7cjjjlqxfbkmtaegcc8z",F="https://chat.csml.dev/s/eimrkwagnizsgkt2exfyzpqikxvsiqok",N="https://chat.csml.dev/s/urfgrirj0fzedjnkgdtc8pndlybbirja",C="https://chat.csml.dev/s/nzulmz6enql33he6f7ghqv6vmw9iyqai",Y="https://chat.csml.dev/s/cjue6rorfvlktkzitr71bdjrxchv8rg9",B="https://chat.csml.dev/s/oegmltlziitgfljossd3gdvstkoggde7",E=" https://chat.csml.dev/s/5swwzc2ho5ldzer5orwie8uksvsymrjj",H="https://chat.csml.dev/s/iofny0f6wdowp8avygfofsqg5lm5hmx8";new e("Interactions/MetierRoom/Nicolas","Appuyez sur espace pour parler à Nicolas !",["Bonjour, moi c’est Nicolas et je suis soudeur dans l’industrie aéronautique. Venez découvrir mon métier !"],"Nicolas",l,"interact","PNJ","PNJ_Nicolas"),new e("Interactions/MetierRoom/Cari","Appuyez sur espace pour parler à Jordan !",["Bonjour, moi c’est Jordan et je suis concepteur de systèmes embarqués. Vous connaissez ? Non ? Alors venez découvrir mon métier !"],"Cari",d,"interact","PNJ","PNJ_Cari"),new z("Interactions/MetierRoom/Fanny","Appuyez sur espace pour parler à Fanny !",["Moi, c’est Fanny, et grâce à l'apprentissage, j'ai pu effectuer un semestre universitaire à l'étranger.","Avant de vous en dire plus, si vous cherchez quelqu'un avec une clé, je l'ai vu partir vers le jardin.","Mais ne partez pas tout de suite et découvrez mon parcours !"],["Moi, c’est Fanny, et grâce à l'apprentissage, j'ai pu effectuer un semestre universitaire à l'étranger."],"IngProd",m,()=>WA.player.state.startSideQuestStep4!=null&&WA.player.state.startSideQuestStep4==!0?(WA.player.state.TalkHint_1=!0,!0):!1,"interact","PNJ","PNJ_Fanny"),new e("Interactions/MetierRoom/ApprentiRobot","Appuyez sur espace pour regarder la vidéo !",["Thomas est apprenti dans la robotique. Découvrez son métier en vidéo ! "],"ApprentiRobot",v,"interact","Video","Video_Thomas"),new e("Interactions/MetierRoom/ApprentiChaudron","Appuyez sur espace pour regarder la vidéo !",["Découvrez en vidéo le métier de Pauline, apprentie en chaudronnerie navale."],"ApprentiChaudronniere",h,"interact","Video","Video_Pauline"),new n("Interactions/MetierRoom/chatBot_1","Appuyez sur espace pour discuter avec Yumi !",A,"right","interact","PNJ","PNJ_YumiMetier"),new e("Interactions/MetierRoom/Melody","Appuyez sur espace pour parler à Mélody",["Salut, moi c'est Mélody ! Au quotidien, je suis très rigoureuse, minutieuse même.","C'est important, car je suis est en charge de la conformité de pièces complexes ! Et dans le nucléaire, on ne rigole pas avec la sécurité.","Laissez-moi vous en dire plus !"],"MelodyText",b,"interact","PNJ","PNJ_Melody"),new n("Interactions/MetierRoom/Scribble","Appuyez sur espace pour faire des dessins !",c,"center","interact","Game","Game_Scribble"),new n("Interactions/ShowRoom/Pool","Appuyer sur espace pour faire du billard !",o,"center","interact","Game","Game_Pool"),new e("Interactions/ShowRoom/Anais","Appuyez sur espace pour parler à Anaïs !",["Salut, moi c’est Anaïs et je suis technicienne méthodes. Si vous ne savez pas en quoi ça consiste : venez, je vous montre !"],"Anais",y,"interact","PNJ","PNJ_Anais"),new e("Interactions/ShowRoom/FrankVideo","Appuyez sur espace pour regarder la vidéo !",["Franck est responsable d'un atelier de montage chez SOFINOR.","Découvrez son témoignage en vidéo !"],"DessinateurIndu",g,"interact","Video","Video_Frank"),new e("Interactions/ShowRoom/RespR&D","Appuyez sur espace pour regarder la vidéo !",["Isabelle est responsable R&D. Découvrez son métier en vidéo !"],"RespRD",f,"interact","Video","Video_Isabelle"),new e("Interactions/ShowRoom/AjustMonteur","Appuyez sur espace pour regarder la vidéo !",["C'est quoi le métier d'ajusteur-monteur ? Pour le découvrir c'est ici."],"AjustMonteur",S,"interact","Video","Video_Nicolas"),new e("Interactions/ShowRoom/GalvanoplasteVideo","Appuyez sur espace pour regarder la vidéo !",["Galvanoplaste, mais qu'est-ce que c'est ?","La réponse en vidéo !"],"GalvanoplasteVideoText",I,"interact","Video","Video_Galvanoplaste"),new e("Interactions/ShowRoom/RafaelVideo","Appuyez sur espace pour regarder la vidéo !",["Raphaël a géré le remplacement de la télécabine de Font-Romeu.","Un projet gigantesque et ambitieux. Regardez !"],"ChargAff",k,"interact","Video","Video_Rafael"),new e("Interactions/ShowRoom/RespBureau","Appuyez sur espace pour regarder la vidéo !",["Comment devenir responsable bureau d'études et méthodes ? Réponse en vidéo !"],"RespBureau",L,"interact","Video","Video_RespBureau"),new n("Interactions/ShowRoom/ITWBot","Appuyez sur espace pour discuter avec Yumi Journaliste !",R,"right","interact","PNJ","PNJ_YumiJournaliste"),new e("Interactions/ShowRoom/MaximeVideo","Appuyez sur espace pour regarder la vidéo !",["Quelqu'un peut me dire ce qu'est la mécatronique ?","Écoutez bien Maxime, responsable de la R&D chez Otech, il vous dit tout."],"MaximeVideoText",q,"interact","Video","Video_Maxime"),new e("Interactions/ShowRoom/LiebherrAerospace","Appuyez sur espace pour écouter le podcast !",["Quel est le point commun entre l'aéronautique et l'automobile ?","Capucine, ingénieure système chez Liebherr-Aerospace Toulouse, vous donne la réponse."],"LiebherrAerospaceText",w,"interact","Video","Video_LiebherrAerospace"),new e("Interactions/ShowRoom/LucieVideo","Appuyez sur espace pour écouter le podcast !",["La robotique mobile, qu'est-ce que c'est ?","Lucie, ingénieure d'application chez Meanwhile, vous explique tout."],"LucieVideoText",T,"interact","Video","Video_LucieVideo"),new z("Interactions/ParkInside/Maeva","Appuyez sur espace pour parler à Maëva !",["Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !","Avant ça, si vous cherchez une personne avec une clé...","Je l'ai vu partir vers la cafétéria, il avait du bleu sur lui"],["Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !"],"MaevaText",r,()=>WA.player.state.startSideQuestStep4!=null&&WA.player.state.startSideQuestStep4==!0?(WA.player.state.TalkHint_2=!0,!0):!1,"interact","PNJ","PNJ_Maeva"),new n("Interactions/ParkInside/Hihacks","Appuyez sur espace pour discuter avec Romane !",x,"right","interact","PNJ","PNJ_Romane"),new e("Interactions/ParkInside/Manon","Appuyez sur espace pour parler à Manon !",["J'ai 22 ans. Je créé des objets de A à Z. Je dessine beaucoup. J'adore la mécanique.","Je m'appelle Manon et je suis spécialisée en Conception 3D et Fabrication Additive. Venez découvrir ma passion !"],"ManonText",W,"interact","PNJ","PNJ_Manon"),new e("Interactions/LaboRoom/Paulygones","Appuyez sur espace pour parler à Paulygones !",["Je m'appelle Paulygones.","Bon en vrai, c'est Paul Guillotel.","Mais ce qui est sûr, c'est que j'aime fabriquer des trucs.","Ça tombe bien car ici, tout le monde aime créer de nouvelles choses !","Dans cette vidéo, vous apprendrez à fabriquer un aspirateur à vêtements géant."],"DrNozman",J,"interact","PNJ","PNJ_Paulygones"),new e("Interactions/LaboRoom/Hihacks_labo","Appuyez sur espace pour parler à Henri Hihacks !",["Salut ! Moi c’est Henri Hihacks et grâce à Thiaifène, apprenti en BTS Maintenance des Systèmes, j’ai réalisé un projet complètement fou... Vous êtes curieux de le découvrir ? Alors regardez ma vidéo !"],"Hihacks_labo",_,"interact","PNJ","PNJ_HenriHihacks"),new n("Interactions/LaboRoom/YumiLab","Appuyez sur espace pour discuter avec Yumi Scientifique !",D,"right","interact","PNJ","PNJ_YumiScientifique"),new e("Interactions/DinningRoom/Adrien","Appuyez sur espace pour discuter avec Adrien !",["Non, le chaudronnier ne fait pas de magie.","Ou peut-être que si finalement.","La réponse avec Adrien."],"Adrientext",F,"interact","PNJ","PNJ_AdrienDinningRoom","right"),new e("Interactions/DinningRoom/Aurélie","Appuyez sur espace pour discuter avec Aurélie !",["Connaissez-vous l'automatisme ?","Aurélie vous explique tout.","Suivez le guide."],"AurélieText",C,"interact","PNJ","PNJ_AurélieDinningRoom","right"),new e("Interactions/DinningRoom/Anne","Appuyez sur espace pour discuter avec Anne !",["Anne est technicienne QHSE.","Quésaco ?","Elle vous dit tout."],"AnneText",N,"interact","PNJ","PNJ_AnneDinningRoom","right"),new e("Interactions/DinningRoom/Séverine","Appuyez sur espace pour discuter avec Séverine !",["Je dessine des compresseurs, des condenseurs, des détendeurs, des évaporateurs…","Je suis dessinatrice industrielle.","Venez découvrir mon métier."],"SéverineText",H,"interact","PNJ","PNJ_SéverineDinningRoom","right"),new e("Interactions/DinningRoom/Ludovic","Appuyez sur espace pour discuter avec Ludovic !",["Savez-vous ce qu'est l'usinage ?","Pour en savoir plus, discutez avec Yumi et Ludovic !"],"LudovicText",E,"interact","PNJ","PNJ_LudovicDinningRoom","right"),new e("Interactions/DinningRoom/Laure","Appuyez sur espace pour discuter avec Laure !",Y,"right","interact","PNJ","PNJ_LaureDinningRoom"),new e("Interactions/DinningRoom/Aurélien","Appuyez sur espace pour discuter avec Aurélien !",["Moi, c'est Aurélien.","Je travaille le titane, l'inox ou l'inconel.","J'aime jouer des coudes.","Je suis …"],"AurélienText",j,"interact","PNJ","PNJ_AurélienDinningRoom","right"),new e("Interactions/DinningRoom/Ludivine","Appuyez sur espace pour discuter avec Ludivine !",["Réparer des moteurs d'avions, un rêve de gosse ?!","Pour Ludivine, c'est son quotidien."],"LudivineText",B,"interact","PNJ","PNJ_LudivineDinningRoom","right")}function Q(){const o="https://chat.csml.dev/s/kdcybqjeewfai4itensots5rud2mg4cj",c="https://www.youtube.com/embed/R3GFX6387Hw",l="https://www.youtube.com/embed/jDIfPsnb5LI",d="https://www.youtube.com/embed/aH12YYBDZc8?si=bU2SA6-xTgUG8L0q",m="https://www.youtube.com/embed/yULRqI_KGb4",v="https://chat.csml.dev/s/tgepml6az4lsuucyz4tr8ujisrxmxmb4",h="https://0eb89b36.sibforms.com/serve/MUIFAMTWQq_m3rCQrgfnBO8-HUshniX2rebB99OuvGmVKli0cw-cqIAuuXmPLAf59d5fr3da55Y6I8vGYtYzUJYlP7Y1Fyqerb7hzo1g46RIoDQctc_3J1eAnLxeaf9_TDTFVFtxgL-yPG4vYXJyDTYTY91roQ8Dc_iPWu5Mk4jex5m-RA-4UEf_3X7zhPuKy2UIZmyYxyp7AEPK",A="https://www.youtube.com/embed/videoseries?si=lxOwHdwG2RZNgqBo&amp;list=PLFysjt-P1QCMOaJCY_jCO1HF7IXOoo8hO",b="https://univers.forindustrie.fr/",y="https://ajir.industriz.fr/Application/",w="https://www.worldskills-laserie.fr/",T="https://www.lindustrie-recrute.fr";new V("Step2/YumiStep2Depart","Appuyez sur espace pour discuter avec Yumi !",o,"right",()=>(WA.player.state.TalkToYumiDepartTrappedRoom==null&&s("TalkToYumiDepartTrappedRoom"),!0),"interact","PNJ","PNJ_YumiDepartTrappedRoom"),new M("Items/TrappedRoom/CardAccess","Appuyez sur espace pour ramasser le badge d'accès",["Vous avez récuperé le badge d'accès"],["Vous devez d'abord parler à Yumi avant de le ramasser"],"cardAccessText","cardAccess",()=>WA.player.state.TalkToYumiDepartTrappedRoom!=null?(WA.room.hideLayer("Items/TrappedRoom/CardAccess"),!0):!1,"interract","Object","Object_cardAccess"),new u("Step2/YumiStep2Final","Appuyez sur espace pour discuter avec Yumi !",["Bonjour, dépêchez-vous les saboteurs sont à votre poursuite !","Pour sortir d'ici, vous devez fabriquer un transporteur.",`C'est le seul moyen pour échapper aux "Technophoby".`,"Dans le labo, il y a en tout 4 éléments à récupérer pour le fabriquer.","Mais attention, la mission se complique.","Car un des objets est bloqué dans une caisse.","Pour l'obtenir, il faudra d'abord trouver la clé de la caisse, puis l'ouvrir.","Ensuite, quand vous aurez les quatre objets en votre possession, cherchez une trappe secrète.","Elle donnera accès à un sous-sol. Dans cet atelier, vous serrez tranquille pour assembler le transporteur.","Allez-y maintenant, ils arrivent."],["Salut !","Avez-vous bien le badge d'accès ?","Sans lui, vous ne pouvez pas rentrer dans le lab de l'industrie.","Retournez dans le couloir piégé pour le récupérer."],"YumiStep2FinalText",()=>WA.player.state.cardAccess!=null&&WA.player.state.cardAccess==!0?(s("TalkToYumiFinalTrappedRoom"),console.log("CARTE ACCES :",WA.player.state.TalkToYumiFinalTrappedRoom),!0):!1,"interact","PNJ","PNJ_YumiStep2Final"),new u("InteractAction/TrappedRoom/FinalDoor","Appuyez sur espace pour insérer le badge d'accès",["La porte est ouverte"],["Vous devez avoir le badge d'accès et avoir parler à Yumi"],"doorTrappedRoomText",()=>WA.player.state.cardAccess!=null&&WA.player.state.cardAccess==!0&&WA.player.state.TalkToYumiFinalTrappedRoom!=null&&WA.player.state.TalkToYumiFinalTrappedRoom==!0?(WA.room.hideLayer("beforePlayer/TrappedRoom/DoorFinal"),WA.room.hideLayer("beforePlayer/TrappedRoom/CollideDoorFinal"),WA.room.showLayer("beforePlayer/TrappedRoom/DoorFinalOpen"),s("cardAccessStep3"),!0):!1,"interract","InteractAction","Object_doorTrappedRoom"),WA.room.onEnterLayer("Step2/exitZoneDoor").subscribe(()=>{WA.room.hideLayer("closed_lab_door")}),WA.room.onLeaveLayer("Step2/exitZoneDoor").subscribe(()=>{WA.room.showLayer("closed_lab_door")});let g=23;for(let r=1;r<g+1;r++)O("HideTile/TrappedRoom/Hole_"+r,"#Depart");WA.onInit().then(()=>{WA.player.state.cardAccess==!0&&WA.room.hideLayer("Items/TrappedRoom/CardAccess")}),new e("Interactions/LabIndustrieRoom/PaulygoneVideo","Appuyez sur espace pour regarder la vidéo",["Le youtubeur Paulygones cherche à comprendre comment Robin s'y prend pour concevoir des robots mobiles autonomes."],"PaulygoneVideoText",c,"interact","Video","Video_PaulygoneIndustrie"),new e("Interactions/LabIndustrieRoom/LucieIndustrieVideo","Appuyez sur espace pour regarder la vidéo",["Faut-il se former pour utiliser un robot mobile autonome ?","Et bien oui nous apprend Lucie, ingénieure d'application !","Découvrez son parcours en vidéo."],"LucieIndustrieVideoText",l,"interact","Video","Video_LucieIndustrie"),new e("Interactions/LabIndustrieRoom/JadeVideo","Appuyez sur espace pour regarder la vidéo",["Jade a seulement 18 ans.","Pourtant, elle travaille déjà dans une centrale nucléaire.","Découvrez son parcours en vidéo."],"JadeVideoText",d,"interact","Video","Video_JadeIndustrie"),new e("Interactions/LabIndustrieRoom/ArnaudVideo","Appuyez sur espace pour regarder la vidéo",["Tiens, on dirait... un extrait vidéo ?",'"Arnaud explique son métier au vidéaste Paulygones"',"Intéressant, regardons !"],"ArnaudVideoText",m,"interact","Video","Video_ArnaudIndustrie"),new P("Items/LabIndustry/CoatRackHint","Appuyez sur espace pour ramasser l'indice",["Vous avez récuperé l'indice"],"coatRackText","coatRackHint","interract","Object","Object_coatRackItem"),new P("Items/LabIndustry/CafetHint","Appuyez sur espace pour ramasser l'indice",["Vous avez récuperé l'indice"],"cafetText","cafetHint","interract","Object","Object_keyItem"),new P("Items/LabIndustry/Key","Appuyez sur espace pour prendre la clé",["Vous avez récupéré la clé permettant d'ouvrir la caisse."],"keyText","keyItem","interract","Object","Object_keyItem"),new P("Items/LabIndustry/BinHint","Appuyez sur espace pour ramasser l'indice",["Vous avez récuperé l'indice"],"binText","binHint","interract","Object","Object_binItem"),new M("Items/LabIndustry/ChestHint","Appuyez sur espace pour ouvrir la caisse",["Vous avez récuperé l'indice"],["Vous n'avez pas la clé du coffre"],"chestText","chestHint",()=>WA.player.state.keyItem!=null&&WA.player.state.keyItem==!0,"interract","Object","Object_chestItem"),new u("InteractAction/LabIndustry/TrapDoor","Appuyez sur espace pour ouvrir la trappe",["Vous entrez dans la trappe"],["Vous devez rassembler les 4 indices avant de pouvoir ouvrir la trappe"],"trapDoorText",()=>{if(WA.player.state.cafetHint!=null&&WA.player.state.cafetHint==!0&&WA.player.state.chestHint!=null&&WA.player.state.chestHint==!0&&WA.player.state.coatRackHint!=null&&WA.player.state.coatRackHint==!0&&WA.player.state.binHint!=null&&WA.player.state.binHint==!0){WA.player.state.saveVariable("cardAccessStep4",!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"});let r=window.location.href.split("/");return r[r.length-1]="map2.tmj",WA.nav.goToRoom(r.join("/")),!0}else return!1},"interract","InteractAction","Object_trapDoor"),i("Zones/ZoneStep3",["cardAccessStep3"],"EscapeGameText");const f="Zones/ZoneStep4",S="Step4/FirstTP/ZoneFirstTP",I="Step4/SecondTP/ZoneSecondTP",k="Step4/ThirdTP/ZoneThirdTP",L="Step4/FourthTP/ZoneFourthTP",R="Step4/FifthTP/ZoneFifthTP",q="Step4/Last/ZoneLast";new V("Step4/Yumi","Appuyez sur espace pour discuter avec Yumi !",v,"right",()=>{var r="TalkToYumiStep4";return WA.player.state[r]==null&&WA.player.state.saveVariable(r,!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"}),!0},"interact","PNJ","PNJ_YumiStep4"),new z("Step4/Last/Redbutton","Appuyez sur espace pour sauver Rayonance !",["Bravo !!!","Vous avez réussi.","Rayonance est en sécurité et notre monde est sauvé.","Vous êtes notre héros.","Pour vous remercier, n'hésitez pas à remplir ce formulaire pour participer à notre jeu concours et tenter de gagner une playstation 5 slim et plein d'autres cadeaux bien stylés.","L'aventure dans le Monde de Yumi ne s'arrête pas là.","Continuez à vous balader dans les différentes salles grâce au transporteur situé dans la prochaine pièce.","Les professionnels de l'industrie qui peuplent ce monde vous attendent pour vous parler de leurs métiers et de leurs projets passionnants !"],["Erreur dialogue"],"redButtonTxt",h,()=>(s("GameFinished"),WA.room.hideLayer("Step4/Last/ButtonNotPressed"),!0),"right","interact","Form","Formulaire_final"),new e("Interactions/FinalRoom/WorldUIMMYTB","Appuyez sur espace pour regarder les vidéos",["Sur la page Youtube de l'UIMM La Fabrique de l'Avenir, vous pourrez découvrir tous les métiers de l'industrie."],"WorldUIMMYTBText",A,"interact","Video","Video_WorldUIMMYTB"),new a("Interactions/FinalRoom/UIMMInsta","Appuyez sur espace pour lire l'affiche",["Infos, témoignages, nouveautés, toutes nos actus sont sur Instagram.","Suivez-nous ! https://www.instagram.com/uimm.lafabriquedelavenir/"],"UIMMInstaText","interact","Link","Link_UIMMInsta"),new e("Interactions/FinalRoom/ForIndustrie","Appuyez sur espace pour allumer l'écran",[`Entrez dans le monde de "Forindustrie, l'Univers Extraordinaire", un métavers qui présente de manière ludique et innovante les métiers et les entreprises de l’industrie !`],"ForIndustrieText",b,"interact","Link","Link_ForIndustrie"),new e("Interactions/FinalRoom/Industriz","Appuyez sur espace pour lire la pancarte",[`Visitez sans tarder "Industriz", une plateforme 3D sur laquelle vous pourrez en apprendre plus sur le monde de l'industrie, rencontrer des professionnels, participer à des événements ou encore tester vos connaissances !`],"IndustrizText",y,"interact","Link","Link_Industriz"),new e("Interactions/FinalRoom/WorldSkillsStatues","Appuyez sur espace pour lire la pancarte",['Connaissez-vous les WorldSkills, la grande compétition des métiers ? Venez découvrir ses compétiteurs, ses défis et ses rebondissements en regardant la websérie "WorldSkills, La Série" ! Accrochez-vous, sensations fortes garanties ! Mais qui se hissera sur les marches du podium ?!'],"WorldSkillsStatuesText",w,"interact","Link","Link_WorldSkillsStatues"),new e("Interactions/FinalRoom/UIMMRecrute","Appuyez sur espace pour lire la pancarte",[`Vous êtes à la recherche d'un stage, d'une alternance ou d'un emploi ? De nombreuses opportunités vous attendent sur le site "L'Industrie Recrute" !`,"N'hésitez plus et rejoignez-nous."],"UIMMRecruteText",T,"interact","Link","Link_UIMMRecrute"),new u("Interactions/FinalRoom/TeleporteurFinalRoom","Merci encore pour ton aide, tu as sauvé le Monde de Yumi. Si tu prends ce transporteur, tu retourneras dans le hub des métiers. Ce sera l'occasion pour toi de découvrir des femmes et des hommes passionnants qui travaillent dans l'industrie.",["Merci encore pour ton aide, tu as sauvé le Monde de Yumi."],["Merci encore pour ton aide, tu as sauvé le Monde de Yumi."],"TeleporteurFinalRoomText",()=>(WA.nav.goToRoom("#tpShowRoom"),!0),"interact","Teleport","Teleport_FinalRoom"),WA.player.state.GameFinished==!0&&WA.room.hideLayer("Step4/Last/ButtonNotPressed"),i(f,["cardAccessStep4"],"EscapeGameText"),p("Step4/TpDepart",["cardAccessZoneFirstTP"]),t("Step4/TpDepart","#TpDepart_1",()=>WA.player.state.cardAccessStep4!=null&&WA.player.state.TalkToYumiStep4!=null,"tpDepartStep4","Vous devez parler à Yumi"),i(S,["cardAccessZoneFirstTP"],"EscapeGameText"),p("Step4/FirstTP/Tp1-3",["cardAccessZoneSecondTP"]),t("Step4/FirstTP/Tp1-1","#Reset",()=>!0,"tpDepart1Step4"),t("Step4/FirstTP/Tp1-2","#Reset",()=>!0,"tpDepart1Step4"),t("Step4/FirstTP/Tp1-3","#TpDepart_2",()=>WA.player.state.cardAccessZoneFirstTP!=null,"tpDepart1Step4"),i(I,["cardAccessZoneSecondTP"],"EscapeGameText"),p("Step4/SecondTP/Tp2-2",["cardAccessZoneThirdTP"]),t("Step4/SecondTP/Tp2-1","#Reset",()=>!0,"tpDepart2Step4"),t("Step4/SecondTP/Tp2-2","#TpDepart_3",()=>WA.player.state.cardAccessZoneSecondTP!=null,"tpDepart2Step4"),t("Step4/SecondTP/Tp2-3","#Reset",()=>!0,"tpDepart2Step4"),i(k,["cardAccessZoneThirdTP"],"EscapeGameText"),p("Step4/ThirdTP/Tp3-1",["cardAccessZoneFourthTP"]),t("Step4/ThirdTP/Tp3-1","#TpDepart_4",()=>WA.player.state.cardAccessZoneThirdTP!=null,"tpDepart3Step4"),t("Step4/ThirdTP/Tp3-2","#Reset",()=>!0,"tpDepart3Step4"),t("Step4/ThirdTP/Tp3-3","#Reset",()=>!0,"tpDepart3Step4"),i(L,["cardAccessZoneFourthTP"],"EscapeGameText"),p("Step4/FourthTP/Tp4-2",["cardAccessZoneFifthTP"]),t("Step4/FourthTP/Tp4-1","#Reset",()=>!0,"tpDepart2Step4"),t("Step4/FourthTP/Tp4-2","#TpDepart_5",()=>WA.player.state.cardAccessZoneFourthTP!=null,"tpDepart2Step4"),t("Step4/FourthTP/Tp4-3","#Reset",()=>!0,"tpDepart2Step4"),i(R,["cardAccessZoneFifthTP"],"EscapeGameText"),p("Step4/FifthTP/Tp5-3",["cardAccessZoneFinalStep4"]),t("Step4/FifthTP/Tp5-1","#Reset",()=>!0,"tpDepart2Step5"),t("Step4/FifthTP/Tp5-2","#Reset",()=>!0,"tpDepart2Step5"),t("Step4/FifthTP/Tp5-3","#TpArrive",()=>WA.player.state.cardAccessZoneFifthTP!=null,"tpDepart2Step5"),t("Step4/FifthTP/Tp5-4","#Reset",()=>!0,"tpDepart2Step5"),i(q,["cardAccessZoneFinalStep4"],"EscapeGameText"),t("Step4/Last/TpBack","#start",()=>!0,"tpBackFinal"),new u("Step4bis/Anton","Appuyez sur espace pour parler à Anton !",["Vous avez retrouvé ma clé.","Vous avez ma gratitude éternelle !","Voilà ce que je craignais tant de perdre. (une mystérieuse séquence apparait en capture sous le texte)","Je ne suis pas sûr de sa signification, mais j'ai le sentiment que c'est très important pour vous.","Concervez-la ou mémorisez-la, cela pourra vous être utile."],["Ah, vous voilà enfin !","Je suis dans une situation désespérée...","Un habitant, avec qui j'ai eu une dispute récente, a volé la clé de mon coffre par vengeance.","Le contenu de ce coffre est essentiel, il ne doit pas tomber entre de mauvaises mains.","Je vous en prie, pouvez-vous m'aider à retrouver la clé et me la ramener ?","Je ne peux pas quitter le coffre, mais je suis certain que les habitants du Monde de Yumi pourront vous aider à retrouver le voleur."],"AntonText",()=>WA.player.state.startSideQuestStep4!=null&&WA.player.state.startSideQuestStep4==!0&&WA.player.state.chestDidierKey!=null&&WA.player.state.chestDidierKey==!0?(WA.player.state.allowOpenChest=!0,!0):(WA.player.state.startSideQuestStep4=!0,!1),"interact","PNJ","Didier"),new u("Step4bis/ChestDidier","Appuyez sur espace pour ouvrir le coffre !",["Vous avez récupéré une mystérieuse séquence !","Gardez-la précieusement, elle vous servira pour les prochaines quêtes"],["Vous avez besoin d'une clé pour ouvrir ce coffre !"],"ChestDidierText",()=>WA.player.state.allowOpenChest==!0?(s("sequenceObtained"),!0):!1,"interact","Object","Object_sequence"),new u("Step4bis/Arnaud","Appuyez sur espace pour parler à Arnaud !",["Cette chaise est vraiment confortable !","Vous cherchez quelque chose ?","À me regarder comme ça, vous me rendez nerveux.","Ok, c'est moi qui ai volé la clé d'Anton.","La voici !","Vous pouvez lui rapporter sa précieuse clé.","*Vous avez récupéré la clé*"],["Cette chaise est vraiment confortable !","Vous cherchez quelque chose ?"],"ArnaudText",()=>WA.player.state.arnaudRevealed!=!0&&WA.player.state.startSideQuestStep4!=null&&WA.player.state.startSideQuestStep4==!0&&WA.player.state.TalkHint_1!=null&&WA.player.state.TalkHint_1==!0&&WA.player.state.TalkHint_2!=null&&WA.player.state.TalkHint_2==!0&&WA.player.state.TalkHint_3!=null&&WA.player.state.TalkHint_3==!0?(s("arnaudRevealed"),s("chestDidierKey"),!0):!1,"interact","PNJ","Arnaud"),WA.onInit().then(()=>{WA.player.state.sequenceObtained!=null&&WA.player.state.sequenceObtained==!0&&WA.ui.actionBar.addButton({id:"sequence-btn",label:"Carte Secrète",callback:r=>{WA.player.state.sequenceButtonDisplayed=!0,WA.ui.modal.openModal({title:"Sequence",src:"https://brainsonic.github.io/UIMM-WA-Extras/sequence.html",allow:"fullscreen; clipboard-read;",allowApi:!0,position:"center"})}}),WA.player.state.onVariableChange("sequenceObtained").subscribe(()=>{WA.player.state.sequenceObtained!=null&&WA.player.state.sequenceObtained==!0&&WA.player.state.sequenceButtonDisplayed!=!0&&WA.ui.actionBar.addButton({id:"sequence-btn",label:"Carte Secrète",callback:r=>{s("sequenceButtonDisplayed"),WA.ui.modal.openModal({title:"Sequence",src:"https://brainsonic.github.io/UIMM-WA-Extras/sequence.html",allow:"fullscreen; clipboard-read;",allowApi:!0,position:"center"})}})})})}const K="https://64ix.github.io/WA-Edited-Tutorial/tutorial.html",X="https://brainsonic.github.io/UIMM-WA-Extras/popup.html";document.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(()=>{console.log("DEBUT :",WA.player.state.TutorialRead),WA.player.state.TutorialRead!=!0&&WA.ui.modal.openModal({title:"Tutorial",src:K,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"}),WA.controls.disablePlayerProximityMeeting(),s("TutorialRead"),console.log("APRES :",WA.player.state.TutorialRead)});let o=!1;WA.room.onLeaveLayer("Zones/OutGate").subscribe(()=>{o==!1&&(o=!0,WA.ui.modal.openModal({title:"Popup",src:X,allow:"fullscreen; clipboard-read;",allowApi:!0,position:"center"}))}),WA.ui.actionBar.addButton({id:"tutorial-btn",label:"Tutoriel",callback:c=>{G()}}),U(),Z(),Q()});console.log("VERSION 9");
