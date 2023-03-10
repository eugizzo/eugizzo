import ExpenseItem from './components/ExpenseItem';


function App() {
  const expanse=[
    
    {
    id:1, 
    title:'car ensurance', 
    amount:"294.67",
    date: new Date(2020, 7, 14),
    
  },
    {
      id:2, 
      title:'toillet paper', 
      amount:"2.9984",
      date: new Date(2021, 2, 28),
    },
      
      {
        id:3, 
        title:'house rents', 
        amount:"294.67",
        date: new Date(2021, 5, 12),
      },
        
    ];
  return (
    <div className="">
     <ExpenseItem date={expanse[0].date} title={expanse[0].title} amount={expanse[0].amount}/>
     <ExpenseItem date={expanse[1].date}  title={expanse[1].title} amount={expanse[1].amount} />
     <ExpenseItem date={expanse[2].date}  title={expanse[2].title} amount={expanse[2].amount}/>
  
    </div>
  );
}

export default App;
