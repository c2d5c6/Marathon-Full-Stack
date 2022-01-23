SELECT h.name FROM heroes h
LEFT JOIN teams t ON h.id = t.hero_id
WHERE h.name LIKE '%a%' AND h.race_id != 'human' AND (h.class_role = 'tankman' OR h.class_role = 'healer')
GROUP BY h.id
HAVING COUNT(t.hero_id) >= 2
ORDER BY h.id DESC LIMIT 1;
