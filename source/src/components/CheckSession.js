import React, { Component } from 'react';
import UserName from "./UserState/UserName";
import CheckDetailsStore from "../stores/CheckDetailsStore";
import EmployeeSessionStore from "../stores/EmployeeSessionStore";

export default class CheckSession extends React.Component {
    constructor() {
        super();
        this.getMenuItems = this.getMenuItems.bind(this);
        this.state = {
            checkDetails: CheckDetailsStore.getAll(),
            checkNumber: 1,
            guestCount: 1,
            tableNumber: 0,
            customerNumber: 0,
            checkTotal: 0,
            discountTotal: 0,
            serviceCharge: 0,
            taxTotal: 0,
            checkEmployee: EmployeeSessionStore.getUser(),
            isClosed: false,
            isPaid: false,
            totalDue: 0,
            paidAmount: 0,
            balance: 0
        };
    }

    payAndClose(Amount) {
        if (Amount >= totalDue) {
            this.setState({ totalDue: 0 });
            this.setState({ isPaid: true });
            this.setState({ isClosed: true });
            this.setState({ paidAmount: paidAmount + Amount });
            this.setState({ balance: Amount - totalDue });
        }
        else {
            this.setState({ totalDue: totalDue - Amount });
            this.setState({ isPaid: false });
            this.setState({ isClosed: false });
            this.setState({ paidAmount: paidAmount + Amount });
            this.setState({ balance: totalDue - Amount });
        }
    };

    componentWillMount() {
        CheckDetailsStore.on("change", this.getMenuItems);
    }

    componentWillUnmount() {
        CheckDetailsStore.removeListener("change", this.getMenuItems);
    }

    getMenuItems() {
        this.setState({
            checkDetails: CheckDetailsStore.getAll(),
        });
    }

    getCheckEmployee() {
        this.setState({
            checkEmployee: EmployeeSessionStore.getUser(),
        });
    }
    
    render() {
        const { checkDetails } = this.state;
        return;
    }
}

