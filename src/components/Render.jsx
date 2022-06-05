import React, { Component } from 'react';

class RenderTable extends Component {
    // render form inputs and table headers
    render() {
        return (
            <div>New Combatant
                <table>
                    {/* inputs for each combatant category */}
                    <td>
                        <th>Initiative</th>
                        <input                    
                            id="initiative"
                            type="text"
                            value={this.state.initiative}
                            onChange={this.updateInitiative.bind(this)} // onChange binds to event handler
                        />
                    </td>
                    <td>
                        <th>Name</th>
                        <input
                            id="name"
                            type="text"
                            value={this.state.name}
                            onChange={this.updateName.bind(this)}
                        />
                    </td>
                    <td>
                        <th>Armor Class</th>
                        <input
                            id="armorClass"
                            type="text"
                            value={this.state.armorClass}
                            onChange={this.updateArmorClass.bind(this)}
                        />
                    </td>
                    <td>
                        <th>Hit Points</th>
                        <input
                            id="hitPoints"
                            type="text"
                            value={this.state.hitPoints}
                            onChange={this.updateHitPoints.bind(this)}
                        />
                    </td>
                    <td><th></th>
                        <button onClick={this.handleClick.bind(this)}>
                            Add Combatant
                        </button>
                    </td>
                </table>                
                Current Combatants
                <table className="">
                    <thead>
                        <tr>
                            <th>Initiative</th>
                            <th>Name</th>  
                            <th>Armor Class</th> 
                            <th>Hit Points</th>                         
                            <th>Kill?</th> 
                        </tr>
                    </thead>
                    <tbody>                        
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }

    // render combatant details on a table
    // renderRows() {
    //     return <RenderRows />;
    // }
    renderRows() {
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
    
export default RenderRows;