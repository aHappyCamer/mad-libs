import React, { Component } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import './styles/App.css';
import { FaSave } from "react-icons/fa";

/// TODO: add validation for empty text boxes???

class App extends Component {
  constructor() {
    super();

    this.state = {
      i1: "",
      i2: "",
      i3: "",
      i4: "",
      i5: "",
      i6: "",
      i7: "",
      i8: "",
      i9: "",
      i10: "",
      i11: "",
      i12: "",
      i13: "",
      i14: "",
      i15: "",
      i16: "",
      i17: "",
      i18: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateIsEdit = this.updateIsEdit.bind(this);
  }

  // handler will simply print the new value that the text input is changed to
  // controlled component that captures changes and updates state accordingly
  handleChange(e) {
    const value = e.target.value;
    this.setState({

      // using a single state object that contains multiple properties, we're spreading (...state) 
      // the existing state back into the new state value, merging it manually, when calling setState
      ...this.state,
      //square brackets, to create a dynamic key name in the object
      [e.target.name]:value // funnel all changes through that one handler but then distinguish which input the change is coming from using the name

      // this doesn't work.. oall values will be the exact same
      // i1:e.target.value,
      // i2:e.target.value,
      // i3:e.target.value,
    })
  }

  updateIsEdit(e, value="null") {
    this.setState({
      isEdit: value
    });
  }

  generatePDF = () => {
    window.html2canvas = html2canvas;
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#stuff"), {
      callback: function(pdf) {
        pdf.save("madlib.pdf");
      }
    });
  }

  render() {
    return(
      <div id="stuff">
        <div id="logo">
          <img src="http://4.bp.blogspot.com/-7lkrxgMK4ys/Ul8DL_lzYnI/AAAAAAAAAFs/D4CaYNdNmbc/s1600/MadLibs-Logo.png" alt="logo"></img>
        </div>
        <div id="body">
        <h1>A LETTER FROM GEORGE</h1>
        <p>Hello, my fellow <input type="text" name="i1" value={this.state.i1} placeholder="plural noun" onChange={this.handleChange} onBlur={this.updateIsEdit}></input> in 2020, it's me, George Washington, the first <input type="text" name="i2" value={this.state.i2} placeholder="occupation" onChange={this.handleChange} onBlur={this.updateIsEdit}/>. 
        I am writing from (the) <input type="text" name="i3" value={this.state.i3} placeholder="a place" onChange={this.handleChange} onBlur={this.updateIsEdit}/> , where I have been secretly living for the past <input type="number" name="i4" value={this.state.i4} placeholder="number" onChange={this.handleChange} onBlur={this.updateIsEdit}/> years. 
        I am concerned by the <input type="text" name="i5" value={this.state.i5} placeholder="adjective" onChange={this.handleChange} onBlur={this.updateIsEdit}/> state of affairs in America these days. 
        It seems that your politicians are more concerned with <input type="text" name="i6" value={this.state.i6} placeholder="verb ending in 'ING'" onChange={this.handleChange} onBlur={this.updateIsEdit}/> one another than with listening to the <input type="text" name="i7" value={this.state.i7} placeholder="plural noun" onChange={this.handleChange} onBlur={this.updateIsEdit}/> of the people. 
        When we declared our independence from (the) <input type="text" name="i8" value={this.state.i8} placeholder="a place" onChange={this.handleChange} onBlur={this.updateIsEdit}/>, we set forth on a/an <input type="text" name="i9" value={this.state.i9} placeholder="adjective" onChange={this.handleChange} onBlur={this.updateIsEdit}/> path guided by the voices of the everyday <input type="text" name="i10" value={this.state.i10} placeholder="plural noun" onChange={this.handleChange} onBlur={this.updateIsEdit}/>. 
        If we're going to keep <input type="text" name="i11" value={this.state.i11} placeholder="verb ending in 'ING'" onChange={this.handleChange} onBlur={this.updateIsEdit}/>, then we need to learn how to respect all <input type="text" name="i12" value={this.state.i12} placeholder="plural noun" onChange={this.handleChange} onBlur={this.updateIsEdit}/>. Don't get me wrong; we had <input type="text" name="i13" value={this.state.i13} placeholder="adjective" onChange={this.handleChange} onBlur={this.updateIsEdit}/> problems in my day, too. 
        Benjamin Franklin once called me a/an <input type="text" name="i14" value={this.state.i14} placeholder="noun" onChange={this.handleChange} onBlur={this.updateIsEdit}/> and kicked me in the <input type="text" name="i15" value={this.state.i15} placeholder="part of a body" onChange={this.handleChange} onBlur={this.updateIsEdit}/>. 
        But at the end of the day, we were able to <input type="text" name="i16" value={this.state.i16} placeholder="verb" onChange={this.handleChange} onBlur={this.updateIsEdit}/> in harmony. Let us find that <input type="text" name="i17" value={this.state.i17} placeholder="adjective" onChange={this.handleChange} onBlur={this.updateIsEdit}/> spirit once again, or else I'm taking my <input type="text" name="i18" value={this.state.i18} placeholder="part of a body" onChange={this.handleChange} onBlur={this.updateIsEdit}/> off the quarter!
        </p>
        <p id="copyright">From PRESIDENTIAL MAD LIBS®• Copyright© 2017 by Penguin Random House LLC.</p>
        </div>

        <div id="pdfBtn">
          <button onClick={this.generatePDF} type="primary"> <FaSave alt="Save PDF"/> Save PDF </button>
        </div>
      
      </div>
    )
  }

}


export default App;
