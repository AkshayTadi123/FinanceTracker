export const FinancialRecordForm = () => {
    return (
        <div className="form-container">
            <form>
                <div className="form-field">
                    <label>Description:</label>
                    <input type="text" required className="Input"/>
                </div>
                <div className="form-field">
                    <label>Amount:</label>
                    <input type="number" required className="Input"/>
                </div>
                <div className="form-field">
                    <label>Category:</label>
                    <select required className="Input">
                        <option value="">Select a category</option>
                        <option value="Food">Food</option>
                        <option value="Rent">Rent</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Salary">Salary</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>Payment Method:</label>
                    <select required className="Input">
                        <option value="">Select a payment method</option>
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit" className="Button">Add Record</button>
            </form>
        </div>
    );
}