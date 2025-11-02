const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const PORT = 5000;

// Database of questions for each category
const questionsDatabase = {
  "html": [
    {
      id: 1,
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Multi Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      id: 2,
      question: "Which tag is used to create a hyperlink in HTML?",
      options: [
        "<link>",
        "<a>",
        "<href>",
        "<hyperlink>"
      ],
      answer: "<a>"
    },
    {
      id: 3,
      question: "What is the correct HTML element for the largest heading?",
      options: [
        "<h6>",
        "<heading>",
        "<h1>",
        "<head>"
      ],
      answer: "<h1>"
    },
    {
      id: 4,
      question: "Which attribute is used to specify an alternate text for an image, if the image cannot be displayed?",
      options: [
        "src",
        "alt",
        "title",
        "longdesc"
      ],
      answer: "alt"
    },
    {
      id: 5,
      question: "What is the correct HTML for inserting a line break?",
      options: [
        "<br>",
        "<break>",
        "<lb>",
        "<linebreak>"
      ],
      answer: "<br>"
    },
    {
      id: 6,
      question: "Which HTML attribute specifies an inline style for an element?",
      options: [
        "class",
        "style",
        "font",
        "styles"
      ],
      answer: "style"
    },
    {
      id: 7,
      question: "What is the correct HTML for creating a checkbox?",
      options: [
        "<check>",
        "<input type='check'>",
        "<checkbox>",
        "<input type='checkbox'>"
      ],
      answer: "<input type='checkbox'>"
    },
    {
      id: 8,
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: [
        "<footer>",
        "<bottom>",
        "<section>",
        "<div>"
      ],
      answer: "<footer>"
    },
    {
      id: 9,
      question: "What is the correct HTML element for playing video files?",
      options: [
        "<media>",
        "<video>",
        "<movie>",
        "<play>"
      ],
      answer: "<video>"
    },
    {
      id: 10,
      question: "Which HTML element is used to display a scalar measurement within a known range?",
      options: [
        "<range>",
        "<meter>",
        "<measure>",
        "<gauge>"
      ],
      answer: "<meter>"
    }
  ],
  "javascript": [
    {
      id: 1,
      question: "What does JSX stand for?",
      options: [
        "Java Syntax Extension",
        "JavaScript XML",
        "JavaScript Extension",
        "JSON Syntax"
      ],
      answer: "JavaScript XML"
    },
    {
      id: 2,
      question: "Which of the following is not a JavaScript data type?",
      options: [
        "Number",
        "String",
        "Boolean",
        "Float"
      ],
      answer: "Float"
    },
    {
      id: 3,
      question: "What will 'typeof null' return in JavaScript?",
      options: [
        "null",
        "undefined",
        "object",
        "number"
      ],
      answer: "object"
    },
    {
      id: 4,
      question: "Which method removes the last element from an array and returns it?",
      options: [
        "pop()",
        "shift()",
        "slice()",
        "splice()"
      ],
      answer: "pop()"
    },
    {
      id: 5,
      question: "What is the purpose of the 'use strict' directive?",
      options: [
        "To enforce stricter type checking",
        "To enable strict mode which catches common coding mistakes",
        "To optimize code performance",
        "To enable experimental features"
      ],
      answer: "To enable strict mode which catches common coding mistakes"
    },
    {
      id: 6,
      question: "What does the 'this' keyword refer to in JavaScript?",
      options: [
        "The current function",
        "The parent object",
        "The global object",
        "It depends on the execution context"
      ],
      answer: "It depends on the execution context"
    },
    {
      id: 7,
      question: "Which of these is not a way to declare a variable in JavaScript?",
      options: [
        "let",
        "var",
        "const",
        "def"
      ],
      answer: "def"
    },
    {
      id: 8,
      question: "What is a closure in JavaScript?",
      options: [
        "A function that has access to its outer function's scope",
        "A way to close a program",
        "A method to hide variables",
        "A type of loop"
      ],
      answer: "A function that has access to its outer function's scope"
    },
    {
      id: 9,
      question: "What does the Array.map() method do?",
      options: [
        "Creates a new array with the results of calling a function on every element",
        "Changes the original array by applying a function to each element",
        "Filters the array based on a condition",
        "Sorts the array in ascending order"
      ],
      answer: "Creates a new array with the results of calling a function on every element"
    },
    {
      id: 10,
      question: "What is the purpose of the 'async' keyword in JavaScript?",
      options: [
        "To declare an asynchronous function",
        "To pause execution until a promise is resolved",
        "To make a function run in a separate thread",
        "To optimize performance"
      ],
      answer: "To declare an asynchronous function"
    }
  ],
  "react": [
    {
      id: 1,
      question: "What is React?",
      options: [
        "A programming language",
        "A JavaScript library for building user interfaces",
        "A database management system",
        "A server-side framework"
      ],
      answer: "A JavaScript library for building user interfaces"
    },
    {
      id: 2,
      question: "Which hook is used to perform side effects in a React component?",
      options: [
        "useState",
        "useEffect",
        "useContext",
        "useReducer"
      ],
      answer: "useEffect"
    },
    {
      id: 3,
      question: "What is the correct syntax to render a React component?",
      options: [
        "<MyComponent />",
        "{MyComponent}",
        "render(MyComponent)",
        "MyComponent.render()"
      ],
      answer: "<MyComponent />"
    },
    {
      id: 4,
      question: "How can you pass data from a parent component to a child component?",
      options: [
        "Using state",
        "Using props",
        "Using refs",
        "Using context"
      ],
      answer: "Using props"
    },
    {
      id: 5,
      question: "What is the purpose of keys in React?",
      options: [
        "To uniquely identify elements in lists",
        "To encrypt data",
        "To store sensitive information",
        "To optimize performance for all components"
      ],
      answer: "To uniquely identify elements in lists"
    },
    {
      id: 6,
      question: "Which method is called before a component is removed from the DOM?",
      options: [
        "componentWillUnmount",
        "componentDidUnmount",
        "componentWillRemove",
        "componentDidRemove"
      ],
      answer: "componentWillUnmount"
    },
    {
      id: 7,
      question: "What is JSX?",
      options: [
        "A syntax extension for JavaScript",
        "A templating language",
        "A type of CSS",
        "A build tool"
      ],
      answer: "A syntax extension for JavaScript"
    },
    {
      id: 8,
      question: "Which tool can you use to scaffold a new React project?",
      options: [
        "React CLI",
        "create-react-app",
        "npm init react",
        "react-starter"
      ],
      answer: "create-react-app"
    },
    {
      id: 9,
      question: "What is the virtual DOM in React?",
      options: [
        "A lightweight copy of the real DOM",
        "A 3D rendering engine",
        "A browser extension",
        "A testing framework"
      ],
      answer: "A lightweight copy of the real DOM"
    },
    {
      id: 10,
      question: "How can you update the state in a React component?",
      options: [
        "Directly modifying this.state",
        "Using this.setState()",
        "Using this.updateState()",
        "Using props.setState()"
      ],
      answer: "Using this.setState()"
    }
  ],
  "css": [
    {
      id: 1,
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      id: 2,
      question: "Which property is used to change the background color?",
      options: [
        "bgcolor",
        "color",
        "background-color",
        "bg-color"
      ],
      answer: "background-color"
    },
    {
      id: 3,
      question: "How do you select an element with id 'demo' in CSS?",
      options: [
        ".demo",
        "#demo",
        "*demo",
        "demo"
      ],
      answer: "#demo"
    },
    {
      id: 4,
      question: "Which property is used to change the font of an element?",
      options: [
        "font-family",
        "font-style",
        "font-weight",
        "text-font"
      ],
      answer: "font-family"
    },
    {
      id: 5,
      question: "How do you make a list that lists its items with squares?",
      options: [
        "list-style-type: square;",
        "list-type: square;",
        "list-style: square;",
        "list: square;"
      ],
      answer: "list-style-type: square;"
    },
    {
      id: 6,
      question: "Which property is used to change the left margin of an element?",
      options: [
        "padding-left",
        "margin-left",
        "indent",
        "left-margin"
      ],
      answer: "margin-left"
    },
    {
      id: 7,
      question: "What is the default value of the position property?",
      options: [
        "fixed",
        "absolute",
        "relative",
        "static"
      ],
      answer: "static"
    },
    {
      id: 8,
      question: "How do you make each word in a text start with a capital letter?",
      options: [
        "text-transform: capitalize;",
        "text-transform: uppercase;",
        "text-style: capital;",
        "font-variant: small-caps;"
      ],
      answer: "text-transform: capitalize;"
    },
    {
      id: 9,
      question: "Which property is used to change the text color of an element?",
      options: [
        "text-color",
        "fgcolor",
        "color",
        "font-color"
      ],
      answer: "color"
    },
    {
      id: 10,
      question: "How do you select all p elements inside a div element?",
      options: [
        "div.p",
        "div p",
        "div + p",
        "div > p"
      ],
      answer: "div p"
    }
  ],
  "next js": [
    {
      id: 1,
      question: "What is Next.js primarily used for?",
      options: [
        "Building mobile applications",
        "Building server-side rendered React applications",
        "Creating CSS animations",
        "Database management"
      ],
      answer: "Building server-side rendered React applications"
    },
    {
      id: 2,
      question: "Which file is used for global styles in Next.js?",
      options: [
        "_app.js",
        "_document.js",
        "styles/globals.css",
        "next.config.js"
      ],
      answer: "styles/globals.css"
    },
    {
      id: 3,
      question: "How do you create a dynamic route in Next.js?",
      options: [
        "By creating a file with [id].js in the pages directory",
        "By using the useRouter hook",
        "By configuring next.config.js",
        "Dynamic routes are not supported in Next.js"
      ],
      answer: "By creating a file with [id].js in the pages directory"
    },
    {
      id: 4,
      question: "What is the purpose of getStaticProps in Next.js?",
      options: [
        "To fetch data at request time",
        "To fetch data at build time",
        "To handle form submissions",
        "To manage component state"
      ],
      answer: "To fetch data at build time"
    },
    {
      id: 5,
      question: "Which command is used to start a Next.js development server?",
      options: [
        "npm run dev",
        "npm start",
        "next dev",
        "Both A and C"
      ],
      answer: "Both A and C"
    },
    {
      id: 6,
      question: "What is the purpose of the _document.js file in Next.js?",
      options: [
        "To define the document structure",
        "To handle API routes",
        "To configure the build process",
        "To manage authentication"
      ],
      answer: "To define the document structure"
    },
    {
      id: 7,
      question: "How does Next.js handle static file serving?",
      options: [
        "Files in the public directory are served statically",
        "Files in the static directory are served statically",
        "Files in the assets directory are served statically",
        "Next.js doesn't support static file serving"
      ],
      answer: "Files in the public directory are served statically"
    },
    {
      id: 8,
      question: "What is the purpose of the Image component in Next.js?",
      options: [
        "To automatically optimize images",
        "To create image galleries",
        "To handle image uploads",
        "To convert images to different formats"
      ],
      answer: "To automatically optimize images"
    },
    {
      id: 9,
      question: "How do you create an API route in Next.js?",
      options: [
        "By creating files in the pages/api directory",
        "By using the createApi utility",
        "By configuring next.config.js",
        "API routes are not supported in Next.js"
      ],
      answer: "By creating files in the pages/api directory"
    },
    {
      id: 10,
      question: "What is the purpose of getServerSideProps in Next.js?",
      options: [
        "To fetch data at build time",
        "To fetch data on each request",
        "To handle client-side data fetching",
        "To manage server state"
      ],
      answer: "To fetch data on each request"
    }
  ],
  "tailwind css": [
    {
      id: 1,
      question: "What is Tailwind CSS?",
      options: [
        "A JavaScript framework",
        "A utility-first CSS framework",
        "A build tool",
        "A testing library"
      ],
      answer: "A utility-first CSS framework"
    },
    {
      id: 2,
      question: "How do you apply padding of 1rem on all sides in Tailwind?",
      options: [
        "p-1",
        "p-4",
        "p-8",
        "p-16"
      ],
      answer: "p-4"
    },
    {
      id: 3,
      question: "Which Tailwind class would you use for flexbox?",
      options: [
        "flex",
        "box",
        "grid",
        "inline-flex"
      ],
      answer: "flex"
    },
    {
      id: 4,
      question: "How do you make text bold in Tailwind?",
      options: [
        "font-bold",
        "text-bold",
        "weight-bold",
        "bold"
      ],
      answer: "font-bold"
    },
    {
      id: 5,
      question: "What does the 'md:' prefix indicate in Tailwind?",
      options: [
        "Mobile-first design",
        "Medium screen size breakpoint",
        "Modern design",
        "Dark mode"
      ],
      answer: "Medium screen size breakpoint"
    },
    {
      id: 6,
      question: "How do you center an element horizontally in Tailwind?",
      options: [
        "mx-auto",
        "text-center",
        "center",
        "justify-center"
      ],
      answer: "mx-auto"
    },
    {
      id: 7,
      question: "Which Tailwind class would you use for a black background?",
      options: [
        "bg-black",
        "bg-dark",
        "bg-#000",
        "background-black"
      ],
      answer: "bg-black"
    },
    {
      id: 8,
      question: "How do you apply hover styles in Tailwind?",
      options: [
        "hover: before the class",
        "hover() around the class",
        ":hover suffix",
        "Tailwind doesn't support hover states"
      ],
      answer: "hover: before the class"
    },
    {
      id: 9,
      question: "What is the purpose of @apply in Tailwind?",
      options: [
        "To create custom CSS classes using Tailwind utilities",
        "To import components",
        "To extend the configuration",
        "To apply animations"
      ],
      answer: "To create custom CSS classes using Tailwind utilities"
    },
    {
      id: 10,
      question: "How do you customize Tailwind's default configuration?",
      options: [
        "By editing tailwind.config.js",
        "By modifying package.json",
        "By creating a custom.css file",
        "Tailwind doesn't support customization"
      ],
      answer: "By editing tailwind.config.js"
    }
  ]
};

// API endpoint to get all categories
app.get('/api/categories', (req, res) => {
  const categories = Object.keys(questionsDatabase);
  res.json(categories);
});

// API endpoint to get questions by category
app.get('/api/questions/:category', (req, res) => {
  const category = req.params.category;
  const questions = questionsDatabase[category];
  
  if (questions) {
    res.json(questions);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

// API endpoint to get a specific question by category and id
app.get('/api/questions/:category/:id', (req, res) => {
  const category = req.params.category;
  const id = parseInt(req.params.id);
  
  const questions = questionsDatabase[category];
  
  if (questions) {
    const question = questions.find(q => q.id === id);
    
    if (question) {
      res.json(question);
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

// Add this route to handle the root URL
app.get('/', (req, res) => {
  res.send(`
    <h1>MCQ API</h1>
    <p>Available endpoints:</p>
    <ul>
      <li><a href="/api/categories">/api/categories</a> - Get all categories</li>
      <li>/api/questions/:category - Get questions for a category (e.g. <a href="/api/questions/HTML">/api/questions/HTML</a>)</li>
      <li>/api/questions/:category/:id - Get specific question (e.g. <a href="/api/questions/JavaScript/1">/api/questions/JavaScript/1</a>)</li>
    </ul>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});