# Blog Posts Viewer 🌐📰

This is a simple web application that fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to display blog posts along with user information. It uses plain JavaScript, HTML, and CSS to dynamically render blog content.

## 🚀 Features

- Fetches blog posts from JSONPlaceholder
- Fetches user data and matches each post with its author
- Dynamically creates and displays each post with:
  - Title
  - Body
  - Author name and email

## 🧩 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## 📂 Project Structure

```
├── index.html        # Main HTML file
├── style.css         # CSS styles
└── main.js           # JavaScript logic for fetching and displaying posts
```

## 🛠 How It Works

1. `main.js` fetches posts from `https://jsonplaceholder.typicode.com/posts`.
2. It also fetches user data from `https://jsonplaceholder.typicode.com/users`.
3. For each post, it finds the corresponding user and creates a card with:
   - The post title
   - The post body
   - The name and email of the user who created the post
4. These cards are appended dynamically to the blog container in the DOM.

## 📸 Demo
 
https://ebrahim43.github.io/Blog-Viewer/


