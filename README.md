#### Alex Acosta
#### Capstone Project "The Encounterer - a TTRPG encounter tracker"
#### Walla Walla Community College, Computer Science


# The Encounterer
I wanted to build this in response to the frustrations I have experienced as a Table Top Role-
Playing Game (TTRPG) Dungeon/Game Master/Manager (DM/GM) when it comes to turn-based portions
of gameplay, generally known as 'an encounter.' Countless pages and scraps of paper and precious
minutes of gameplay have been wasted for the sake of hand-writing repetitive information down
and hoping to keep track of it all accurately in the heat of battle. This is not to say there
are not other websites and applications out there which serve the purpose of this dilemma, but
in my experience with them, they all require too much information to create an on-the-fly
encounter session. The point is to save time and when helpful, but unncessesary information is
required to begin, the benefit of the tool seems to diminish, in my eyes. I am here to create
an encounter tracking tool which has no required fields and can be edited on the fly, all while
staying on the same screen.


## App.js notes
re-save package.json if app doesn't load - trying to find permanent fix
not sure what's happened, but it's working now? keeping this here just in case
https://stackoverflow.com/questions/70377211/error-when-deploying-react-app-and-it-keeps-sayings-plugin-react-was-confli

setting up React https://www.youtube.com/watch?v=QJZ-xgt4SJo&t=227s

https://react-table.tanstack.com/docs/installation
how-to https://www.youtube.com/watch?v=WRKEjPq75BY

updating gh pages https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/


## Future work
-sort combatants (by init, descending)
    -start/next button (sort on start?)
    -'on deck' notification
-responsive web design (make mobile-friendly)
-validate initiative, armorClass, and hitPoints for ints or blank only
    -arrow adjustment on int only cells
-line through at 0 hitPoints and overlay death save blocks
-expand armorClass for advanced options (armor + dex + mods)
-expand hitPoints for advanced options (current, max, temporary)
-active effects (prone, charmed, etc.)
-auto initiative
-custom notes cell (or expandible window)
-buttons
    -hover over delete/kill for skulls/xbones
    -pulse add button for x seconds after first cell is filled?


### Sources:
All WWCC CS247 assignments and class content
https://github.com/gitname/react-gh-pages
https://www.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs
https://www.youtube.com/watch?v=j5P9FHiBVNo&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=20
https://www.youtube.com/watch?v=4ORZ1GmjaMc&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=10
https://www.c-sharpcorner.com/article/how-to-deploy-react-application-on-github-pages/
https://www.youtube.com/watch?v=9FpKrC8oyzg
https://reactjs.org/docs/code-splitting.html
https://create-react-app.dev/docs/importing-a-component/
https://www.freecodecamp.org/news/pass-data-between-components-in-react/
https://www.digitalocean.com/community/tutorials/react-constructors-with-react-components
https://reactjs.org/docs/react-component.html
https://www.javatpoint.com/react-constructor
https://www.knowledgehut.com/blog/web-development/understanding-constructors-with-react-components
https://www.geeksforgeeks.org/react-js-constructor-method/
https://github.com/facebook/react/issues/5652
https://gist.github.com/mandiwise/44d1edce18f2ffb14f63
https://bobbyhadz.com/blog/react-sort-array-of-objects