import React, { Component } from 'react';

class RenderRows extends Component {
// render combatant details on a table
    render() {
        var context = this;
        // combatants is the dynamic array
        return  this.state.combatants.map(function(o, i) { // o accesses the values of each combatant object
            return (
                // i is index of element in array                
                <tr key={"combatant-" + i}>
                    <td>
                        <input
                            id="initiative"
                            type="text"
                            value={o.initiative}
                            onChange={context.handleCombatantChanged.bind(context, i)} // onChange binds to event handler
                        />
                    </td>
                    <td>
                        <input
                            id="name"
                            type="text"
                            value={o.name}
                            onChange={context.handleCombatantChanged.bind(context, i)}
                        />
                    </td>
                    <td>
                        <input
                            id="armorClass"
                            type="text"
                            value={o.armorClass}
                            onChange={context.handleCombatantChanged.bind(context, i)}
                        />
                    </td>
                    <td>    
                        <input
                            id="hitPoints"
                            type="text"
                            value={o.hitPoints}
                            onChange={context.handleCombatantChanged.bind(context, i)}
                        />
                    </td>                    
                    <td> 
                        {/* // onClick binds event handler */}
                        <button onClick={context.handleCombatantDeleted.bind(context, i)}> 
                            Finish him! 
                        </button>
                    </td>
                </tr>
            );
        });
    }    
}

export default RenderRows;