import React from 'react';
import RoomsList from './RoomsList'
import RoomsFilter from './RoomsFilter'
import Loading from './Loading'
import { RoomConsumer } from '../context'
import {withRoomConsumer} from '../context';

function RoomsContainer({context}) {
  const  {loading, sortedRooms, room} = context;
  if(loading) {
    return <Loading />
}
  return (
      <div>
          <RoomsFilter rooms={room} />
          <RoomsList rooms={sortedRooms} />
      </div>
  )

}

export default  withRoomConsumer(RoomsContainer)

/*const RoomsContainer = () => {
   return (
       <RoomConsumer>
           {value => {
               const {loading, sortedRooms, room} = value;
             if(loading) {
                 return <Loading />
             }
               return (
                   <div>
                       <RoomsFilter rooms={room} />
                       <RoomsList rooms={sortedRooms} />
                   </div>
               )
           }}
       </RoomConsumer>
   )
}*/
 
