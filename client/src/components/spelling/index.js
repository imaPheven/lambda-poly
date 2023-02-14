import React from "react";

import { 
  faCat, faDog, faBug, faHorse, faFish, faEgg, faFrog, 
  faBicycle, faBaseball, faAppleWhole, faCar, faBus, faBaby, faCarrot, faCow, 
  faDrum, faHand, faHeart, faKey, faLeaf, faLightbulb, faSpider, faStar, faTree, faUmbrella   
} from '@fortawesome/free-solid-svg-icons'
import lodash from 'lodash'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { SpellingWord } from './spellingWord'
import { SpellingCard } from './spellingCard'
import _ from "lodash";

export default function Spelling() {
  
  const WORDS = [
    { id: 1, name: 'Dog', icon: faDog },
    { id: 2, name: 'Cat', icon: faCat },
    { id: 3, name: 'Bug', icon: faBug },
    { id: 4, name: 'Horse', icon: faHorse },
    { id: 4, name: 'Fish', icon: faFish },
    { id: 4, name: 'Frog', icon: faFrog },
    { id: 4, name: 'Bike', icon: faBicycle },
    { id: 4, name: 'Ball', icon: faBaseball },
    { id: 4, name: 'Apple', icon: faAppleWhole },
    { id: 4, name: 'Car', icon: faCar },
    { id: 4, name: 'Egg', icon: faEgg },
    { id: 4, name: 'Bus', icon: faBus },
    { id: 4, name: 'Baby', icon: faBaby },
    { id: 4, name: 'Carrot', icon: faCarrot },
    { id: 4, name: 'Cow', icon: faCow },
    { id: 4, name: 'Drum', icon: faDrum },
    { id: 4, name: 'Hand', icon: faHand },
    { id: 4, name: 'Heart', icon: faHeart },
    { id: 4, name: 'Key', icon: faKey },
    { id: 4, name: 'Leaf', icon: faLeaf },
    { id: 4, name: 'Light', icon: faLightbulb },
    { id: 4, name: 'Spider', icon: faSpider },
    { id: 4, name: 'Star', icon: faStar },
    { id: 4, name: 'Tree', icon: faTree },
    { id: 4, name: 'Umbrella', icon: faUmbrella },
    
  ]
  
  const wordBag = _.take(_.shuffle(WORDS),4)
  
 // This following section will display the form that takes the input from the user.
 return (<div class="container text-center">
  <DndProvider backend={HTML5Backend}>
        <h1>Spelling</h1>
        <div class="row">
          <div class="col-8">
            {wordBag
              .filter(t=>t.id)
              .map(word => <SpellingCard draggable id={word.id} name={word.name} icon={word.icon} muted={word.muted} about={word.about} />)}
          </div>
          <div class="col-4">
            {lodash.shuffle(wordBag).map((word,i) => <SpellingWord draggable id={i} name={word.name} />)}
          </div>
        </div>
  </DndProvider>
</div>

 );
}