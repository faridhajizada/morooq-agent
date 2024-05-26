import { useState, useEffect } from "react";
import { useExamsQuery, useEventItemsQuery } from "./../../../api/exams";

function AcquireTicket() {
  const { data: exams } = useExamsQuery();
  const [language, setLanguage] = useState("0");
  const [selectedExam, setSelectedExam] = useState("");
  const [quantities, setQuantities] = useState({});

  const { data: eventItems } = useEventItemsQuery(selectedExam, {
    skip: !selectedExam,
  });

  const handleLanguageChange = (e) => setLanguage(e.target.value);
  const handleExamChange = (e) => setSelectedExam(e.target.value);
  const handleQuantityChange = (e) => {
    const { name, value } = e.target;
    setQuantities({ ...quantities, [name]: parseInt(value, 10) });
  };

  const calculateTotalAmount = () => {
    return (
      eventItems?.reduce((total, item) => {
        const quantity = quantities[item.EventItemID] || 0;
        return total + quantity * item.EventItemPrice;
      }, 0) || 0
    );
  };

  useEffect(() => {
    if (eventItems) {
      const initialQuantities = eventItems.reduce(
        (acc, item) => ({ ...acc, [item.EventItemID]: 0 }),
        {}
      );
      setQuantities(initialQuantities);
    }
  }, [eventItems]);

  return (
    <div>
      <div className="title">
        <h1>Ticket acquisition</h1>
      </div>
      <div className="languageSelect">
        <label htmlFor="language">Language</label>
        <select
          id="language"
          name="language"
          value={language}
          onChange={handleLanguageChange}
        >
          <option value="0" label="Choose language" disabled></option>
          <option value="1">English</option>
        </select>
      </div>

      <div>
        <label htmlFor="exam">Exam</label>
        <select
          id="exam"
          name="exam"
          value={selectedExam}
          onChange={handleExamChange}
        >
          <option value="" label="Choose exam" disabled></option>
          {exams?.map((exam) => (
            <option key={exam.examid} value={exam.examid}>
              {exam.Name}
            </option>
          ))}
        </select>
      </div>

      {eventItems && eventItems.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Ticket price</th>
                <th>Package price</th>
                <th>Quantity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {eventItems.map((item) => (
                <tr key={item.EventItemID}>
                  <td>{item.EventItemID}</td>
                  <td>{item.EventItemDesc}</td>
                  <td>${item.TicketPrice}</td>
                  <td>${item.EventItemPrice}</td>
                  <td>
                    <input
                      type="number"
                      name={item.EventItemID}
                      value={quantities[item.EventItemID] || 0}
                      onChange={handleQuantityChange}
                      min="0"
                    />
                  </td>
                  <td>
                    ${(quantities[item.EventItemID] || 0) * item.EventItemPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>Total amount: ${calculateTotalAmount()}</div>
          <button>Acquire</button>
        </div>
      )}
    </div>
  );
}

export default AcquireTicket;
