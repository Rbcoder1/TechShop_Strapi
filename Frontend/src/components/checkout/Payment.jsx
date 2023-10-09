import React from 'react'

const Payment = () => {
    return (
        <div className='paymentcontainer container'>
            <div className="heding-sec">
                <h1 className='heading'>Payment Options</h1>
            </div>
            <div className="paymentoptioncon">
                <div className="op-upi my-1">
                    <div className="op-upi-main">
                        <label htmlFor="UPI">UPI</label>
                        <i class="fa-brands fa-cc-paypal fa-xl" style={{ color: "blue", marginRight: '1rem' }}></i>
                        <input type="radio" name="upi" id="op-upi" className='mx-3' />
                    </div>
                    <div className="op-upi-sub" id='op-upi-sub'>
                        <p>Choose Option :</p>
                        <div className="">
                            <span className='d-flex align-items-center'>
                                <input type="radio" name="upi" id="op-upi-google" className='mx-3' style={{ width: "2%" }} />
                                <label htmlFor="UPI">GPay</label>
                            </span>
                            <span className='d-flex align-items-center'>
                                <input type="radio" name="upi" id="op-upi-google" className='mx-3' style={{ width: "2%" }} />
                                <label htmlFor="UPI">Paytm</label>
                            </span>
                            <span className='d-flex align-items-center'>
                                <input type="radio" name="upi" id="op-upi-google" className='mx-3' style={{ width: "2%" }} />
                                <label htmlFor="UPI">Phone Pay</label>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="op-netbank my-1">
                    <div className="op-net-main">
                        <label htmlFor="Net Banking">Net Banking</label>
                        <input type="radio" name="upi" id="op-upi" className='mx-3' />
                    </div>
                    <div className="op-net-sub">
                        <p>Choose Option :</p>
                        <div className="d-flex">
                            <span className='d-flex align-items-center'>
                                <input type="radio" name="upi" id="op-upi-google" className='mx-3' style={{ width: "100%" }} />
                                <label htmlFor="UPI">SBI</label>
                            </span>
                            <span className='d-flex align-items-center'>
                                <input type="radio" name="upi" id="op-upi-google" className='mx-3' style={{ width: "100%" }} />
                                <label htmlFor="UPI">HDFC</label>
                            </span>
                            <span className='d-flex align-items-center'>
                                <input type="radio" name="upi" id="op-upi-google" className='mx-3' style={{ width: "100%" }} />
                                <label htmlFor="UPI">ICICI</label>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="op-cash">
                    <div className="op-cash-main">
                        <label htmlFor="Net Banking">Cash On Dilevery</label>
                        <input type="radio" name="upi" id="op-upi" className='mx-3' />
                    </div>
                </div>
                <div className="op-card"></div>
            </div>
        </div>
    )
}

export default Payment
