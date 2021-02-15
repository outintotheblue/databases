// part 1 Week 2
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'new_world',
  });

  function guessThatCapital(country) {
    connection.query("SELECT city.Name FROM city JOIN country ON city.ID = country.Capital WHERE country.Name = ?", [country], function(err, results, fields) {
        console.log(results);
    });
  }

guessThatCapital('Argentina');

  function listLanguages(region) {
    connection.query("SELECT Language FROM countrylanguage JOIN country ON countrylanguage.CountryCode = country.Code WHERE region = ?", [region], function(err, results, fields) {
        console.log(results);
  });
}

listLanguages('Caribbean');

function numberOfCities(language) {
  connection.query("SELECT COUNT(Name) FROM city JOIN countrylanguage ON city.CountryCode = countrylanguage.CountryCode WHERE Language = ?", [language], function(err, results, fields) {
    console.log(results);
});
}

numberOfCities('Spanish')

function sameLangSameRegion(language, region) {
  connection.query("SELECT Name FROM country JOIN countrylanguage ON country.Code = countrylanguage.CountryCode WHERE Language = ? AND Region = ?", [language, region], function(err, results, fields) {
    if (results.length > 0) {
      console.log(results)}
      else {console.log('False')}
});
}

sameLangSameRegion('Spanish', 'Caribbean'); // shows results 
sameLangSameRegion('Japanese', 'Caribbean'); // shows False. 


function listContinents() {
  connection.query("SELECT Continent, COUNT(language) FROM country a, countrylanguage b where a.Code = b.CountryCode GROUP BY a.continent", function(err, results, fields) {
    console.log(results);
});
}

listContinents();


