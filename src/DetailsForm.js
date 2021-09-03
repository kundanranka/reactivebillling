import React, { useRef } from 'react'
import { useHistory } from "react-router-dom";

export default function DetailsForm(props) {
    const name = useRef();
    const from = useRef();
    const to = useRef();
    const rent = useRef();
    const address = useRef();
    const landlord = useRef();
    const pan = useRef();
    const history = useHistory()

    function getRecipt(e) {
        e.preventDefault();
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.toLocaleString('default', { month: 'long' })
        let year = newDate.getFullYear();

        let fromdate = new Date(from.current.value);
        let todate = new Date(to.current.value);
        const diffTime = Math.abs(todate - fromdate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        let monthstopay = parseInt(diffDays/30)
        let rentPay = monthstopay * parseInt(rent.current.value);
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        var data = {
            'name': name.current.value,
            'from': fromdate.toLocaleDateString("en-US", options),
            'to': todate.toLocaleDateString("en-US", options),
            'rent': rentPay,
            'address': address.current.value,
            'landlord': landlord.current.value,
            'month': month + " " + year,
            'date': month.slice(0, 3) + " " + date + ", " + year,
            'pan' : pan.current.value
        }
        console.log(data);
        props.submitForm(data);
        localStorage.setItem("billinginfo", JSON.stringify(data))
        history.push('/bill');
    }
    return (
        <form onSubmit={getRecipt}>
            <h2 class="text-center">Billing Info</h2>
            <div class="mb-3"><label class="form-label">Your Name:</label><input type="text" ref={name} class="form-control" name="name" pattern="^(?![\s.]+$)[a-zA-Z\s.]*$" required/></div>
            <div class="mb-3"><label class="form-label">Landlord&#39;s Name:</label><input ref={landlord} type="text" class="form-control" name="name" pattern="^(?![\s.]+$)[a-zA-Z\s.]*$" required/></div>
            <div class="mb-3"><label class="form-label">From Date:</label><input ref={from} class="form-control" type="date" required/></div>
            <div class="mb-3"><label class="form-label">To Date:</label><input ref={to} class="form-control" type="date" required/></div>
            <div class="mb-3"><label class="form-label">Rent Per Month:</label><input ref={rent} type="numbers" class="form-control" pattern= "[0-9]{1,100}" required/></div>
            <div class="mb-3"><label class="form-label">PAN:</label><input ref={pan} type="text" class="form-control" pattern= "[A-Z]{5}[0-9]{4}[A-Z]{1}" required/></div>
            <div class="mb-3"><label class="form-label">Address:</label><textarea ref={address} class="form-control" name="message" placeholder="Message" rows="14" required></textarea></div>
            <div class="mb-3"><button class="btn btn-primary" type="submit">send </button></div>
        </form>
    )
}
