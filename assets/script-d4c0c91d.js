var d=Object.defineProperty;var m=(n,t,o)=>t in n?d(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o;var p=(n,t,o)=>(m(n,typeof t!="symbol"?t+"":t,o),o);import"https://unpkg.com/@workadventure/scripting-api-extra@^1";const h="https://64ix.github.io/WA-Edited-Tutorial/tutorial.html",w="https://64ix.github.io/WA-Edited-Tutorial/pong.html",v="https://64ix.github.io/WA-Edited-Tutorial/shooting-hoops/dist/index.html",b="https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html",j="https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn",y="https://chat.csml.dev/s/nyf8dzadrsfgpyk11xotf451cpw7y3ts",A="https://chat.csml.dev/s/8vkjunics58v1iooxyh81mok17zjbcqs",g="https://chat.csml.dev/s/2bxcjwpr0pzbufgnptzcejhomq4ajror",P="https://www.youtube.com/embed/9QDd6dH0-Xc",k="https://www.youtube.com/embed/pDMzhgu_Qbo",z="https://www.youtube.com/embed/mgX4eHVDlTc",f="https://www.youtube.com/embed/eE3kWcMZsuE",M="https://www.youtube.com/embed/9QDd6dH0-Xc",c="https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS",L="https://www.youtube.com/embed/8HlmZkJX_UQ?si=l0-8bOC_kMy2YYvv",x="https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8",S="https://www.youtube.com/embed/yz_6sGfsP2Q?si=BRitYLOYLMKJgEqr",V="https://chat.csml.dev/s/klex5ttuh9bmpen8gyo4tssus4liqxgb",B="https://www.youtube.com/embed/eBuPRPSBXlc?si=iMw0riL5KJyYjfIe",I="https://www.youtube.com/embed/eBuPRPSBXlc?si=iMw0riL5KJyYjfIe",R="https://www.youtube.com/embed/eBuPRPSBXlc?si=iMw0riL5KJyYjfIe",q="https://www.youtube.com/embed/IEtX1_vx98g?si=wt_aAReOPxkrhaAO",_="https://www.youtube.com/embed/dFBHOiedwkQ?si=3CJQ8h6MYL10nkSg",D="https://www.youtube.com/embed/oJQcLWtGmDY?si=wcUwCbNc-Yw7bSS-",W="https://www.youtube.com/embed/ixlo9WwbvuE?si=hhiUylKLOuW5i-Dj",C="https://www.youtube.com/embed/vVhIHuG0dgI?si=APRxPS1Q6Ws3Vs40",J="https://www.youtube.com/embed/YzXnbdKdbwY?si=5Jt9ZcvzwENDE7nA",U="https://chat.csml.dev/s/bpzoedzc279smw2i649rwhtst9rguvva",E="https://www.youtube.com/embed/videoseries?si=wKcics6QWpDWdVob&amp;list=PLEe-8ZKtOy6Oxx1qU_qRhdcBmy-lXBtqQ",Y="https://www.youtube.com/embed/3An5XwFbKgM?si=Sm7VNc1OKJpUxyQz",H="https://www.youtube.com/embed/3yAL-w1U-6s?si=EBabp9OWFY4KbO8s",Q="https://chat.csml.dev/s/imk4tlho3spmxlis9e1ejs3wlita2aco",T="https://www.youtube.com/embed/zZL1SjBGkNc?si=_z_dfadNSmzm-qOr",N="https://www.youtube.com/watch?v=BChzaJv_JzQ&t=102s",O="https://www.youtube.com/embed/bIG_XU7XRbw?si=TmzUGmFJ11DA-Mhz",G="https://www.youtube.com/embed/gxCuiA3-L4Q?si=15Pm8Vsp_im5XbLO",K="https://www.youtube.com/embed/XZlUUGS7qng?si=L9sT1Pkp2bRlEUVV",X="https://www.youtube.com/embed/DU7kScvKs6w?si=4eaGA75dDZP0dIxT",F="https://www.youtube.com/embed/G4lEOWcPYv4?si=wa9eJCX3TbsLQZS2";WA.onInit().then(()=>{WA.controls.disablePlayerProximityMeeting()});class l{constructor(t,o){this.layer=t,this.message=o,this.setup()}setup(){WA.room.onEnterLayer(this.layer).subscribe(()=>{this.triggerMessage=WA.ui.displayActionMessage({message:this.message,callback:()=>{this.interact()}})}),WA.room.onLeaveLayer(this.layer).subscribe(()=>{this.triggerMessage!==void 0&&this.close()})}interact(){}close(){this.triggerMessage!==void 0&&this.triggerMessage.remove(),this.exit()}exit(){}}class i extends l{constructor(t,o,r,u){super(t,o),this.object=u,this.dialog=r,this.state=0}interact(){this.open()}open(){this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:t=>{this.next()}}]),this.finished=!1}next(){this.state++,this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0,this.state>=this.dialog.length?(this.finished=!0,this.state=0):this.open()}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0}}class e extends l{constructor(o,r,u,a){super(o,r);p(this,"position","right");this.modal=u,a!==void 0&&(this.position=a)}interact(){this.open()}open(){WA.ui.modal.openModal({title:"Yumi",src:this.modal,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:this.position})}exit(){WA.ui.modal.closeModal()}}class s extends i{constructor(t,o,r,u,a){super(t,o,r,u),this.video=a}async next(){this.finished=!0,this.currentState.close(),this.currentState=void 0,await WA.nav.openCoWebSite(this.video,!0,"",50,1,!0,!1)}}WA.ui.modal.openModal({title:"Tutorial",src:h,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"});WA.room.onEnterLayer("Zones/Help").subscribe(()=>{WA.controls.restorePlayerProximityMeeting()});WA.room.onLeaveLayer("Zones/Help").subscribe(()=>{WA.controls.disablePlayerProximityMeeting()});WA.ui.actionBar.addButton({id:"tutorial-btn",label:"Tutoriel",callback:n=>{tutorial()}});const Z=["Ahoy !","Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?    ","Allez, on met les voiles !","La France possède le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !​","Dans l’industrie navale, on fabrique des porte-avions, des sous-marins nucléaires, des frégates, des bateaux de pêche, mais aussi des hydroliennes et des éoliennes flottantes.","En France, on est très fort pour les constructions complexes, comme les paquebots, les navires passagers et les navires militaires.","Donc on a besoin de compétences techniques pointues pour concevoir, produire et entretenir des navires de plus en plus performants et écologiques.","Cela concerne une grande diversité de métiers (plus de 300 !) qui sont en pleine évolution en raison des mutations technologiques et de l’émergence de nouveaux marchés. ","Bref l’horizon est prometteur avec de grosses perspectives de développement dans les énergies renouvelables, les ressources maritimes et les biocarburants.​","Les océans sont un des enjeux stratégiques de notre siècle, matelot !​","Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?","Alors n’hésite pas à parler aux autres Yumi, bon vent !​"],$=["Hello !","Vous voulez faire un tour de MoonBike ?","D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie.","L’industrie, c'est le secteur qui innove le plus en France, avec 72% des dépenses de R&D françaises.","Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovations qui améliorent la production et le quotidien de celles et ceux qui y travaillent.​    ","Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail. Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.    ","Le MoonBike en est un bel exemple ! C’est le premier snowbike 100% électrique du marché : un mode de déplacement beaucoup plus écologique.​","Allez maintenant vous pouvez aller le découvrir, tout schuss.    "],ee=["Bonjour à vous","Je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.​","Par exemple, j'ai pris part au projet AGV, automotrice à grande vitesse ! C'est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et plus seulement aux extrémités.","Grâce à cette innovation, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie. Cela permet de parcourir 1000 km en 3 heures ! Impressionnant non ?","J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer. Il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.​","En ce moment, je travaille sur un nouveau projet : le Showroom de l’industrie, où je vais pouvoir mettre en lumière toutes les inventions et les témoignages de professionnels de l’industrie !​","Il n’est pas encore ouvert au public, mais il le sera bientôt.","Je vous tiendrai au courant !","À plus tard !"];new e("Pnjs/pnj1","Appuyez sur espace pour discuter avec Yumi !",y);new i("Pnjs/pnj2","Appuyez sur espace pour discuter avec le Capitaine !",Z,"pnj2text");new i("Pnjs/pnj3","Appuyez sur espace pour discuter avec la Skieuse !",$,"pnj3text");new e("Pnjs/pnj4","Appuyez sur espace pour discuter avec la Cheffe de chantier !",A);new i("Pnjs/pnj5","Appuyez sur espace pour discuter avec la Scientifique !",ee,"pnj5text");new e("Pnjs/pnj6","Appuyez sur espace pour discuter avec l'Ingénieure !",g);new s("Pnjs/MoonbikePNJ","Appuyez sur espace pour parler à Anthony !",["Bonjour, moi c’est Anthony, je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet."],"Moonbike",f);new s("Pnjs/Jeune1","Appuyez sur espace pour parler à Antonin !",["Salut moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune1",P);new s("Pnjs/Jeune2","Appuyez sur espace pour parler à Killian !",["Salut moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune2",k);new s("Pnjs/Jeune3","Appuyez sur espace pour parler à Manon!",["Bonjour, moi c'est Manon et pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune3",z);new e("Pnjs/Formulaire","Appuyez sur espace pour ouvrir le formulaire !",j);new s("Pnjs/Statue","Appuyez sur espace pour intéragir avec la statue !",["Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine"],"Statue","https://www.youtube.com/embed/APBCjKv6nvA");new e("Zones/Vidéo","Appuyez sur espace pour regarder la vidéo !",M,"center");new i("Pnjs/Panneau Pont","Appuyez sur espace pour intéragir avec le panneau !",["Au Nord, la gare. Au Sud, la place principale."],"Panneau Pont");new i("Pnjs/Panneau Gare","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez à la Gare du Monde de Yumi"],"Panneau Gare");new i("Pnjs/Panneau Chemin","Appuyez sur espace pour intéragir avec le panneau !",["À l'Ouest, la place principale. Au Sud, le port."],"Panneau Chemin");new i("Pnjs/Panneau Quai","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez au Port du Monde de Yumi"],"Panneau Quai");new i("Pnjs/Panneau Terrasse","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez sur la place principale"],"Panneau Terrasse");new e("Pnjs/Pong","Appuyez sur espace pour jouer au Pong !",w,"center");new e("Pnjs/Basket","Appuyez sur espace pour jouer au Basket !",v,"center");new e("Pnjs/Piano","Appuyez sur espace pour jouer du piano !",b,"center");new s("Pnjs/MetierRoom/Lauak","Appuyez sur espace pour parler à Lauak!",["Bonjour, moi c’est Lauak !"],"Lauak",c);new s("Pnjs/MetierRoom/Cari","Appuyez sur espace pour parler à Cari!",["Bonjour, moi c’est Cari !"],"Cari",c);new s("Pnjs/MetierRoom/IngProd","Appuyez sur espace pour parler à l'ingénieur de production!",["Bonjour, je suis l'ingénieur de production!"],"IngProd",L);new e("Pnjs/MetierRoom/ApprentiRobot","Appuyez sur espace pour regarder la vidéo !",x,"center");new e("Pnjs/MetierRoom/ApprentiChaudron","Appuyez sur espace pour regarder la vidéo !",S,"center");new e("Pnjs/MetierRoom/chatBot_1","Appuyez sur espace pour discuter avec Yumi!",V);new s("Pnjs/ShowRoom/Emma","Appuyez sur espace pour parler à Emma!",["Bonjour, moi c’est Emma !"],"Emma",B);new e("Pnjs/ShowRoom/Liebherr_aerospace","Appuyez sur espace pour regarder la vidéo !",I,"center");new e("Pnjs/ShowRoom/Otech","Appuyez sur espace pour regarder la vidéo !",R,"center");new e("Pnjs/ShowRoom/DessinateurIndu","Appuyez sur espace pour regarder la vidéo !",q,"center");new e("Pnjs/ShowRoom/RespR&D","Appuyez sur espace pour regarder la vidéo !",_,"center");new e("Pnjs/ShowRoom/AjustMonteur","Appuyez sur espace pour regarder la vidéo !",D,"center");new e("Pnjs/ShowRoom/DataScientist","Appuyez sur espace pour regarder la vidéo !",W,"center");new e("Pnjs/ShowRoom/ChargeAff","Appuyez sur espace pour regarder la vidéo !",C,"center");new e("Pnjs/ShowRoom/RespBureau","Appuyez sur espace pour regarder la vidéo !",J,"center");new e("Pnjs/ShowRoom/ITWBot","Appuyez sur espace pour discuter avec Yumi!",U);new e("Pnjs/ShowRoom/WorldSkills","Appuyez sur espace pour regarder la vidéo !",E,"center");new s("Pnjs/ParkInside/Doigby","Appuyez sur espace pour parler à Doigby!",["Coucou tout le monde, c'est Doigby et aujourd'hui je vous fait découvrir les métiers de l'UIMM!"],"Doigby",Y);new s("Pnjs/ParkInside/Tiboinshape","Appuyez sur espace pour parler à Tiboinshape!",["Daaamn la teamShape !!, aujourd'hui je vous fait découvrir les métiers que l'on retrouve à l'UIMM !"],"Tiboinshape",H);new e("Pnjs/ParkInside/Hihacks","Appuyez sur espace pour discuter avec Hihacks!",Q);new s("Pnjs/LaboRoom/DrNozman","Appuyez sur espace pour parler à DrNozman!",["Salut à tous !! Ici Nozman, aujourd'hui je vais vous présenter une vidéo un peu spécial concernant l'UIMM"],"DrNozman",T);new s("Pnjs/LaboRoom/Hihacks_labo","Appuyez sur espace pour parler à Hihacks!",["Bonjour, c'est moi Hihacks. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM"],"Hihacks_labo",N);new s("Pnjs/DinningRoom/Apprenti_1","Appuyez sur espace pour parler à Magaly!",["Bonjour, c'est moi Magaly. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM"],"Apprenti_1",O);new s("Pnjs/DinningRoom/Apprenti_2","Appuyez sur espace pour parler à Joris!",["Bonjour, c'est moi Joris. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM"],"Apprenti_2",G);new s("Pnjs/DinningRoom/Apprenti_3","Appuyez sur espace pour parler à Julien!",["Bonjour, c'est moi Julien. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM"],"Apprenti_3",K);new s("Pnjs/DinningRoom/Apprenti_4","Appuyez sur espace pour parler à Fanny!",["Bonjour, c'est moi Fanny. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM"],"Apprenti_4",X);new s("Pnjs/DinningRoom/Apprenti_5","Appuyez sur espace pour parler à Nassredine!",["Bonjour, c'est moi Nassredine. Aujourd'hui je vais vous présenter une vidéo concernant l'UIMM"],"Apprenti_5",F);