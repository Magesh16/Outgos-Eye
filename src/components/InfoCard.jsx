import React from 'react'

const isIncome =Math.round(Math.random());
function InfoCard() {
    return (
        <div style={{textAlign:"center", padding:"0 10%"}} >

        Try saying:<br/>
         Add{isIncome ? " Income " : " Expense "} 
          for{isIncome ? " ₹1000 " : " ₹500 "}
           in category{isIncome ? " Crypto " : " Food "} 
            for {isIncome ? " Monday " : " Wedesday "}
        </div>
    )
}

export default InfoCard
