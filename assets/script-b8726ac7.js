import"https://unpkg.com/@workadventure/scripting-api-extra@^1";let o,n,s,a;WA.onInit().then(()=>{userPseudo=WA.player.name,userWaId=WA.player.uuid,WA.player.state.score=0,userScore=WA.player.state.score});WA.room.onEnterLayer("pnj1").subscribe(()=>{o=WA.ui.openPopup("pnj1text","Yumi : ' Bienvenue sur le land ! Découvrez les différents espaces du jeu en vous promenant !''",[{label:"Génial, je veux en savoir plus !",className:"primary",callback:e=>{WA.nav.openTab("https://heroes.brainsonic.com/")}}])});WA.room.onLeaveLayer("pnj1").subscribe(()=>{o!=null&&o.close()});WA.room.onEnterLayer("pnj2").subscribe(()=>{n=WA.ui.openPopup("pnj2text"," Bonjour je suis étudiant 1",[{label:"Génial, je veux en savoir plus !",className:"primary",callback:e=>{WA.nav.openTab("https://heroes.brainsonic.com/")}}])});WA.room.onLeaveLayer("pnj2").subscribe(()=>{n.close()});WA.room.onEnterLayer("pnj3").subscribe(()=>{s=WA.ui.openPopup("pnj3text"," Bonjour je suis étudiant 2",[{label:"Bonjour !",className:"primary",callback:e=>{WA.nav.openTab("https://heroes.brainsonic.com/")}}])});WA.room.onLeaveLayer("pnj3").subscribe(()=>{s.close()});WA.room.onEnterLayer("pnj4").subscribe(()=>{a=WA.ui.openPopup("pnj4text"," Bonjour je suis étudiant 3",[{label:"Bonjour !",className:"primary",callback:e=>{WA.nav.openTab("https://heroes.brainsonic.com/")}}])});WA.room.onLeaveLayer("pnj4").subscribe(()=>{a.close()});
