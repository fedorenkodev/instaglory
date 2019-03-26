import React from 'react';
import MUIDataTable from "mui-datatables";

class TransactionsTable extends React.Component {
    render() {
        const columns = [
            {
                name: "id",
                label: "Id",
                options: {
                    filter: false
                }
            },
            {
                name: "amount",
                label: "Amount",
                options: {
                    filter: false
                }
            },
            {
                name: "type",
                label: "Type",
                options: {
                    filter: true
                }
            },
            {
                name: "date",
                label: "Date",
                options: {
                    filter: false
                }
            },
        ];
        const options = {
            filter: true,
            print: false,
            download: false,
            selectableRows: false,
            responsive: 'scroll'
        };

        return (
            <MUIDataTable
                title={"Transactions"}
                data={this.props.transactions}
                columns={columns}
                options={options}
            />
        );
    }
}

export default TransactionsTable;