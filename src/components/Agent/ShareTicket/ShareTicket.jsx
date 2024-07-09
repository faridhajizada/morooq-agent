import { useState, useEffect } from "react";
import { useExamsQuery } from "./../../../api/exams";
import Cookies from "js-cookie";
import s from "./ShareTicket.module.scss";

function ShareTicket() {
  const { data: exams } = useExamsQuery();
  const [selectedExam, setSelectedExam] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [tickets, setTickets] = useState([
    { firstName: "", lastName: "", email: "", quantity: 0 },
  ]);
  const [ticketCost, setTicketCost] = useState(8);
  const [availableTickets, setAvailableTickets] = useState(424);
  const [eventItems, setEventItems] = useState([]);

  let agentId = Cookies.get("PersonID");

  const handleExamChange = async (e) => {
    const examId = e.target.value;
    setSelectedExam(examId);

    const response = await fetch(
      `http://morooq.az/webservice/api/acquiredTicket/shareableTickets?agentId=${agentId}&examId=${examId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      setEventItems(data);
      if (data.length > 0) {
        setTicketCost(data[0].TicketCost);
        setAvailableTickets(data[0].AvailableTicketCount);
      }
    } else {
      console.error("Failed to fetch data");
    }
  };

  const handleLanguageChange = (e) => setSelectedLanguage(e.target.value);

  const addTicket = () =>
    setTickets([
      ...tickets,
      { firstName: "", lastName: "", email: "", quantity: 1 },
    ]);
  const removeTicket = (index) =>
    setTickets(tickets.filter((_, i) => i !== index));

  const handleTicketChange = (index, field, value) => {
    const newTickets = [...tickets];
    newTickets[index][field] = value;
    setTickets(newTickets);
  };

  return (
    <div className={s.shareTicket}>
      <div className={s.pageHeader}>
        <div className={s.headerTitle}>
          <h1>Share tickets</h1>
        </div>
      </div>

      <section>
        <div className={s.card}>
          <label
            htmlFor="language"
            style={{ fontSize: "20px", marginRight: "30px" }}
          >
            Language
          </label>
          <select
            id="language"
            name="language"
            value={selectedLanguage}
            onChange={handleLanguageChange}
            style={{ fontSize: "20px" }}
          >
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>

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

          <button className={s.shareBtn}>Clear All</button>
          <button className={s.shareBtn}>Confirm to share</button>
        </div>

        {selectedExam && (
          <div className={s.card}>
            <div>
              <p>Ticket cost: ${ticketCost}</p>
              <p>Available tickets: {availableTickets}</p>
              <p>Tickets to sell: {tickets.length}</p>
            </div>
            {tickets.map((ticket, index) => (
              <div key={index}>
                <input
                  type="text"
                  placeholder="First name"
                  value={ticket.firstName}
                  onChange={(e) =>
                    handleTicketChange(index, "firstName", e.target.value)
                  }
                />
                <input
                  type="text"
                  placeholder="Last name"
                  value={ticket.lastName}
                  onChange={(e) =>
                    handleTicketChange(index, "lastName", e.target.value)
                  }
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={ticket.email}
                  onChange={(e) =>
                    handleTicketChange(index, "email", e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Quantity"
                  value={ticket.quantity}
                  onChange={(e) =>
                    handleTicketChange(index, "quantity", e.target.value)
                  }
                />
                <button
                  className={s.removeTicket}
                  onClick={() => removeTicket(index)}
                >
                  -
                </button>
              </div>
            ))}
            <button className={s.addTicket} onClick={addTicket}>
              +
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default ShareTicket;
