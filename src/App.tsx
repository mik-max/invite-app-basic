import React, {useState} from 'react';
import './App.css';
import { IState } from './interfaces';
import List from './components/List';
import AddToList from './components/AddToList';
function App() {
  const [people, setPeople] = useState<IState['people']>([
   {
    name: 'leBron James',
    age: 30,
    url: 'https://th.bing.com/th/id/OIP.gBuwdQK_eXrJAfj90wQ0YwHaE8?pid=ImgDet&w=193&h=128&c=7',
    note: "Hi can't wait to attend your party!" 
   }
  ]);
  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people = {people} />
      <AddToList people = {people} setPeople = {setPeople} />
    </div>
  );
}

export default App;
