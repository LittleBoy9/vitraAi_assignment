import React from 'react'
import { Card } from 'react-bootstrap';
import * as faIcon from "react-icons/fa";

const GridView = ({props}) => {
  return (
    <div>
      <Card  className="gridCard shadow">    
        <Card.Body>
          <span className="card-header">
            <Card.Title><faIcon.FaUserCircle className="color"/> { props.name }</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <span className="props-balance rounded">{ props.balance }</span>
            </Card.Subtitle>
          </span>
          <h5 className="text-center mt-3">Total {props.friends.length} Friends</h5>
          {
            props.friends.map((friend,index) => {
              return(
                <p className="text-center color" key={friend.id}>{ friend.name }</p>
              )
            })
          }      
        </Card.Body>
      </Card>    
    </div>
  )
}
export default GridView;