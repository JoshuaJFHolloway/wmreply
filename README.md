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

Please note the emphasis isn't on the styles. Don't feel like you have to make it pretty.

Error handling is not a strict requirement - can be ignored for the purposes of this test.

## Installation

- Run 'git clone https://github.com/JoshuaJFHolloway/wmreply' in your terminal


## Usage

- Run 'npm install'
- Run 'npm start'
- Visit 'localhost:3000' in your browser to see the app

## Testing

- WM Reply stated that I will not need to test the application


## Approach

#### Planning

The specification of how the app should function and appear meant that it was very clear on how I should lay it out
and what components I would need.

#### Reusable components

Making sure that I don't waste time writing code that could have been replaced by reusing prior code was 
also a focus. One of the best parts of React is how code is reused and its important to a slim and efficient app.

#### Reusing handlers

I was also aware of not writing out multiple event handlers, but I still ended up having formChange and handleChange
event handlers. Frustratingly my final iteration of the application still had both in them. Ideally I would have one 
change event handler that can handle both. But when creating it I found that the function was too long in logic
and hence another handler was required. In the future I should look into the logic further and see if there
is a way of changing it so that I do not need two event onChange handlers.


## Future Additions

- Use styled-components instead of normal css which has made it a bit scrappy.
- Test the code with jest, enzyme and sinon.
- Make the whole application look more presentable from a styling point of view, its very minimalistic currently
as WM Reply stated that styling wasn't the focus of this project.
- Refactor the code further so its slimmer.

## Screenshots of use!

<a href="https://ibb.co/hMMtuy"><img src="https://preview.ibb.co/gpkKZy/Screen_Shot_2018_07_06_at_15_45_46.png" alt="Screen_Shot_2018_07_06_at_15_45_46" border="0"></a>


## Contributors

Joshua Holloway