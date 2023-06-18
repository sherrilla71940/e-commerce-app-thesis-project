# e-commerce-app-thesis-project

## What e-commerce-app does

The e-commerce app is designed to facilitate buying and selling of products for registered users. It provides features such as persistent shopping carts, accurate stock management from checkout, and automatic removal of products with zero quantity from the marketplace, etc.

## Future Improvements

There are several areas that require attention for future development. Here are some of the key priorities:

- **Integration of Transaction Records:** The backend API currently maintains transaction records, but this functionality needs to be integrated into the frontend. This will enable users to view their transaction history and provide better transparency.
- **Persistent User Sessions:** Currently, when a page is refreshed, users are logged out due to the absence of browser storage. Implementing Session Storage or Local Storage along with Zustand (state management library) will allow user sessions to persist upon
- **Real Transactions with Stripe:** At present, the checkout process does not involve real transactions. To enable users to make actual payments and receive payments, integration with a payment gateway like Stripe is required. This will enhance the app's functionality and make it a fully functional e-commerce platform.
- **Improved Logout Functionality:** The app lacks a proper logout feature, and refreshing the page currently logs users out unintentionally. Implementing a dedicated logout mechanism will allow users to securely log out when desired.

## A quick glimpse into the app's UI

<<<<<<< HEAD
![Home Page](<Screenshot 2023-06-18 at 6.46.13 PM.png>)
![Login Page](<Screenshot 2023-06-18 at 6.46.53 PM.png>)
![Shopping Cart](<Screenshot 2023-06-18 at 6.47.10 PM.png>)
![Nav Bar](<Screenshot 2023-06-18 at 6.47.37 PM.png>)
![List Product Page](<Screenshot 2023-06-18 at 6.47.56 PM.png>)
![User Store](<Screenshot 2023-06-18 at 6.48.08 PM.png>)
=======
![Home Page](/app%20screenshots/Screenshot%202023-06-18%20at%206.46.13%20PM.png)
![Login Page](/app%20screenshots/Screenshot%202023-06-18%20at%206.46.53%20PM.png)
![Shopping Cart](/app%20screenshots/Screenshot%202023-06-18%20at%206.47.10%20PM.png)
![Nav Bar](/app%20screenshots/Screenshot%202023-06-18%20at%206.47.37%20PM.png)
![List Product Page](/app%20screenshots/Screenshot%202023-06-18%20at%206.47.56%20PM.png)
![User Store](/app%20screenshots/Screenshot%202023-06-18%20at%206.48.08%20PM.png)

> > > > > > > b576dbf (add readme)

## Set up

The first thing you will need to do is `npm i` in the root, client, and server directories.

Next you would need to create a .env file in your server directory and add a port number to run your backend server.

![Setting up port number in .env](image.png)

## Start the app

To start your backend API, go to the **server** directory and run `npm run serve` in the terminal.

To start your Vite server and serve your frontend assets go to the **client** directory and run **npm run dev** in the terminal.
