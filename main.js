//Fetch Josn Placeholder Api
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            posts.forEach(post => {
                users.forEach(user => {
                    if(post.userId === user.id)
                    {
                        // Create Main Div
                        let mainDiv = document.createElement("div")
                        mainDiv.className = "post";
                        
                        //Create Title Of Post
                        let postTitle = document.createElement("h2")
                        postTitle.textContent = post.title;

                        //Create Username Of Post
                        let postUser = document.createElement("div")
                        postUser.textContent = `Posted By: ${user.name} (${user.email})`
                        postUser.className ="user";

                        //Create Body Of Post
                        let postBody = document.createElement("p");
                        postBody.textContent = post.body;

                        //Append Element To Main Div
                        mainDiv.append(postTitle)
                        mainDiv.append(postUser)
                        mainDiv.append(postBody)

                        //Call Blog Container
                        let blogContainer = document.querySelector(".blog-container")

                        //Append Main Div To Blog Container
                        blogContainer.append(mainDiv)

                    }
                })
            })
        })
    })
