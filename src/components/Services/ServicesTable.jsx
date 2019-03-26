import React from 'react';
import MUIDataTable from "mui-datatables";
import AddIcon from '@material-ui/icons/Add';
import Link from "react-router-dom/es/Link";
import {IconButton} from "@material-ui/core";

class ServicesTable extends React.Component {
    render() {
        const columns = [
            {
                name: "serviceId",
                label: "Id",
                options: {
                    filter: false
                }
            },
            {
                name: "groupLabel",
                label: "Service",
                options: {
                    filter: true
                }
            },
            {
                name: "serviceLabel",
                label: "Service",
                options: {
                    filter: false
                }
            },
            {
                name: "min",
                label: "Min",
                options: {
                    filter: false
                }
            },
            {
                name: "max",
                label: "Max",
                options: {
                    filter: false
                }
            },
            {
                name: "perOne",
                label: "Per one",
                options: {
                    filter: false
                }
            },
            {
                name: 'groupId',
                label: 'Actions',
                options: {
                    filter: false,
                    customBodyRender: (value, tableMeta, updateValue) => {

                        return (
                            <IconButton component={Link} to={`/create-order/${value}/${tableMeta.rowData[0]}`}>
                                <AddIcon  />
                            </IconButton>
                        );

                    }
                }
            }
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
                title={"Services"}
                data={this.props.services}
                columns={columns}
                options={options}
            />
        );
    }
}

export default ServicesTable;