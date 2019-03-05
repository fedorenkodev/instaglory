import React from 'react';
import MUIDataTable from "mui-datatables";

import {Chip} from '@material-ui/core'

class OrdersTable extends React.Component {
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
                name: "service",
                label: "Service",
                options: {
                    filter: true
                }
            },
            {
                name: "quantity",
                label: "Quantity",
                options: {
                    filter: false
                }
            },
            {
                name: "link",
                label: "Link",
                options: {
                    filter: false
                }
            },
            {
                name: "price",
                label: "Price",
                options: {
                    filter: false
                }
            },
            {
                name: "status",
                label: "Status",
                options: {
                    filter: true,
                    customBodyRender: (value) => {
                        let color = value === "completed"
                            ? "#34bfa3"
                            : value === "canceled"
                                ? "#f4516c"
                                : value === "in_progress"
                                    ? "#36a3f7"
                                    : "#716aca";
                        return (
                            <Chip style={{backgroundColor: color, color: "#fff"}} label={value.charAt(0).toUpperCase() + value.slice(1)}/>
                        );
                    }
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
                title={"Orders"}
                data={this.props.orders}
                columns={columns}
                options={options}
            />
        );
    }
}

export default OrdersTable;