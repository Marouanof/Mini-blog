# Mini Blog Project
## Description
This is a simple **Mini Blog** built using **HTML**, **Bootstrap**, and **JavaScript** (with an Object-Oriented Programming approach). The blog allows users to add and view posts dynamically. It features a modal form to submit new posts and uses JavaScript to manage user data and blog posts.

## File Structure

- `index.html`: The main HTML file for the blog layout and structure.
- `index.js`: Contains the JavaScript for creating, rendering posts, and managing the modal form.

## Key Components

### 1. HTML Structure

The project uses a simple structure with a **Navbar**, a **button to add posts**, and a **list to display posts**.

- The Navbar contains links for `MyBlogs`, `Login`, and `Sign Up`.
- The **"Add Post"** button opens a modal where users can submit a new post.
- The **posts** are dynamically displayed in an unordered list (`ul`).

### 2. JavaScript (POO)

The project uses **Object-Oriented Programming** to manage the blog data. The following classes are used:

- **`User` class**: Represents a user with `id`, `username`, and `email`. This class also includes methods to convert to and from JSON format.
- **`Post` class**: Represents a blog post with `id`, `title`, `content`, and the `userId` of the creator. Like the `User` class, it includes methods for converting to/from JSON.

#### Example Code:
```javascript
class User {
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }
    toJSON() {
        return JSON.stringify(this);
    }
    static fromJSON(json) {
        const data = JSON.parse(json);
        return new User(data.id, data.username, data.email);
    }
}

class Post {
    constructor(id, title, content, userId) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = userId;
    }
    toJSON() {
        return JSON.stringify(this);
    }
    static fromJSON(json) {
        const data = JSON.parse(json);
        return new Post(data.id, data.title, data.content, data.userId);
    }
}
### 3. Modal Form
Add Post Modal: When clicking the "Add Post" button, a modal form appears, allowing the user to input a title and content for the post. Upon submission, the new post is added to the list dynamically.

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mini-blog.git
   cd mini-blog


## License
This project is open-source and available under the [MIT License](LICENSE).
