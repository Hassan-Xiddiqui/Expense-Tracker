import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction';


function History() {
    // First assign like this then destructure below
    // const context = useContext(GlobalContext);

    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                {/* <li class="minus">
                    Cash <span>-$400</span><button class="delete-btn">x</button>
                </li> */}
            </ul>
        </div>
    )
}

export default History
