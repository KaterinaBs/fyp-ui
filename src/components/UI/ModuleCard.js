import { Card } from './Card.js';
import './ModuleCard.css';


export default function ModuleCard({module}) {

  return (
    <Card>
      <div className="cardLayout">
        <div className="cardImage">
          <img src='https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Module image" />
        </div>
        <div className="cardDetails">
          <h1>{module.ModuleName} ({module.ModuleCode})</h1>
        </div>

      </div>
    </Card>
  );
}