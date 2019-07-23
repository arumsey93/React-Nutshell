import React, { Component } from "react"



export default class TaskCard extends Component {
    state = {
        completedate:""
    }
    handleFieldChange = evt => {
        const stateToChange = true
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      }
      taskComplete =evt =>{
        evt.preventDefault();
        const task = {
            completedate: this.state.completedate
          }

          this.props
            .taskComplete(task)

      };
      componentDidMount() {
        taskHandler.get(this.props.match.params.id)
        .then(task => {
          this.setState({
            completedate: task.state.completedate
          });
        });
      }

    render() {
        return (
            <div key={this.props.task.id} className="card">
                <div className="card-body">
                <input  className="task-checkbox" type="checkbox" name="vehicle1" value="iscompleted"
                // onClick={()=> this.task.iscompleted = true}
                >
                </input>
                    <h5 className="card-title">
                       {this.props.task.task }
                    </h5>
                    <p>Due Date: {this.props.task.completedate}</p>
                    <button onClick={() => this.props.deleteTask(this.props.task.id)}
                         className="card-link"> Details</button>
                </div>
            </div>
        )
    }

  }
