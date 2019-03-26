import React from 'react';
import MUIDataTable from "mui-datatables";
import {Chip} from "@material-ui/core";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

class TicketsTable extends React.Component {
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
                name: "subject",
                label: "Subject",
                options: {
                    filter: false,
                    customBodyRender: (value, tableMeta, updateValue) => {
                        return (
                            <Typography component={Link} to={`/ticket-view/${tableMeta.rowData[0]}`}>
                                {value}
                            </Typography>
                        );

                    }
                }
            },
            {
                name: "department",
                label: "Department",
                options: {
                    filter: false
                }
            },
            {
                name: "date",
                label: "Date",
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
                        let color = value === "new"
                            ? "#34bfa3"
                            : value === "closed"
                                ? "#f4516c"
                                : value === "user"
                                    ? "#716aca"
                                    : value === "support"
                                        ? "#36a3f7"
                                        : "#cacaca";
                        return (
                            <Chip
                                style={{backgroundColor: color, color: "#fff"}}
                                label={value.replace('_', ' ')}
                            />
                        );
                    }
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
                title={"Tickets"}
                data={this.props.tickets}
                columns={columns}
                options={options}
            />
        );
    }
}

export default TicketsTable;