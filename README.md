# Appliances Case Backend
*part of full stack project using express, body-parser, cors, middleware, sequelize, models, endpoints and process.env.PORT for dynamic port with port 3001 backup ... required modest work in package.json (i.e. add engines)*
<br>

**HOW WORKS**
- models manage user-inputted content - database aka db, Customers, and User (both capitalized per React App components)<br>
- middleware implements async/await with if/else statements to authenticate email and password with error return as backup<br>
- GET aka server.get() adds pagination<br>
- POST aka server.post() **a)** requires zip code length, **b)** allows global search (Op.or with Op.iLike), and **c)** checks database to ensure email and password are known and returns errors when they are not<br>
- process.env.PORT dynamically implements port and defaults to port 3001 as backup<br>
- server.listen() displays confirmaton port is running and where (note: server.js is per what name the file that contains this backend code - i.e. same as app.js) 

**NEXT STEP**
accept new/different users through login ... not simply pre-set Testy McTesterson

###### <a href="https://www.latoniamertica.dev/Appliances-Case-Frontend/#/" target="_blank">visit Appliances Case Frontend Powered by This Backend by La'Tonia Mertica</a>

###### <a href="https://github.com/LaTonia-Mertica/Appliances-Case-Backend/blob/main/images/applianceswireframes.png" target="_blank">small appliances repair shop website wireframes by La'Tonia Mertica</a> 😰 🏗 😤

###### <a href="https://github.com/LaTonia-Mertica/Appliances-Case-Backend/blob/main/appliancescasewriteup.pdf" target="_blank">fictitious small appliances repair shop owner note re: ERD by La'Tonia Mertica</a>
<br>

##### FIRST NAME: La'Tonia Mertica
###### note_1: pronounced *luh tone yuh merr treece*
<br>

## MY BACK STORY
<br>
I went into code because I saw code as a gateway to better options, informed risk-taking, and outcomes. 
<br>
<br>
My fantasies on a better life are nothing special. A better life, life quality, and sense of self. A life during which I create opportunities for the substance of my existence. A life I enthusiastically own. A life that welcomes, entertains, and bows to parts of myself I've envisioned embracing for too long - focusing on non-me things out of a sense of duty, and obligation, and misaligned timing. Nothing special. Still, my own, and true difference.  
<br>
<br>
When I was notified I was accepted into Hack Upstate full stack javascript code/web dev bootcamp Careers in Code, I knew my life was changed. 
<br>
<br>
Far from perfect, and likely destined to never truly achieve the level and status I fantasize on, I code every day. I apply my best self. Dwell in the moment - to moment. Never forget how hard life has been at times. And that debatably I shouldn't be alive today. But I am. Building out the purpose of my life is a lot to do - and I still don't have authenticated clarity on it. 
<br>
<br>
Still, it involves vigorous exceptional communication - and, coding is now part of my fierce means to say some things.
<br>
<br>

<p align="center"><img src="images/latoniamertica-gawk.png" width="100%" /title="Selfie by La'Tonia Mertica" ></p>
