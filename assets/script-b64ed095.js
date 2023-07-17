import"https://unpkg.com/@workadventure/scripting-api-extra@^1";const n="https://64ix.github.io/WA-Edited-Tutorial/tutorial.html";WA.onInit().then(()=>{});class a{constructor(e,s){this.layer=e,this.message=s,this.setup()}setup(){WA.room.onEnterLayer(this.layer).subscribe(()=>{this.triggerMessage=WA.ui.displayActionMessage({message:this.message,callback:()=>{this.interact()}})}),WA.room.onLeaveLayer(this.layer).subscribe(()=>{this.triggerMessage!==void 0&&this.close()})}interact(){}close(){this.triggerMessage.remove(),this.exit()}exit(){}}class t extends a{constructor(e,s,i,o){super(e,s),this.object=o,this.dialog=i,this.state=0}interact(){this.open()}open(){this.currentState=WA.ui.openPopup(this.object,this.dialog[this.state],[{label:"Suivant",className:"primary",callback:e=>{this.next()}}]),this.finished=!1}next(){this.state++,this.state>=this.dialog.length?(this.currentState.close(),this.finished=!0,this.state=0):(this.currentState.close(),this.open())}exit(){!this.finished&&this.currentState!==void 0&&this.currentState.close()}}class u extends a{constructor(e,s,i){super(e,s),this.modal=i}interact(){this.open()}open(){WA.ui.modal.openModal({title:"Yumi",src:this.modal,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"})}exit(){WA.ui.modal.closeModal()}}WA.ui.modal.openModal({title:"Tutorial",src:n,allow:"fullscreen; clipboard-read; clipboard-write",allowApi:!0,position:"right"});const l=["Ahoy !","Ça vous dit d’embarquer avec moi pour un petit tour d’horizon de l’industrie maritime ?","Allez, on met les voiles !","La France a beau être un petit pays, elle compte le deuxième domaine maritime mondial, juste derrière les États-Unis. Alors forcément, la mer compte beaucoup dans l’économie !","Les industries de la mer regroupent 4 secteurs : l’industrie navale, l’industrie nautique, les énergies marines renouvelables et l’offshore.","Cela représente 125 000 emplois, qui sont concentrés sur le littoral avec des ports industriels comme Dunkerque et d’autres tournées vers le transport de marchandises à l’image de Marseille.","Aujourd’hui, les principaux défis du secteur sont la décarbonation, le recrutement et la transition numérique.","Voilà pour un petit aperçu de l’industrie marine, tu veux découvrir d’autres industries ?","Alors n’hésite pas à parler aux autres Yumi !","Allez, bon vent !"],p=["Hello !","Vous voulez faire un tour de Moonbike ?","D’accord, mais d’abord, laissez-moi vous parler un peu de l’innovation dans l’industrie. C’est vrai que, quand on parle d’innovation industrielle, on pense souvent à des machines super sophistiquées, mais c’est aussi de nouvelles méthodes de production.","On utilise par exemple des robots dans l’industrie depuis longtemps pour remplacer l’homme ou des cobots, des robots collaboratifs, pour travailler avec lui.","Cela a beaucoup fait évoluer les métiers, comme le dessin assisté par ordinateur qui permet de réaliser des objets à l’aide d’une imprimante 3D.","Mais l’innovation cherche aujourd’hui à prendre en compte les considérations sociales et environnementales en améliorant les bien-être des employés et la protection de l’environnement.","Le moonbike en est un bel exemple : c’est le premier snowbike électrique du marché !","Allez maintenant vous pouvez l’essayer, tout schuss !"],c=["Hop hop hop","Pardon, mais on ne passe pas.","Le showroom est en travaux et il ouvrira dans quelques mois.","Pour en savoir plus, je vous invite à discuter avec ma collègue scientifique dans son labo.","Bonne journée !"],d=["Bonjour à vous","Moi je suis la scientifique de la bande et ce que j’adore c’est trouver des solutions pour améliorer la vie de chacun.","Pour exemple j’ai travaillé sur le projet de l’AGV, l’automotrice à grande vitesse, c’est un train à grande vitesse construit par Alstom et qui ressemble au TGV. La différence est que le moteur est réparti le long de la rame et pas seulement aux extrémités.","Grâce à ça, il y a plus d’espace pour les voyageurs et le poids du train est réduit, ce qui permet de réduire la consommation d’énergie, tout en parcourant 1000 km en 3 heures. Impressionnant non ?","J’ai aussi mis au point les téléporteurs que vous verrez un peu partout sur l’île, et que je vous invite à essayer.","En ce moment, je travaille sur un nouveau projet : le showroom de l’industrie, où je vais pouvoir exposer toutes mes inventions !","Il n’est pas encore ouvert au public, mais il le sera bientôt.","Je vous tiendrais au courant !","À plus tard !"];new u("Pnjs/pnj1","Appuyez sur espace pour discuter avec Yumi !","https://chat.csml.dev/s/nyf8dzadrsfgpyk11xotf451cpw7y3ts");new t("Pnjs/pnj2","Appuyez sur espace pour discuter avec le Capitaine !",l,"pnj2text");new t("Pnjs/pnj3","Appuyez sur espace pour discuter avec la Skieuse !",p,"pnj3text");new t("Pnjs/pnj4","Appuyez sur espace pour discuter avec la Cheffe de chantier !",c,"pnj4text");new t("Pnjs/pnj5","Appuyez sur espace pour discuter avec la Scientifique !",d,"pnj5text");