import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import './FoodCards.css'
import burger from './burger.jpg'
import pizza from './pizza.jpg'
import sushi from './sushi.jpg'

function FoodCards() {

    const [food, setFood] = useState([
        {
            name: 'Burger',
            src: burger
        },
        {
            name: 'Pizza',
            src: pizza
        },
        {
            name: 'Sushi',
            src: sushi
        }
    ])

    const swiped = (direction, nameToDelete) => {
        console.log('you swiped ' + nameToDelete + ' to the ' + direction)
    }

    const outOfFrame = (nameOutFrame) => {
        console.log(nameOutFrame + ' left the screen')
    }


    return (
        <div className='foodCards'>
            <div className='foodCardsContainer'>
                {food.map((dish) => (
                    <TinderCard
                    className='swipe'
                    key={dish.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, dish.name)}
                    onCardLeftScreen={() => outOfFrame(dish.name)}              
                    >
                        <div
                        style={{ backgroundImage: "url(" + dish.src + ")"}}
                        className='card'
                        >
                        <h3>{dish.name}</h3>
                        </div> 

                    </TinderCard>
                ))}
            </div>          
        </div>
    )
}

export default FoodCards
