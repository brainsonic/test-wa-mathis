var d=Object.defineProperty;var m=(i,e,t)=>e in i?d(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var p=(i,e,t)=>(m(i,typeof e!="symbol"?e+"":e,t),t);import"https://unpkg.com/@workadventure/scripting-api-extra@^1";const h="https://64ix.github.io/WA-Edited-Tutorial/tutorial.html",v="https://64ix.github.io/WA-Edited-Tutorial/pong.html",g="https://64ix.github.io/WA-Edited-Tutorial/shooting-hoops/dist/index.html",b="https://64ix.github.io/WA-Edited-Tutorial/piano/dist/index.html",j="https://0eb89b36.sibforms.com/serve/MUIFAAOmzgE4ndFT9kNM-uBs4YlJeU3A1QwPa7YPDBm_4l4UD0FQQoYC0ux_H4XuTeKySpVQcQo2jya0tZpk6_txstHp_WI3cITYRWoILzlf-gvw2SzeYepvtFGVDghH2mm6NG1VZcxRV5fW8C1xa1Gn_UECrK-eMhv0SmFNOVo54fmNEHLNrJIUlBtQw9H96pu0IPmE-xMcxnvn",w="https://chat.csml.dev/s/nyf8dzadrsfgpyk11xotf451cpw7y3ts",A="https://chat.csml.dev/s/8vkjunics58v1iooxyh81mok17zjbcqs",y="https://chat.csml.dev/s/2bxcjwpr0pzbufgnptzcejhomq4ajror",f="https://www.youtube.com/embed/9QDd6dH0-Xc",P="https://www.youtube.com/embed/pDMzhgu_Qbo",k="https://www.youtube.com/embed/mgX4eHVDlTc",z="https://www.youtube.com/embed/eE3kWcMZsuE",x="https://www.youtube.com/embed/9QDd6dH0-Xc",l="https://www.youtube.com/embed/dO4SjOcNDTk?si=3i_0ivZqE0k4L9HS",M="https://www.youtube.com/embed/8HlmZkJX_UQ?si=l0-8bOC_kMy2YYvv",q="https://www.youtube.com/embed/CZae_izqWiw?si=QQiQ9J4Pc7s2gUk8",S="https://www.youtube.com/embed/yz_6sGfsP2Q?si=BRitYLOYLMKJgEqr",C="https://chat.csml.dev/s/klex5ttuh9bmpen8gyo4tssus4liqxgb";WA.onInit().then(()=>{WA.controls.disablePlayerProximityMeeting()});class c{constructor(e,t){this.layer=e,this.message=t,this.setup()}setup(){WA.room.onEnterLayer(this.layer).subscribe(()=>{this.triggerMessage=WA.ui.displayActionMessage({message:this.message,callback:()=>{this.interact()}})}),WA.room.onLeaveLayer(this.layer).subscribe(()=>{this.triggerMessage!==void 0&&this.close()})}interact(){}close(){this.triggerMessage!==void 0&&this.triggerMessage.remove(),this.exit()}exit(){}}class n extends c{constructor(e,t,r,u){super(e,t),this.object=u,this.dialog=r,this.state=0}interact(){this.open()}open(){this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:this.state<this.dialog.length-1?"Suivant":"Fermer",className:"primary",callback:e=>{this.next()}}]),this.finished=!1}next(){this.state++,this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0,this.state>=this.dialog.length?(this.finished=!0,this.state=0):this.open()}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close(),this.currentState=void 0}}class s extends c{constructor(t,r,u,a){super(t,r);p(this,"position","right");this.modal=u,a!==void 0&&(this.position=a)}interact(){this.open()}open(){WA.ui.modal.openModal({title:"Yumi",src:this.modal,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:this.position})}exit(){WA.ui.modal.closeModal()}}class o extends n{constructor(e,t,r,u,a){super(e,t,r,u),this.video=a}async next(){this.finished=!0,this.currentState.close(),this.currentState=void 0,await WA.nav.openCoWebSite(this.video,!0,"",50,1,!0,!1)}}WA.ui.modal.openModal({title:"Tutorial",src:h,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"});const L=["Ahoy !","Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie navale ?    ","Allez, on met les voiles !","La France possède le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !​","Dans l’industrie navale, on fabrique des porte-avions, des sous-marins nucléaires, des frégates, des bateaux de pêche, mais aussi des hydroliennes et des éoliennes flottantes.","En France, on est très fort pour les constructions complexes, comme les paquebots, les navires passagers et les navires militaires.","Donc on a besoin de compétences techniques pointues pour concevoir, produire et entretenir des navires de plus en plus performants et écologiques.","Cela concerne une grande diversité de métiers (plus de 300 !) qui sont en pleine évolution en raison des mutations technologiques et de l’émergence de nouveaux marchés. ","Bref l’horizon est prometteur avec de grosses perspectives de développement dans les énergies renouvelables, les ressources maritimes et les biocarburants.​","Les océans sont un des enjeux stratégiques de notre siècle, matelot !​","Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?","Alors n’hésite pas à parler aux autres Yumi, bon vent !​"],V=["Hello !","Vous voulez faire un tour de MoonBike ?","D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie.","L’industrie, c'est le secteur qui innove le plus en France, avec 72% des dépenses de R&D françaises.","Industrie 4.0, industrie connectée, industrie du futur : le secteur se transforme en profondeur grâce à des technologies comme la fabrication additive, la cobotique ou encore les objets connectés – autant d’innovations qui améliorent la production et le quotidien de celles et ceux qui y travaillent.​    ","Et tout cela crée de nouveaux métiers (data scientist, programmeur industriel, ingénieur cobot…) et transforme les modes d’organisation du travail. Sans oublier que de nombreuses innovations industrielles vont dans le sens d’une société plus durable.    ","Le MoonBike en est un bel exemple ! C’est le premier snowbike 100% électrique du marché : un mode de déplacement beaucoup plus écologique.​","Allez maintenant vous pouvez aller le découvrir, tout schuss.    "],B=["Bonjour à vous","Je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.​","Par exemple, j'ai pris part au projet AGV, automotrice à grande vitesse ! C'est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et plus seulement aux extrémités.","Grâce à cette innovation, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie. Cela permet de parcourir 1000 km en 3 heures ! Impressionnant non ?","J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer. Il suffit de se placer dessus afin de se téléporter d’une pièce à l’autre.​","En ce moment, je travaille sur un nouveau projet : le Showroom de l’industrie, où je vais pouvoir mettre en lumière toutes les inventions et les témoignages de professionnels de l’industrie !​","Il n’est pas encore ouvert au public, mais il le sera bientôt.","Je vous tiendrai au courant !","À plus tard !"];new s("Pnjs/pnj1","Appuyez sur espace pour discuter avec Yumi !",w);new n("Pnjs/pnj2","Appuyez sur espace pour discuter avec le Capitaine !",L,"pnj2text");new n("Pnjs/pnj3","Appuyez sur espace pour discuter avec la Skieuse !",V,"pnj3text");new s("Pnjs/pnj4","Appuyez sur espace pour discuter avec la Cheffe de chantier !",A);new n("Pnjs/pnj5","Appuyez sur espace pour discuter avec la Scientifique !",B,"pnj5text");new s("Pnjs/pnj6","Appuyez sur espace pour discuter avec l'Ingénieure !",y);new o("Pnjs/MoonbikePNJ","Appuyez sur espace pour parler à Anthony !",["Bonjour, moi c’est Anthony, je suis en charge de la production des MoonBikes. Je vous laisse découvrir mon projet."],"Moonbike",z);new o("Pnjs/Jeune1","Appuyez sur espace pour parler à Antonin !",["Salut moi c'est Antonin ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune1",f);new o("Pnjs/Jeune2","Appuyez sur espace pour parler à Killian !",["Salut moi c'est Killian ! Pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune2",P);new o("Pnjs/Jeune3","Appuyez sur espace pour parler à Manon!",["Bonjour, moi c'est Manon et pour découvrir sur quel super projet j'ai travaillé c'est ici :"],"Jeune3",k);new s("Pnjs/Formulaire","Appuyez sur espace pour ouvrir le formulaire !",j);new o("Pnjs/Statue","Appuyez sur espace pour intéragir avec la statue !",["Cette tête de tigre géante a été réalisée l'année dernière, en collaboration avec l'influenceur HiHacks et les apprentis chaudronniers du Pôle formation UIMM Nouvelle-Aquitaine"],"Statue","https://www.youtube.com/embed/APBCjKv6nvA");new s("Zones/Vidéo","Appuyez sur espace pour regarder la vidéo !",x,"center");new n("Pnjs/Panneau Pont","Appuyez sur espace pour intéragir avec le panneau !",["Au Nord, la gare. Au Sud, la place principale."],"Panneau Pont");new n("Pnjs/Panneau Gare","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez à la Gare du Monde de Yumi"],"Panneau Gare");new n("Pnjs/Panneau Chemin","Appuyez sur espace pour intéragir avec le panneau !",["À l'Ouest, la place principale. Au Sud, le port."],"Panneau Chemin");new n("Pnjs/Panneau Quai","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez au Port du Monde de Yumi"],"Panneau Quai");new n("Pnjs/Panneau Terrasse","Appuyez sur espace pour intéragir avec le panneau !",["Vous vous trouvez sur la place principale"],"Panneau Terrasse");new s("Pnjs/Pong","Appuyez sur espace pour jouer au Pong !",v,"center");new s("Pnjs/Basket","Appuyez sur espace pour jouer au Basket !",g,"center");new s("Pnjs/Piano","Appuyez sur espace pour jouer du piano !",b,"center");new o("Pnjs/MetierRoom/Lauak","Appuyez sur espace pour parler à Lauak!",["Bonjour, moi c’est Lauak !"],"Lauak",l);new o("Pnjs/MetierRoom/Cari","Appuyez sur espace pour parler à Cari!",["Bonjour, moi c’est Cari !"],"Cari",l);new o("Pnjs/MetierRoom/IngProd","Appuyez sur espace pour parler à l'ingénieur de production!",["Bonjour, je suis l'ingénieur de production!"],"IngProd",M);new s("Pnjs/MetierRoom/ApprentiRobot","Appuyez sur espace pour regarder la vidéo !",q,"center");new s("Pnjs/MetierRoom/ApprentiRobot","Appuyez sur espace pour regarder la vidéo !",S,"center");new s("Pnjs/MetierRoom/chatBot_1","Appuyez sur espace pour discuter avec Yumi!",C);
