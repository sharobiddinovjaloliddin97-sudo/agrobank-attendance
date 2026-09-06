import { ArrowRight } from "lucide-react";

const repeatOffenders = [
  { id: 1, name: "Yusiev B.", dept: "Kredit bo‘limi", count: "8 marta" },
  { id: 2, name: "Melikuziev O.", dept: "Operatsion bo‘lim", count: "8 marta" },
  { id: 3, name: "Xikmatov I.", dept: "Hisob-kitob bo‘limi", count: "7 marta" },
  { id: 4, name: "Rahimov F.", dept: "IT bo‘limi", count: "6 marta" },
  { id: 5, name: "Xikmat Q.", dept: "Xavfsizlik bo‘limi", count: "6 marta" },
];

function RepeatedLateCard({ onShowAll }) {
  return (
    <div className="bottom-card">
      <div className="bottom-card-header">
        <h3>Takroriy kechikuvchilar</h3>
        <span>⋮</span>
      </div>

      <div className="late-list">
        {repeatOffenders.map((person) => (
          <div className="late-row" key={person.id}>
            <span>{person.id}</span>
            <span>{person.name}</span>
            <span>{person.dept}</span>
            <strong>{person.count}</strong>
          </div>
        ))}
      </div>

      <button className="bottom-card-btn" type="button" onClick={onShowAll}>
        <span>Barcha ro‘yxatni ko‘rish</span>
        <ArrowRight size={17} />
      </button>
    </div>
  );
}

export default RepeatedLateCard;
