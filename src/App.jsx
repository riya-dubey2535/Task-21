import Card from "./Card"
import img1 from './imgs/img1.jpeg'; 
import img2 from './imgs/img2.jpeg'; 
import img3 from './imgs/img3.jpeg'; 
import img4 from './imgs/img4.jpeg'; 
import img5 from './imgs/img5.jpeg'; 
import img6 from './imgs/img6.jpeg'; 
import img7 from './imgs/img7.jpeg'; 
import img8 from './imgs/img8.jpeg'; 
import img9 from './imgs/img9.jpeg';
import img10 from './imgs/img10.jpeg'; 
import img11 from './imgs/img11.jpeg'; 
import img12 from './imgs/img12.jpeg'; 

function App() {  
  return (
    <>
      <div className="CardContainer">
        <Card num="1" source= {img1}/>
        <Card num="2" source= {img2}/>
        <Card num="3" source= {img3}/>
        <Card num="4" source= {img4}/>
        <Card num="5" source= {img5}/>
        <Card num="6" source= {img6}/>
        <Card num="7" source= {img7}/>
        <Card num="8" source= {img8}/>
        <Card num="9" source= {img9}/>
        <Card num="10" source= {img10}/>
        <Card num="11" source= {img11}/>
        <Card num="12" source= {img12}/>
      </div>
    </>
  )
}
export default App;