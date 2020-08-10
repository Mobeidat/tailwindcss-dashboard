# UI Dashboard

To get started, clone the project and install the dependencies:

```
# Using npm
npm install
```

After that, start up Webpack Development Server:

```
npm run dev
```

The page is rendered here <http://localhost:8080/>.

To build a production bundle run:

```
npm run prod
```

After that you will have a ready to deploy bundle at `/dist`


# UI and Design Issues list

- Spaces between the cards are not consistent
- Card #1 - View sales button text is not vertically aligned inside the button
- Card #2 - Pending status color should be something else maybe red
- Card #3 - Check the implementation
- Card #5 - Latest update card, check last item the “ Total  Cost” have  a sub-label called “ Total Products “ that label shouldn’t be exist
- Card #6 
    - Border radius is too big, it should be like other cards 
    - Button styling should be the same as other buttons ( Card#1 ) it looks very odd
    - The subtext font family is the same as the heading font family and I suggest to have into a secondary font “ IBM Flex Sans”
    - Sidebar and the main content background, the current design distinguish between then by the vertical border separator, but I suggest to have a different background for the sidebar with a drop shadow ( Check the implementation )


