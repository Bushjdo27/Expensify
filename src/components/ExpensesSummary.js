import React from 'react';
import numeral from 'numeral'

export const ExpensesSummary = ({expenses = []}) => {
    const totalling = expenses.reduce((accumulateValue, currentValue) => {
                            return accumulateValue += currentValue.amount
                        },0);
    const viewing = expenses.length;
    return (
        <div>
            <p>Viewing : {viewing}</p>
            <p>
                Totalling : {
                    numeral(totalling).format('$0,0.00')
                }
            </p>
        </div>
    )
}
