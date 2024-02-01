var z=Object.defineProperty;var k=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var g=(e,t,r)=>(k(e,typeof t!="symbol"?t+"":t,r),r);import"https://unpkg.com/@workadventure/scripting-api-extra@^1";const _="https://uimm-trackers-api-stg-0b60361e2cd1.herokuapp.com/api/tracker_events";class P{constructor(t,r,s,a,n){this.layer=t,this.message=r,this.category_tracker=s,this.type_tracker=a,this.name_tracker=n,this.setup()}setup(){WA.room.onEnterLayer(this.layer).subscribe(()=>{this.triggerMessage=WA.ui.displayActionMessage({message:this.message,callback:()=>{this.interact()}})}),WA.room.onLeaveLayer(this.layer).subscribe(()=>{this.triggerMessage!==void 0&&this.close()})}track(){const t={type:this.type_tracker,category:this.category_tracker,name:this.name_tracker},r={method:"POST",headers:{"Content-Type":"application/ld+json"},body:JSON.stringify(t)};fetch(_,r).then(s=>{if(!s.ok)throw console.log("Erreur tracker"),new Error("Network response was not OK");return s.json()}).then(s=>{}).catch(s=>{console.error("Error:",s)})}interact(){this.track()}close(){this.triggerMessage!==void 0&&this.triggerMessage.remove(),this.exit()}exit(){}}class d extends P{constructor(t,r,s,a,n,u,c){super(t,r,n,u,c),this.object=a,this.dialog=s,this.state=0}interact(){this.track(),this.open()}open(){this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:t=>{this.next()}}]),this.finished=!1}next(){this.state++,this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0,this.state>=this.dialog.length?(this.finished=!0,this.state=0):this.open()}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0}}class v extends d{constructor(t,r,s,a,n,u,c,l,A){super(t,r,s,n,c,l,A),this.state=0,this.dialog_condition=a,this.function_action=u}interact(){WA.onInit().then(()=>{this.function_action()}),this.track(),this.open()}open(){var t=this.dialog;this.function_action()==!1&&(this.dialog=this.dialog_condition),this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:r=>{this.next()}}]),this.dialog=t,this.finished=!1}}class p extends P{constructor(r,s,a,n,u,c,l){super(r,s,u,c,l);g(this,"position","right");this.modal=a,n!==void 0&&(this.position=n)}interact(){this.track(),this.open()}open(){WA.ui.modal.openModal({title:"Yumi",src:this.modal,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:this.position})}exit(){WA.ui.modal.closeModal()}}class f extends p{constructor(t,r,s,a,n,u,c,l){super(t,r,s,a,u,c,l),this.function_action=n}interact(){WA.onInit().then(()=>{this.function_action()}),this.open(),this.track()}}class i extends d{constructor(t,r,s,a,n,u,c,l){super(t,r,s,a,u,c,l),this.video=n}async next(){this.finished=!0,this.currentState.close(),this.currentState=void 0,await WA.nav.openCoWebSite(this.video,!0,"",50,1,!0,!1)}}class W extends v{constructor(t,r,s,a,n,u,c,l,A){super(t,r,s,"Erreur dialogue",a,u,c,l,A),this.video=n}async next(){this.finished=!0,this.currentState.close(),this.currentState=void 0}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0,WA.nav.openCoWebSite(this.video,!0,"",50,1,!0,!1)}}class b extends P{constructor(t,r,s,a,n,u,c,l){super(t,r,u,c,l),this.dialog=s,this.object=a,this.item=n,this.state=0,this.alreadyHaveItem=0}interact(){WA.onInit().then(()=>{WA.player.state[this.item]==null?WA.player.state.saveVariable(this.item,!0,{public:!0,persist:!0,ttl:720*3600}):this.alreadyHaveItem=1,this.open(),this.track()})}open(){var t=this.dialog;this.dialog=this.alreadyHaveItem==0?this.dialog:["Vous possédez déjà l'objet"],this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:r=>{this.next()}}]),this.alreadyHaveItem=0,this.dialog=t,this.finished=!1}next(){this.state++,this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0,this.state>=this.dialog.length?(this.finished=!0,this.state=0):this.open()}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0}}class S extends b{constructor(t,r,s,a,n,u,c,l,A,j){super(t,r,s,n,u,l,A,j),this.dialog_condition=a,this.condition=c,this.state=0,this.alreadyHaveItem=0}interact(){WA.onInit().then(()=>{this.condition()==!0&&(WA.player.state[this.item]==null?WA.player.state.saveVariable(this.item,!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"}):this.alreadyHaveItem=1),this.open(),this.track()})}open(){var t=this.dialog;this.dialog=this.alreadyHaveItem==0?this.dialog:["Vous possédez déjà l'objet"],this.condition()==!1&&(this.dialog=this.dialog_condition),this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:r=>{this.next()}}]),this.dialog=t,this.alreadyHaveItem=0,this.finished=!1}}function V(){WA.ui.modal.openModal({title:"Tutorial",src:tutorialLink,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"})}function m(e,t,r){let s=!1;WA.room.onEnterLayer(e).subscribe(()=>{WA.onInit().then(()=>{for(var a of t)if(console.log(a),console.log("You have the access ? :",WA.player.state[a]),WA.player.state[a]==null){WA.nav.goToRoom("#ZoneStep1"),s=!0;return}}).catch(a=>{console.error("Error TELEPORT in :",e)}).then(()=>{s&&WA.ui.openPopup(r,["Zone interdit - Veuillez faire les étapes"],[{label:"Fermer",className:"primary",callback:a=>{a.close()}}])})})}function o(e,t,r,s,a=""){WA.room.onEnterLayer(e).subscribe(()=>{WA.onInit().then(()=>{r()?WA.nav.goToRoom(t):WA.ui.openPopup(s,a==""?["Vous n'avez pas les items requis pour accéder à la TP"]:a,[{label:"Fermer",className:"primary",callback:n=>{n.close()}}])})})}function h(e,t){WA.room.onEnterLayer(e).subscribe(()=>{WA.onInit().then(()=>{for(var r of t)console.log(r),(WA.player.state[r]==null||WA.player.state[r]==null)&&WA.player.state.saveVariable(r,!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"})})})}const x="https://64ix.github.io/WA-Edited-Tutorial/tutorial.html",N="https://64ix.github.io/WA-Edited-Tutorial/pong.html",J="https://64ix.github.io/WA-Edited-Tutorial/shooting-hoops/dist/index.html",L="https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html",R="https://brainsonic.github.io/WA-Misc-EasterEggs/scribble/index.html",I="https://brainsonic.github.io/WA-Misc-EasterEggs/pool/index.html",T="https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn",D="https://chat.csml.dev/s/39iezvakvlqapvdwnakm2gjw6f1czgdp",H="https://chat.csml.dev/s/modkshn4koeqaqdjiaj5pa7hfxah6s57",M="https://www.youtube.com/embed/9QDd6dH0-Xc",q="https://www.youtube.com/embed/pDMzhgu_Qbo",F="https://www.youtube.com/embed/mgX4eHVDlTc",C="https://www.youtube.com/embed/eE3kWcMZsuE",E="https://www.youtube.com/embed/7Xe-xnqLoBI?rel=0",B="https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS",Y="https://www.youtube.com/embed/cM2U-uKXzts?si=HSPzO1A938ei964m",O="https://www.youtube.com/embed/8HlmZkJX_UQ?si=l0-8bOC_kMy2YYvv",Z="https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8",G="https://www.youtube.com/embed/5zDXk6J0hHo?si=DQ3jPiXhQLJgWTOH",Q="https://chat.csml.dev/s/klex5ttuh9bmpen8gyo4tssus4liqxgb",U="https://www.youtube.com/embed/eBuPRPSBXlc?si=r_3zCqDW0qUB3d8K",K="https://www.youtube.com/embed/IEtX1_vx98g?si=wt_aAReOPxkrhaAO",X="https://www.youtube.com/embed/dFBHOiedwkQ?si=3CJQ8h6MYL10nkSg",$="https://www.youtube.com/embed/oJQcLWtGmDY?si=wcUwCbNc-Yw7bSS-",ee="https://www.youtube.com/embed/ixlo9WwbvuE?si=hhiUylKLOuW5i-Dj",te="https://www.youtube.com/embed/vVhIHuG0dgI?si=APRxPS1Q6Ws3Vs40",re="https://www.youtube.com/embed/YzXnbdKdbwY?si=5Jt9ZcvzwENDE7nA",se="https://chat.csml.dev/s/bpzoedzc279smw2i649rwhtst9rguvva",ie="https://www.youtube.com/embed/videoseries?si=wKcics6QWpDWdVob&amp;list=PLEe-8ZKtOy6Oxx1qU_qRhdcBmy-lXBtqQ",ae="https://www.youtube.com/embed/3An5XwFbKgM?si=Sm7VNc1OKJpUxyQz",ne="https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s",oe="https://chat.csml.dev/s/imk4tlho3spmxlis9e1ejs3wlita2aco",ue="https://chat.csml.dev/s/2yh4lfxd7nba5zevmybgseb41bcn6h9b",ce="https://www.youtube.com/embed/zZL1SjBGkNc?si=_z_dfadNSmzm-qOr",pe="https://www.youtube.com/embed/BChzaJv_JzQ?si=K1G9ZNtbFTiTO3AA",y="https://chat.csml.dev/s/fb5kvplgaqoxlqfq9c2solxxt5jbyfh5",le="https://www.youtube.com/embed/bIG_XU7XRbw?si=TmzUGmFJ11DA-Mhz",de="https://www.youtube.com/embed/gxCuiA3-L4Q?si=15Pm8Vsp_im5XbLO",me="https://www.youtube.com/embed/XZlUUGS7qng?si=L9sT1Pkp2bRlEUVV",he="https://www.youtube.com/embed/DU7kScvKs6w?si=4eaGA75dDZP0dIxT",Ae="https://www.youtube.com/embed/G4lEOWcPYv4?si=wa9eJCX3TbsLQZS2",be="https://www.youtube.com/embed/Y35a-PeWnCY?si=ssJEvtuE8AQ5yQ43";WA.onInit().then(()=>{WA.controls.disablePlayerProximityMeeting()});WA.ui.modal.openModal({title:"Tutorial",src:x,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"});WA.room.onEnterLayer("Zones/Help").subscribe(()=>{WA.controls.restorePlayerProximityMeeting()});WA.room.onLeaveLayer("Zones/Help").subscribe(()=>{WA.controls.disablePlayerProximityMeeting()});const Pe="https://brainsonic.github.io/UIMM-WA-Extras/popup.html";let w=!1;WA.room.onLeaveLayer("Zones/OutGate").subscribe(()=>{w==!1&&(w=!0,WA.ui.modal.openModal({title:"Popup",src:Pe,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"}))});WA.ui.actionBar.addButton({id:"tutorial-btn",label:"Tutoriel",callback:e=>{V()}});const ve=["Ahoy !","Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?    ","Allez, on met les voiles !","La France possède le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !​","Dans l’industrie navale, on fabrique des porte-avions, des sous-marins nucléaires, des frégates, des bateaux de pêche, mais aussi des hydroliennes et des éoliennes flottantes.","En France, on est très fort pour les constructions complexes, comme les paquebots, les navires passagers et les navires militaires.","Donc on a besoin de compétences techniques pointues pour concevoir, produire et entretenir des navires de plus en plus performants et écologiques.","Cela concerne une grande diversité de métiers (plus de 300 !) qui sont en pleine évolution en raison des mutations technologiques et de l’émergence de nouveaux marchés. ","Bref l’horizon est prometteur avec de grosses perspectives de développement dans les énergies renouvelables, les ressources maritimes et les biocarburants.​","Les océans sont un des enjeux stratégiques de notre siècle, matelot !​","Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?","Alors n’hésite pas à parler aux autres Yumi, bon vent !​"],ye=["Hello !","Vous voulez faire un tour de MoonBike ?","D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie.","L’industrie, c'est le secteur qui innove le plus en France, elle représente 72% des dépenses de R&D françaises.","Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovations qui améliorent la production et le quotidien de celles et ceux qui y travaillent.​    ","Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail. Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.    ","Le MoonBike en est un bel exemple ! C’est le premier snowbike 100% électrique du marché : un mode de déplacement beaucoup plus écologique.​","Allez maintenant vous pouvez aller le découvrir, tout schuss.    "],ge=["Bonjour à vous","Je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.​","Par exemple, j'ai pris part au projet AGV, automotrice à grande vitesse ! C'est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et plus seulement aux extrémités.","Grâce à cette innovation, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie. Cela permet de parcourir 1000 km en 3 heures ! Impressionnant non ?","J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer. Il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.​","Bonne visite !"];new p("Pnjs/pnj1","Appuyez sur espace pour discuter avec Yumi !",D,"right","interact","PNJ","Yumi_accueil");new d("Pnjs/pnj2","Appuyez sur espace pour discuter avec le Capitaine !",ve,"pnj2text","interact","PNJ","PNJ_Capitaine");new d("Pnjs/pnj3","Appuyez sur espace pour discuter avec la Skieuse !",ye,"pnj3text","interact","PNJ","PNJ_Skieuse");new d("Pnjs/pnj5","Appuyez sur espace pour discuter avec la Scientifique !",ge,"pnj5text","interact","PNJ","PNJ_Scientifique");new p("Pnjs/pnj6","Appuyez sur espace pour discuter avec l'Ingénieure !",H,"right","interact","PNJ","PNJ_Ingénieure");new i("Pnjs/MoonbikePNJ","Appuyez sur espace pour parler à Anthony !",["Bonjour, moi c’est Anthony, je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet."],"Moonbike",C,"interact","PNJ","PNJ_Anthony");new i("Pnjs/Jeune1","Appuyez sur espace pour parler à Antonin !",["Salut moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune1",M,"interact","PNJ","PNJ_Antonin");new i("Pnjs/Jeune2","Appuyez sur espace pour parler à Killian !",["Salut moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune2",q,"interact","PNJ","PNJ_Killian");new i("Pnjs/Jeune3","Appuyez sur espace pour parler à Manon !",["Bonjour, moi c'est Manon et pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune3",F,"interact","PNJ","PNJ_Manon");new p("Pnjs/Formulaire","Appuyez sur espace pour ouvrir le formulaire !",T,"right","interact","Form","Formulaire_debut");new i("Pnjs/Statue","Appuyez sur espace pour intéragir avec la statue !",["Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine"],"Statue","https://www.youtube.com/embed/APBCjKv6nvA","interact","Video","Video_Statue");new p("Zones/Vidéo","Appuyez sur espace pour regarder la vidéo !",E,"center","interact","Video","Video_Salle_Conf");new d("Pnjs/Panneau Pont","Appuyez sur espace pour intéragir avec le panneau !",["Au Nord, la gare. Au Sud, la place principale."],"Panneau Pont","interact","Panel","Panneau_Pont");new d("Pnjs/Panneau Gare","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez à la Gare du Monde de Yumi"],"Panneau Gare","interact","Panel","Panneau_Gare");new d("Pnjs/Panneau Chemin","Appuyez sur espace pour intéragir avec le panneau !",["À l'Ouest, la place principale. Au Sud, le port."],"Panneau Chemin","interact","Panel","Panneau_Chemin");new d("Pnjs/Panneau Quai","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez au Port du Monde de Yumi"],"Panneau Quai","interact","Panel","Panneau_Quai");new d("Pnjs/Panneau Terrasse","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez sur la place principale"],"Panneau Terrasse","interact","Panel","Panneau_Terrasse");new d("Pnjs/Panneau Parc Centre","Appuyez sur espace pour intéragir avec le panneau !",["À gauche le hub des métiers - En haut à droite le lab de Yumi - En haut à gauche la cafet' des apprentis - En bas le salon des vocations"],"PanneauParcCentre","interact","Panel","Panneau_ParcCentre");new d("Pnjs/Panneau Parc Haut","Appuyez sur espace pour intéragir avec le panneau !",["Le lab de Yumi"],"PanneauParcHaut","interact","Panel","Panneau_ParcHaut");new p("Pnjs/Pong","Appuyez sur espace pour jouer au Pong !",N,"center","interact","Game","Game_Pong");new p("Pnjs/Basket","Appuyez sur espace pour jouer au Basket !",J,"center","interact","Game","Game_Basket");new p("Pnjs/Piano","Appuyez sur espace pour jouer du piano !",L,"center","interact","Game","Game_Piano");new p("Pnjs/MetierRoom/Scribble","Appuyez sur espace pour faire des dessins !",R,"center","interact","Game","Game_Scribble");new p("Pnjs/ShowRoom/Pool","Appuyer sur espace pour faire du billard !",I,"center","interact","Game","Game_Pool");new i("Pnjs/MetierRoom/Nicolas","Appuyez sur espace pour parler à Nicolas !",["Bonjour, moi c’est Nicolas et je suis soudeur dans l’industrie aéronautique. Venez découvrir mon métier !"],"Nicolas",B,"interact","PNJ","PNJ_Nicolas");new i("Pnjs/MetierRoom/Cari","Appuyez sur espace pour parler à Jordan !",["Bonjour, moi c’est Jordan et je suis concepteur de systèmes embarqués. Vous connaissez ? Non ? Alors venez découvrir mon métier !"],"Cari",Y,"interact","PNJ","PNJ_Cari");new i("Pnjs/MetierRoom/IngProd","Appuyez sur espace pour parler à Alexandra !",["Bonjour, moi c’est Alexandra et je suis ingénieur de production. Je vous invite à découvrir mon parcours et mon quotidien dans cette vidéo."],"IngProd",O,"interact","PNJ","PNJ_Alexandra");new i("Pnjs/MetierRoom/ApprentiRobot","Appuyez sur espace pour regarder la vidéo !",["Thomas est apprenti dans la robotique. Découvrez son métier en vidéo ! "],"ApprentiRobot",Z,"interact","Video","Video_Thomas");new i("Pnjs/MetierRoom/ApprentiChaudron","Appuyez sur espace pour regarder la vidéo !",["Découvrez en vidéo le métier de Pauline, apprentie en chaudronnerie navale."],"ApprentiChaudronniere",G,"interact","Video","Video_Pauline");new p("Pnjs/MetierRoom/chatBot_1","Appuyez sur espace pour discuter avec Yumi !",Q,"right","interact","PNJ","PNJ_YumiMetier");new i("Pnjs/ShowRoom/Anais","Appuyez sur espace pour parler à Anaïs !",["Salut, moi c’est Anaïs et je suis technicienne méthodes. Si vous ne savez pas en quoi ça consiste : venez, je vous montre ! "],"Anais",U,"interact","PNJ","PNJ_Anais");new i("Pnjs/ShowRoom/DessinateurIndu","Appuyez sur espace pour regarder la vidéo !",["Ronan est dessinateur industriel. Découvrez son métier en vidéo !"],"DessinateurIndu",K,"interact","Video","Video_Ronan");new i("Pnjs/ShowRoom/RespR&D","Appuyez sur espace pour regarder la vidéo !",["Isabelle est responsable R&D. Découvrez son métier en vidéo !"],"RespRD",X,"interact","Video","Video_Isabelle");new i("Pnjs/ShowRoom/AjustMonteur","Appuyez sur espace pour regarder la vidéo !",["C'est quoi le métier d'ajusteur-monteur ? Pour le découvrir c'est ici."],"AjustMonteur",$,"interact","Video","Video_Nicolas");new i("Pnjs/ShowRoom/DataScientist","Appuyez sur espace pour regarder la vidéo !",["C'est quoi le métier de data scientist ? Pour le découvrir c'est ici."],"DataScientist",ee,"interact","Video","Video_DataScientist");new i("Pnjs/ShowRoom/ChargeAff","Appuyez sur espace pour regarder la vidéo !",["Quel est le rôle du chargé d'affaires ? Réponse en vidéo !"],"ChargAff",te,"interact","Video","Video_ChargeAff");new i("Pnjs/ShowRoom/RespBureau","Appuyez sur espace pour regarder la vidéo !",["Comment devenir responsable bureau d'études et méthodes ? Réponse en vidéo !"],"RespBureau",re,"interact","Video","Video_RespBureau");new p("Pnjs/ShowRoom/ITWBot","Appuyez sur espace pour discuter avec Yumi Journaliste !",se,"right","interact","PNJ","PNJ_YumiJournaliste");new i("Pnjs/ShowRoom/WorldSkills","Appuyez sur espace pour regarder la vidéo !",["Connaissez-vous les WorldSkills, la grande compétition des métiers ? Et bien c'est le moment de les découvrir en visionnant la saison 1 de 'WorldSkills, La Série', réalisée avec les apprentis de l'industrie ! Accrochez-vous, sensations fortes garanties."],"WorldSkills",ie,"interact","Video","Video_WorldSkills");new i("Pnjs/ParkInside/Doigby","Appuyez sur espace pour parler à Doigby !",["Hello, moi c’est Doigby ! Je suis vidéaste et Yumi m’a mis au défi de construire une fusée dans Minecraft avec l'aide des internautes. Pensez-vous que j'ai réussi ? Je vous laisse la surprise..."],"Doigby",ae,"interact","PNJ","PNJ_Doigby");new i("Pnjs/ParkInside/Tiboinshape","Appuyez sur espace pour parler à Maëva !",["Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !"],"Tiboinshape",ne,"interact","PNJ","PNJ_Maeva");new p("Pnjs/ParkInside/Hihacks","Appuyez sur espace pour discuter avec Romane !",oe,"right","interact","PNJ","PNJ_Romane");new p("Pnjs/ParkInside/Influence","Appuyez sur espace pour discuter avec Yumi Créatrice !",ue,"right","interact","PNJ","PNJ_YumiCreatrice");new i("Pnjs/LaboRoom/DrNozman","Appuyez sur espace pour parler à DrNozman !",["Bonjour, moi c’est Dr Nozman et comme je suis un grand curieux, j’ai voulu découvrir comment étaient faites les prothèses d’aujourd’hui. Venez, je vous explique tout."],"DrNozman",ce,"interact","PNJ","PNJ_Nozman");new i("Pnjs/LaboRoom/Hihacks_labo","Appuyez sur espace pour parler à Henry !",["Salut ! Moi c’est Henry Hihacks et grâce à Thiaifène, apprenti en BTS Maintenance des Systèmes, j’ai réalisé un projet complètement fou... Vous êtes curieux de le découvrir ? Alors regardez ma vidéo !"],"Hihacks_labo",pe,"interact","PNJ","PNJ_HenryHihacks");new p("Pnjs/LaboRoom/YumiLab","Appuyez sur espace pour discuter avec Yumi Scientifique !",y,"right","interact","PNJ","PNJ_YumiScientifique");new i("Pnjs/DinningRoom/Apprenti_1","Appuyez sur espace pour parler à Magaly !",["Bonjour, moi c’est Magaly, et grâce à l’industrie j’ai réussi à combiner ma passion et mon métier. Vous voulez savoir comment ? Allez, j'enfile mon casque et je vous montre !"],"Apprenti_1",le,"interact","PNJ","PNJ_Magaly");new i("Pnjs/DinningRoom/Apprenti_2","Appuyez sur espace pour parler à Joris !",["Salut, moi c’est Joris. Le point commun entre ma passion et mon métier, c’est l’esprit d’équipe. Vous voulez en savoir plus ? Alors regardez cette vidéo !"],"Apprenti_2",de,"interact","PNJ","PNJ_Joris");new i("Pnjs/DinningRoom/Apprenti_3","Appuyez sur espace pour parler à Julien !",["Bonjour, moi c’est Julien et je suis passionné d'informatique : j'en ai fait mon métier ! Découvrez mon parcours en vidéo."],"Apprenti_3",me,"interact","PNJ","PNJ_Julien");new i("Pnjs/DinningRoom/Apprenti_4","Appuyez sur espace pour parler à Fanny !",["Moi c’est Fanny, et grâce à l'alternance j'ai pu effectuer un semestre universitaire à l'étranger. Ça vous intéresse ? Alors venez découvrir mon parcours !"],"Apprenti_4",he,"interact","PNJ","PNJ_Fanny");new i("Pnjs/DinningRoom/Apprenti_5","Appuyez sur espace pour parler à Nassredine !",["Bonjour, je m’appelle Nasreddine et ce que j'aime dans mon métier c'est le côté à la fois pointu et technique. Regardez cette vidéo pour mieux comprendre !"],"Apprenti_5",Ae,"interact","PNJ","PNJ_Nassredine");new i("Pnjs/DinningRoom/Apprenti_6","Appuyez sur espace pour parler à Mathis !",["Salut, moi c’est Mathis, j'ai 19 ans et je suis apprenti en conception industrielle. Vous connaissez ? Non ? Alors je vous invite à découvrir mon métier en vidéo !"],"Apprenti_6",be,"interact","PNJ","PNJ_Mathis");function we(e){WA.room.onEnterLayer(e).subscribe(()=>{WA.room.showLayer(e),WA.onInit().then(()=>{WA.nav.goToRoom("#Depart")})})}let fe=23;for(let e=1;e<fe+1;e++)we("HideTile/TrappedRoom/Hole_"+e);new f("Pnjs/TrappedRoom/YumiDepart_1","Appuyez sur espace pour discuter avec Yumi !",y,"right",()=>{var e="TalkToYumiTrappedRoom";return WA.player.state[e]==null&&(console.log("VARIABLE YUMMI"),WA.player.state.saveVariable(e,!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"})),!0},"interact","PNJ","PNJ_YumiDepartTrappedRoom");new S("Items/TrappedRoom/CardAccess","Appuyez sur espace pour ramasser la carte d'accès",["Vous avez récuperé la carte d'accès"],["Vous devez d'abord parler à Yumi avant de le ramasser"],"cardAccessText","cardAccess",()=>WA.player.state.TalkToYumiTrappedRoom!=null,"interract","Object","Object_cardAccess");new v("InteractAction/TrappedRoom/FinalDoor","Appuyez sur espace pour insérer la carte d'accès",["La porte est ouverte"],["Vous devez avoir la carte d'accès"],"doorTrappedRoomText",()=>WA.player.state.cardAccess!=null&&WA.player.state.cardAccess==!0?(WA.room.hideLayer("beforePlayer/TrappedRoom/DoorFinal"),WA.room.hideLayer("beforePlayer/TrappedRoom/CollideDoorFinal"),WA.room.showLayer("beforePlayer/TrappedRoom/DoorFinalOpen"),WA.player.state.saveVariable("cardAccessStep3",!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"}),console.log("ACCESS STEP 3",WA.player.state.cardAccessStep3),!0):(console.log("KO_2"),!1),"interract","InteractAction","Object_doorTrappedRoom");m("Zones/ZoneStep3",["cardAccessStep3"],"EscapeGameText");new b("Items/LabIndustry/CoatRackHint","Appuyez sur espace pour ramasser l'indice",["Vous avez récuperé l'indice"],"coatRackText","coatRackHint","interract","Object","Object_coatRackItem");new b("Items/LabIndustry/CafetHint","Appuyez sur espace pour ramasser l'indice",["Vous avez récuperé l'indice"],"cafetText","cafetHint","interract","Object","Object_keyItem");new b("Items/LabIndustry/Key","Appuyez sur espace pour prendre la clef",["Vous avez récuperé la clef du coffre"],"keyText","keyItem","interract","Object","Object_keyItem");new b("Items/LabIndustry/BinHint","Appuyez sur espace pour ramasser l'indice",["Vous avez récuperé l'indice"],"binText","binHint","interract","Object","Object_binItem");new S("Items/LabIndustry/ChestHint","Appuyez sur espace pour ouvrir le coffre",["Vous avez récuperé l'indice"],["Vous n'avez pas la clef du coffre"],"chestText","chestHint",()=>WA.player.state.keyItem!=null&&WA.player.state.keyItem==!0,"interract","Object","Object_chestItem");new v("InteractAction/LabIndustry/TrapDoor","Appuyez sur espace pour ouvrir la trappe",["Vous entrez dans la trappe"],["Vous devez rassemblé les 4 indices avant de pouvoir d'ouvrir la trappe"],"trapDoorText",()=>{if(console.log("Indice : ",WA.player.state.cafetHint),console.log("Indice : ",WA.player.state.chestHint),console.log("Indice : ",WA.player.state.coatRackHint),console.log("Indice : ",WA.player.state.binHint),WA.player.state.cafetHint!=null&&WA.player.state.cafetHint==!0&&WA.player.state.chestHint!=null&&WA.player.state.chestHint==!0&&WA.player.state.coatRackHint!=null&&WA.player.state.coatRackHint==!0&&WA.player.state.binHint!=null&&WA.player.state.binHint==!0){WA.player.state.saveVariable("cardAccessStep4",!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"});let e=window.location.href.split("/");return e[e.length-1]="map2.tmj",WA.nav.goToRoom(e.join("/")),!0}else return console.log("KO_2"),!1},"interract","InteractAction","Object_trapDoor");const Se="Zones/ZoneStep4",Te="Step4/FirstTP/ZoneFirstTP",je="Step4/SecondTP/ZoneSecondTP",ze="Step4/ThirdTP/ZoneThirdTP",ke="Step4/FourthTP/ZoneFourthTP",_e="Step4/FifthTP/ZoneFifthTP",We="Step4/Last/TpArrive";new f("Step4/Yumi","Appuyez sur espace pour discuter avec Yumi !",y,"right",()=>{var e="TalkToYumiStep4";return console.log("CACACACA",WA.player.state[e]),WA.player.state[e]==null&&(console.log("HEHEHEHE"),WA.player.state.saveVariable(e,!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"})),!0},"interact","PNJ","PNJ_YumiStep4");m(Se,["cardAccessStep4"],"EscapeGameText");h("Step4/TpDepart",["cardAccessZoneFirstTP"]);o("Step4/TpDepart","#TpDepart_1",()=>WA.player.state.cardAccessStep4!=null&&WA.player.state.TalkToYumiStep4!=null,"tpDepartStep4","Vous devez parler à Yumi");m(Te,["cardAccessZoneFirstTP"],"EscapeGameText");h("Step4/FirstTP/Tp1-3",["cardAccessZoneSecondTP"]);o("Step4/FirstTP/Tp1-1","#Reset",()=>!0,"tpDepart1Step4");o("Step4/FirstTP/Tp1-2","#Reset",()=>!0,"tpDepart1Step4");o("Step4/FirstTP/Tp1-3","#TpDepart_2",()=>WA.player.state.cardAccessZoneFirstTP!=null,"tpDepart1Step4");m(je,["cardAccessZoneSecondTP"],"EscapeGameText");h("Step4/SecondTP/Tp2-2",["cardAccessZoneThirdTP"]);o("Step4/SecondTP/Tp2-1","#Reset",()=>!0,"tpDepart2Step4");o("Step4/SecondTP/Tp2-2","#TpDepart_3",()=>WA.player.state.cardAccessZoneSecondTP!=null,"tpDepart2Step4");o("Step4/SecondTP/Tp2-3","#Reset",()=>!0,"tpDepart2Step4");m(ze,["cardAccessZoneThirdTP"],"EscapeGameText");h("Step4/ThirdTP/Tp3-1",["cardAccessZoneFourthTP"]);o("Step4/ThirdTP/Tp3-1","#TpDepart_4",()=>WA.player.state.cardAccessZoneThirdTP!=null,"tpDepart3Step4");o("Step4/ThirdTP/Tp3-2","#Reset",()=>!0,"tpDepart3Step4");o("Step4/ThirdTP/Tp3-3","#Reset",()=>!0,"tpDepart3Step4");m(ke,["cardAccessZoneFourthTP"],"EscapeGameText");h("Step4/FourthTP/Tp4-2",["cardAccessZoneFifthTP"]);o("Step4/FourthTP/Tp4-1","#Reset",()=>!0,"tpDepart2Step4");o("Step4/FourthTP/Tp4-2","#TpDepart_5",()=>WA.player.state.cardAccessZoneFourthTP!=null,"tpDepart2Step4");o("Step4/FourthTP/Tp4-3","#Reset",()=>!0,"tpDepart2Step4");m(_e,["cardAccessZoneFifthTP"],"EscapeGameText");h("Step4/FifthTP/Tp5-3",["cardAccessZoneFinalStep4"]);o("Step4/FifthTP/Tp5-1","#Reset",()=>!0,"tpDepart2Step5");o("Step4/FifthTP/Tp5-2","#Reset",()=>!0,"tpDepart2Step5");o("Step4/FifthTP/Tp5-3","#TpArrive",()=>WA.player.state.cardAccessZoneFifthTP!=null,"tpDepart2Step5");o("Step4/FifthTP/Tp5-4","#Reset",()=>!0,"tpDepart2Step5");m(We,["cardAccessZoneFinalStep4"],"EscapeGameText");o("Step4/Last/TpBack","#start",()=>!0,"tpBackFinal");new W("Step4/Last/Redbutton","Appuyez sur espace pour ouvrir le formulaire !",["Bravo ! Tu viens de sauver le monde Yumi !!"],"redButtonTxt",T,()=>(WA.room.hideLayer("Step4/Last/ButtonNotPressed_1"),WA.room.hideLayer("Step4/Last/ButtonNotPressed_2"),WA.room.hideLayer("Step4/Last/ButtonNotPressed"),WA.room.hideLayer("Step4/Last/Redbutton"),!0),"right","interact","Form","Formulaire_final");
