var x=Object.defineProperty;var V=(a,e,t)=>e in a?x(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var S=(a,e,t)=>(V(a,typeof e!="symbol"?e+"":e,t),t);import"https://unpkg.com/@workadventure/scripting-api-extra@^1";const J="https://uimm-trackers-api-stg-0b60361e2cd1.herokuapp.com/api/tracker_events";class w{constructor(e,t,r,s,n){this.layer=e,this.message=t,this.category_tracker=r,this.type_tracker=s,this.name_tracker=n,this.setup()}setup(){WA.room.onEnterLayer(this.layer).subscribe(()=>{this.triggerMessage=WA.ui.displayActionMessage({message:this.message,callback:()=>{this.interact()}})}),WA.room.onLeaveLayer(this.layer).subscribe(()=>{this.triggerMessage!==void 0&&this.close()})}track(){const e={type:this.type_tracker,category:this.category_tracker,name:this.name_tracker},t={method:"POST",headers:{"Content-Type":"application/ld+json"},body:JSON.stringify(e)};fetch(J,t).then(r=>{if(!r.ok)throw console.log("Erreur tracker"),new Error("Network response was not OK");return r.json()}).then(r=>{}).catch(r=>{console.error("Error:",r)})}interact(){this.track()}close(){this.triggerMessage!==void 0&&this.triggerMessage.remove(),this.exit()}exit(){}}class m extends w{constructor(e,t,r,s,n,u,p){super(e,t,n,u,p),this.object=s,this.dialog=r,this.state=0}interact(){this.track(),this.open()}open(){this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:e=>{this.next()}}]),this.finished=!1}next(){this.state++,this.currentState!==void 0&&(this.currentState.close(),this.currentState=void 0),this.state>=this.dialog.length?(this.finished=!0,this.state=0):this.open()}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0,this.state=0}}class b extends m{constructor(e,t,r,s,n,u,p,l,A){super(e,t,r,n,p,l,A),this.state=0,this.dialog_condition=s,this.function_action=u,this.old_dialog=this.dialog}interact(){WA.onInit().then(()=>{this.function_action()}),this.track(),this.open()}open(){this.function_action()==!1?this.dialog=this.dialog_condition:this.dialog=this.old_dialog,this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:e=>{this.next()}}]),this.finished=!1}}class d extends w{constructor(t,r,s,n,u,p,l){super(t,r,u,p,l);S(this,"position","right");this.modal=s,n!==void 0&&(this.position=n)}interact(){this.track(),this.open()}open(){WA.ui.modal.openModal({title:"Yumi",src:this.modal,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:this.position})}exit(){WA.ui.modal.closeModal()}}class T extends d{constructor(e,t,r,s,n,u,p,l){super(e,t,r,s,u,p,l),this.function_action=n}interact(){WA.onInit().then(()=>{this.function_action()}),this.open(),this.track()}}class i extends m{constructor(e,t,r,s,n,u,p,l){super(e,t,r,s,u,p,l),this.video=n}async next(){this.finished=!0,this.currentState.close(),this.currentState=void 0,await WA.nav.openCoWebSite(this.video,!0,"",50,1,!0,!1)}}class f extends b{constructor(e,t,r,s,n,u,p,l,A,P){super(e,t,r,s,n,p,l,A,P),this.video=u,this.open_modal=!1}next(){this.state++,this.currentState!==void 0&&(this.currentState.close(),this.currentState=void 0),this.state>=this.dialog.length?(this.finished=!0,this.state=0,this.open_modal=!0,WA.ui.modal.openModal({title:"VideoModal",src:this.video,position:"center"})):this.open()}exit(){!this.finished&&this.currentState!==void 0&&this.open_modal==!1&&(this.currentState.close(),WA.ui.modal.openModal({title:"VideoModal",src:this.video,position:"center"})),this.state=0,this.open_modal=!1,this.currentState=void 0}}class y extends w{constructor(e,t,r,s,n,u,p,l){super(e,t,u,p,l),this.dialog=r,this.object=s,this.item=n,this.state=0,this.alreadyHaveItem=0}interact(){WA.onInit().then(()=>{WA.player.state[this.item]==null?WA.player.state.saveVariable(this.item,!0,{public:!0,persist:!0,ttl:720*3600}):this.alreadyHaveItem=1,this.open(),this.track()})}open(){var e=this.dialog;this.dialog=this.alreadyHaveItem==0?this.dialog:["Vous possédez déjà l'objet"],this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:t=>{this.next()}}]),this.alreadyHaveItem=0,this.dialog=e,this.finished=!1}next(){this.state++,this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0,this.state>=this.dialog.length?(this.finished=!0,this.state=0):this.open()}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0}}class j extends y{constructor(e,t,r,s,n,u,p,l,A,P){super(e,t,r,n,u,l,A,P),this.dialog_condition=s,this.condition=p,this.state=0,this.alreadyHaveItem=0}interact(){WA.onInit().then(()=>{this.condition()==!0&&(WA.player.state[this.item]==null?WA.player.state.saveVariable(this.item,!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"}):this.alreadyHaveItem=1),this.open(),this.track()})}open(){var e=this.dialog;this.dialog=this.alreadyHaveItem==0?this.dialog:["Vous possédez déjà l'objet"],this.condition()==!1&&(this.dialog=this.dialog_condition),this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:t=>{this.next()}}]),this.dialog=e,this.alreadyHaveItem=0,this.finished=!1}}function L(){WA.ui.modal.openModal({title:"Tutorial",src:tutorialLink,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"})}function h(a,e,t){let r=!1;WA.room.onEnterLayer(a).subscribe(()=>{WA.onInit().then(()=>{for(var s of e)if(console.log(s),console.log("You have the access ? :",WA.player.state[s]),WA.player.state[s]==null){WA.nav.goToRoom("#ZoneStep1"),r=!0;return}}).catch(s=>{console.error("Error TELEPORT in :",a)}).then(()=>{r&&WA.ui.openPopup(t,["Zone interdit - Veuillez faire les étapes"],[{label:"Fermer",className:"primary",callback:s=>{s.close()}}])})})}function o(a,e,t,r,s=""){WA.room.onEnterLayer(a).subscribe(()=>{WA.onInit().then(()=>{t()?WA.nav.goToRoom(e):WA.ui.openPopup(r,s==""?["Vous n'avez pas les items requis pour accéder à la TP"]:s,[{label:"Fermer",className:"primary",callback:n=>{n.close()}}])})})}function v(a,e){WA.room.onEnterLayer(a).subscribe(()=>{WA.onInit().then(()=>{for(var t of e)console.log(t),(WA.player.state[t]==null||WA.player.state[t]==null)&&WA.player.state.saveVariable(t,!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"})})})}const R="https://64ix.github.io/WA-Edited-Tutorial/tutorial.html",I="https://64ix.github.io/WA-Edited-Tutorial/pong.html",N="https://64ix.github.io/WA-Edited-Tutorial/shooting-hoops/dist/index.html",D="https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html",q="https://brainsonic.github.io/WA-Misc-EasterEggs/scribble/index.html",H="https://brainsonic.github.io/WA-Misc-EasterEggs/pool/index.html",z="https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn",M="https://chat.csml.dev/s/39iezvakvlqapvdwnakm2gjw6f1czgdp",C="https://chat.csml.dev/s/modkshn4koeqaqdjiaj5pa7hfxah6s57",E="https://www.youtube.com/embed/9QDd6dH0-Xc",F="https://www.youtube.com/embed/pDMzhgu_Qbo",B="https://www.youtube.com/embed/mgX4eHVDlTc",Y="https://www.youtube.com/embed/eE3kWcMZsuE",O="https://www.youtube.com/embed/7Xe-xnqLoBI?rel=0",Z="https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS",Q="https://www.youtube.com/embed/cM2U-uKXzts?si=HSPzO1A938ei964m",G="https://www.youtube.com/embed/8HlmZkJX_UQ?si=l0-8bOC_kMy2YYvv",U="https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8",K="https://www.youtube.com/embed/5zDXk6J0hHo?si=DQ3jPiXhQLJgWTOH",X="https://chat.csml.dev/s/klex5ttuh9bmpen8gyo4tssus4liqxgb",$="https://www.youtube.com/embed/eBuPRPSBXlc?si=r_3zCqDW0qUB3d8K",ee="https://www.youtube.com/embed/IEtX1_vx98g?si=wt_aAReOPxkrhaAO",te="https://www.youtube.com/embed/dFBHOiedwkQ?si=3CJQ8h6MYL10nkSg",re="https://www.youtube.com/embed/oJQcLWtGmDY?si=wcUwCbNc-Yw7bSS-",se="https://www.youtube.com/embed/ixlo9WwbvuE?si=hhiUylKLOuW5i-Dj",ae="https://www.youtube.com/embed/vVhIHuG0dgI?si=APRxPS1Q6Ws3Vs40",ie="https://www.youtube.com/embed/YzXnbdKdbwY?si=5Jt9ZcvzwENDE7nA",ne="https://chat.csml.dev/s/bpzoedzc279smw2i649rwhtst9rguvva",oe="https://www.youtube.com/embed/videoseries?si=wKcics6QWpDWdVob&amp;list=PLEe-8ZKtOy6Oxx1qU_qRhdcBmy-lXBtqQ",ue="https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s",pe="https://chat.csml.dev/s/imk4tlho3spmxlis9e1ejs3wlita2aco",ce="https://chat.csml.dev/s/2yh4lfxd7nba5zevmybgseb41bcn6h9b",le="https://www.youtube.com/embed/BChzaJv_JzQ?si=K1G9ZNtbFTiTO3AA",g="https://chat.csml.dev/s/fb5kvplgaqoxlqfq9c2solxxt5jbyfh5",de="https://www.youtube.com/embed/bIG_XU7XRbw?si=TmzUGmFJ11DA-Mhz",me="https://www.youtube.com/embed/gxCuiA3-L4Q?si=15Pm8Vsp_im5XbLO",he="https://www.youtube.com/embed/XZlUUGS7qng?si=L9sT1Pkp2bRlEUVV",Ae="https://www.youtube.com/embed/DU7kScvKs6w?si=4eaGA75dDZP0dIxT",ve="https://www.youtube.com/embed/G4lEOWcPYv4?si=wa9eJCX3TbsLQZS2",be="https://www.youtube.com/embed/Y35a-PeWnCY?si=ssJEvtuE8AQ5yQ43";document.addEventListener("DOMContentLoaded",()=>{WA.onInit().then(()=>{WA.controls.disablePlayerProximityMeeting()}),WA.ui.modal.openModal({title:"Tutorial",src:R,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"}),WA.room.onEnterLayer("Zones/Help").subscribe(()=>{WA.controls.restorePlayerProximityMeeting()}),WA.room.onLeaveLayer("Zones/Help").subscribe(()=>{WA.controls.disablePlayerProximityMeeting()});const a="https://brainsonic.github.io/UIMM-WA-Extras/popup.html";let e=!1;WA.room.onLeaveLayer("Zones/OutGate").subscribe(()=>{e==!1&&(e=!0,WA.ui.modal.openModal({title:"Popup",src:a,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"center"}))}),WA.ui.actionBar.addButton({id:"tutorial-btn",label:"Tutoriel",callback:c=>{L()}});const t=["Ahoy !","Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?    ","Allez, on met les voiles !","La France possède le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !​","Dans l’industrie navale, on fabrique des porte-avions, des sous-marins nucléaires, des frégates, des bateaux de pêche, mais aussi des hydroliennes et des éoliennes flottantes.","En France, on est très fort pour les constructions complexes, comme les paquebots, les navires passagers et les navires militaires.","Donc on a besoin de compétences techniques pointues pour concevoir, produire et entretenir des navires de plus en plus performants et écologiques.","Cela concerne une grande diversité de métiers (plus de 300 !) qui sont en pleine évolution en raison des mutations technologiques et de l’émergence de nouveaux marchés. ","Bref l’horizon est prometteur avec de grosses perspectives de développement dans les énergies renouvelables, les ressources maritimes et les biocarburants.​","Les océans sont un des enjeux stratégiques de notre siècle, matelot !​","Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?","Alors n’hésite pas à parler aux autres Yumi, bon vent !​"],r=["Hello !","Vous voulez faire un tour de MoonBike ?","D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie.","L’industrie, c'est le secteur qui innove le plus en France, elle représente 72% des dépenses de R&D françaises.","Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovations qui améliorent la production et le quotidien de celles et ceux qui y travaillent.​    ","Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail. Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.    ","Le MoonBike en est un bel exemple ! C’est le premier snowbike 100% électrique du marché : un mode de déplacement beaucoup plus écologique.​","Allez maintenant vous pouvez aller le découvrir, tout schuss.    "],s=["Bonjour à vous","Je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.​","Par exemple, j'ai pris part au projet AGV, automotrice à grande vitesse ! C'est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et plus seulement aux extrémités.","Grâce à cette innovation, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie. Cela permet de parcourir 1000 km en 3 heures ! Impressionnant non ?","J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer. Il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.​","Bonne visite !"];new d("Pnjs/pnj1","Appuyez sur espace pour discuter avec Yumi !",M,"right","interact","PNJ","Yumi_accueil"),new m("Pnjs/pnj2","Appuyez sur espace pour discuter avec le Capitaine !",t,"pnj2text","interact","PNJ","PNJ_Capitaine"),new m("Pnjs/pnj3","Appuyez sur espace pour discuter avec la Skieuse !",r,"pnj3text","interact","PNJ","PNJ_Skieuse"),new m("Pnjs/pnj5","Appuyez sur espace pour discuter avec la Scientifique !",s,"pnj5text","interact","PNJ","PNJ_Scientifique"),new d("Pnjs/pnj6","Appuyez sur espace pour discuter avec l'Ingénieure !",C,"right","interact","PNJ","PNJ_Ingénieure"),new i("Pnjs/MoonbikePNJ","Appuyez sur espace pour parler à Anthony !",["Bonjour, moi c’est Anthony, je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet."],"Moonbike",Y,"interact","PNJ","PNJ_Anthony"),new i("Pnjs/Jeune1","Appuyez sur espace pour parler à Antonin !",["Salut moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune1",E,"interact","PNJ","PNJ_Antonin"),new i("Pnjs/Jeune2","Appuyez sur espace pour parler à Killian !",["Salut moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune2",F,"interact","PNJ","PNJ_Killian"),new i("Pnjs/Jeune3","Appuyez sur espace pour parler à Manon !",["Bonjour, moi c'est Manon et pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune3",B,"interact","PNJ","PNJ_Manon"),new d("Pnjs/Formulaire","Appuyez sur espace pour ouvrir le formulaire !",z,"right","interact","Form","Formulaire_debut"),new i("Pnjs/Statue","Appuyez sur espace pour intéragir avec la statue !",["Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine"],"Statue","https://www.youtube.com/embed/APBCjKv6nvA","interact","Video","Video_Statue"),new d("Zones/Vidéo","Appuyez sur espace pour regarder la vidéo !",O,"center","interact","Video","Video_Salle_Conf"),new m("Pnjs/Panneau Pont","Appuyez sur espace pour intéragir avec le panneau !",["Au Nord, la gare. Au Sud, la place principale."],"Panneau Pont","interact","Panel","Panneau_Pont"),new m("Pnjs/Panneau Gare","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez à la Gare du Monde de Yumi"],"Panneau Gare","interact","Panel","Panneau_Gare"),new m("Pnjs/Panneau Chemin","Appuyez sur espace pour intéragir avec le panneau !",["À l'Ouest, la place principale. Au Sud, le port."],"Panneau Chemin","interact","Panel","Panneau_Chemin"),new m("Pnjs/Panneau Quai","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez au Port du Monde de Yumi"],"Panneau Quai","interact","Panel","Panneau_Quai"),new m("Pnjs/Panneau Terrasse","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez sur la place principale"],"Panneau Terrasse","interact","Panel","Panneau_Terrasse"),new m("Pnjs/Panneau Parc Centre","Appuyez sur espace pour intéragir avec le panneau !",["À gauche le hub des métiers - En haut à droite le lab de Yumi - En haut à gauche la cafet' des apprentis - En bas le salon des vocations"],"PanneauParcCentre","interact","Panel","Panneau_ParcCentre"),new m("Pnjs/Panneau Parc Haut","Appuyez sur espace pour intéragir avec le panneau !",["Le lab de Yumi"],"PanneauParcHaut","interact","Panel","Panneau_ParcHaut"),new d("Pnjs/Pong","Appuyez sur espace pour jouer au Pong !",I,"center","interact","Game","Game_Pong"),new d("Pnjs/Basket","Appuyez sur espace pour jouer au Basket !",N,"center","interact","Game","Game_Basket"),new d("Pnjs/Piano","Appuyez sur espace pour jouer du piano !",D,"center","interact","Game","Game_Piano"),new d("Pnjs/MetierRoom/Scribble","Appuyez sur espace pour faire des dessins !",q,"center","interact","Game","Game_Scribble"),new d("Pnjs/ShowRoom/Pool","Appuyer sur espace pour faire du billard !",H,"center","interact","Game","Game_Pool"),new i("Pnjs/MetierRoom/Nicolas","Appuyez sur espace pour parler à Nicolas !",["Bonjour, moi c’est Nicolas et je suis soudeur dans l’industrie aéronautique. Venez découvrir mon métier !"],"Nicolas",Z,"interact","PNJ","PNJ_Nicolas"),new i("Pnjs/MetierRoom/Cari","Appuyez sur espace pour parler à Jordan !",["Bonjour, moi c’est Jordan et je suis concepteur de systèmes embarqués. Vous connaissez ? Non ? Alors venez découvrir mon métier !"],"Cari",Q,"interact","PNJ","PNJ_Cari"),new f("Pnjs/MetierRoom/Alexandra","Appuyez sur espace pour parler à Alexandra !",["Bonjour, moi c’est Alexandra et je suis ingénieur de production. Je vous invite à découvrir mon parcours et mon quotidien dans cette vidéo.","Avant ça, si tu cherches une personne qui possèderait une clef","Il est parti vers le parc et avait du orange sur lui"],["Bonjour, moi c’est Alexandra et je suis ingénieur de production. Je vous invite à découvrir mon parcours et mon quotidien dans cette vidéo."],"IngProd",G,()=>WA.player.state.startSideQuestStep4!=null&&WA.player.state.startSideQuestStep4==!0?(WA.player.state.TalkHint_1=!0,!0):!1,"interact","PNJ","PNJ_Alexandra"),new i("Pnjs/MetierRoom/ApprentiRobot","Appuyez sur espace pour regarder la vidéo !",["Thomas est apprenti dans la robotique. Découvrez son métier en vidéo ! "],"ApprentiRobot",U,"interact","Video","Video_Thomas"),new i("Pnjs/MetierRoom/ApprentiChaudron","Appuyez sur espace pour regarder la vidéo !",["Découvrez en vidéo le métier de Pauline, apprentie en chaudronnerie navale."],"ApprentiChaudronniere",K,"interact","Video","Video_Pauline"),new d("Pnjs/MetierRoom/chatBot_1","Appuyez sur espace pour discuter avec Yumi !",X,"right","interact","PNJ","PNJ_YumiMetier"),new i("Pnjs/ShowRoom/Anais","Appuyez sur espace pour parler à Anaïs !",["Salut, moi c’est Anaïs et je suis technicienne méthodes. Si vous ne savez pas en quoi ça consiste : venez, je vous montre !"],"Anais",$,"interact","PNJ","PNJ_Anais"),new i("Pnjs/ShowRoom/DessinateurIndu","Appuyez sur espace pour regarder la vidéo !",["Ronan est dessinateur industriel. Découvrez son métier en vidéo !"],"DessinateurIndu",ee,"interact","Video","Video_Ronan"),new i("Pnjs/ShowRoom/RespR&D","Appuyez sur espace pour regarder la vidéo !",["Isabelle est responsable R&D. Découvrez son métier en vidéo !"],"RespRD",te,"interact","Video","Video_Isabelle"),new i("Pnjs/ShowRoom/AjustMonteur","Appuyez sur espace pour regarder la vidéo !",["C'est quoi le métier d'ajusteur-monteur ? Pour le découvrir c'est ici."],"AjustMonteur",re,"interact","Video","Video_Nicolas"),new i("Pnjs/ShowRoom/DataScientist","Appuyez sur espace pour regarder la vidéo !",["C'est quoi le métier de data scientist ? Pour le découvrir c'est ici."],"DataScientist",se,"interact","Video","Video_DataScientist"),new i("Pnjs/ShowRoom/ChargeAff","Appuyez sur espace pour regarder la vidéo !",["Quel est le rôle du chargé d'affaires ? Réponse en vidéo !"],"ChargAff",ae,"interact","Video","Video_ChargeAff"),new i("Pnjs/ShowRoom/RespBureau","Appuyez sur espace pour regarder la vidéo !",["Comment devenir responsable bureau d'études et méthodes ? Réponse en vidéo !"],"RespBureau",ie,"interact","Video","Video_RespBureau"),new d("Pnjs/ShowRoom/ITWBot","Appuyez sur espace pour discuter avec Yumi Journaliste !",ne,"right","interact","PNJ","PNJ_YumiJournaliste"),new i("Pnjs/ShowRoom/WorldSkills","Appuyez sur espace pour regarder la vidéo !",["Connaissez-vous les WorldSkills, la grande compétition des métiers ? Et bien c'est le moment de les découvrir en visionnant la saison 1 de 'WorldSkills, La Série', réalisée avec les apprentis de l'industrie ! Accrochez-vous, sensations fortes garanties."],"WorldSkills",oe,"interact","Video","Video_WorldSkills"),new f("Pnjs/ParkInside/Maeva","Appuyez sur espace pour parler à Maëva !",["Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !","Avant ça, si tu cherches une personne possédant une clef.","Je l'ai vu partir vers la cafeteria, il avait du bleu sur lui"],["Hello, moi c’est Maëva : le vidéaste Tibo InShape est revenu en Bac Pro pour découvrir mon métier d’ajusteur-monteur, ainsi que les autres métiers de l'industrie aéronautique. Regardez ce que ça donne !"],"MaevaText",ue,()=>WA.player.state.startSideQuestStep4!=null&&WA.player.state.startSideQuestStep4==!0?(WA.player.state.TalkHint_2=!0,!0):!1,"interact","PNJ","PNJ_Maeva"),new d("Pnjs/ParkInside/Hihacks","Appuyez sur espace pour discuter avec Romane !",pe,"right","interact","PNJ","PNJ_Romane"),new d("Pnjs/ParkInside/Influence","Appuyez sur espace pour discuter avec Yumi Créatrice !",ce,"right","interact","PNJ","PNJ_YumiCreatrice"),new i("Pnjs/LaboRoom/Hihacks_labo","Appuyez sur espace pour parler à Henry !",["Salut ! Moi c’est Henry Hihacks et grâce à Thiaifène, apprenti en BTS Maintenance des Systèmes, j’ai réalisé un projet complètement fou... Vous êtes curieux de le découvrir ? Alors regardez ma vidéo !"],"Hihacks_labo",le,"interact","PNJ","PNJ_HenryHihacks"),new d("Pnjs/LaboRoom/YumiLab","Appuyez sur espace pour discuter avec Yumi Scientifique !",g,"right","interact","PNJ","PNJ_YumiScientifique"),new i("Pnjs/DinningRoom/Apprenti_1","Appuyez sur espace pour parler à Magaly !",["Bonjour, moi c’est Magaly, et grâce à l’industrie j’ai réussi à combiner ma passion et mon métier. Vous voulez savoir comment ? Allez, j'enfile mon casque et je vous montre !"],"Apprenti_1",de,"interact","PNJ","PNJ_Magaly"),new i("Pnjs/DinningRoom/Apprenti_2","Appuyez sur espace pour parler à Joris !",["Salut, moi c’est Joris. Le point commun entre ma passion et mon métier, c’est l’esprit d’équipe. Vous voulez en savoir plus ? Alors regardez cette vidéo !"],"Apprenti_2",me,"interact","PNJ","PNJ_Joris"),new i("Pnjs/DinningRoom/Apprenti_3","Appuyez sur espace pour parler à Julien !",["Bonjour, moi c’est Julien et je suis passionné d'informatique : j'en ai fait mon métier ! Découvrez mon parcours en vidéo."],"Apprenti_3",he,"interact","PNJ","PNJ_Julien"),new i("Pnjs/DinningRoom/Apprenti_4","Appuyez sur espace pour parler à Fanny !",["Moi c’est Fanny, et grâce à l'alternance j'ai pu effectuer un semestre universitaire à l'étranger. Ça vous intéresse ? Alors venez découvrir mon parcours !"],"Apprenti_4",Ae,"interact","PNJ","PNJ_Fanny"),new f("Pnjs/DinningRoom/Apprenti_5","Appuyez sur espace pour parler à Nassredine !",["Bonjour, je m’appelle Nasreddine et ce que j'aime dans mon métier c'est le côté à la fois pointu et technique. Regardez cette vidéo pour mieux comprendre !","Avant ça, si tu cherches une personne possédant une clef.","Il est parti vers le hub des métiers avec le ventre bien rempli."],["Bonjour, je m’appelle Nasreddine et ce que j'aime dans mon métier c'est le côté à la fois pointu et technique. Regardez cette vidéo pour mieux comprendre !"],"Apprenti_5",ve,()=>WA.player.state.startSideQuestStep4!=null&&WA.player.state.startSideQuestStep4==!0?(WA.player.state.TalkHint_3=!0,!0):!1,"interact","PNJ","PNJ_Nassredine"),new i("Pnjs/DinningRoom/Apprenti_6","Appuyez sur espace pour parler à Mathis !",["Salut, moi c’est Mathis, j'ai 19 ans et je suis apprenti en conception industrielle. Vous connaissez ? Non ? Alors je vous invite à découvrir mon métier en vidéo !"],"Apprenti_6",be,"interact","PNJ","PNJ_Mathis"),console.log("CACACACA949494");function n(c){WA.room.onEnterLayer(c).subscribe(()=>{WA.room.showLayer(c),WA.onInit().then(()=>{WA.nav.goToRoom("#Depart")})})}let u=23;for(let c=1;c<u+1;c++)n("HideTile/TrappedRoom/Hole_"+c);new T("Pnjs/TrappedRoom/YumiDepart_1","Appuyez sur espace pour discuter avec Yumi !",g,"right",()=>{var c="TalkToYumiTrappedRoom";return WA.player.state[c]==null&&(console.log("VARIABLE YUMMI"),WA.player.state.saveVariable(c,!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"})),!0},"interact","PNJ","PNJ_YumiDepartTrappedRoom"),new j("Items/TrappedRoom/CardAccess","Appuyez sur espace pour ramasser la carte d'accès",["Vous avez récuperé la carte d'accès"],["Vous devez d'abord parler à Yumi avant de le ramasser"],"cardAccessText","cardAccess",()=>WA.player.state.TalkToYumiTrappedRoom!=null,"interract","Object","Object_cardAccess"),new b("InteractAction/TrappedRoom/FinalDoor","Appuyez sur espace pour insérer la carte d'accès",["La porte est ouverte"],["Vous devez avoir la carte d'accès"],"doorTrappedRoomText",()=>WA.player.state.cardAccess!=null&&WA.player.state.cardAccess==!0?(WA.room.hideLayer("beforePlayer/TrappedRoom/DoorFinal"),WA.room.hideLayer("beforePlayer/TrappedRoom/CollideDoorFinal"),WA.room.showLayer("beforePlayer/TrappedRoom/DoorFinalOpen"),WA.player.state.saveVariable("cardAccessStep3",!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"}),console.log("ACCESS STEP 3",WA.player.state.cardAccessStep3),!0):(console.log("KO_2"),!1),"interract","InteractAction","Object_doorTrappedRoom"),h("Zones/ZoneStep3",["cardAccessStep3"],"EscapeGameText"),new y("Items/LabIndustry/CoatRackHint","Appuyez sur espace pour ramasser l'indice",["Vous avez récuperé l'indice"],"coatRackText","coatRackHint","interract","Object","Object_coatRackItem"),new y("Items/LabIndustry/CafetHint","Appuyez sur espace pour ramasser l'indice",["Vous avez récuperé l'indice"],"cafetText","cafetHint","interract","Object","Object_keyItem"),new y("Items/LabIndustry/Key","Appuyez sur espace pour prendre la clef",["Vous avez récuperé la clef du coffre"],"keyText","keyItem","interract","Object","Object_keyItem"),new y("Items/LabIndustry/BinHint","Appuyez sur espace pour ramasser l'indice",["Vous avez récuperé l'indice"],"binText","binHint","interract","Object","Object_binItem"),new j("Items/LabIndustry/ChestHint","Appuyez sur espace pour ouvrir le coffre",["Vous avez récuperé l'indice"],["Vous n'avez pas la clef du coffre"],"chestText","chestHint",()=>WA.player.state.keyItem!=null&&WA.player.state.keyItem==!0,"interract","Object","Object_chestItem"),new b("InteractAction/LabIndustry/TrapDoor","Appuyez sur espace pour ouvrir la trappe",["Vous entrez dans la trappe"],["Vous devez rassemblé les 4 indices avant de pouvoir d'ouvrir la trappe"],"trapDoorText",()=>{if(console.log("Indice : ",WA.player.state.cafetHint),console.log("Indice : ",WA.player.state.chestHint),console.log("Indice : ",WA.player.state.coatRackHint),console.log("Indice : ",WA.player.state.binHint),WA.player.state.cafetHint!=null&&WA.player.state.cafetHint==!0&&WA.player.state.chestHint!=null&&WA.player.state.chestHint==!0&&WA.player.state.coatRackHint!=null&&WA.player.state.coatRackHint==!0&&WA.player.state.binHint!=null&&WA.player.state.binHint==!0){WA.player.state.saveVariable("cardAccessStep4",!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"});let c=window.location.href.split("/");return c[c.length-1]="map2.tmj",WA.nav.goToRoom(c.join("/")),!0}else return console.log("KO_2"),!1},"interract","InteractAction","Object_trapDoor");const p="Zones/ZoneStep4",l="Step4/FirstTP/ZoneFirstTP",A="Step4/SecondTP/ZoneSecondTP",P="Step4/ThirdTP/ZoneThirdTP",k="Step4/FourthTP/ZoneFourthTP",W="Step4/FifthTP/ZoneFifthTP",_="Step4/Last/ZoneLast";new T("Step4/Yumi","Appuyez sur espace pour discuter avec Yumi !",g,"right",()=>{var c="TalkToYumiStep4";return WA.player.state[c]==null&&(console.log("HEHEHEHE"),WA.player.state.saveVariable(c,!0,{public:!0,persist:!0,ttl:720*3600,scope:"world"})),!0},"interact","PNJ","PNJ_YumiStep4"),h(p,["cardAccessStep4"],"EscapeGameText"),v("Step4/TpDepart",["cardAccessZoneFirstTP"]),o("Step4/TpDepart","#TpDepart_1",()=>WA.player.state.cardAccessStep4!=null&&WA.player.state.TalkToYumiStep4!=null,"tpDepartStep4","Vous devez parler à Yumi"),h(l,["cardAccessZoneFirstTP"],"EscapeGameText"),v("Step4/FirstTP/Tp1-3",["cardAccessZoneSecondTP"]),o("Step4/FirstTP/Tp1-1","#Reset",()=>!0,"tpDepart1Step4"),o("Step4/FirstTP/Tp1-2","#Reset",()=>!0,"tpDepart1Step4"),o("Step4/FirstTP/Tp1-3","#TpDepart_2",()=>WA.player.state.cardAccessZoneFirstTP!=null,"tpDepart1Step4"),h(A,["cardAccessZoneSecondTP"],"EscapeGameText"),v("Step4/SecondTP/Tp2-2",["cardAccessZoneThirdTP"]),o("Step4/SecondTP/Tp2-1","#Reset",()=>!0,"tpDepart2Step4"),o("Step4/SecondTP/Tp2-2","#TpDepart_3",()=>WA.player.state.cardAccessZoneSecondTP!=null,"tpDepart2Step4"),o("Step4/SecondTP/Tp2-3","#Reset",()=>!0,"tpDepart2Step4"),h(P,["cardAccessZoneThirdTP"],"EscapeGameText"),v("Step4/ThirdTP/Tp3-1",["cardAccessZoneFourthTP"]),o("Step4/ThirdTP/Tp3-1","#TpDepart_4",()=>WA.player.state.cardAccessZoneThirdTP!=null,"tpDepart3Step4"),o("Step4/ThirdTP/Tp3-2","#Reset",()=>!0,"tpDepart3Step4"),o("Step4/ThirdTP/Tp3-3","#Reset",()=>!0,"tpDepart3Step4"),h(k,["cardAccessZoneFourthTP"],"EscapeGameText"),v("Step4/FourthTP/Tp4-2",["cardAccessZoneFifthTP"]),o("Step4/FourthTP/Tp4-1","#Reset",()=>!0,"tpDepart2Step4"),o("Step4/FourthTP/Tp4-2","#TpDepart_5",()=>WA.player.state.cardAccessZoneFourthTP!=null,"tpDepart2Step4"),o("Step4/FourthTP/Tp4-3","#Reset",()=>!0,"tpDepart2Step4"),h(W,["cardAccessZoneFifthTP"],"EscapeGameText"),v("Step4/FifthTP/Tp5-3",["cardAccessZoneFinalStep4"]),o("Step4/FifthTP/Tp5-1","#Reset",()=>!0,"tpDepart2Step5"),o("Step4/FifthTP/Tp5-2","#Reset",()=>!0,"tpDepart2Step5"),o("Step4/FifthTP/Tp5-3","#TpArrive",()=>WA.player.state.cardAccessZoneFifthTP!=null,"tpDepart2Step5"),o("Step4/FifthTP/Tp5-4","#Reset",()=>!0,"tpDepart2Step5"),h(_,["cardAccessZoneFinalStep4"],"EscapeGameText"),o("Step4/Last/TpBack","#start",()=>!0,"tpBackFinal"),new f("Step4/Last/Redbutton","Appuyez sur espace pour ouvrir le formulaire !",["Bravo ! Tu viens de sauver le monde Yumi !!"],["Erreur dialogue"],"redButtonTxt",z,()=>(WA.room.hideLayer("Step4/Last/ButtonNotPressed"),!0),"right","interact","Form","Formulaire_final")});new b("Step4bis/Didier","Appuyez sur espace pour parler à Didier !",["Excellent travail ! Vous avez vraiment le sens du devoir.","Vous avez vraiment sauvé la mise. En signe de ma gratitude, n'hésitez pas à prendre l'un des artefacts à l'intérieur du coffre. Considérez-le comme une récompense pour vos services."],["Bonjour, aventurier. J'ai besoin de votre aide. Mon coffre a été volé, et je suis sûr que ce fourbe en est responsable.","Nous avons eu une dispute récente, et il a juré de se venger. Aujourd'hui, je me suis rendu compte que la clé de mon coffre avait disparu. Il doit l'avoir prise pour me nuire.","À l'intérieur se trouvent des artefacts rares que j'ai collectés au fil des ans. Ils ont une grande valeur pour moi, et je ne peux pas laisser ce vaurien s'en tirer ainsi.","Trouvez cette clé et ramenez-la-moi, s'il vous plaît."],"DidierText",()=>(console.log("KEY: ",WA.player.state.chestDidierKey),WA.player.state.startSideQuestStep4!=null&&WA.player.state.startSideQuestStep4==!0&&WA.player.state.chestDidierKey!=null&&WA.player.state.chestDidierKey==!0?(WA.player.state.allowOpenChest=!0,!0):(WA.player.state.startSideQuestStep4=!0,console.log("Player must find the key first"),!1)),"interact","PNJ","Didier");new b("Step4bis/ChestDidier","Appuyez sur espace pour ouvrir le coffre !",["Vous avez récupéré une mystérieuse séquence !"],["Vous n'avez pas l'autorisation d'ouvrir le coffre !"],"ChestDidierText",()=>WA.player.state.allowOpenChest==!0,"interact","Object","Object_sequence");new b("Step4bis/Arnaud","Appuyez sur espace pour parler à Arnaud !",["Que me veux-tu ?","Arnaud semble un peu nerveux, mais essaie de paraître décontracté.","Cherches-tu quelque chose en particulier, ou c'est juste une visite impromptue ?","Vous remarquez que Arnaud évite le regard et semble mal à l'aise.","Bon, ok, j'avoue. J'ai pris la clé du coffre de l'autre gars.","J'étais fâché, tu vois. Mais maintenant que tu es là, je suppose que tu veux la clé, n'est-ce pas ?","Tiens, prends-la. Je ne veux pas de problèmes. J'espère juste que ça ne va pas empirer avec l'autre type.","Vous avez récupérez la clef, allez parler à Didier"],["Cette chaise est vraiment confortable !","Tu cherches quelques choses ?"],"ArnaudText",()=>WA.player.state.startSideQuestStep4!=null&&WA.player.state.startSideQuestStep4==!0&&WA.player.state.TalkHint_1!=null&&WA.player.state.TalkHint_1==!0&&WA.player.state.TalkHint_2!=null&&WA.player.state.TalkHint_2==!0&&WA.player.state.TalkHint_3!=null&&WA.player.state.TalkHint_3==!0?(WA.player.state.chestDidierKey=!0,!0):!1,"interact","PNJ","Arnaud");console.log("48SHHH");
