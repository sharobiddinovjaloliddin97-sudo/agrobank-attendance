import { AlertTriangle, ArrowRight } from "lucide-react";

function AttentionStrip({ t, count = 23, onAction }) {
  const texts = t || {
    label: "Diqqat talab qiladi:",
    message: `${count} nafar xodim ketma-ket 3 martadan ortiq kechikkan`,
    btn: "Ro‘yxatni ko‘rish",
  };

  return (
    <section className="attention-strip">
      <div className="attention-left">
        <AlertTriangle size={18} />
        <span>
          <strong>{texts.label}</strong> {texts.message}
        </span>
      </div>

      <button type="button" className="attention-btn" onClick={onAction}>
        <span>{texts.btn}</span>
        <ArrowRight size={15} />
      </button>
    </section>
  );
}

export default AttentionStrip;

