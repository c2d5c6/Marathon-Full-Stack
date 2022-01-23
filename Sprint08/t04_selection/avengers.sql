SELECT h.name, SUM(p.points) 
    FROM heroes h JOIN powers p ON h.id = p.hero_id 
        GROUP BY h.id 
        ORDER BY SUM(p.points) 
        DESC LIMIT 1;


SELECT h.name, SUM(p.points) 
    FROM heroes h JOIN powers p ON h.id = p.hero_id 
        WHERE p.type = 'defense' 
        GROUP BY h.id 
        ORDER BY SUM(p.points) 
        LIMIT 1;

SELECT h.name, SUM(p.points) 
    FROM heroes h 
        LEFT JOIN powers p ON h.id = p.hero_id 
        LEFT JOIN teams t ON h.id = t.hero_id 
        WHERE t.name = 'Avengers' OR t.name = 'Hydra'
        GROUP BY h.id
        HAVING COUNT(t.hero_id) = 1
        ORDER BY SUM(p.points) DESC;
        
SELECT t.name, SUM(p.points)
    FROM teams t JOIN powers p ON t.hero_id = p.hero_id
        WHERE t.name = 'Avengers' OR t.name = 'Hydra'
        GROUP BY t.name
        ORDER BY SUM(p.points);
