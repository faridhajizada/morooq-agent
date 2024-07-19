import { useState, useEffect } from "react";
import { useExamsQuery, useEventItemsQuery } from "./../../../api/exams";
import Cookies from "js-cookie";
import s from "./AcquireTicket.module.scss";

function AcquireTicket() {
  const { data: exams } = useExamsQuery();
  const [selectedExam, setSelectedExam] = useState("");
  const [quantities, setQuantities] = useState({});
  const agentId = Cookies.get("PersonID");
  const country = "AZ";

  const token = Cookies.get("token");

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

  const handleAcquire = async () => {
    const eventItemList = eventItems.map((item) => ({
      EventItemID: item.EventItemID,
      EventItemPrice: item.EventItemPrice,
      Quantity: quantities[item.EventItemID] || 0,
    }));
    console.log("Event Item List:", eventItemList);

    console.log(
      "Request Body:",
      JSON.stringify({
        eventItemList,
        agentId,
        examId: selectedExam,
        country,
      })
    );

    try {
      const response = await fetch(
        `http://morooq.az/webservice/api/payments/agent/ticket/checkout?agentId=${agentId}&examId=${selectedExam}&country=${country}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
            // "Authorization": "Basic " + btoa("contact@faridhajizada.com:contact@faridhajizada.com."),
          },
          body: JSON.stringify({
            eventItemList,
          }),
        }
      );

      console.log("Response:", response);

      if (response.ok) {
        alert("You have successfully acquired the tickets.");
      } else {
        const errorData = await response.json();

        console.error("Error:", errorData);
        alert("Failed to acquire tickets.");
      }
    } catch (error) {
      if (response.status === 401) {
        console.error("Unauthorized");
      } else if (response.status === 400) {
        console.error("Bad Request");
      } else if (response.status === 500) {
        console.error("Internal Server Error");
      } else if (response.status === 404) {
        console.error("Not Found");
      }
      
      console.error("Network Error:", error);
      alert("Network error. Failed to acquire tickets.");
    }
  };

  return (
    <div className={s.acquireTicket}>
      <div className={s.pageHeader}>
        <div className={s.headerTitle}>
          <h1>Ticket acquisition</h1>
        </div>
      </div>

      <div className={s.card}>
        <div className={s.labelSelect}>
          <label
            htmlFor="exam"
            style={{ fontSize: "20px", marginRight: "30px" }}
          >
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
        </div>

        {eventItems && eventItems.length > 0 && (
          <div className={s.totalAndAcquireBtn}>
            <div className={s.btn}>
              <button className={s.acquireBtn} onClick={handleAcquire}>
                Acquire
              </button>
            </div>
            <div className={s.totalAmount}>
              <p>Total amount: ${calculateTotalAmount()}</p>
            </div>
          </div>
        )}
      </div>

      <div className={s.tableCard}>
        {eventItems && eventItems.length > 0 && (
          <div className={s.card}>
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
