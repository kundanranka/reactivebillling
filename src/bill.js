import React from 'react'

export default function bill() {
    var data = JSON.parse(localStorage.getItem("billinginfo"));
    return (
        <div class="container">
            <div>
                <div class="row d-md-flex justify-content-around">
                    <h1>Rent Recipit</h1>
                    <p>Receipt No.1</p>
                </div>
                <div>
                    <p class="text-black-50">{data.month}</p>
                    <p>Date: {data.date}</p>
                    <p>Received sum of INR <b>Rs.{data.rent}</b> from <b>{data.name}</b> towards the rent of property located at <b>{data.address}</b> for the period from <b>{data.from}</b> to <b>{data.to}</b></p><br/><br/>
                    <p><b>{data.landlord}</b> (Landlord)    <b>PAN : {data.pan}</b><br /></p>
                </div>
            </div>
        </div>
    )
}
