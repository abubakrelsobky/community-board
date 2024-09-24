import React from 'react'
import Card from './Card'
import truckImage1 from '../assets/images/truck1.jpg';
import truckImage2 from '../assets/images/truck2.jpg';
import truckImage3 from '../assets/images/truck3.jpg';
import truckImage4 from '../assets/images/uncle-gussys.jpg';
import truckImage5 from '../assets/images/abeetz.jpg';
import truckImage6 from '../assets/images/mac-truck.jpg';
import truckImage7 from '../assets/images/centos.jpg';
import truckImage8 from '../assets/images/bigD.jpg';
import truckImage9 from '../assets/images/carlitos.jpg';
import truckImage10 from '../assets/images/halal-guys.jpg';

const Cards = () => {
    return (
        <div className="card-container">
            <Card className="card" color='#EEF7E4'>
                <img src={truckImage1} alt="Image 1" />
                <h3>Title 1</h3>
                <p>Description for card 1.</p>
                <button>Learn More</button>
            </Card>
            <Card className="card" color='#00FFFF'>
                <img src={truckImage2} alt="Image 2" />
                <h3>Title 2</h3>
                <p>Description for card 2.</p>
                <button>Learn More</button>
            </Card>
            <Card className="card" color='#7FFFD4'>
                <img src={truckImage3} alt="Image 3" />
                <h3>Title 3</h3>
                <p>Description for card 3.</p>
                <button>Learn More</button>
            </Card>
            <Card className="card" color='#EEF7E4'>
                <img src={truckImage4} alt="Image 1" />
                <h3>Title 1</h3>
                <p>Description for card 1.</p>
                <button>Learn More</button>
            </Card>
            <Card className="card" color='#00FFFF'>
                <img src={truckImage5} alt="Image 2" />
                <h3>Title 2</h3>
                <p>Description for card 2.</p>
                <button>Learn More</button>
            </Card>
            <Card className="card" color='#7FFFD4'>
                <img src={truckImage6} alt="Image 3" />
                <h3>Title 3</h3>
                <p>Description for card 3.</p>
                <button>Learn More</button>
            </Card>
            <Card className="card" color='#EEF7E4'>
                <img src={truckImage7} alt="Image 1" />
                <h3>Title 1</h3>
                <p>Description for card 1.</p>
                <button>Learn More</button>
            </Card>
            <Card className="card" color='#00FFFF'>
                <img src={truckImage8} alt="Image 2" />
                <h3>Title 2</h3>
                <p>Description for card 2.</p>
                <button>Learn More</button>
            </Card>
            <Card className="card" color='#7FFFD4'>
                <img src={truckImage9} alt="Image 3" />
                <h3>Title 3</h3>
                <p>Description for card 3.</p>
                <button>Learn More</button>
            </Card>
            <Card className="card" color='#7FFFD4'>
                <img src={truckImage10} alt="Image 3" />
                <h3>Title 3</h3>
                <p>Description for card 3.</p>
                <button>Learn More</button>
            </Card>
        </div>
    )
}

export default Cards;