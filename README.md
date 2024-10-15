# AppWrite React Blog App

This Cloud Application was developed using AppWrite as a BaaS (Backend as a Service), React as its frontend, and Tailwind CSS. The users can signup/login, read other users' posts or create, edit or delete their posts.


## Checkout this demo video


https://github.com/user-attachments/assets/0241458e-2d77-4fe7-827e-bf105437d8b1


### Video Description

The video shows the implementation of the following:

1. Authentication (SignUp and Login)
2. Authentication storage in Redux
3. Reading the posts created by others
4. Creating a post
5. Editing a post that was owned by a respective user
6. Unable to Edit or Delete other users' posts

### AppWrite Stats

![image](https://github.com/user-attachments/assets/a05bd13d-f203-4aa9-bb4b-3f0dd27f64ed)



## Following concepts are implemented:


### Cloud Backend

> Implementation of Appwrite that gives BaaS (Backend as a Service) on Cloud (Similar to AWS).


### Vendor Lock-in prevention

> Inorder to separate the dependency of Appwrite which is a Backend as a Service, a separate service has been created. This ensures separating the app if the app needs to be migrated to any other cloud platform.

> Implementation of Clean Code


### Redux Store

> Redux Toolkit is used to track the authentication (login and logout)

> In the branch named `post-redux`, postSlice has been created to cache the posts to minimize the GET request from the server.


### Components Reusablity

> useForwardRef is used to transfer the state from parent to child component


### React Hook Form

> Usage of React hook form for signup and login

> Slug Transformation: used `watch` method of React hook form to watch the activity of the `title` field and transformed slug based on the `title`.


### Mechanism to protect pages and routes

> Protected Container is created to protect pages and routes


### TinyMCE Rich Text Editor

