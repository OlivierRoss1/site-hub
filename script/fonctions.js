// Prends deux objets en paramètres. Premier : données. 2e : liste de
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
