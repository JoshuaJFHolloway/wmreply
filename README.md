# WM Reply

**The Aim**

Try and keep the UI similar to the one described during the interview ( not the end of the world if it doesn't match :) ) i.e.

- a text input to filter users by first name or surname

- below the text input, a button to sort the users by surname and another to add a user (shows a form - see below)

- below the buttons the list of users returned from the API

 
**Features to implement**

 

1. Fetch users (20) from the following endpoint: https://randomuser.me/api/?results=20

 

2. Display each user's picture, firstname, surname, and email address

    2.1 You may use this for UI guidance of how to display the data https://ibb.co/n6KSXJ

 

3. As a user, I should be able to filter users by firstname or surname on the text input

 

4. On click of the button, it should filter the users by name from Ascending to Descending

    4.1 i.e. if the users are currently sorted in Ascending order the button text should read 'Sort by Descending' and vice versa

    4.2 Default sorting onFetch isn't necessary

 

5. A form that allows you to add a user - only fields required are firstname, surname, and email

    5.1 The form should be hidden by default

    5.2 Should be displayed above list of users

    5.3 Should be able to hide the form once finished adding users

    5.4 User image can be generic (you may use one of the ones returned from the API)

###N.B.

Please note the emphasis isn't on the styles. Don't feel like you have to make it pretty.

Error handling is not a strict requirement - can be ignored for the purposes of this test.