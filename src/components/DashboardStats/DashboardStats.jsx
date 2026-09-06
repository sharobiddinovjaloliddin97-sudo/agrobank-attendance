import {
  UsersRound,
  CircleCheck,
  Clock3,
  UserX,
  HeartPulse,
  Plane,
} from "lucide-react";
import StatCard from "../StatCard/StatCard";

function DashboardStats() {
  return (
    <section className="stats-grid">
      <StatCard
        icon={<UsersRound size={22} />}
        title="Reja bo‘yicha xodimlar"
        value="1 103"
        color="green"
      />

      <StatCard
        icon={<CircleCheck size={22} />}
        title="Ishga kelganlar"
        value="987"
        percent="89,5%"
        trend="2,4%"
        trendType="up"
        color="green"
      />

      <StatCard
        icon={<CircleCheck size={22} />}
        title="O‘z vaqtida kelganlar"
        value="821"
        percent="83,2%"
        trend="1,8%"
        trendType="up"
        color="green"
      />

      <StatCard
        icon={<Clock3 size={22} />}
        title="Kechikkanlar"
        value="166"
        percent="16,8%"
        trend="0,6%"
        trendType="up"
        color="orange"
      />

      <StatCard
        icon={<UserX size={22} />}
        title="Kelmaganlar"
        value="116"
        percent="10,5%"
        trend="0,9%"
        trendType="up"
        color="red"
      />

      <StatCard
        icon={<HeartPulse size={22} />}
        title="Ta’til / kasallik"
        value="74"
        percent="6,7%"
        trend="0,3%"
        trendType="down"
        color="blue"
      />

      <StatCard
        icon={<Plane size={22} />}
        title="Xizmat safari"
        value="42"
        percent="3,8%"
        trend="0,2%"
        trendType="down"
        color="blue"
      />
    </section>
  );
}

export default DashboardStats;
