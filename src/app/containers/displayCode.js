import React from 'react';
import { Panel, Button, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';

import { removeScenario, removeStep, scenarioDown, scenarioUp } from '../actions/createActions';
import '../../assets/css/App.css';

class DisplayCode extends React.Component {


    render() {
        var disableScenarioDown = (event) => {
            console.log('in remove scenario');

        }
        //onClick={handle.bind(this, item.scenarioId)}

        const scenarios = this.props.create.scenarios.map((item) => {
            return (
                <li key={item.scenarioId}>
                    <p>
                        <Button className='allButtons'><img src={require('../../assets/images/edit_icon.png')} alt="edit" width="20" height="20" /></Button>
                        <Button className='allButtons' onClick={this.props.removeScenario.bind(this, item.scenarioId)}><img src={require('../../assets/images/delete-icon.png')} alt="delete" width="20" height="20" /></Button>
                        <Button className='allButtons' onClick={this.props.scenarioUp.bind(this, item.scenarioId)}><img src={require('../../assets/images/up-arrow.png')} alt="up" width="20" height="20" /></Button>
                        <Button className='allButtons' onClick={this.props.scenarioDown.bind(this, item.scenarioId)}><img src={require('../../assets/images/down-arrow.svg')} alt="down" width="20" height="20" /></Button>
                        <span className="blueTag"> &nbsp;&emsp;Scenario: </span>{item.description}
                    </p>
                    <ul>
                        {
                            item.steps.map((step) => {
                                return (
                                    <li key={step.stepId}>

                                        <Button className='allButtons'><img src={require('../../assets/images/edit_icon.png')} alt="edit" width="20" height="20" /></Button>
                                        <Button className='allButtons' onClick={this.props.removeStep.bind(this, step.stepId, item.scenarioId)}><img src={require('../../assets/images/delete-icon.png')} alt="delete" width="20" height="20" /></Button>
                                        <Button className='allButtons'><img src={require('../../assets/images/up-arrow.png')} alt="up" width="20" height="20" /></Button>
                                        <Button className='allButtons'><img src={require('../../assets/images/down-arrow.svg')} alt="down" width="20" height="20" /></Button>
                                        <span className="blueTag"> &nbsp;&emsp;&emsp;{step.stepOne} </span>{step.stepTwo}

                                    </li>);
                            })
                        }
                    </ul>
                </li>
            );
        });
        // }

        return (
            <div>
                <div className="col-sm-10 col-sm-offset-2">
                    <Panel header=".feature">
                        <p> <Button className='allButtons'><img src={require('../../assets/images/edit_icon.png')} alt="edit" width="20" height="20" /></Button>
                            <Button className='allButtons'><img src={require('../../assets/images/delete-icon.png')} alt="delete" width="20" height="20" /></Button>
                            <Button className='allButtons'><img src={require('../../assets/images/up-arrow.png')} alt="up" width="20" height="20" /></Button>
                            <Button className='allButtons'><img src={require('../../assets/images/down-arrow.svg')} alt="down" width="20" height="20" /></Button>
                            <span className="orangeTag"> &nbsp; Feature: </span> {this.props.create.feature} </p>
                        <ul>
                            {scenarios}
                        </ul>

                    </Panel>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        create: state.reducerCreate
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        removeScenario: (removeScenarioId) => {
            dispatch(removeScenario(removeScenarioId));
        },
        removeStep: (removeStepId, scenarioId) => {
            dispatch(removeStep(removeStepId, scenarioId));
        },
        scenarioDown: (scenarioId) => {
            dispatch(scenarioDown(scenarioId));
        },
        scenarioUp: (scenarioId) => {
            dispatch(scenarioUp(scenarioId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCode);