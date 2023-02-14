import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SpellingCard = ({ id, name, icon, muted, about }) => {
    
    const [basket] = useState([])
    const [isDropped, setIsDropped] = useState(false)
    const [, dropRef] = useDrop({
      accept: name,
      drop: (item) => {
        setIsDropped(true)
        item.isDropped = true
      }
    })
    
    return (
      <div class="card mb-3 bg-dark border border-light" style={{maxWidth: '540px'}} ref={dropRef}>
        <div class="row g-0">
          <div class={(isDropped?"text-success ":"") + "p-4 col-md-4"} >
            <FontAwesomeIcon class="align-middle" icon={icon} />
          </div>
          <div class="col-md-8 position-relative" style={{height: '159px'}}>
            <div class="display-5 position-absolute top-50 start-50 translate-middle">
              <span class={isDropped?"":"d-none"}>{name}</span>
              {basket.map(pet => pet.name).join('')}
            </div>            
          </div>
        </div>
      </div>
    )
}