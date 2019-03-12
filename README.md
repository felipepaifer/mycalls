#**MY CALLS**

This application was created in order to make easy for SAC attendants to registry calls details (date, time, location, type, reason and description of the conversation with the client).

###**LETS GET STARTED ?**

This application is using NODEJS and REACT, so you need to have Node installed in your machine. If you don't have it already installed, please go to https://nodejs.org/en/download/ and download it. As soon as you are done, please follow the step bellow:

First thing to do is cloning this repository to your local machine. As soon as it is done please follow the steps below:

- Open your terminal.
- CD into the folder where the project is cloned.
- Type **npm install** or **yarn installL** in order to install all the needed dependencies. 

Okay, now let's go to the next step. We already have all the dependencies installed, but we still need to setup the database enviroment in order to make it work.


###**DATABASE SETUP**

For this project we are using POSTGRES as a database and SEQUELIZE as ORM (Object to Relational Mapping).

Please follow the next steps to setup your database:

- If you do not have Postgres already installed in your machine, please go to https://www.pgadmin.org/download/ and choose PGADMIN 4.

- As soon as you have it installed, up and running, please open your PGADMIN and create a database called "sac_system" which is the same is being used in the config sequelize file. 

- Now that you have a database already created, please go to the CONFIG folder which is located in the SERVER folder, open the CONFIG.JSON file and update it with your postgres information:

Example: 

  "development": {

    "username": "postgres",

    "password": "root",

    "database": "sac_system",

    "host": "127.0.0.1",

    "dialect": "postgres"

  },


- Great, we are almost there! Now that you have already updated your config.json file, please open your terminal again, CD into the folder where the project is cloned and type **npm install -g sequelize-cli**. After installing the Sequelize CLI, please type  **sequelize db:migrate**. This command will migrate the tables to your database.

- Amazing! Now that you have already migrated all the migrations please type **npm run dev** or **yarn run dev**. This command will start the application.

- Go to http://localhost:3000 and you should see the application running. 

- At this point you still don't have any calls created yet, so if you wish , please feel free to create as many calls you want. However a seed data is available to you in order to populate your database with a demo data. If you wish to do so, please open your terminal, CD into the folder where the project is cloned and type **sequelize db:seed:all** . This command will populate your database with 10 calls. 

###**TESTS**

If you wish to check all the tests written for this application, please follow the steps bellow:

- Open your terminal.
- CD into the folder where the project is clonned.
- Type **npm run test** or **yarn run test**.


###**USABILITY**

The application has two pages where you can navigate: "Chamados" and "Registro de Chamado". On "Chamados" page all the calls are listed by state and ordered by date and time which they were created. On the "Registro de Chamado" page you can create calls registrations with location, type, reason and details of the conversation with the client


This application is also mobile friendly. You can use My Calls anywhere you wish!

Thank you for going through this tutorial and I hope you have had a great experience setting up My Calls. 

Enjoy!



