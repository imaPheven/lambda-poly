import React, { useState, useEffect } from 'react'
import { useDrag } from 'react-dnd'


export const SpellingWord = ({ id, name }) => {
    useEffect(() => {
        
      });
    const [isDropped, setIsDropped] = useState(false)
    const [{ isDragging }, dragRef] = useDrag({
        type: name,
        item: { id, name },
        end: (item) => {
            setIsDropped(item.isDropped)
        },
        collect: (monitor) => {
            return {
            isDragging: monitor.isDragging()
        }
    }
    })
    const className = (hidden) => (hidden ? "d-none " : "") + "card mb-3 bg-dark"
    return (
        <div class={className(isDropped)} style={{maxWidth: '540px', height: '159px'}} ref={dragRef}>
            <div class="row g-0">
              
              <div class="col-md-12">
                <div class="card-body">
                  <div class="position-absolute left-0 top-0 fs-5">{id+1}</div>
                  <div class="display-2 position-absolute top-50 start-50 translate-middle w-100">{name}
                        {isDragging}
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}