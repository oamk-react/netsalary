import './App.css';
import {useState} from 'react';
import FillOptions from './FillOptions';

function App() {
  const [salary, setSalary] = useState('');
  const [tax, setTax] = useState(0);
  const [pension, setPension] = useState(0);
  const [insurance, setInsurance] = useState(0);
  const [payment, setPayment] = useState(0);

  function calculate(e) {
    e.preventDefault();
    const taxPayment = salary / 100 * tax;
    const pensionPayment = salary / 100 * tax;
    const insurancePayment = salary / 100 * tax;
    setPayment(salary - taxPayment - pensionPayment - insurancePayment);
  }
  return (
    <div id="container">
    <h2>Loan calculator</h2>
    <form onSubmit={calculate}>
      <div><label>Salary</label></div>
      <input type="number" value={salary} onChange={e => setSalary(e.target.value)}/>
      <div><label>Tax (%)</label><output></output></div>
      <select value={tax} onChange={e => setTax(e.target.value)}>
        <FillOptions />
      </select>
      <div><label>Pension (%)</label><output></output></div>
      <select value={pension} onChange={e => setPension(e.target.value)}>
        <FillOptions />
      </select>
      <div><label>Insurance (%)</label><output></output></div>
      <select value={insurance} onChange={e => setInsurance(e.target.value)}>
        <FillOptions />
      </select>
      <div><label>Your salary after payments</label></div>
      <output style={{display: 'block',width: '100px',height: '20px',border: '1px solid black'}}>
        {payment}
      </output>
      <button>Calculate</button>
    </form>
  </div>
  );
}

export default App;
