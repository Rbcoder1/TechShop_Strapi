import React from 'react'
import '../../assets/Style/checkout.css'

const ShippingAddress = () => {
  return (
    <div className='container'>
      <div className="form-heading">
        <h5 className="heading">Shipping Information</h5>
      </div>
      <div className="shiping-form">
        <form class="needs-validation" novalidate="">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" required />
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="username">Mobile Number</label>
            <div class="input-group">
              <input type="text" class="form-control" id="username" placeholder="" required />
              <div class="invalid-feedback" style={{ width: '100%' }}>
                Your Mobile Number is required.
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="flat">Flat, House no., Building, Company, Apartment</label>
            <input type="text" class="form-control" id="email" placeholder="" />
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div class="mb-3">
            <label for="address">Area, Street, Sector, Village</label>
            <input type="text" class="form-control" id="address" placeholder="1234 Main St" required />
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="mb-3">
            <label for="address2"> Landmark </label>
            <input type="text" class="form-control" id="address2" placeholder="E.g Near Karand Naka" fdprocessedid="ihgak" />
          </div>

          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">State</label>
              <select class="custom-select d-block w-100" id="country" required="" fdprocessedid="kp1p88">
                <option value="">Choose...</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
                <option>Telangana</option>
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">District</label>
              <select class="custom-select d-block w-100" id="state" required="" fdprocessedid="c5bw5kj">
                <option value="">Choose...</option>
                <option>Dhule</option>
                <option>Nashik</option>
                <option>Pune</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" required="" fdprocessedid="iovlnij" />
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <button class="btn btn-primary btn-lg btn-block" type="submit" fdprocessedid="gehdh9">Save & Continue</button>
        </form>
      </div>
    </div>

  )
}

export default ShippingAddress
