import React from 'react';
import '../Styles.css';

{console.log("DynamicTable.jsx success")}
export default class DynamicTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            initiative: '',
            name: '',
            armorClass: '',
            hitPoints: '',
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
        console.log("add combatant button clicked");

        /*const sortCombatants = type => {
            const types = {
                initiative: 'initiative',
            };
            const sortProperty = types[type];
            const sorted = [...combatants].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setData(sorted);
        };
        sortCombatants(sortType);*/

        combatants.push({
            initiative: this.state.initiative,
            name: this.state.name,
            armorClass: this.state.armorClass,
            hitPoints: this.state.hitPoints
        });

        console.log("sending combatant to list");

        this.setState({
            combatants: combatants,
            initiative: '',
            name: '',
            armorClass: '',
            hitPoints: ''
        });
        {console.log("new combatant form reset")}
    }

    handleCombatantChanged(i, event) {
        var combatants = this.state.combatants;
        combatants[i] = event.target.value;
        this.setState({
            combatants: combatants
        });
        console.log("combatant changed");
    }

    handleCombatantDeleted(i) {
        var combatants = this.state.combatants;
        combatants.splice(i, 1);
        this.setState({
            combatants: combatants
        });
        console.log("combatant deleted");
    }    

    render() {
        const isEmpty = this.state.combatants.length > 0;
        
        return (
            <div>
                {!isEmpty && (
                    <>Welcome to the Encounterer! Fill in the cells below as needed and then click the button below to add.</>
                )}
                {isEmpty && (
                    <>Continue adding characters as needed.</>
                )}
                
                <table className='center'>
                    <tbody>
                        <tr>
                            <td>
                                <th>Initiative</th>
                                <input                    
                                    id='initiative'
                                    type='text'
                                    value={this.state.initiative}
                                    onChange={this.updateInitiative.bind(this)}
                                />
                            </td>
                            <td>
                                <th>Name</th>
                                <input
                                    id='name'
                                    type='text'
                                    value={this.state.name}
                                    onChange={this.updateName.bind(this)}
                                />
                            </td>
                            <td>
                                <th>Armor Class</th>
                                <input
                                    id='armorClass'
                                    type='text'
                                    value={this.state.armorClass}
                                    onChange={this.updateArmorClass.bind(this)}
                                />
                            </td>
                            <td>
                                <th>Hit Points</th>
                                <input
                                    id='hitPoints'
                                    type='text'
                                    value={this.state.hitPoints}
                                    onChange={this.updateHitPoints.bind(this)}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                {!isEmpty && (
                    <>
                        <button className='button' onClick={this.handleClick.bind(this)}>
                            Click here to add a combatant
                        </button>
                    </>
                )}
                {isEmpty && (
                    <>
                        <button onClick={this.handleClick.bind(this)}>
                            Add another combatant
                        </button>
                    </>
                )}

                {isEmpty && (
                    <div>                        
                        <p>Current Combatants</p> 
                        <table className='center'>
                            <thead>
                                <tr>
                                    <th>Initiative</th>
                                    <th>Name</th>  
                                    <th>Armor Class</th> 
                                    <th>Hit Points</th>                         
                                    <th></th>                                                                  
                                </tr>
                            </thead>
                            <tbody>                        
                                {this.renderRows()}
                                {console.log("combatant list updated")}
                            </tbody>
                        </table>   
                    </div>
                )} 
            </div>
        );
    }

    renderRows() {
        var context = this;
        return  this.state.combatants.map(function(o, i) {
            return (               
                <tr key={'combatant-' + i}>
                    <td>
                        <input
                            id='initiative'
                            type='text'
                            value={o.initiative}
                            onChange={context.handleCombatantChanged.bind(context, i)}
                        />
                    </td>
                    <td>
                        <input
                            id='name'
                            type='text'
                            value={o.name}
                            onChange={context.handleCombatantChanged.bind(context, i)}
                        />
                    </td>
                    <td>
                        <input
                            id='armorClass'
                            type='text'
                            value={o.armorClass}
                            onChange={context.handleCombatantChanged.bind(context, i)}
                        />
                    </td>
                    <td>    
                        <input
                            id='hitPoints'
                            type='text'
                            value={o.hitPoints}
                            onChange={context.handleCombatantChanged.bind(context, i)}
                        />
                    </td>                                       
                    <td> 
                        <button onClick={context.handleCombatantDeleted.bind(context, i)}> 
                            Finish them! 
                        </button>
                    </td>
                    
                </tr>
            );
        });
    }
}