import './App.css';
import Header from './componenets/Header';
import IncomeExpenses from './componenets/IncomeExpenses';
import TransactionList from './componenets/TransactionList';
import AddTransaction from './componenets/AddTransaction'
import { GlopbalProvider } from './context/GlobalState';


function App() {
  return (
    <GlopbalProvider>
      <Header/>
      <div className="div container">
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlopbalProvider>
  );
}

export default App;
