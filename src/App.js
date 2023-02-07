
import './App.css';

import Header from './Header.js';
import Content from './Content';
import Footer from './Footer.js';
import React ,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
//      hello react
//     </div>
//   );
// }
class App extends Component {
  


  render() {
    return (
      <>
    <Header/>
    <Content/>
    <Footer/>
    </>
    )
  }
}
export default App;
