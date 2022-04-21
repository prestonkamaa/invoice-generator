import React from "react"
import { IoIosMail } from "react-icons/io";

export default function MainContent(){
    return(
        <main className="dark-main-content-sec">
            <div className="dark-btn-pricing">
                <button>Water Plants: $10</button>
                <button>Mow Lawn: $20</button>
                <button>Pull Weeds: $30</button>
            </div> 

            <div className="dark-task-total-sec">
                <h2 className="task">TASK</h2>
                <h2>TOTAL</h2>
            </div>

            <div className="dark-tasks-done">
                <p className="specific-task">Water Plants 
                <span style={{fontSize:8,color:'#918E9B', paddingLeft:10}}>Remove</span> </p>
                <p> <span style={{color:'#918E9B',fontWeight:500}}>$</span>10 </p> 
            </div>  
            <div className="dark-tasks-done">
                <p className="specific-task">Pull Weeds 
                <span style={{fontSize:8,color:'#918E9B', paddingLeft:10}}>Remove</span> </p>
                <p> <span style={{color:'#918E9B',fontWeight:500}}>$</span>30 </p> 
            </div> 
            <div className="dark-tasks-done">
                <p className="specific-task">Mow Lawn 
                <span style={{fontSize:8,color:'#918E9B', paddingLeft:10}}>Remove</span> </p>
                <p> <span style={{color:'#918E9B',fontWeight:500}}>$</span>20 </p> 
            </div>            

            
            <hr/>

            <div className="dark-remarks">
                <h2 className="note-remarks">NOTES</h2>
                <h2>TOTAL AMOUNT</h2>
            </div>

            <div className="remarks2">
                <p align="left"  className="note-remarks"> We accept cash, credit card, or Mpesa.</p>
                <h2>$60</h2>
            </div>

            <button className="send-btn"> <IoIosMail className="btn-icon"/> Send Invoice</button>

        </main>
    )
}