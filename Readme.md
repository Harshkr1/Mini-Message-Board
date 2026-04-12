# Mini Message Board

A simple yet clean **message board web app** built using **Node.js, Express, and EJS**, where users can view and add messages. This project follows a structured backend approach with proper routing, middleware usage, and error handling.

---

## Features

* Add new messages
* View all messages on homepage
* Open individual messages
* Centralized error handling middleware
* Navigation with "Back to Home" button

---

## Tech Stack

* **Backend:** Node.js, Express
* **Templating Engine:** EJS
* **Frontend:** HTML, CSS
* **Middleware:** Express built-in middleware + custom error handler

---

## Project Structure

```
Mini-Message-Board/
│
├── controller/
│   └── indexController.js
│
├── data/
│   └── messages.js
│
├── routes/
│   ├── indexRouter.js
│   └── messageRouter.js
│
├── views/
│   ├── index.ejs
│   ├── open.ejs
│   └── error.ejs
│
├── public/
│   └── styles.css
│
├── app.js
└── package.json
```

---

##  Installation & Setup

### Clone the repository

```bash
git clone https://github.com/your-username/mini-message-board.git
cd mini-message-board
```

### Install dependencies

```bash
npm install
```

### Run the server

```bash
npx nodemon app.js
```

or

```bash
node app.js
```

---

## Usage

* Open browser → `http://localhost:3030`
* View all messages
* Click **Open** to see a specific message
* Navigate back using **Back to Home**

---

##  Key Concepts Implemented

* **MVC-like structure** (routes, controllers, data separation)
* **Dynamic routing with params** (`/open/:authorName`)
* **Custom error handling middleware**
* **404 handling using `next(new Error())`**

---

## Error Handling

* Centralized error middleware handles all runtime errors
* Custom status codes supported (e.g., 404 for not found)
* User-friendly error page (`error.ejs`)

---

## Author

**Harsh Kumar**

---

## License

This project is open-source and available under the MIT License.
