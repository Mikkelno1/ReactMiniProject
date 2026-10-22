import Header from './Components/Header';
import SelectedItem from "./Components/SelectedItem";
import Classification from './Components/Classification';
import {useState} from "react";
import DragonBall from './Images/DragonBall.jpg';
import OnePunchMan from './Images/OnePunchMan.jpg';
import Takopi from './Images/Takopi.jpg';
import './App.css';


//Array containing information about the various images used for training
const aiArray = [
    {image: DragonBall, name: 'Dragon Ball', description: "Recall: 80% \n Precision: 50%",  id: 1 },
    {image: OnePunchMan, name: 'One Punch Man', description: "Recall: 70% \n Precision: 63,63%", id: 2},
    {image: Takopi, name: 'Takopi', description: "Recall: 10% \n Precision: 33,33%",id: 3},
];

function App() {
    const [selectedPostName, setSelectedPostName] = useState('Dragon Ball'); //Sets the initial selectedPost
    const selectedPost = aiArray.find(trainingData => trainingData.name === selectedPostName); //Finds the selected element in the array based on variable comparison

  return (
      <div>
          {/* Sets tab icon */}
          <img src="favicon.jpg" className="App-logo" alt="favicon" />
        <Header/>
          <div className="App-content">
              <ul className='post-list'>
                  {aiArray.map((post, index) => (
                      <Classification //Passes values from array to Classification component for rendering
                          key={post.id}
                          image={post.image}
                          name={post.name}
                          setSelectedPostName={setSelectedPostName}
                      />
                  ))}
              </ul>
              <SelectedItem ////Passes values to SelectedItem component for rendering
                  image={selectedPost.image}
                  name={selectedPost.name}
                  description={selectedPost.description}
              />
          </div>
      </div>

  );
}

export default App;
