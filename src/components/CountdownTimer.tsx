import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const entries = Object.entries(timeLeft);

  return (
    <div className="countdown">
      {entries.map(([unit, value]) => (
        <div className="countdown__segment" key={unit}>
          <div className="countdown__value">{value}</div>
          <div className="countdown__label">{unit}</div>
        </div>
      ))}
    </div>
  );
}

export default CountdownTimer;
