
// import logo from './logo.svg';
import './App.css';

const contentInfo = {
  join: 'Join our community',
  guarantee: '30-day, hassle free, money back guarantee',
  gainAccess: 'Gain access to our full library of tutorials along with expert code reviews.',
  skills: 'Perfect for any developer who are serius about honing their skills.',
  subscription: 'Monthly Subscription',
  amount: '$29',
  perMonth: 'per month',
  fullAccess: 'Full access for less that $1 a day',
  signUp: 'Sign Up',
  whyUs: 'Why Us',
  listing: [
    'Tutorials by industry experts',
    'Peer & expert code review',
    'Coding exercises',
    'Access to our github repos',
    'Community forum',
    'Flashcards deck',
    'New videos every week'
  ]
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div  className="main">
         <div className="topContainer">
        
          <h2 style={{ color: '#3db5b0' }}>{contentInfo.join}</h2>
          <h3 style={{ color: '#c5d674', fontSize: '18px', fontWeight: 'bold' }}>{contentInfo.guarantee}</h3>
          <p style={{ color: '#b2b6c1', fontSize: '18px', marginTop: '8px' }}>{contentInfo.gainAccess}</p>
          <p style={{ color: '#b2b6c1', fontSize: '18px' }}>{contentInfo.skills}</p>

        </div>
        <div className="bottomContainer">
          <div className="bottomLeft">
            <h3 className="heading">{contentInfo.subscription}</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                <h2 style={{ margin: '16px 0', color: 'white'}}>{contentInfo.amount}</h2>
                <p style={{ color: '#ffffff77', fontSize: '16px', marginLeft: '8px' }}>{contentInfo.perMonth}</p>
              </div>
                <p style={{ color: '#efefefdd', fontSize: '16px' }}>{contentInfo.fullAccess}</p>
                <button className="button">{contentInfo.signUp}</button>
        </div>
        <div className="bottomRight">
          <h3 className="heading" style={{ marginBottom: '12px' }}>{contentInfo.whyUs}</h3>
          
          {contentInfo.listing.map(lists => <p style={{ color: '#ffffff99', fontSize: '16px', marginTop: '1px'}}>{lists}</p>)}
        </div>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
