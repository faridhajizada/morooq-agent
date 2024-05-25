import Table from "react-bootstrap/Table";
import s from "./StudentTable.module.scss";

function StudentTable() {
  return (
    <main>
      <Table responsive>
        <thead>
          <tr>
            <th className={s.header}>#</th>
            <th className={s.header}>Group</th>
            <th className={s.header}>Start date</th>
            <th className={s.header}>End date</th>
            <th className={s.header}>Bitib/Legv olunub</th>
            <th className={s.header}>Taktiki bitme tarixi</th>
            <th className={s.header}>Service</th>
            <th className={s.header}>Heftede ders sayi</th>
            <th className={s.header}>Ders olan Heftenin Gunleri</th>
            <th className={s.header}>Lesson type</th>
            <th className={s.header}>Online-a kecme tarixi</th>
            <th className={s.header}>Tutor</th>
            <th className={s.header}>Start Time</th>
            <th className={s.header}>End Time</th>
            <th className={s.header}>Telebe sayi</th>
            <th className={s.header}>Yeni qatilan telebe sayi</th>
            <th className={s.header}>Donduran telebe sayi</th>
            <th className={s.header}>Terk eden telebe sayi</th>
            <th className={s.headerRed}>Yekun telebe sayi</th>
            <th className={s.headerRed}>Qrupda qalan telebe sayi</th>
          </tr>
        </thead>

        <tbody>
          <tr className={s.rowOdd}>
            <td className={s.content}>1</td>
            <td className={s.content}>BT001</td>
            <td className={s.content}>31.08.2021</td>
            <td className={s.content}>31.10.2021</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Excel</td>
            <td className={s.content}>2</td>
            <td className={s.content}>2-4 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Tural Nebiyev</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>21:00</td>
            <td className={s.content}>10</td>
            <td className={s.content}></td>
            <td className={s.content}>3</td>
            <td className={s.content}></td>
            <td className={s.content}>7</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowEven}>
            <td className={s.content}>2</td>
            <td className={s.content}>BT002</td>
            <td className={s.content}>31.08.2023</td>
            <td className={s.content}>31.10.2023</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Frontend</td>
            <td className={s.content}>2</td>
            <td className={s.content}>3-5 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Hacizade Farid</td>
            <td className={s.content}>17:00</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>5</td>
            <td className={s.content}></td>
            <td className={s.content}>1</td>
            <td className={s.content}></td>
            <td className={s.content}>6</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowOdd}>
            <td className={s.content}>3</td>
            <td className={s.content}>BT003</td>
            <td className={s.content}>31.08.2021</td>
            <td className={s.content}>31.10.2021</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Excel</td>
            <td className={s.content}>2</td>
            <td className={s.content}>2-4 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Tural Nebiyev</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>21:00</td>
            <td className={s.content}>10</td>
            <td className={s.content}></td>
            <td className={s.content}>3</td>
            <td className={s.content}></td>
            <td className={s.content}>7</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowEven}>
            <td className={s.content}>4</td>
            <td className={s.content}>BT004</td>
            <td className={s.content}>31.08.2023</td>
            <td className={s.content}>31.10.2023</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Frontend</td>
            <td className={s.content}>2</td>
            <td className={s.content}>3-5 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Hacizade Farid</td>
            <td className={s.content}>17:00</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>5</td>
            <td className={s.content}></td>
            <td className={s.content}>1</td>
            <td className={s.content}></td>
            <td className={s.content}>6</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowOdd}>
            <td className={s.content}>5</td>
            <td className={s.content}>BT005</td>
            <td className={s.content}>31.08.2021</td>
            <td className={s.content}>31.10.2021</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Excel</td>
            <td className={s.content}>2</td>
            <td className={s.content}>2-4 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Tural Nebiyev</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>21:00</td>
            <td className={s.content}>10</td>
            <td className={s.content}></td>
            <td className={s.content}>3</td>
            <td className={s.content}></td>
            <td className={s.content}>7</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowEven}>
            <td className={s.content}>6</td>
            <td className={s.content}>BT006</td>
            <td className={s.content}>31.08.2023</td>
            <td className={s.content}>31.10.2023</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Frontend</td>
            <td className={s.content}>2</td>
            <td className={s.content}>3-5 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Hacizade Farid</td>
            <td className={s.content}>17:00</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>5</td>
            <td className={s.content}></td>
            <td className={s.content}>1</td>
            <td className={s.content}></td>
            <td className={s.content}>6</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowOdd}>
            <td className={s.content}>7</td>
            <td className={s.content}>BT007</td>
            <td className={s.content}>31.08.2021</td>
            <td className={s.content}>31.10.2021</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Excel</td>
            <td className={s.content}>2</td>
            <td className={s.content}>2-4 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Tural Nebiyev</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>21:00</td>
            <td className={s.content}>10</td>
            <td className={s.content}></td>
            <td className={s.content}>3</td>
            <td className={s.content}></td>
            <td className={s.content}>7</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowEven}>
            <td className={s.content}>8</td>
            <td className={s.content}>BT008</td>
            <td className={s.content}>31.08.2023</td>
            <td className={s.content}>31.10.2023</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Frontend</td>
            <td className={s.content}>2</td>
            <td className={s.content}>3-5 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Hacizade Farid</td>
            <td className={s.content}>17:00</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>5</td>
            <td className={s.content}></td>
            <td className={s.content}>1</td>
            <td className={s.content}></td>
            <td className={s.content}>6</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowOdd}>
            <td className={s.content}>1</td>
            <td className={s.content}>BT001</td>
            <td className={s.content}>31.08.2021</td>
            <td className={s.content}>31.10.2021</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Excel</td>
            <td className={s.content}>2</td>
            <td className={s.content}>2-4 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Tural Nebiyev</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>21:00</td>
            <td className={s.content}>10</td>
            <td className={s.content}></td>
            <td className={s.content}>3</td>
            <td className={s.content}></td>
            <td className={s.content}>7</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowEven}>
            <td className={s.content}>2</td>
            <td className={s.content}>BT002</td>
            <td className={s.content}>31.08.2023</td>
            <td className={s.content}>31.10.2023</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Frontend</td>
            <td className={s.content}>2</td>
            <td className={s.content}>3-5 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Hacizade Farid</td>
            <td className={s.content}>17:00</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>5</td>
            <td className={s.content}></td>
            <td className={s.content}>1</td>
            <td className={s.content}></td>
            <td className={s.content}>6</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowOdd}>
            <td className={s.content}>3</td>
            <td className={s.content}>BT003</td>
            <td className={s.content}>31.08.2021</td>
            <td className={s.content}>31.10.2021</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Excel</td>
            <td className={s.content}>2</td>
            <td className={s.content}>2-4 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Tural Nebiyev</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>21:00</td>
            <td className={s.content}>10</td>
            <td className={s.content}></td>
            <td className={s.content}>3</td>
            <td className={s.content}></td>
            <td className={s.content}>7</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowEven}>
            <td className={s.content}>4</td>
            <td className={s.content}>BT004</td>
            <td className={s.content}>31.08.2023</td>
            <td className={s.content}>31.10.2023</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Frontend</td>
            <td className={s.content}>2</td>
            <td className={s.content}>3-5 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Hacizade Farid</td>
            <td className={s.content}>17:00</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>5</td>
            <td className={s.content}></td>
            <td className={s.content}>1</td>
            <td className={s.content}></td>
            <td className={s.content}>6</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowOdd}>
            <td className={s.content}>5</td>
            <td className={s.content}>BT005</td>
            <td className={s.content}>31.08.2021</td>
            <td className={s.content}>31.10.2021</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Excel</td>
            <td className={s.content}>2</td>
            <td className={s.content}>2-4 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Tural Nebiyev</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>21:00</td>
            <td className={s.content}>10</td>
            <td className={s.content}></td>
            <td className={s.content}>3</td>
            <td className={s.content}></td>
            <td className={s.content}>7</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowEven}>
            <td className={s.content}>6</td>
            <td className={s.content}>BT006</td>
            <td className={s.content}>31.08.2023</td>
            <td className={s.content}>31.10.2023</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Frontend</td>
            <td className={s.content}>2</td>
            <td className={s.content}>3-5 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Hacizade Farid</td>
            <td className={s.content}>17:00</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>5</td>
            <td className={s.content}></td>
            <td className={s.content}>1</td>
            <td className={s.content}></td>
            <td className={s.content}>6</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowOdd}>
            <td className={s.content}>7</td>
            <td className={s.content}>BT007</td>
            <td className={s.content}>31.08.2021</td>
            <td className={s.content}>31.10.2021</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Excel</td>
            <td className={s.content}>2</td>
            <td className={s.content}>2-4 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Tural Nebiyev</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>21:00</td>
            <td className={s.content}>10</td>
            <td className={s.content}></td>
            <td className={s.content}>3</td>
            <td className={s.content}></td>
            <td className={s.content}>7</td>
            <td className={s.content}>0</td>
          </tr>
          <tr className={s.rowEven}>
            <td className={s.content}>8</td>
            <td className={s.content}>BT008</td>
            <td className={s.content}>31.08.2023</td>
            <td className={s.content}>31.10.2023</td>
            <td className={s.content}>Bitib</td>
            <td className={s.content}>29.10.2021</td>
            <td className={s.content}>Frontend</td>
            <td className={s.content}>2</td>
            <td className={s.content}>3-5 gunler</td>
            <td className={s.content}>Group</td>
            <td className={s.content}></td>
            <td className={s.content}>Hacizade Farid</td>
            <td className={s.content}>17:00</td>
            <td className={s.content}>19:00</td>
            <td className={s.content}>5</td>
            <td className={s.content}></td>
            <td className={s.content}>1</td>
            <td className={s.content}></td>
            <td className={s.content}>6</td>
            <td className={s.content}>0</td>
          </tr>
        </tbody>

        <tbody className={s.total}>
          <tr className={s.contentTotal}>
            <td></td>
            <td>ToTal</td>
            <td>14</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>395</td>
            <td>33</td>
            <td>12</td>
            <td>19</td>
            <td>398</td>
            <td className={s.totalRed}>89</td>
          </tr>
        </tbody>
      </Table>
    </main>
  );
}

export default StudentTable;
