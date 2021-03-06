import React, {Component} from 'react';
import './Events.css'
import './EventDash.css'
import EventCard from './EventCard'

export default class Events extends Component {

  sortFriend = arr => {
    let id = +sessionStorage.getItem("userId");
    let friendArr = arr.filter(friend => friend.userId_1 === id || friend.userId_2 === id ? friend : '');
    let newArr = this.showFriends(friendArr)
    return newArr
  };

  showFriends = arr => {
    let id = +sessionStorage.getItem("userId")
    let friendArr = []
    arr.forEach( friend => {
      for (let foo of Object.entries(friend)) {
        let key = foo[0]
        let splitKey = key.split("_")
        if (splitKey[0] === "userId" && foo[1] !== id) {
          friendArr.push(foo[1])
        }
      }
    })
    friendArr.push(id)
    let stateArr = this.createEvents(friendArr)
    return stateArr
  }

createEvents = arr => {
  let eventArr = []
  this.props.events.forEach( event => {
    arr.forEach( user => {
      if (event.userId === user) {
        eventArr.push(event)
      }
    })
  })
  return eventArr
}


   render() {
     return(
      <React.Fragment>
        <section className="events-dash">
          {
            this.sortFriend(this.props.friends).map( event => <EventCard key={event.id} event={event} deleteEvent={this.props.deleteEvent} updateEvent={this.props.updateEvent} {...this.props} />)
          }
        </section>
      </React.Fragment>
     )
   }
 }