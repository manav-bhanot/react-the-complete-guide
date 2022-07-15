// This is our "Root" component. (or Home Component). Its the main component rendered inside the index.html
// All other custom components that we created are nested under App

// NOTE: Custom components name MUST start with a UPPER CASE character

import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;
