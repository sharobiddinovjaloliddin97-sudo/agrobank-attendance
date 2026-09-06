import { ArrowRight } from "lucide-react";

const branches = [
  { id: 1, name: "Bosh ofis", late: "28 (18%)", absent: "20 (8%)", attendance: "82%" },
  { id: 2, name: "Toshkent shahar", late: "31 (17%)", absent: "26 (9%)", attendance: "81%" },
  { id: 3, name: "Samarqand", late: "21 (15%)", absent: "14 (6%)", attendance: "85%" },
  { id: 4, name: "Andijon", late: "18 (14%)", absent: "11 (6%)", attendance: "86%" },
  { id: 5, name: "Farg‘ona", late: "15 (12%)", absent: "9 (5%)", attendance: "88%" },
];

function ProblemBranchesCard({ onShowAll }) {
  return (
    <div className="bottom-card">
      <div className="bottom-card-header">
        <h3>Muammoli bo‘linmalar</h3>
        <span>⋮</span>
      </div>

      <div className="problem-table">
        <div className="table-row table-head">
          <span>Bo‘linma</span>
          <span>Kechikish</span>
          <span>Kelmagan</span>
          <span>Davomat</span>
        </div>

        {branches.map((branch) => (
          <div className="table-row" key={branch.id}>
            <span>{branch.id}&nbsp; {branch.name}</span>
            <span>{branch.late}</span>
            <span>{branch.absent}</span>
            <span>{branch.attendance}</span>
          </div>
        ))}
      </div>

      <button className="bottom-card-btn" type="button" onClick={onShowAll}>
        <span>Barcha bo‘linmalarni ko‘rish</span>
        <ArrowRight size={17} />
      </button>
    </div>
  );
}

export default ProblemBranchesCard;
