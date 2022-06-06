import React from 'react';
import '../Styles.css';
//import React, { Component } from 'react';
//import RenderRows from './Rows';

export default class DynamicTable extends React.Component {
// export default class DynamicTable extends Component {
    constructor(props) {
        super(props);

        this.state = { // attributes to place in array
            initiative: "", // "" cell starts blank
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

    // event handler for button click
    handleClick() {
        var combatants = this.state.combatants; // take current array of combatants and value of combatants
        console.log("'add combatant' button clicked");
        /* sort here instead of button function? */
        /*const sortCombatants = type => {
            const types = {
                initiative: 'initiative',
            };
            const sortProperty = types[type];
            const sorted = [...combatants].sort((a, b) => b[sortProperty] - a[sortProperty]);
            setData(sorted);
        };
        sortCombatants(sortType);*/

        // https://stackoverflow.com/questions/71398371/reactjs-multi-input-form-to-dynamic-table/71399034#71399034
        // this creates one row displaying '[object Object]'. When one is modified, all others duplicate input.
        combatants.push({ //pushing each variable to array
            initiative: this.state.initiative,
            name: this.state.name,
            armorClass: this.state.armorClass,
            hitPoints: this.state.hitPoints
        });        

        this.setState({
            combatants: combatants,
            initiative: "", // "" clears form cell after adding combatant
            name: "",
            armorClass: "",
            hitPoints: ""
        });
        console.log("combatant added");
    }

    // event handler to change combatant details on table
    handleCombatantChanged(i, event) {
        var combatants = this.state.combatants;
        combatants[i] = event.target.value;
        this.setState({
            combatants: combatants
        });
        console.log("combatant changed");
    }

    // event handler to delete combatant from table
    handleCombatantDeleted(i) {
        var combatants = this.state.combatants;
        combatants.splice(i, 1);
        this.setState({
            combatants: combatants
        });
        console.log("combatant deleted");
    }

    // event handler to sort combatants by initiative, descending
    handleInitSort(i) {
        //sort with handler? or add to handleClick to sort by value when pushing? or separate component function?
    }

    // render form inputs and table headers
    render() {
        const isEmpty = this.state.combatants.length > 0; //show/hide text depending how many combatants on list
        
        return (
            <div>

                {!isEmpty && (
                    <>Welcome to the Encounterer! Fill in the cells below as needed and then click the button below to add.</>
                )}
                {isEmpty && (
                    <>Keep adding characters as needed.</>
                )}

                <table class='center'>
                    {/* inputs for each combatant category */}
                    <td>
                        <th>Initiative</th>
                        <input                    
                            id="initiative"
                            type="text"
                            value={this.state.initiative}
                            onChange={this.updateInitiative.bind(this)} // onChange binds to corresponding event handler (i.e. updateInitiative)
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
                    {/* <td><th></th>
                        <button onClick={this.handleClick.bind(this)}>
                            Add Combatant
                        </button>
                    </td> */}
                </table>
                {!isEmpty && (
                    <>
                        <button className="button" onClick={this.handleClick.bind(this)}>
                            Click here to add a combatant
                        </button>
                    </>
                )}
                {isEmpty && (
                    <>
                        <button onClick={this.handleClick.bind(this)}>
                            Add combatant
                        </button>
                    </>
                )}
                
                
                {console.log("new combatant form loaded")} 

                {isEmpty && (
                    <div>                        
                        <p>Current Combatants</p> 
                        <table class='center'>
                            <thead>
                                <tr>
                                    {/* <button onClick={this.handleInitSort.bind(this)}>Sort</button> */}
                                    {/* maybe button not needed - sort on add instead? - or SortCombatant component?*/}
                                    <th>Initiative</th>
                                    <th>Name</th>  
                                    <th>Armor Class</th> 
                                    <th>Hit Points</th>                         
                                    <th></th>                             
                                </tr>
                            </thead>
                            <tbody>                        
                                {this.renderRows()} 
                            </tbody>
                        </table>   
                    </div>
                )}
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
                            Finish them! 
                        </button>
                    </td>
                    {console.log("combatant rendered")} 
                </tr>
            );
        });
    }
}
