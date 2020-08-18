export default (state,acton)=>{
    switch (acton.type) {
        case 'ADD_INCOME':
            return{
                ...state,
                incomeTransactions:[acton.payload,...state.incomeTransactions]
            }
        case 'ADD_EXPENSE':
            return{
                ...state,
                expenseTransactions:[acton.payload,...state.expenseTransactions]
            }
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                incomeTransactions:state.incomeTransactions.filter(
                    incomeTransactions =>incomeTransactions.id!==acton.payload
                ),
                expenseTransactions:state.expenseTransactions.filter(
                    expenseTransactions =>expenseTransactions.id!==acton.payload
                ),
            };
       default:
           return  state;
    }
}