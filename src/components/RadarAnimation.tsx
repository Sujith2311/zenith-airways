import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface RadarProps {
  showAircraft?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const RadarAnimation: React.FC<RadarProps> = ({ 
  showAircraft = true, 
  size = 'md', 
  className = '' 
}) => {
  const [sweepAngle, setSweepAngle] = useState(0);
  const [aircraftPositions, setAircraftPositions] = useState([
    { id: 'ZA451', x: 70, y: 30, blinking: true },
    { id: 'ZA203', x: 40, y: 60, blinking: false },
    { id: 'ZA128', x: 85, y: 75, blinking: true },
    { id: 'ZA330', x: 25, y: 45, blinking: false },
    { id: 'ZA155', x: 60, y: 80, blinking: true },
  ]);

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-80 h-80'
  };

  const dotSize = {
    sm: 'w-1 h-1',
    md: 'w-1.5 h-1.5',
    lg: 'w-2 h-2'
  };

  useEffect(() => {
    const sweepInterval = setInterval(() => {
      setSweepAngle(prev => (prev + 2) % 360);
    }, 50);

    const blinkInterval = setInterval(() => {
      setAircraftPositions(prev => 
        prev.map(aircraft => ({
          ...aircraft,
          blinking: Math.random() > 0.5
        }))
      );
    }, 1000);

    return () => {
      clearInterval(sweepInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Radar Background */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
        {/* Concentric Circles */}
        <div className="absolute inset-[20%] rounded-full border border-primary/20"></div>
        <div className="absolute inset-[40%] rounded-full border border-primary/20"></div>
        <div className="absolute inset-[60%] rounded-full border border-primary/20"></div>
        <div className="absolute inset-[80%] rounded-full border border-primary/20"></div>
        
        {/* Cross Lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-primary/20 transform -translate-x-px"></div>
        <div className="absolute left-0 top-1/2 w-full h-px bg-primary/20 transform -translate-y-px"></div>
      </div>

      {/* Radar Sweep */}
      <div 
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: `conic-gradient(from ${sweepAngle}deg, transparent 0deg, rgba(var(--primary-rgb, 34 197 94), 0.3) 30deg, rgba(var(--primary-rgb, 34 197 94), 0.1) 60deg, transparent 90deg)`
        }}
      >
      </div>

      {/* Radar Sweep Line */}
      <div 
        className="absolute top-1/2 left-1/2 origin-left w-1/2 h-px bg-gradient-to-r from-primary to-transparent"
        style={{
          transform: `translate(-50%, -50%) rotate(${sweepAngle}deg)`
        }}
      ></div>

      {/* Aircraft Markers */}
      {showAircraft && aircraftPositions.map((aircraft) => (
        <div
          key={aircraft.id}
          className={`absolute ${dotSize[size]} rounded-full transition-opacity duration-200 ${
            aircraft.blinking 
              ? 'bg-warning animate-pulse opacity-100' 
              : 'bg-primary/60 opacity-70'
          }`}
          style={{
            left: `${aircraft.x}%`,
            top: `${aircraft.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          title={aircraft.id}
        >
          {/* Pulse Ring for Blinking Aircraft */}
          {aircraft.blinking && (
            <div className={`absolute inset-0 rounded-full border border-warning animate-ping ${dotSize[size]}`}></div>
          )}
        </div>
      ))}

      {/* Center Dot */}
      <div className={`absolute top-1/2 left-1/2 ${dotSize[size]} bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2`}></div>
    </div>
  );
};

export default RadarAnimation;