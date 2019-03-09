// Prends deux objets en paramètres. Premier : données. 2e : liste de filtre (JSON)
function filtrer (donnees, filtre) {
  if (_.isEmpty(filtre)) {
    return donnees;
  }
  else {
    try {
      donnees = _.filter(donnees, function(obj){return obj[Object.keys(filtre)[0]].match(filtre[Object.keys(filtre)[0]]);});
      delete filtre[Object.keys(filtre)[0]];
      return filtrer(donnees, filtre);
    } catch (erreur) {
      console.log(erreur);
    }

  }
}

function get_filtre () {
  return {};
}

function afficher_references (references) {
  _.each(filtrer(references, get_filtre()), function (ref) {
    var div = document.createElement("div");
    div.appendChild(new x_reference(ref));
    div.classList.add("four");
    div.classList.add("columns");
    document.querySelector("#contenu").appendChild(div);
  })
}
