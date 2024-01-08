import TransactionTable from "../components/TransactionTable"


function Developer() {
    const address = "0xb9342D6A9789Cc6479e48CfEF67590c1BD05744E"
    return (
        <>
            <h1>Transaction History</h1>
            <TransactionTable address={address} />
        </>
    )
}


export default Developer
