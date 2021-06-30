import './App.css';
import Card from './components/Card'
import Button from  './components/Button'
import { FaFilePdf, FaPrint } from 'react-icons/fa';

function App() {
  const header = (<>
    <h2>Cancel/Recall payment, GBP 1,000. 00</h2>
    <h5>1234567890123456 (GB), KUIML Business Company</h5> 
  </>)
  const body = (<>
    <div className="vl inline-block padding-right"></div>
    <div className="inline-block padding-right">
      <div>Request reference</div>
      <div>SET29383ABCH</div>
    </div>
    
    <div className="vl inline-block padding-right"></div>
    <div className="inline-block padding-right">
      <div>Category</div>
      <div>Payment</div>
    </div>
    
    <div className="vl inline-block padding-right"></div>
    <div className="inline-block padding-right">
      <div>Request status</div>
      <div>Pending authorisation</div>
    </div>
  </>)
  const buttons = (<>
    <div>
      <FaFilePdf />
      <div className="vl inline-block padding-right-max"></div>
      <FaPrint/>
      <Button>Reject</Button>
      <Button>Authorize</Button>
    </div>
  </>)
  const links = (<a href="/">Full Details</a>)
  return (
    <div>
      <Card
        header={header}
        body={body}
        buttons={buttons}
        links={links}
      ></Card>
    </div>
  );
}

export default App;
