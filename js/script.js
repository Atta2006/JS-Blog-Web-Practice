// Get references to various DOM elements by their IDs
let postBtn = document.getElementById("post-btn");
let writeBlogBtn = document.getElementById("writeBlogBtn");
let BlogPage = document.getElementById("blog-page");
let PostTitle = document.getElementById("title");
let postSelectCategory = document.getElementById("blog-input-categories");
let postText = document.getElementById("text");
let blogContainer = document.getElementById("blogs-container");

// Array to hold blog post data
let PostsArray = [
    { title: 'Web Dev Basics', text: 'Introduction to HTML, CSS, and JavaScript', category: 'Web-Development' },
    { title: 'JavaScript Frameworks', text: 'Exploring popular frameworks like React and Angular', category: 'Web-Development' },
    { title: 'Backend Technologies', text: 'Introduction to Node.js and Express', category: 'Web-Development' },

    // Graphic Designing
    { title: 'Graphic Design Fundamentals', text: 'Understanding color theory and typography', category: 'Graphic-Designing' },
    { title: 'Tools for Graphic Design', text: 'Exploring Adobe Photoshop and Illustrator', category: 'Graphic-Designing' },
    { title: 'Branding and Identity', text: 'Creating a strong brand identity', category: 'Graphic-Designing' },

    // SEO (Search Engine Optimization)
    { title: 'SEO Basics', text: 'Understanding keywords and metadata', category: 'SEO' },
    { title: 'Link Building Strategies', text: 'How to build backlinks effectively', category: 'SEO' },
    { title: 'Content SEO', text: 'Optimizing content for search engines', category: 'SEO' },

    // SMM (Social Media Marketing)
    { title: 'SMM Overview', text: 'Introduction to social media platforms', category: 'SMM' },
    { title: 'Engagement Techniques', text: 'Tips for increasing social media engagement', category: 'SMM' },
    { title: 'Social Media Campaigns', text: 'Planning and executing successful campaigns', category: 'SMM' },

    // AI (Artificial Intelligence)
    { title: 'AI Basics', text: 'Introduction to machine learning and deep learning', category: 'AI' },
    { title: 'AI in Everyday Life', text: 'How AI is transforming industries', category: 'AI' },
    { title: 'Ethics in AI', text: 'Exploring the ethical implications of AI', category: 'AI' },

    // Content Writing
    { title: 'Content Writing Tips', text: 'How to create engaging and effective content', category: 'Content-Writing' },
    { title: 'SEO for Content Writers', text: 'How to optimize content for search engines', category: 'Content-Writing' },
    { title: 'Creating Compelling Headlines', text: 'Tips for crafting attention-grabbing headlines', category: 'Content-Writing' },

    // Web Designing
    { title: 'Web Design Fundamentals', text: 'Principles of good web design', category: 'Web-Designing' },
    { title: 'User Experience (UX)', text: 'Designing with the user in mind', category: 'Web-Designing' },
    { title: 'Responsive Design', text: 'Creating websites that adapt to different devices', category: 'Web-Designing' }
];

// Event listener to show the blog page when the "Write Blog" button is clicked
writeBlogBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    BlogPage.classList.add("active"); // Show the blog page by adding an "active" class
});

// Event listener for the "Post" button to add a new blog post
postBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default behavior to avoid page reload
    if (PostTitle.value === "") {
        alert("fill the blog title filed")
    } else if(postText.value === ""){
        alert("fill the blog description field")
    }else {
        let selectedPostCategory = postSelectCategory.options[postSelectCategory.selectedIndex].value; // Get the selected category
        let newObject = { title: PostTitle.value, text: postText.value, category: selectedPostCategory }; // Create a new post object
        PostsArray.unshift(newObject); // Add the new post to the PostsArray
        alert("blog posted successfully")
        console.log(PostsArray)

        savArrayDataToLocalStorage(); // Save the updated PostsArray to local storage
        postText.value = ""; // Clear the post text field
        PostTitle.value = ""; // Clear the post title field
    }
});

// Function to save the PostsArray to local storage
const savArrayDataToLocalStorage = () => {
    localStorage.setItem("stringifiedPostArray", JSON.stringify(PostsArray)); // Store the PostsArray as a string
};

// Function to retrieve the PostsArray from local storage
const getArrayDataFromLocalStorage = () => {
    let storedPostArray = JSON.parse(localStorage.getItem("stringifiedPostArray")) || []; // Retrieve and parse stored array
    PostsArray = PostsArray.concat(storedPostArray); // Concatenate with existing array to avoid overwriting
};

// Function to display categories for filtering
const displayCategories = () => {
    const categoriesContainer = document.getElementById("categories-container"); // Get the categories container
    if (categoriesContainer) {
        categoriesContainer.innerHTML = ""; // Clear existing content to avoid duplicates

        // Create and append "All" category for showing all blogs
        const allCategoryElement = document.createElement("div");
        allCategoryElement.classList.add("filter-item"); // Add styling class
        allCategoryElement.textContent = "All"; // Label for the "All" category
        allCategoryElement.addEventListener("click", showAllBlogs); // Show all blogs on click
        categoriesContainer.appendChild(allCategoryElement); // Add to container

        // Get unique categories from PostsArray
        const categories = [...new Set(PostsArray.map((post) => post.category))];

        // Create and append individual category elements
        categories.forEach((category) => {
            const categoryElement = document.createElement("div");
            categoryElement.classList.add("filter-item"); // Add styling class
            categoryElement.textContent = category; // Display category name

            // Add click event to filter blogs by the selected category
            categoryElement.addEventListener("click", () => {
                showFilteredBlogs(category);
            });

            categoriesContainer.appendChild(categoryElement); // Append to the container
        });
    } else {
        console.error("categories-container not found"); // Error handling if container is missing
    }
};

// Function to show all blogs
const showAllBlogs = () => {
    blogContainer.innerHTML = ""; // Clear existing content

    // Iterate through PostsArray and create blog cards
    PostsArray.forEach((post) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card"); // Add styling class

        const blogCardTitle = document.createElement("h3");
        const blogCardText = document.createElement("p");
        const blogCategory = document.createElement("h5");

        blogCategory.innerHTML = post.category; // Set the category label
        blogCardTitle.innerHTML = post.title; // Set the card title
        blogCardText.innerHTML = post.text; // Set the card text

        blogCard.appendChild(blogCardTitle); // Add elements to the card
        blogCard.appendChild(blogCardText);
        blogCard.appendChild(blogCategory);

        blogContainer.appendChild(blogCard); // Append the card to the blog container
    });
};

// Function to show blogs filtered by category
const showFilteredBlogs = (category) => {
    blogContainer.innerHTML = ""; // Clear existing content

    // Filter and display posts by category
    PostsArray.filter((post) => post.category === category).forEach((post) => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("blog-card");

        const blogCardTitle = document.createElement("h3");
        const blogCardText = document.createElement("p");
        const blogCategory = document.createElement("h5");

        blogCardTitle.innerHTML = post.title; // Set the card title
        blogCardText.innerHTML = post.text; // Set the card text
        blogCategory.innerHTML = post.category; // Set the category label

        blogCard.appendChild(blogCardTitle);
        blogCard.appendChild(blogCardText);
        blogCard.appendChild(blogCategory);

        blogContainer.appendChild(blogCard); // Append to the blog container
    });
};

// Initialize data and display content
getArrayDataFromLocalStorage(); // Load data from local storage
showAllBlogs(); // Display all blogs initially
displayCategories(); // Display all categories, including the "All" option
