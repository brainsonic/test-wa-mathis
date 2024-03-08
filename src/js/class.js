import {} from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

// CLASS ///////////////////////////////////////////////

// class Interaction : endroit sur la map où l'on peut intéragir
// layer : string : nom de la layer sur laquelle l'interaction est possible
// message : string : message affiché au joueur pour l'inviter à int éragir
// category_tracker : string : catégorie du tracker (hit, interact, ....)
// type_tracker : string : type du tracker (bot, video, formulaire, ....)
// name_tracker : string : nom du tracker - permet de chercher précisément une interaction si besoin
const url_api = "https://uimm-trackers-api-stg-0b60361e2cd1.herokuapp.com/api/tracker_events";
class Interaction {
    constructor(_layer, _message, _category_tracker, _type_tracker, _name_tracker) {
      //setup des variables
      this.layer = _layer;
      this.message = _message;
      this.category_tracker = _category_tracker;
      this.type_tracker = _type_tracker;
      this.name_tracker = _name_tracker;
      //setup des listeners WA pour les layers prévus
      this.setup();
  
    }
    setup() {
      //listener d'entrée sur le layer, créé le message d'interaction
      WA.room.onEnterLayer(this.layer).subscribe(() => {
        this.triggerMessage = WA.ui.displayActionMessage({
          message: this.message,
          callback: () => {
            this.interact();
          },
        });
      });
      //listener de sortie, lance la fonction de sortie qui fermera le message d'interaction si il est ouvert
      WA.room.onLeaveLayer(this.layer).subscribe(() => {
        if (this.triggerMessage !== undefined) this.close();
      });
    }
  
    //Fonction pour track les interactions
    track() {
      /* ---- API Tracker Stat ---- */
  
      const data = {
        type: this.type_tracker,
        category: this.category_tracker,
        name: this.name_tracker,
      }
      const request = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/ld+json'
        },
        body: JSON.stringify(data)
      }
  
      fetch(url_api, request)
        .then(response => {
          if(!response.ok) {
            console.log('Erreur tracker');
            throw new Error('Network response was not OK')
          }
          return response.json();
        })
        .then(data => {
  
          //console.log('Response :', data);
  
        })
        .catch(error => {
          console.error('Error:', error)
        }) 
    }
    //fonction d'intéraction, à override
    interact() {
      // override this
      this.track();
  
    }
    //fonction de sortie
    close() {
      if (this.triggerMessage !== undefined) this.triggerMessage.remove();
      // lance la fonction exit, à override selon les besoins des sous-classes
      this.exit();
    }
    //fonction de sortie, à override selon les besoins des sous-classes
    exit() {
      // override this
    }
}
  // class Dialog
  // layer : string : nom de la layer sur laquelle l'interaction est possible
  // message : string : message affiché au joueur pour l'inviter à intéragir
  // dialog : string[] : tableau de string, chaque string est un nouveau popup
  // object : string : nom de l'objet sur lequel le popup s'ouvre
class Dialog extends Interaction {
    constructor(_layer, _message, _dialog, _object, _category_tracker, _type_tracker, _name_tracker) {
      super(_layer, _message, _category_tracker, _type_tracker, _name_tracker);
      this.object = _object;
      this.dialog = _dialog;
      this.state = 0;
    }
    //fonction d'intéraction, ouvre le popup
    interact() {
  
      this.track();
      this.open();
  
    }
    //fonction d'ouverture du popup en fonction du state du dialogue
    open() {
      // ouvre le popup avec le texte correspondant au state actuel
      // bouton change de label si c'est le dernier popup
      this.currentState = WA.ui.openPopup(this.object, this.dialog[this.state], [
        {
          label: this.state < this.dialog.length - 1 ? "Suivant" : "Fermer",
          className: "primary",
          callback: (popup) => {
            // appel de la fonction next qui gère le changement de state et d'autres choses
            this.next();
          },
        },
      ]);
      this.finished = false;
    }
    next() {
      this.state++;
      // ferme le popup actuel, set en undefined pour éviter les bugs
      if (this.currentState !== undefined)
      {
        this.currentState.close();
        this.currentState = undefined;
      }
      // check si fini, sinon ouvre le popup suivant
      if (this.state >= this.dialog.length) {
        this.finished = true;
        this.state = 0;
      } else this.open();
    }
    exit() {
      if (!this.finished && this.currentState !== undefined)
        this.currentState.close();
      this.currentState = undefined;
      this.state = 0;
    }
  }
  
  // class InteractionAction => Permet d'ouvrir un dialog avec une action derrière
  // _dialog_condition : array[string] : Dialog qui s'affiche si la condition n'est pas rempli
  // _function_action  : bool : True si l'action est effectué sinon false
class InteractAction extends Dialog {
    constructor(_layer, _message, _dialog, _dialog_condition, _object, _function_action, _category_tracker, _type_tracker, _name_tracker) {
      super(_layer, _message, _dialog, _object, _category_tracker, _type_tracker, _name_tracker);
      this.state = 0;
      this.dialog_condition = _dialog_condition;
      this.function_action = _function_action;
      this.old_dialog = this.dialog;
      this.condition = true;
    }
    //fonction d'intéraction, ouvre le popup
    interact() {
  
      WA.onInit().then(() => {
        this.condition = this.function_action();
      });
      this.open();
      this.track();

  
    }
    //fonction d'ouverture du popup en fonction du state du dialogue
    open() {
      // ouvre le popup avec le texte correspondant au state actuel
      // bouton change de label si c'est le dernier popup
      if (this.condition == false)
      {
        this.dialog = this.dialog_condition;
      }
      else
      {
        this.dialog = this.old_dialog;
      }
      this.currentState = WA.ui.openPopup(this.object, this.dialog[this.state], [
        {
          label: this.state < this.dialog.length - 1 ? "Suivant" : "Fermer",
          className: "primary",
          callback: (popup) => {
            // appel de la fonction next qui gère le changement de state et d'autres choses
            this.next();
          },
        },
      ]);
      this.finished = false;
    }
  }
  
  // class Modal : Ouvrir une fenetre modale
  // layer : string : nom de la couche sur laquelle l'interaction est possible
  // message : string : message affiché au joueur pour l'inviter à intéragir
  // modal : string : lien vers le modal
  // position : string : position du modal
class Modal extends Interaction {
    //par defaut, position à droite
    position = "right";
    constructor(_layer, _message, _modal, _position, _category_tracker, _type_tracker, _name_tracker) {
      super(_layer, _message, _category_tracker, _type_tracker, _name_tracker);
      this.modal = _modal;
      if (_position !== undefined) this.position = _position;
    }
    interact() {
  
      this.track();
      this.open();
    }
  
    open() {
      // ouvre le modal
      WA.ui.modal.openModal({
        title: "Yumi",
        src: this.modal,
        allow: "fullscreen; clipboard-read; clipboard-write",
        allowApi: !0,
        position: this.position,
      });
    }
    exit() {
      WA.ui.modal.closeModal();
    }
  }
  
// class ModalAction : Ouvrir une fenetre modale en set une action derrière
class ModalAction extends Modal {
    //par defaut, position à droite
    constructor(_layer, _message, _modal, _position, _function_action, _category_tracker, _type_tracker, _name_tracker) {
      super(_layer, _message, _modal, _position, _category_tracker, _type_tracker, _name_tracker);
      this.function_action = _function_action;
    }
    interact() {
      WA.onInit().then(() => {
        this.function_action();
      });
      this.open();
      this.track();
    }
  
  }

// class PopUpVideo : Popup qui ouvre un site web à la sortie
// _function_action  : bool : True si l'action est effectué sinon false
class PopUpVideo extends Dialog {
    constructor(_layer, _message, _dialog, _object, _video, _category_tracker, _type_tracker, _name_tracker) {
      super(_layer, _message, _dialog, _object, _category_tracker, _type_tracker, _name_tracker);
      this.video = _video;
    }
    // override de la fonction next pour ouvrir le site web, async car cowebsite est une fonction asynchrone
    async next() {
      this.state++;
      // ferme le popup actuel, set en undefined pour éviter les bugs
      if (this.currentState !== undefined)
      {
        this.currentState.close();
        this.currentState = undefined;
      }
      // check si fini, sinon ouvre le popup suivant
      if (this.state >= this.dialog.length) {
        this.finished = true;
        this.state = 0;
        WA.ui.modal.openModal({
          title: 'VideoModal',
          src: this.video,
          position: 'center'
        });
      } 
      else
      {
        this.open();
      } 

    }
}

//Class PopUpVideoAction : Popup avec une action quand il y a interaction + avec un dialog
// _function_action  : bool : True si l'action est effectué sinon false
class PopUpVideoAction extends InteractAction {
  constructor(_layer, _message, _dialog, _dialog_condition, _object, _video, _function_action, _category_tracker, _type_tracker, _name_tracker) {
    super(_layer, _message, _dialog, _dialog_condition, _object, _function_action, _category_tracker, _type_tracker, _name_tracker);
    this.video = _video;
    this.open_modal = false;
  }

  next() {
    this.state++;
    // ferme le popup actuel, set en undefined pour éviter les bugs
    if (this.currentState !== undefined)
    {
      this.currentState.close();
      this.currentState = undefined;
    }
    // check si fini, sinon ouvre le popup suivant
    if (this.state >= this.dialog.length) {
      this.finished = true;
      this.state = 0;
      this.open_modal = true;
      WA.ui.modal.openModal({
        title: 'VideoModal',
        src: this.video,
        position: 'center'
      });
    } else this.open();
  }
  exit() {
    if (!this.finished && this.currentState !== undefined && this.open_modal == false)
    {
      this.currentState.close();
      WA.ui.modal.openModal({
        title: 'VideoModal',
        src: this.video,
        position: 'center'
      });
    }
    this.state = 0;
    this.open_modal = false;
    this.currentState = undefined;
  }
}  
  //Class to pickup an item
  //_dialog : array[string] : Text dans le popup
  //_item : string : Nom de la variable que le joueur aura
class ItemOnLayer extends Interaction{
    constructor(_layer, _message, _dialog, _object, _item, _category_tracker, _type_tracker, _name_tracker)
    {
      super(_layer, _message, _category_tracker, _type_tracker, _name_tracker);
      this.dialog = _dialog;
      this.object = _object;
      this.item = _item;
      this.state = 0;
      this.alreadyHaveItem = 0;
    }
  
    //Set l'objet au joueur
    interact() {
      WA.onInit().then(() => {
        //console.log('Player : ', WA.player.name);
        //console.log('Item : ', this.item);
        if (WA.player.state[this.item] == null)
        {
          //console.log("Le joueur ne possède pas d'arme");
          WA.player.state.saveVariable(this.item, true, {
            public: true,
            persist: true,
            ttl: 720 * 3600,
          })
        }
        else
        {
          //console.log("Le joueur possède ", WA.player.state[this.item]);
          this.alreadyHaveItem = 1;
        }
        this.open();
        this.track();
      });
    }
  
    open() {
      // ouvre le popup avec le texte correspondant au state actuel
      // bouton change de label si c'est le dernier popup
      var old_dialog = this.dialog;
      this.dialog = this.alreadyHaveItem == 0 ? this.dialog : ["Vous possédez déjà l'objet"];
      this.currentState = WA.ui.openPopup(this.object, this.dialog[this.state] , [
        {
          label: this.state < this.dialog.length - 1 ? "Suivant" : "Fermer",
          className: "primary",
          callback: (popup) => {
            // appel de la fonction next qui gère le changement de state et d'autres choses
            this.next();
          },
        },
      ]);
      this.alreadyHaveItem = 0;
      this.dialog = old_dialog;
      this.finished = false;
    }
  
    next() {
      this.state++;
      // ferme le popup actuel, set en undefined pour éviter les bugs
      if (this.currentState !== undefined) this.currentState.close();
      this.currentState = undefined;
      // check si fini, sinon ouvre le popup suivant
      if (this.state >= this.dialog.length) {
        this.finished = true;
        this.state = 0;
      } else this.open();
    }
  
    //fonction de sortie, à override selon les besoins des sous-classes
    exit() {
      if (!this.finished && this.currentState !== undefined)
        this.currentState.close();
      this.currentState = undefined;
    }
  }
  //Class to pickup an item only if certain condition is respected
  //_dialog_condition : array[string] : Texte si le joueur n'a pas la condition requise
  //_item_condition :  string : Variable (item) à avoir pour valider la condition (PS : ça peut être une variable de validation boolean)
class ItemPickUpOnCondition extends ItemOnLayer{
    constructor(_layer, _message, _dialog, _dialog_condition, _object, _item, _condition, _category_tracker, _type_tracker, _name_tracker)
    {
      super(_layer, _message, _dialog, _object, _item, _category_tracker, _type_tracker, _name_tracker);
      this.dialog_condition = _dialog_condition;
      this.condition = _condition;
      this.state = 0;
      this.alreadyHaveItem = 0;
    }
  
    //Set l'objet au joueur
    interact() {
      WA.onInit().then(() => {
        //console.log('Player : ', WA.player.name);
        if (this.condition() == true)
        {
          if (WA.player.state[this.item] == null)
          {
            //console.log("Le joueur ne possède pas d'arme");
            WA.player.state.saveVariable(this.item, true, {
              public: true,
              persist: true,
              ttl: 720 * 3600,
              scope: "world"
            });
  
          }
          else
          {
            //console.log("Le joueur possède ", WA.player.state[this.item]);
            this.alreadyHaveItem = 1;
          }
        }
        this.open();
        this.track();
      });
    }
  
    open() {
      // ouvre le popup avec le texte correspondant au state actuel
      // bouton change de label si c'est le dernier popup
      var old_dialog = this.dialog;
      this.dialog = this.alreadyHaveItem == 0 ? this.dialog : ["Vous possédez déjà l'objet"];
      if (this.condition() == false)
      {
        this.dialog = this.dialog_condition;
      }
      this.currentState = WA.ui.openPopup(this.object, this.dialog[this.state] , [
        {
          label: this.state < this.dialog.length - 1 ? "Suivant" : "Fermer",
          className: "primary",
          callback: (popup) => {
            // appel de la fonction next qui gère le changement de state et d'autres choses
            this.next();
          },
        },
      ]);
      this.dialog = old_dialog;
      this.alreadyHaveItem = 0;
      this.finished = false;
    }  
}

//FUNCTION
/**
 * Function to have the tutorial when appearing in the map
 */
function tutorial() {
  WA.ui.modal.openModal({
    title: "Tutorial",
    src: "https://64ix.github.io/WA-Edited-Tutorial/tutorial.html",
    allow: "fullscreen; clipboard-read; clipboard-write",
    allowApi: !0,
    position: "right",
  });
}

/**
 * Function to check if a player is allowed to access the zone of the escape Game
 * Used for example when a user enters the zone with a link URL
 * @param {string} _layer Zone tiled du layer
 * @param {Array<string>} _variablesAccess List des variables à avoir pour accéder à la zone
 */
function onEnterAuthorization(_layer, _variablesAccess, _dialogError) {

  let popUp = false;
  WA.room.onEnterLayer(_layer).subscribe(() => {
    WA.onInit().then(() => {
      for(var access of _variablesAccess)
      {
        console.log(access);
        console.log('You have the access ? :', WA.player.state[access]);
        if (WA.player.state[access] == null){
          WA.nav.goToRoom('#ZoneStep1');
          popUp = true;
          return;
        }
      }
    }).catch((error) => {
      console.error('Error TELEPORT in :', _layer)
    }).then(() => {
      if (popUp)
      {
        WA.ui.openPopup(_dialogError, ["Zone interdit - Veuillez faire les étapes"], [{
          label: "Fermer",
          className: "primary",
          callback: (popup) => {
            popup.close();
          }
        }]);
      }
    });
  });
}

/**
 * Function to tp depending on the condition
 * @param {string} _layer Zone
 * @param {string} _tpTo Zone to TP generallly the #Room Cf https://docs.workadventu.re/map-building/tiled-editor/entry-exit/
 * @param {bool} _condition Condition (Write a function that's the condition and return true/false)
 * @param {string} _popUpDisplay Popup dans tiled floorLayer
 * @param {string} _popUpMg Message du Popup
 */
function onTpCondition(_layer, _tpTo, _condition, _popUpDisplay, _popUpMsg = "")
{
  WA.room.onEnterLayer(_layer).subscribe(() => {
    WA.onInit().then(() => {
      if(_condition())
      {
        WA.nav.goToRoom(_tpTo);
      }else
      {
        WA.ui.openPopup(_popUpDisplay, _popUpMsg == "" ? ["Vous n'avez pas les items requis pour accéder à la TP"] : _popUpMsg, [{
          label: "Fermer",
          className: "primary",
          callback: (popup) => {
            popup.close();
          }
        }]);
      }
    })
  });
}

/**
 * Function to get variables when the user is a certain zone
 * @param {string} _layer Zone correspondant au chemin du Tile
 * @param {array<string>} _variables Liste des variables à avoir pour être dans la zone
 */
function getVariableOnZone(_layer, _variables) {
  WA.room.onEnterLayer(_layer).subscribe(() => {
    WA.onInit().then(() => {
      for (var variable of _variables) {
        console.log(variable);
        if (WA.player.state[variable] == null || WA.player.state[variable] == undefined)
        {
          WA.player.state.saveVariable(variable, true, {
            public: true,
            persist: true,
            ttl: 720 * 3600,
            scope: "world"
          });
        }
      }
    });
  });
}

/**
 * Function to create variable in workadventurer with persist for 1 months
 * @param {string} variable 
 */
function createVariableWA(variable) {
  WA.player.state.saveVariable(variable, true, {
    public: true,
    persist: true,
    ttl: 720 * 3600,
    scope: "world"
  });
}

/**
* Function to add a trap to a layer
* @param {string} _layer 
*/
function trapLayer(_layer, _reset_layer)
{
  WA.room.onEnterLayer(_layer).subscribe(() => {
    WA.room.showLayer(_layer);
    WA.onInit().then(() => {
      WA.nav.goToRoom(_reset_layer);
    });
  });
}

export {
    Interaction,
    InteractAction,
    Dialog,
    Modal,
    ModalAction,
    PopUpVideo,
    PopUpVideoAction,
    ItemOnLayer,
    ItemPickUpOnCondition,
    tutorial,
    onEnterAuthorization,
    onTpCondition,
    getVariableOnZone,
    createVariableWA,
    trapLayer,
};
  // END CLASS 
