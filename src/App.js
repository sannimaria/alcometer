import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  
  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [alcometer, setAlcometer] = useState(0);

  function alcoMeter(e) {
    e.preventDefault();

    let burning = weight / 10;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;

    let leftGrams = grams - (burning * time)
    let result = 0;


    if (gender === 'male') {
      result = leftGrams / (weight * 0.7)
    } else {
      result = leftGrams / (weight * 0.6)
    }

    setAlcometer(result);
  }


  return (
    
    <div>
      <form onSubmit={alcoMeter}>
      <h3>Calculating alcohol blood level</h3>
        <div>
            <label>Weight </label>
            <input type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
        </div>
        <div>
            <label>Bottles </label>
            <select value={bottles} onChange={e => setBottles(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <div>
            <label>Time </label>
            <select value={time} onChange={e => setTime(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <div>
            <label>Gender </label>
            <label><input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}></input>Male</label>
            <label><input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}></input>Female</label>
        </div>
        <div>
          <output>{alcometer.toFixed(2)}</output>

        </div>

        <button>Calculate</button>
      </form>
    </div>
  );
}

export default App;
