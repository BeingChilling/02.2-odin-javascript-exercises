const findTheOldest = function (rij) {
  return rij.reduce((oudest, huidigPersoon) => {
    const oudestLeeftijd = leeftijdKrijgen(
      oudest.yearOfBirth,
      oudest.yearOfDeath
    ); // /De eerst artikel van de rij.
    const huidigLeeftijd = leeftijdKrijgen(
      huidigPersoon.yearOfBirth,
      huidigPersoon.yearOfDeath
    ); // /De tweede artikel van de rij
    return oudestLeeftijd < huidigLeeftijd ? huidigPersoon : oudest;
  });
};

const leeftijdKrijgen = function (geboorte, dood) {
  if (!dood) {
    dood = new Date().getFullYear();
  }
  return dood - geboorte;
};

// Do not edit below this line
module.exports = findTheOldest;
