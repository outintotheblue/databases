
DROP TRIGGER newtrigger;
CREATE TRIGGER newtrigger
    BEFORE INSERT 
        ON CountryLanguage FOR EACH ROW
            BEGIN 
                DECLARE mymessage VARCHAR(100);
                DECLARE numb TINYINT;
                SET numb = (select COUNT(CountryCode) from countrylanguage where CountryCode = new.CountryCode);
                IF numb >= 10
                THEN 
                    set mymessage = '10 LANGUAGES! RUNNNNNNN';
                    SET lc_messages = mymessage; SIGNAL SQLSTATE '45000';
                END IF;
            END;