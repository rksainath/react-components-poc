import React, { useState } from 'react'

const CardDetails = () => {
  const [formData, setFormData] = useState({
    cardholderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your payment processing logic here
    console.log(formData)
    alert('Payment submitted successfully!')
  }

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-lg-6'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Cardholder Name</label>
              <input type='text' name='cardholderName' className='form-control' value={formData.cardholderName} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label>Card Number</label>
              <input type='text' name='cardNumber' className='form-control' value={formData.cardNumber} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label>Expiration Date</label>
              <input type='text' name='expirationDate' className='form-control' value={formData.expirationDate} onChange={handleChange} required />
            </div>
            <div className='form-group'>
              <label>CVV</label>
              <input type='text' name='cvv' className='form-control' value={formData.cvv} onChange={handleChange} required />
            </div>
            <button type='submit' className='btn btn-primary'>
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CardDetails
