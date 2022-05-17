import React from 'react';

// https://www.pluralsight.com/guides/creating-dynamic-editable-tables-with-reactjs

export default class DynamicTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = { // attributes to place in array
            initiative: "", // "" form starts blank
            name: "",
            armorClass: "",
            hitPoints: "",
            combatants: [] // empty array
        }
    }

    // event handlers to update displayed data from onChange when user changes cell data
    updateInitiative(event) {
        this.setState({initiative: event.target.value});
    }
    updateName(event) {
        this.setState({name: event.target.value});
    }
    updateArmorClass(event) {
        this.setState({armorClass: event.target.value});
    }
    updateHitPoints(event) {
        this.setState({hitPoints: event.target.value});
    }

    // event handler for button click - I think this might be my disconnect - need to understand setState better?
    handleClick() {
        var combatants = this.state.combatants; // take current array of combatants and value of combatants

        // https://stackoverflow.com/questions/71398371/reactjs-multi-input-form-to-dynamic-table/71399034#71399034
        // this creates one row displaying '[object Object]'. When one is modified, all others duplicate input.
        combatants.push({ //pushing each variable to array
            initiative: this.state.initiative,
            name: this.state.name,
            armorClass: this.state.armorClass,
            hitPoints: this.state.hitPoints
        });

        this.setState({ // understand setState better
            combatants: combatants, // UNDERSTAND THIS LINE BETTER
            initiative: "", // clears form after adding combatant
            name: "",
            armorClass: "",
            hitPoints: ""
        });
    }

    // event handler to change combatant details on table
    handleCombatantChanged(i, event) {
        var combatants = this.state.combatants;
        combatants[i] = event.target.value;

        this.setState({
            combatants: combatants
        });
    }

    // event handler to delete combatant from table
    handleCombatantDeleted(i) {
        var combatants = this.state.combatants;

        combatants.splice(i, 1);

        this.setState({
            combatants: combatants
        });
    }

    // render combatant details on a table
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
}
