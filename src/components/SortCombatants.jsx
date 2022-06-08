import React, { Component } from 'react';

// https://dev.to/ramonak/react-how-to-dynamically-sort-an-array-of-objects-using-the-dropdown-with-react-hooks-195p
// https://ramonak.io/posts/react-how-to-sort-array-of-objects-with-dropdown-and-hooks

sortButton() => {
    const sortCombatants = type => {
        const types = {
            initiative: 'initiative',
        };
        const sortProperty = types[type];
        const sorted = [...combatants].sort((a, b) => b[sortProperty] - a[sortProperty]);
        setData(sorted);
    };
    sortCombatants(sortType);
};