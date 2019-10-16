 SELECT Name FROM country WHERE population > 8000000; 
 SELECT * FROM country WHERE name LIKE '%land'; 
 SELECT * FROM city WHERE population > 500000 AND population < 1000000; 
 SELECT * FROM country WHERE Continent = 'Europe'; 
 SELECT * FROM country ORDER BY SurfaceArea DESC;  
 SELECT city.Name from city JOIN country ON city.CountryCode = country.Code WHERE country.Name = 'Netherlands'
 SELECT population FROM city WHERE name = 'Rotterdam'; 
 SELECT * FROM country ORDER BY SurfaceArea DESC LIMIT 10;  
 SELECT * FROM city ORDER BY population DESC LIMIT 10; 
SELECT SUM(population) FROM city;  