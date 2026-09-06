import { AlertTriangle, ArrowRight } from "lucide-react";

function AttentionStrip({ count = 23, onAction }) {
  return (
    <section className="attention-strip">
      <div className="attention-left">
        <AlertTriangle size={20} />
        <span>
          <strong>Diqqat talab qiladi:</strong> {count} nafar xodim ketma-ket 3
          martadan ortiq kechikkan
        </span>
      </div>

      <button type="button" className="attention-btn" onClick={onAction}>
        <span>Ro‘yxatni ko‘rish</span>
        <ArrowRight size={17} />
      </button>
    </section>
  );
}

export default AttentionStrip;
