import React, { Component } from 'react';

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