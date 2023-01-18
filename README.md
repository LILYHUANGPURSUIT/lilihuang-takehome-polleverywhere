# lilihuang-takehome-polleverywhere

1. Open your terminal and then type
-  * This clones the repo
- #### $ git clone {the url to the GitHub repo}



2. cd into backend and type
-  * This installs the required dependencies
- #### $ npm install

3. cd into backend
-  * This creates database, tables and inserts data
- #### $ npm run db_init
- #### $ npm run db_seed

4. cd into frontend and type
- #### $ touch .env

- inside .env file here is what you need to type:
- #### REACT_APP_API_URL=http://localhost:8888

5. cd into backend and type
- #### $ touch .env

- inside .env file here is what you need to type:
- #### PORT=8888
- #### PG_HOST=localhost
- #### PG_PORT=5432
- #### PG_DATABASE=raffles_dev
- #### PG_USER=postgres

6. type to run backend 
- #### $ npm start
or - $ npm run dev

7. cd into frontend to run the React project.
- #### $ npm start

## Home Page 
- Display a form to add a new raffle with name and token fields and a submit button. 
- Show a success message upon successful raffle creation and an error message otherwise.
<img width="1137" alt="Screen Shot 2023-01-17 at 12 31 45 AM" src="https://user-images.githubusercontent.com/86433459/212820584-53dbc3b2-ec13-48e4-b36c-0241f52fdd49.png">
- Display a list of all raffles and when you click in one of the raffles of the list it should take the user to that raffle's page/view.
<img width="1176" alt="Screen Shot 2023-01-17 at 12 32 19 AM" src="https://user-images.githubusercontent.com/86433459/212820620-04f25a93-a434-4880-8958-109270c088fe.png">

## Single Raffle
- Displays a nav bar or navigation menu that would take the user to All Raffles, Participants and Pick Winner pages/views.

## Single Raffle 
1. Register Page 
- Below the navbar display a form to add a new participant to the Raffle. The form includes First Name, Last Name, Email and Phone inputs. The phone input should be optional and all others required. Include two buttons one to submit and another to reset the form.
<img width="1164" alt="Screen Shot 2023-01-17 at 12 32 49 AM" src="https://user-images.githubusercontent.com/86433459/212820645-1642bd72-cc53-4eb1-861a-6d6b82a6007e.png">

## Single Raffle  
2. Participants Page 
- Display the total number of participants and a list of all users and their information.
<img width="1180" alt="Screen Shot 2023-01-17 at 12 33 27 AM" src="https://user-images.githubusercontent.com/86433459/212820668-03117d9e-a33a-4eba-87ce-dbeb7c89266b.png">

## Single Raffle  
2. Pick Winner Page 
- Displays a form where a user (the raffle admin) can input their secret token and pick a winner at random for the raffle. - If a winner has already been picked this page/view should display a card with the user information and a celebratory image and never show the form again.
<img width="1168" alt="Screen Shot 2023-01-17 at 12 34 39 AM" src="https://user-images.githubusercontent.com/86433459/212820686-00401ac6-09a0-470f-9448-db32b242f487.png">
