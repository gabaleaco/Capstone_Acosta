import React from 'react';

export default class DynamicTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initiative: "",
            name: "",
            armorClass: "",
            hitPoints: "",
            combatants: []
        }
    }

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

    handleClick() {
        var combatants = this.state.combatants;

        combatants.push({
            initiative: this.state.initiative,
            name: this.state.name,
            armorClass: this.state.armorClass,
            hitPoints: this.state.hitPoints
        });

        this.setState({
            combatants: combatants,
            initiative: "",
            name: "",
            armorClass: "",
            hitPoints: ""
        });
    }

    handleCombatantChanged(i, event) {
        var combatants = this.state.combatants;
        combatants[i] = event.target.value;
        this.setState({
            combatants: combatants
        });
    }

    handleCombatantDeleted(i) {
        var combatants = this.state.combatants;
        combatants.splice(i, 1);
        this.setState({
            combatants: combatants
        });
    }

    render() {
        return (
            <div>New Combatant
                <table>
                    <td>
                        <th>Initiative</th>
                        <input                    
                            id="initiative"
                            type="text"
                            value={this.state.initiative}
                            onChange={this.updateInitiative.bind(this)}
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

    renderRows() {
        var context = this;

        return  this.state.combatants.map(function(o, i) {
            return (
               
                <tr key={"combatant-" + i}>
                    <td>
                        <input
                            id="initiative"
                            type="text"
                            value={o.initiative}
                            onChange={context.handleCombatantChanged.bind(context, i)}
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
                        <button onClick={context.handleCombatantDeleted.bind(context, i)}> 
                            Finish him! 
                        </button>
                    </td>
                </tr>
            );
        });
    }
}