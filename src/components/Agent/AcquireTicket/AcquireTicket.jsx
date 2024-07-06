import { useState, useEffect } from "react";
import { useExamsQuery, useEventItemsQuery } from "./../../../api/exams";
import s from "./AcquireTicket.module.scss";

function AcquireTicket() {
  const { data: exams } = useExamsQuery();
  const [selectedExam, setSelectedExam] = useState("");
  const [quantities, setQuantities] = useState({});

  const { data: eventItems } = useEventItemsQuery(selectedExam, {
    skip: !selectedExam,
  });

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
    <div className={s.acquireTicket}>
      <div className={s.pageHeader}>
        <div className={s.headerTitle}>
          <h1>Ticket acquisition</h1>
        </div>
      </div>

      <div className={s.card}>
        <label htmlFor="exam" style={{ fontSize: "20px", marginRight: "30px" }}>
          Exam
        </label>
        <select
          id="exam"
          name="exam"
          value={selectedExam}
          onChange={handleExamChange}
          style={{ fontSize: "20px" }}
        >
          <option value="" label="Choose exam" disabled></option>
          {exams?.map((exam) => (
            <option key={exam.examid} value={exam.examid}>
              {exam.Name}
            </option>
          ))}
        </select>
        {eventItems && eventItems.length > 0 && (
          <div>
            <div>Total amount: ${calculateTotalAmount()}</div>
            <button className={s.acquireBtn}>Acquire</button>
            <table>
              <thead>
                <tr style={{ textAlign: "center" }}>
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
                      $
                      {(quantities[item.EventItemID] || 0) *
                        item.EventItemPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default AcquireTicket;
