import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App counter={0} max={50} min={-50} />,
  document.getElementById('root'));

