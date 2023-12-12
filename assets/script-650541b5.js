var P=Object.defineProperty;var v=(o,t,n)=>t in o?P(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var d=(o,t,n)=>(v(o,typeof t!="symbol"?t+"":t,n),n);import"https://unpkg.com/@workadventure/scripting-api-extra@^1";const h="https://64ix.github.io/WA-Edited-Tutorial/tutorial.html",w="https://64ix.github.io/WA-Edited-Tutorial/pong.html",A="https://64ix.github.io/WA-Edited-Tutorial/shooting-hoops/dist/index.html",g="https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html",y="https://brainsonic.github.io/WA-Misc-EasterEggs/scribble/index.html",j="https://brainsonic.github.io/WA-Misc-EasterEggs/pool/index.html",z="https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn",k="https://chat.csml.dev/s/39iezvakvlqapvdwnakm2gjw6f1czgdp",f="https://chat.csml.dev/s/modkshn4koeqaqdjiaj5pa7hfxah6s57",J="https://www.youtube.com/embed/9QDd6dH0-Xc",_="https://www.youtube.com/embed/pDMzhgu_Qbo",N="https://www.youtube.com/embed/mgX4eHVDlTc",S="https://www.youtube.com/embed/eE3kWcMZsuE",V="https://www.youtube.com/embed/7Xe-xnqLoBI?rel=0",x="https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS",L="https://www.youtube.com/embed/cM2U-uKXzts?si=HSPzO1A938ei964m",q="https://www.youtube.com/embed/8HlmZkJX_UQ?si=l0-8bOC_kMy2YYvv",M="https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8",R="https://www.youtube.com/embed/5zDXk6J0hHo?si=DQ3jPiXhQLJgWTOH",D="https://chat.csml.dev/s/klex5ttuh9bmpen8gyo4tssus4liqxgb",B="https://www.youtube.com/embed/eBuPRPSBXlc?si=r_3zCqDW0qUB3d8K",W="https://www.youtube.com/embed/IEtX1_vx98g?si=wt_aAReOPxkrhaAO",C="https://www.youtube.com/embed/dFBHOiedwkQ?si=3CJQ8h6MYL10nkSg",I="https://www.youtube.com/embed/oJQcLWtGmDY?si=wcUwCbNc-Yw7bSS-",E="https://www.youtube.com/embed/ixlo9WwbvuE?si=hhiUylKLOuW5i-Dj",Y="https://www.youtube.com/embed/vVhIHuG0dgI?si=APRxPS1Q6Ws3Vs40",H="https://www.youtube.com/embed/YzXnbdKdbwY?si=5Jt9ZcvzwENDE7nA",T="https://chat.csml.dev/s/bpzoedzc279smw2i649rwhtst9rguvva",G="https://www.youtube.com/embed/videoseries?si=wKcics6QWpDWdVob&amp;list=PLEe-8ZKtOy6Oxx1qU_qRhdcBmy-lXBtqQ",Q="https://www.youtube.com/embed/3An5XwFbKgM?si=Sm7VNc1OKJpUxyQz",O="https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s",U="https://chat.csml.dev/s/imk4tlho3spmxlis9e1ejs3wlita2aco",F="https://chat.csml.dev/s/2yh4lfxd7nba5zevmybgseb41bcn6h9b",K="https://www.youtube.com/embed/zZL1SjBGkNc?si=_z_dfadNSmzm-qOr",X="https://www.youtube.com/embed/BChzaJv_JzQ?si=K1G9ZNtbFTiTO3AA",Z="https://chat.csml.dev/s/fb5kvplgaqoxlqfq9c2solxxt5jbyfh5",$="https://www.youtube.com/embed/bIG_XU7XRbw?si=TmzUGmFJ11DA-Mhz",ee="https://www.youtube.com/embed/gxCuiA3-L4Q?si=15Pm8Vsp_im5XbLO",te="https://www.youtube.com/embed/XZlUUGS7qng?si=L9sT1Pkp2bRlEUVV",ie="https://www.youtube.com/embed/DU7kScvKs6w?si=4eaGA75dDZP0dIxT",ne="https://www.youtube.com/embed/G4lEOWcPYv4?si=wa9eJCX3TbsLQZS2",se="https://www.youtube.com/embed/Y35a-PeWnCY?si=ssJEvtuE8AQ5yQ43",oe="https://127.0.0.1:8000";WA.onInit().then(()=>{WA.controls.disablePlayerProximityMeeting()});class b{constructor(t,n,u,c,a){this.layer=t,this.message=n,this.setup();const p={method:"POST",headers:{"Content-Type":"application/ld+json"},body:JSON.stringify({type:c,category:u,name:a})};fetch(oe,p).then(r=>{if(!r.ok)throw console.log("Erreur tracker"),new Error("Network response was not OK");return r.json()}).then(r=>{console.log("Response :",r)}).catch(r=>{console.error("Error:",r)})}setup(){WA.room.onEnterLayer(this.layer).subscribe(()=>{this.triggerMessage=WA.ui.displayActionMessage({message:this.message,callback:()=>{this.interact()}})}),WA.room.onLeaveLayer(this.layer).subscribe(()=>{this.triggerMessage!==void 0&&this.close()})}interact(){}close(){this.triggerMessage!==void 0&&this.triggerMessage.remove(),this.exit()}exit(){}}class s extends b{constructor(t,n,u,c,a,l,p){super(t,n,a,l,p),this.object=c,this.dialog=u,this.state=0}interact(){this.open()}open(){this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:t=>{this.next()}}]),this.finished=!1}next(){this.state++,this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0,this.state>=this.dialog.length?(this.finished=!0,this.state=0):this.open()}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0}}class i extends b{constructor(n,u,c,a,l,p,r){super(n,u,l,p,r);d(this,"position","right");this.modal=c,a!==void 0&&(this.position=a)}interact(){this.open()}open(){WA.ui.modal.openModal({title:"Yumi",src:this.modal,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:this.position})}exit(){WA.ui.modal.closeModal()}}class e extends s{constructor(t,n,u,c,a,l,p,r){super(t,n,u,c,l,p,r),this.video=a}async next(){this.finished=!0,this.currentState.close(),this.currentState=void 0,await WA.nav.openCoWebSite(this.video,!0,"",50,1,!0,!1)}}WA.ui.modal.openModal({title:"Tutorial",src:h,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"});WA.room.onEnterLayer("Zones/Help").subscribe(()=>{WA.controls.restorePlayerProximityMeeting()});WA.room.onLeaveLayer("Zones/Help").subscribe(()=>{WA.controls.disablePlayerProximityMeeting()});const re="https://brainsonic.github.io/UIMM-WA-Extras/popup.html";let m=!1;WA.room.onLeaveLayer("Zones/OutGate").subscribe(()=>{m==!1&&(m=!0,WA.ui.modal.openModal({title:"Popup",src:re,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"}))});function ae(){WA.ui.modal.openModal({title:"Tutorial",src:h,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"})}WA.ui.actionBar.addButton({id:"tutorial-btn",label:"Tutoriel",callback:o=>{ae()}});const ue=["Ahoy !","Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?    ","Allez, on met les voiles !","La France possède le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !​","Dans l’industrie navale, on fabrique des porte-avions, des sous-marins nucléaires, des frégates, des bateaux de pêche, mais aussi des hydroliennes et des éoliennes flottantes.","En France, on est très fort pour les constructions complexes, comme les paquebots, les navires passagers et les navires militaires.","Donc on a besoin de compétences techniques pointues pour concevoir, produire et entretenir des navires de plus en plus performants et écologiques.","Cela concerne une grande diversité de métiers (plus de 300 !) qui sont en pleine évolution en raison des mutations technologiques et de l’émergence de nouveaux marchés. ","Bref l’horizon est prometteur avec de grosses perspectives de développement dans les énergies renouvelables, les ressources maritimes et les biocarburants.​","Les océans sont un des enjeux stratégiques de notre siècle, matelot !​","Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?","Alors n’hésite pas à parler aux autres Yumi, bon vent !​"],ce=["Hello !","Vous voulez faire un tour de MoonBike ?","D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie.","L’industrie, c'est le secteur qui innove le plus en France, elle représente 72% des dépenses de R&D françaises.","Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovations qui améliorent la production et le quotidien de celles et ceux qui y travaillent.​    ","Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail. Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.    ","Le MoonBike en est un bel exemple ! C’est le premier snowbike 100% électrique du marché : un mode de déplacement beaucoup plus écologique.​","Allez maintenant vous pouvez aller le découvrir, tout schuss.    "],pe=["Bonjour à vous","Je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.​","Par exemple, j'ai pris part au projet AGV, automotrice à grande vitesse ! C'est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et plus seulement aux extrémités.","Grâce à cette innovation, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie. Cela permet de parcourir 1000 km en 3 heures ! Impressionnant non ?","J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer. Il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.​","Bonne visite !"];new i("Pnjs/pnj1","Appuyez sur espace pour discuter avec Yumi !",k,"interact","PNJ","Yumi_accueil");new s("Pnjs/pnj2","Appuyez sur espace pour discuter avec le Capitaine !",ue,"pnj2text","interact","PNJ","PNJ_Capitaine");new s("Pnjs/pnj3","Appuyez sur espace pour discuter avec la Skieuse !",ce,"pnj3text","interact","PNJ","PNJ_Skieuse");new s("Pnjs/pnj5","Appuyez sur espace pour discuter avec la Scientifique !",pe,"pnj5text","interact","PNJ","PNJ_Scientifique");new i("Pnjs/pnj6","Appuyez sur espace pour discuter avec l'Ingénieure !",f,"interact","PNJ","PNJ_Ingénieure");new e("Pnjs/MoonbikePNJ","Appuyez sur espace pour parler à Anthony !",["Bonjour, moi c’est Anthony, je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet."],"Moonbike",S,"interact","PNJ","PNJ_Anthony");new e("Pnjs/Jeune1","Appuyez sur espace pour parler à Antonin !",["Salut moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune1",J,"interact","PNJ","PNJ_Antonin");new e("Pnjs/Jeune2","Appuyez sur espace pour parler à Killian !",["Salut moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune2",_,"interact","PNJ","PNJ_Killian");new e("Pnjs/Jeune3","Appuyez sur espace pour parler à Manon !",["Bonjour, moi c'est Manon et pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune3",N,"interact","PNJ","PNJ_Manon");new i("Pnjs/Formulaire","Appuyez sur espace pour ouvrir le formulaire !",z,"interact","Form","Formulaire_debut");new e("Pnjs/Statue","Appuyez sur espace pour intéragir avec la statue !",["Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine"],"Statue","https://www.youtube.com/embed/APBCjKv6nvA","interact","Video","Video_Statue");new i("Zones/Vidéo","Appuyez sur espace pour regarder la vidéo !",V,"center","interact","Video","Video_Salle_Conf");new s("Pnjs/Panneau Pont","Appuyez sur espace pour intéragir avec le panneau !",["Au Nord, la gare. Au Sud, la place principale."],"Panneau Pont","interact","Panel","Panneau_Pont");new s("Pnjs/Panneau Gare","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez à la Gare du Monde de Yumi"],"Panneau Gare","interact","Panel","Panneau_Gare");new s("Pnjs/Panneau Chemin","Appuyez sur espace pour intéragir avec le panneau !",["À l'Ouest, la place principale. Au Sud, le port."],"Panneau Chemin","interact","Panel","Panneau_Chemin");new s("Pnjs/Panneau Quai","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez au Port du Monde de Yumi"],"Panneau Quai","interact","Panel","Panneau_Quai");new s("Pnjs/Panneau Terrasse","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez sur la place principale"],"Panneau Terrasse","interact","Panel","Panneau_Terrasse");new s("Pnjs/Panneau Parc Centre","Appuyez sur espace pour intéragir avec le panneau !",["À gauche le hub des métiers - En haut à droite le lab de Yumi - En haut à gauche la cafet' des apprentis - En bas le salon des vocations"],"PanneauParcCentre","interact","Panel","Panneau_ParcCentre");new s("Pnjs/Panneau Parc Haut","Appuyez sur espace pour intéragir avec le panneau !",["Le lab de Yumi"],"PanneauParcHaut","interact","Panel","Panneau_ParcHaut");new i("Pnjs/Pong","Appuyez sur espace pour jouer au Pong !",w,"center","interact","Game","Game_Pong");new i("Pnjs/Basket","Appuyez sur espace pour jouer au Basket !",A,"center","interact","Game","Game_Basket");new i("Pnjs/Piano","Appuyez sur espace pour jouer du piano !",g,"center","interact","Game","Game_Piano");new i("Pnjs/MetierRoom/Scribble","Appuyez sur espace pour faire des dessins !",y,"center","interact","Game","Game_Scribble");new i("Pnjs/ShowRoom/Pool","Appuyer sur espace pour faire du billard !",j,"center","interact","Game","Game_Pool");new e("Pnjs/MetierRoom/Nicolas","Appuyez sur espace pour parler à Nicolas !",["Bonjour, moi c’est Nicolas et je suis soudeur dans l’industrie aéronautique. Venez découvrir mon métier !"],"Nicolas",x,"interact","PNJ","PNJ_Nicolas");new e("Pnjs/MetierRoom/Cari","Appuyez sur espace pour parler à Jordan !",["Bonjour, moi c’est Jordan et je suis concepteur de systèmes embarqués. Vous connaissez ? Non ? Alors venez découvrir mon métier !"],"Cari",L,"interact","PNJ","PNJ_Cari");new e("Pnjs/MetierRoom/IngProd","Appuyez sur espace pour parler à Alexandra !",["Bonjour, moi c’est Alexandra et je suis ingénieur de production. Je vous invite à découvrir mon parcours et mon quotidien dans cette vidéo."],"IngProd",q,"interact","PNJ","PNJ_Alexandra");new e("Pnjs/MetierRoom/ApprentiRobot","Appuyez sur espace pour regarder la vidéo !",["Thomas est apprenti dans la robotique. Découvrez son métier en vidéo ! "],"ApprentiRobot",M,"interact","Video","Video_Thomas");new e("Pnjs/MetierRoom/ApprentiChaudron","Appuyez sur espace pour regarder la vidéo !",["Découvrez en vidéo le métier de Pauline, apprentie en chaudronnerie navale."],"ApprentiChaudronniere",R,"interact","Video","Video_Pauline");new i("Pnjs/MetierRoom/chatBot_1","Appuyez sur espace pour discuter avec Yumi !",D,"interact","PNJ","PNJ_YumiMetier");new e("Pnjs/ShowRoom/Anais","Appuyez sur espace pour parler à Anaïs !",["Salut, moi c’est Anaïs et je suis technicienne méthodes. Si vous ne savez pas en quoi ça consiste : venez, je vous montre ! "],"Anais",B,"interact","PNJ","PNJ_Anais");new e("Pnjs/ShowRoom/DessinateurIndu","Appuyez sur espace pour regarder la vidéo !",["Ronan est dessinateur industriel. Découvrez son métier en vidéo !"],"DessinateurIndu",W,"interact","Video","Video_Ronan");new e("Pnjs/ShowRoom/RespR&D","Appuyez sur espace pour regarder la vidéo !",["Isabelle est responsable R&D. Découvrez son métier en vidéo !"],"RespRD",C,"interact","Video","Video_Isabelle");new e("Pnjs/ShowRoom/AjustMonteur","Appuyez sur espace pour regarder la vidéo !",["C'est quoi le métier d'ajusteur-monteur ? Pour le découvrir c'est ici."],"AjustMonteur",I,"interact","Video","Video_Nicolas");new e("Pnjs/ShowRoom/DataScientist","Appuyez sur espace pour regarder la vidéo !",["C'est quoi le métier de data scientist ? Pour le découvrir c'est ici."],"DataScientist",E,"interact","Video","Video_DataScientist");new e("Pnjs/ShowRoom/ChargeAff","Appuyez sur espace pour regarder la vidéo !",["Quel est le rôle du chargé d'affaires ? Réponse en vidéo !"],"ChargAff",Y,"interact","Video","Video_ChargeAff");new e("Pnjs/ShowRoom/RespBureau","Appuyez sur espace pour regarder la vidéo !",["Comment devenir responsable bureau d'études et méthodes ? Réponse en vidéo !"],"RespBureau",H,"interact","Video","Video_RespBureau");new i("Pnjs/ShowRoom/ITWBot","Appuyez sur espace pour discuter avec Yumi Journaliste !",T,"interact","PNJ","PNJ_YumiJournaliste");new e("Pnjs/ShowRoom/WorldSkills","Appuyez sur espace pour regarder la vidéo !",["Connaissez-vous les WorldSkills, la grande compétition des métiers ? Et bien c'est le moment de les découvrir en visionnant la saison 1 de 'WorldSkills, La Série', réalisée avec les apprentis de l'industrie ! Accrochez-vous, sensations fortes garanties."],"WorldSkills",G,"interact","Video","Video_WorldSkills");new e("Pnjs/ParkInside/Doigby","Appuyez sur espace pour parler à Doigby !",["Hello, moi c’est Doigby ! Je suis vidéaste et Yumi m’a mis au défi de construire une fusée dans Minecraft avec l'aide des internautes. Pensez-vous que j'ai réussi ? Je vous laisse la surprise..."],"Doigby",Q,"interact","PNJ","PNJ_Doigby");new e("Pnjs/ParkInside/Tiboinshape","Appuyez sur espace pour parler à Maëva !",["Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !"],"Tiboinshape",O,"interact","PNJ","PNJ_Maeva");new i("Pnjs/ParkInside/Hihacks","Appuyez sur espace pour discuter avec Romane !",U,"interact","PNJ","PNJ_Romane");new i("Pnjs/ParkInside/Influence","Appuyez sur espace pour discuter avec Yumi Créatrice !",F,"interact","PNJ","PNJ_YumiCreatrice");new e("Pnjs/LaboRoom/DrNozman","Appuyez sur espace pour parler à DrNozman !",["Bonjour, moi c’est Dr Nozman et comme je suis un grand curieux, j’ai voulu découvrir comment étaient faites les prothèses d’aujourd’hui. Venez, je vous explique tout."],"DrNozman",K,"interact","PNJ","PNJ_Nozman");new e("Pnjs/LaboRoom/Hihacks_labo","Appuyez sur espace pour parler à Henry !",["Salut ! Moi c’est Henry Hihacks et grâce à Thiaifène, apprenti en BTS Maintenance des Systèmes, j’ai réalisé un projet complètement fou... Vous êtes curieux de le découvrir ? Alors regardez ma vidéo !"],"Hihacks_labo",X,"interact","PNJ","PNJ_HenryHihacks");new i("Pnjs/LaboRoom/YumiLab","Appuyez sur espace pour discuter avec Yumi Scientifique !",Z,"interact","PNJ","PNJ_YumiScientifique");new e("Pnjs/DinningRoom/Apprenti_1","Appuyez sur espace pour parler à Magaly !",["Bonjour, moi c’est Magaly, et grâce à l’industrie j’ai réussi à combiner ma passion et mon métier. Vous voulez savoir comment ? Allez, j'enfile mon casque et je vous montre !"],"Apprenti_1",$,"interact","PNJ","PNJ_Magaly");new e("Pnjs/DinningRoom/Apprenti_2","Appuyez sur espace pour parler à Joris !",["Salut, moi c’est Joris. Le point commun entre ma passion et mon métier, c’est l’esprit d’équipe. Vous voulez en savoir plus ? Alors regardez cette vidéo !"],"Apprenti_2",ee,"interact","PNJ","PNJ_Joris");new e("Pnjs/DinningRoom/Apprenti_3","Appuyez sur espace pour parler à Julien !",["Bonjour, moi c’est Julien et je suis passionné d'informatique : j'en ai fait mon métier ! Découvrez mon parcours en vidéo."],"Apprenti_3",te,"interact","PNJ","PNJ_Julien");new e("Pnjs/DinningRoom/Apprenti_4","Appuyez sur espace pour parler à Fanny !",["Moi c’est Fanny, et grâce à l'alternance j'ai pu effectuer un semestre universitaire à l'étranger. Ça vous intéresse ? Alors venez découvrir mon parcours !"],"Apprenti_4",ie,"interact","PNJ","PNJ_Fanny");new e("Pnjs/DinningRoom/Apprenti_5","Appuyez sur espace pour parler à Nassredine !",["Bonjour, je m’appelle Nasreddine et ce que j'aime dans mon métier c'est le côté à la fois pointu et technique. Regardez cette vidéo pour mieux comprendre !"],"Apprenti_5",ne,"interact","PNJ","PNJ_Nassredine");new e("Pnjs/DinningRoom/Apprenti_6","Appuyez sur espace pour parler à Mathis !",["Salut, moi c’est Mathis, j'ai 19 ans et je suis apprenti en conception industrielle. Vous connaissez ? Non ? Alors je vous invite à découvrir mon métier en vidéo !"],"Apprenti_6",se,"interact","PNJ","PNJ_Mathis");
