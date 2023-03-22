# Newspaper application. The application allows you to read the news

Work version of project you can see here - [https://incomparable-llama-421177.netlify.app/](https://incomparable-llama-421177.netlify.app/).

## Application technologies

The site presents a single page application created on React

## `The following dependencies are used`

"react"
"react-router-dom"
"react-share"

## Application Features

### `main page`

On the main page, you can view the latest news that is loaded from currentsapi.

By default, you see 30 latest news, but you can upload more news using button Load more news in the bottom of the site. The maximum limit is 200, this is how much api can be loaded.

Each news has a plus sign, you can add this news to your favorites.

On the top you can see the main categories, on the bottom you can see all the categories. Each news has one or more categories. By clicking anywhere on a category, you will be able to select news from that category only.

The site header allows you to go to a page with selected news or use the search. In the search, you can use the keyword, start and end date of the search. Warning: API searches are very slow.

Each news item has 4 social media buttons that you can use to share the news item with your friends, family or colleagues.

Each news has a link to the original news source

### `search page`

The search page is exactly the same as the main page, but here you see the search results. The maximum possible number of news in the search is 30, made to increase the speed of the search.

### `favorite page`

The featured news page stores news in local storage, so each browser will have different favorite news.

The maximum number of displayed favorite news is 30 by default, by clicking on the Load more news button you can see more if you have more than 30

### `category page`

The categories page allows you to read the news of a specific category that you clicked on, you can see all the categories in the footer of the site.

The initial number of categories displayed is 30, but you can see more by clicking on the Load more news button. The maximum number is 200 this number allows the api

## Testing

Cypress was used for testing. Tests allow you to check the performance of the application and each specific page.

## Application structure

The application has 4 folders besides the root directory

In the assets folder you can see all the pictures necessary for the application

In the components folder you will see the react components and the corresponding css files

In the hooks folder you can see all custom hooks

In the page folder you can see the React components with the corresponding site pages and also the css files

In the root directory, you can see the index.jsx file, in which we directly connect the code to the page, and the app.jsx file, which is the root for our application. In the app.jsx file, we also describe all our routes and connect the context
