import './App.css';
import { useState } from 'react';
import contacts from './contacts.json'

function App() {
  const [contact, setContact] = useState(contacts.slice(11, 16))

  const trophy = '🏆'

  // ADD RANDOM CONTACT
  const addRandomContact = () => {
    // Create shallow copy of contact
    const contactCopyRandom = [...contact]
    // Get random index for contacts.json
    let randomIndex = Math.floor(Math.random() * contacts.length);
    // Get random contact from contacts.json with random index
    let randomContact = contacts[randomIndex]
    // Push obtained object in contact
    contactCopyRandom.push(randomContact)
    // Update state of contact
    setContact(contactCopyRandom)
  }

  // SORT BY NAME
  const sortByName = () => {
    // Create shallow copy of contact
    const contactCopyByName = [...contact]
    // Sort sliced contacts by name
    let nameSortedArr = contactCopyByName.sort((a, b) => a.name.localeCompare(b.name))
    // Update state of contact
    setContact(nameSortedArr)
  }

  // SORT BY POPULARITY
  const sortByPopularity = () => {
    // Create shallow copy of contact
    const contactCopyByPopularity = [...contact]
    // Sort sliced contacts by popularity
    let popularitySortedArr = contactCopyByPopularity.sort((a, b) => b.popularity - a.popularity)
    // Update the state of contact
    setContact(popularitySortedArr)
  }

  return (
    <div className="App">

      <h1>IronContacts</h1>

      <hr></hr>

      <div className='Buttons'>
        <button onClick={addRandomContact} >Add contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>
      </div>

      <table className='contacts'>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((oneContact) => {
            return (
              <tr key={oneContact.id}>
                <td><img src={oneContact.pictureUrl} alt={oneContact.name} ></img></td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
                <td>{oneContact.wonOscar && trophy}</td>
                <td>{oneContact.wonEmmy && trophy}</td>
                <td><button >Delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
