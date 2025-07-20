const Form= () => {  
 
  return (
  <div className="flex items-center justify-center min-h-screen ">
    <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Enter Card Information</h1>
      <form action="#" method="POST">
        {/* Cardholder Name */}
        <div className="mb-4">
          <label htmlFor="cardholder-name" className="block text-sm font-medium text-gray-700">Cardholder Name</label>
          <input type="text" id="cardholder-name" name="cardholder-name" placeholder="John Doe" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required />
        </div>
        {/* Card Number */}
        <div className="mb-4">
          <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
          <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required maxLength={19} />
        </div>
        {/* Expiry Date & CVV */}
        <div className="flex gap-4">
          {/* Expiry Date */}
          <div className="mb-4 w-1/2">
            <label htmlFor="expiry-date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required maxLength={5} />
          </div>
          {/* CVV */}
          <div className="mb-4 w-1/2">
            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder={123} className="mt-1 block w-full p-2 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm" required maxLength={3} />
          </div>
        </div>
        {/* Submit Button */}
        <div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  );
  }


 export default Form;