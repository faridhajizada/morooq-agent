import { useExamsQuery } from "./../../../api/exams";

function AcquireTicket() {
  const { data } = useExamsQuery();

  console.log(data);
  return (
    <div>
      <div className="title">
        <h1>Ticket acquisition</h1>
      </div>
      <div className="languageSelect">
        <label htmlFor="language"> Language</label>
        <select id="language" name="language">
          <option value="0">English</option>
          <option value="1">Spanish</option>
          <option value="2">French</option>
          <option value="3">German</option>
        </select>
      </div>

      <div>
        <label htmlFor="exam"> Exam</label>
        <select id="exam" name="exam">
          {data?.map((exam, ind) => (
            <option key={ind} value={exam.ProductId}>
              {exam.Name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default AcquireTicket;
