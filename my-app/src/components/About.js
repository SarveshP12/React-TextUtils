import React from 'react'

export default function About(props) {

  // const[myStyle, setmyStyle] = useState({
  //     border: '2px Solid white',
  //     color: 'black',
  //     backgroundColor: 'white'
  // })
  
  // const[btntext, setBtnText] = useState("Enable Dark Mode") 

  // const toggleStyle = () => {
  //   if(myStyle.color === 'white'){
  //     setmyStyle({
  //       color:'black',
  //       backgroundColor: 'white'
  //     })
  //     setBtnText("Enable Dark Mode")
  //   }
  //   else{
  //     setmyStyle({
  //       color:'white',
  //       backgroundColor:'black'
  //     })
  //     setBtnText("Enable Light Mode")
  //   }
  // }
  return (
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>About Us</h2>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{background:props.mode==='dark'?'purple':'white',color:props.mode==='dark'?'white':'black'}}>
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={{background:props.mode==='dark'?'purple':'white',color:props.mode==='dark'?'white':'black'}}>
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{background:props.mode==='dark'?'purple':'white',color:props.mode==='dark'?'white':'black',border:props.mode==='3px solid blue'}}>
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={{background:props.mode==='dark'?'purple':'white',color:props.mode==='dark'?'white':'black'}}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{background:props.mode==='dark'?'purple':'white',color:props.mode==='dark'?'white':'black'}}>
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body" style={{background:props.mode==='dark'?'purple':'white',color:props.mode==='dark'?'white':'black'}}>
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        Enable Dark Mode
        <button type="button" className="btn btn-primary mx-3 my-3" >{btntext}</button>
      </div> */}
    </div>
  )
}
