var m=Object.defineProperty;var h=(n,s,t)=>s in n?m(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var p=(n,s,t)=>(h(n,typeof s!="symbol"?s+"":s,t),t);import"https://unpkg.com/@workadventure/scripting-api-extra@^1";const l="https://64ix.github.io/WA-Edited-Tutorial/tutorial.html",v="https://64ix.github.io/WA-Edited-Tutorial/pong.html",b="https://64ix.github.io/WA-Edited-Tutorial/shooting-hoops/dist/index.html",w="https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html",A="https://brainsonic.github.io/WA-Misc-EasterEggs/scribble/index.html",g="https://brainsonic.github.io/WA-Misc-EasterEggs/pool/index.html",y="https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn",j="https://chat.csml.dev/s/39iezvakvlqapvdwnakm2gjw6f1czgdp",P="https://chat.csml.dev/s/modkshn4koeqaqdjiaj5pa7hfxah6s57",z="https://www.youtube.com/embed/9QDd6dH0-Xc",k="https://www.youtube.com/embed/pDMzhgu_Qbo",f="https://www.youtube.com/embed/mgX4eHVDlTc",x="https://www.youtube.com/embed/eE3kWcMZsuE",L="https://www.youtube.com/embed/7Xe-xnqLoBI?rel=0",S="https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS",q="https://www.youtube.com/embed/cM2U-uKXzts?si=HSPzO1A938ei964m",M="https://www.youtube.com/embed/8HlmZkJX_UQ?si=l0-8bOC_kMy2YYvv",V="https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8",R="https://www.youtube.com/embed/5zDXk6J0hHo?si=DQ3jPiXhQLJgWTOH",D="https://chat.csml.dev/s/klex5ttuh9bmpen8gyo4tssus4liqxgb",W="https://www.youtube.com/embed/eBuPRPSBXlc?si=r_3zCqDW0qUB3d8K",B="https://www.youtube.com/embed/IEtX1_vx98g?si=wt_aAReOPxkrhaAO",C="https://www.youtube.com/embed/dFBHOiedwkQ?si=3CJQ8h6MYL10nkSg",_="https://www.youtube.com/embed/oJQcLWtGmDY?si=wcUwCbNc-Yw7bSS-",I="https://www.youtube.com/embed/ixlo9WwbvuE?si=hhiUylKLOuW5i-Dj",J="https://www.youtube.com/embed/vVhIHuG0dgI?si=APRxPS1Q6Ws3Vs40",E="https://www.youtube.com/embed/YzXnbdKdbwY?si=5Jt9ZcvzwENDE7nA",H="https://chat.csml.dev/s/bpzoedzc279smw2i649rwhtst9rguvva",Y="https://www.youtube.com/embed/videoseries?si=wKcics6QWpDWdVob&amp;list=PLEe-8ZKtOy6Oxx1qU_qRhdcBmy-lXBtqQ",T="https://www.youtube.com/embed/3An5XwFbKgM?si=Sm7VNc1OKJpUxyQz",N="https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s",Q="https://chat.csml.dev/s/imk4tlho3spmxlis9e1ejs3wlita2aco",U="https://chat.csml.dev/s/2yh4lfxd7nba5zevmybgseb41bcn6h9b",O="https://www.youtube.com/embed/zZL1SjBGkNc?si=_z_dfadNSmzm-qOr",G="https://www.youtube.com/embed/BChzaJv_JzQ?si=K1G9ZNtbFTiTO3AA",X="https://chat.csml.dev/s/fb5kvplgaqoxlqfq9c2solxxt5jbyfh5",F="https://www.youtube.com/embed/bIG_XU7XRbw?si=TmzUGmFJ11DA-Mhz",Z="https://www.youtube.com/embed/gxCuiA3-L4Q?si=15Pm8Vsp_im5XbLO",K="https://www.youtube.com/embed/XZlUUGS7qng?si=L9sT1Pkp2bRlEUVV",$="https://www.youtube.com/embed/DU7kScvKs6w?si=4eaGA75dDZP0dIxT",ee="https://www.youtube.com/embed/G4lEOWcPYv4?si=wa9eJCX3TbsLQZS2",se="https://www.youtube.com/embed/Y35a-PeWnCY?si=ssJEvtuE8AQ5yQ43";WA.onInit().then(()=>{WA.controls.disablePlayerProximityMeeting()});class d{constructor(s,t){this.layer=s,this.message=t,this.setup()}setup(){WA.room.onEnterLayer(this.layer).subscribe(()=>{this.triggerMessage=WA.ui.displayActionMessage({message:this.message,callback:()=>{this.interact()}})}),WA.room.onLeaveLayer(this.layer).subscribe(()=>{this.triggerMessage!==void 0&&this.close()})}interact(){}close(){this.triggerMessage!==void 0&&this.triggerMessage.remove(),this.exit()}exit(){}}class o extends d{constructor(s,t,r,a){super(s,t),this.object=a,this.dialog=r,this.state=0}interact(){this.open()}open(){this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:s=>{this.next()}}]),this.finished=!1}next(){this.state++,this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0,this.state>=this.dialog.length?(this.finished=!0,this.state=0):this.open()}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0}}class i extends d{constructor(t,r,a,u){super(t,r);p(this,"position","right");this.modal=a,u!==void 0&&(this.position=u)}interact(){this.open()}open(){WA.ui.modal.openModal({title:"Yumi",src:this.modal,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:this.position})}exit(){WA.ui.modal.closeModal()}}class e extends o{constructor(s,t,r,a,u){super(s,t,r,a),this.video=u}async next(){this.finished=!0,this.currentState.close(),this.currentState=void 0,await WA.nav.openCoWebSite(this.video,!0,"",50,1,!0,!1)}}WA.ui.modal.openModal({title:"Tutorial",src:l,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"});WA.room.onEnterLayer("Zones/Help").subscribe(()=>{WA.controls.restorePlayerProximityMeeting()});WA.room.onLeaveLayer("Zones/Help").subscribe(()=>{WA.controls.disablePlayerProximityMeeting()});const ie="https://brainsonic.github.io/UIMM-WA-Extras/popup.html";let c=!1;WA.room.onLeaveLayer("Zones/OutGate").subscribe(()=>{c==!1&&(c=!0,WA.ui.modal.openModal({title:"Popup",src:ie,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"}))});function te(){WA.ui.modal.openModal({title:"Tutorial",src:l,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"})}WA.ui.actionBar.addButton({id:"tutorial-btn",label:"Tutoriel",callback:n=>{te()}});const oe=["Ahoy !","Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?    ","Allez, on met les voiles !","La France possède le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !​","Dans l’industrie navale, on fabrique des porte-avions, des sous-marins nucléaires, des frégates, des bateaux de pêche, mais aussi des hydroliennes et des éoliennes flottantes.","En France, on est très fort pour les constructions complexes, comme les paquebots, les navires passagers et les navires militaires.","Donc on a besoin de compétences techniques pointues pour concevoir, produire et entretenir des navires de plus en plus performants et écologiques.","Cela concerne une grande diversité de métiers (plus de 300 !) qui sont en pleine évolution en raison des mutations technologiques et de l’émergence de nouveaux marchés. ","Bref l’horizon est prometteur avec de grosses perspectives de développement dans les énergies renouvelables, les ressources maritimes et les biocarburants.​","Les océans sont un des enjeux stratégiques de notre siècle, matelot !​","Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?","Alors n’hésite pas à parler aux autres Yumi, bon vent !​"],ne=["Hello !","Vous voulez faire un tour de MoonBike ?","D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie.","L’industrie, c'est le secteur qui innove le plus en France, elle représente 72% des dépenses de R&D françaises.","Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovations qui améliorent la production et le quotidien de celles et ceux qui y travaillent.​    ","Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail. Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.    ","Le MoonBike en est un bel exemple ! C’est le premier snowbike 100% électrique du marché : un mode de déplacement beaucoup plus écologique.​","Allez maintenant vous pouvez aller le découvrir, tout schuss.    "],re=["Bonjour à vous","Je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.​","Par exemple, j'ai pris part au projet AGV, automotrice à grande vitesse ! C'est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et plus seulement aux extrémités.","Grâce à cette innovation, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie. Cela permet de parcourir 1000 km en 3 heures ! Impressionnant non ?","J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer. Il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.​","Bonne visite !"];new i("Pnjs/pnj1","Appuyez sur espace pour discuter avec Yumi !",j);new o("Pnjs/pnj2","Appuyez sur espace pour discuter avec le Capitaine !",oe,"pnj2text");new o("Pnjs/pnj3","Appuyez sur espace pour discuter avec la Skieuse !",ne,"pnj3text");new o("Pnjs/pnj5","Appuyez sur espace pour discuter avec la Scientifique !",re,"pnj5text");new i("Pnjs/pnj6","Appuyez sur espace pour discuter avec l'Ingénieure !",P);new e("Pnjs/MoonbikePNJ","Appuyez sur espace pour parler à Anthony !",["Bonjour, moi c’est Anthony, je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet."],"Moonbike",x);new e("Pnjs/Jeune1","Appuyez sur espace pour parler à Antonin !",["Salut moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune1",z);new e("Pnjs/Jeune2","Appuyez sur espace pour parler à Killian !",["Salut moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune2",k);new e("Pnjs/Jeune3","Appuyez sur espace pour parler à Manon !",["Bonjour, moi c'est Manon et pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune3",f);new i("Pnjs/Formulaire","Appuyez sur espace pour ouvrir le formulaire !",y);new e("Pnjs/Statue","Appuyez sur espace pour intéragir avec la statue !",["Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine"],"Statue","https://www.youtube.com/embed/APBCjKv6nvA");new i("Zones/Vidéo","Appuyez sur espace pour regarder la vidéo !",L,"center");new o("Pnjs/Panneau Pont","Appuyez sur espace pour intéragir avec le panneau !",["Au Nord, la gare. Au Sud, la place principale."],"Panneau Pont");new o("Pnjs/Panneau Gare","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez à la Gare du Monde de Yumi"],"Panneau Gare");new o("Pnjs/Panneau Chemin","Appuyez sur espace pour intéragir avec le panneau !",["À l'Ouest, la place principale. Au Sud, le port."],"Panneau Chemin");new o("Pnjs/Panneau Quai","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez au Port du Monde de Yumi"],"Panneau Quai");new o("Pnjs/Panneau Terrasse","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez sur la place principale"],"Panneau Terrasse");new o("Pnjs/Panneau Parc Centre","Appuyez sur espace pour intéragir avec le panneau !",["À gauche le hub des métiers - En haut à droite le lab de Yumi - En haut à gauche la cafet' des apprentis - En bas le salon des vocations"],"PanneauParcCentre");new o("Pnjs/Panneau Parc Haut","Appuyez sur espace pour intéragir avec le panneau !",["Le lab de Yumi"],"PanneauParcHaut");new i("Pnjs/Pong","Appuyez sur espace pour jouer au Pong !",v,"center");new i("Pnjs/Basket","Appuyez sur espace pour jouer au Basket !",b,"center");new i("Pnjs/Piano","Appuyez sur espace pour jouer du piano !",w,"center");new i("Pnjs/MetierRoom/Scribble","Appuyez sur espace pour faire des dessins !",A,"center");new i("Pnjs/ShowRoom/Pool","Appuyer sur espace pour faire du billard !",g,"center");new e("Pnjs/MetierRoom/Nicolas","Appuyez sur espace pour parler à Nicolas !",["Bonjour, moi c’est Nicolas et je suis soudeur dans l’industrie aéronautique. Venez découvrir mon métier !"],"Nicolas",S);new e("Pnjs/MetierRoom/Cari","Appuyez sur espace pour parler à Jordan !",["Bonjour, moi c’est Jordan et je suis concepteur de systèmes embarqués. Vous connaissez ? Non ? Alors venez découvrir mon métier !"],"Cari",q);new e("Pnjs/MetierRoom/IngProd","Appuyez sur espace pour parler à Alexandra !",["Bonjour, moi c’est Alexandra et je suis ingénieur de production. Je vous invite à découvrir mon parcours et mon quotidien dans cette vidéo."],"IngProd",M);new e("Pnjs/MetierRoom/ApprentiRobot","Appuyez sur espace pour regarder la vidéo !",["Thomas est apprenti dans la robotique. Découvrez son métier en vidéo ! "],"ApprentiRobot",V);new e("Pnjs/MetierRoom/ApprentiChaudron","Appuyez sur espace pour regarder la vidéo !",["Découvrez en vidéo le métier de Pauline, apprentie en chaudronnerie navale."],"ApprentiChaudronniere",R);new i("Pnjs/MetierRoom/chatBot_1","Appuyez sur espace pour discuter avec Yumi !",D);new e("Pnjs/ShowRoom/Anais","Appuyez sur espace pour parler à Anaïs !",["Salut, moi c’est Anaïs et je suis technicienne méthodes. Si vous ne savez pas en quoi ça consiste : venez, je vous montre ! "],"Anais",W);new e("Pnjs/ShowRoom/DessinateurIndu","Appuyez sur espace pour regarder la vidéo !",["Ronan est dessinateur industriel. Découvrez son métier en vidéo !"],"DessinateurIndu",B);new e("Pnjs/ShowRoom/RespR&D","Appuyez sur espace pour regarder la vidéo !",["Isabelle est responsable R&D. Découvrez son métier en vidéo !"],"RespRD",C);new e("Pnjs/ShowRoom/AjustMonteur","Appuyez sur espace pour regarder la vidéo !",["C'est quoi le métier d'ajusteur-monteur ? Pour le découvrir c'est ici."],"AjustMonteur",_);new e("Pnjs/ShowRoom/DataScientist","Appuyez sur espace pour regarder la vidéo !",["C'est quoi le métier de data scientist ? Pour le découvrir c'est ici."],"DataScientist",I);new e("Pnjs/ShowRoom/ChargeAff","Appuyez sur espace pour regarder la vidéo !",["Quel est le rôle du chargé d'affaires ? Réponse en vidéo !"],"ChargAff",J);new e("Pnjs/ShowRoom/RespBureau","Appuyez sur espace pour regarder la vidéo !",["Comment devenir responsable bureau d'études et méthodes ? Réponse en vidéo !"],"RespBureau",E);new i("Pnjs/ShowRoom/ITWBot","Appuyez sur espace pour discuter avec Yumi Journaliste !",H);new e("Pnjs/ShowRoom/WorldSkills","Appuyez sur espace pour regarder la vidéo !",["Connaissez-vous les WorldSkills, la grande compétition des métiers ? Et bien c'est le moment de les découvrir en visionnant la saison 1 de 'WorldSkills, La Série', réalisée avec les apprentis de l'industrie ! Accrochez-vous, sensations fortes garanties."],"WorldSkills",Y);new e("Pnjs/ParkInside/Doigby","Appuyez sur espace pour parler à Doigby !",["Hello, moi c’est Doigby ! Je suis vidéaste et Yumi m’a mis au défi de construire une fusée dans Minecraft avec l'aide des internautes. Pensez-vous que j'ai réussi ? Je vous laisse la surprise..."],"Doigby",T);new e("Pnjs/ParkInside/Tiboinshape","Appuyez sur espace pour parler à Maëva !",["Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !"],"Tiboinshape",N);new i("Pnjs/ParkInside/Hihacks","Appuyez sur espace pour discuter avec Romane !",Q);new i("Pnjs/ParkInside/Influence","Appuyez sur espace pour discuter avec Yumi Créatrice !",U);new e("Pnjs/LaboRoom/DrNozman","Appuyez sur espace pour parler à DrNozman !",["Bonjour, moi c’est Dr Nozman et comme je suis un grand curieux, j’ai voulu découvrir comment étaient faites les prothèses d’aujourd’hui. Venez, je vous explique tout."],"DrNozman",O);new e("Pnjs/LaboRoom/Hihacks_labo","Appuyez sur espace pour parler à Henry !",["Salut ! Moi c’est Henry Hihacks et grâce à Thiaifène, apprenti en BTS Maintenance des Systèmes, j’ai réalisé un projet complètement fou... Vous êtes curieux de le découvrir ? Alors regardez ma vidéo !"],"Hihacks_labo",G);new i("Pnjs/LaboRoom/YumiLab","Appuyez sur espace pour discuter avec Yumi Scientifique !",X);new e("Pnjs/DinningRoom/Apprenti_1","Appuyez sur espace pour parler à Magaly !",["Bonjour, moi c’est Magaly, et grâce à l’industrie j’ai réussi à combiner ma passion et mon métier. Vous voulez savoir comment ? Allez, j'enfile mon casque et je vous montre !"],"Apprenti_1",F);new e("Pnjs/DinningRoom/Apprenti_2","Appuyez sur espace pour parler à Joris !",["Salut, moi c’est Joris. Le point commun entre ma passion et mon métier, c’est l’esprit d’équipe. Vous voulez en savoir plus ? Alors regardez cette vidéo !"],"Apprenti_2",Z);new e("Pnjs/DinningRoom/Apprenti_3","Appuyez sur espace pour parler à Julien !",["Bonjour, moi c’est Julien et je suis passionné d'informatique : j'en ai fait mon métier ! Découvrez mon parcours en vidéo."],"Apprenti_3",K);new e("Pnjs/DinningRoom/Apprenti_4","Appuyez sur espace pour parler à Fanny !",["Moi c’est Fanny, et grâce à l'alternance j'ai pu effectuer un semestre universitaire à l'étranger. Ça vous intéresse ? Alors venez découvrir mon parcours !"],"Apprenti_4",$);new e("Pnjs/DinningRoom/Apprenti_5","Appuyez sur espace pour parler à Nassredine !",["Bonjour, je m’appelle Nasreddine et ce que j'aime dans mon métier c'est le côté à la fois pointu et technique. Regardez cette vidéo pour mieux comprendre !"],"Apprenti_5",ee);new e("Pnjs/DinningRoom/Apprenti_6","Appuyez sur espace pour parler à Mathis !",["Salut, moi c’est Mathis, j'ai 19 ans et je suis apprenti en conception industrielle. Vous connaissez ? Non ? Alors je vous invite à découvrir mon métier en vidéo !"],"Apprenti_6",se);
