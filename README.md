# Pokemon workshop

We're making a pokedex app in which you can browse through the pokedex. Currently there's only a pokedex page which lists the first 20 pokemon (out of ???).

## Exercise 1: Add a pokemon detail page

In order to get more info on a specific pokemon, you need to add a page that shows the details of that pokemon (including an image preferably). It'd also be nice to have a link from the pokedex to the pokemon detail page. You can add your code at `src/pages/pokemons/[name].tsx`.

## Exercise 2: Add pagination to the pokedex

As you can see, the pokedex is a list of pokemons. But not all the pokemons are currently displayed. Which makes sense because fetching all the pokemons at once is probably not a good idea. Can you try to add pagination in `src/pages/pokemons/index.tsx`?

## Exercise 3: Prefetch the data necessary for the pokemon detail page

Currently we have a pokemon detail page that fetches data everytime when you visit the page. As this data is kind of static it's not really necessary to fetch it again every visit. Fortunately we use nextjs. Can you try prefetching the data on the server and provide it to the client? You can use nextjs methods `getStaticPaths` and `getStaticProps` in order to achieve this in `src/pages/pokemons/[name].tsx`. Take a look [here](https://react-query-v2.tanstack.com/guides/ssr) for some more guidance. Note: the hydration part is already in order.
