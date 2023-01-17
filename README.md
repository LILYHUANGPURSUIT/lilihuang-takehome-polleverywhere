# lilihuang-takehome-polleverywhere

1. Open your terminal and then type

- $ git clone {the url to the GitHub repo}

- This clones the repo

2. cd into the new folder and type

- $ npm install

- This installs the required dependencies

3. cd into backend
- $ npm run db_init
- $ npm run db_seed

- This creates databse, tables and inserts data
- $ npm start

4. To run the React project.
- $ npm start

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
