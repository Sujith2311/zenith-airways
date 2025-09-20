import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Shuffle,
  TrendingUp,
  Users,
  Plane,
  ArrowLeft,
  Calendar,
  BarChart3
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const GateUtilizationDetail = () => {
  const navigate = useNavigate();

  const gatePerformance = [
    { 
      gate: 'A1', 
      utilization: 92, 
      avgTurnaround: '28 min', 
      flights: 12,
      revenue: '$45K',
      efficiency: 'Excellent'
    },
    { 
      gate: 'A2', 
      utilization: 85, 
      avgTurnaround: '32 min', 
      flights: 10,
      revenue: '$38K',
      efficiency: 'Good'
    },
    { 
      gate: 'B7', 
      utilization: 78, 
      avgTurnaround: '35 min', 
      flights: 9,
      revenue: '$34K',
      efficiency: 'Average'
    },
    { 
      gate: 'B8', 
      utilization: 68, 
      avgTurnaround: '29 min', 
      flights: 8,
      revenue: '$28K',
      efficiency: 'Below Average'
    }
  ];

  const hourlyUtilization = [
    { hour: '06:00', usage: 45 },
    { hour: '08:00', usage: 78 },
    { hour: '10:00', usage: 92 },
    { hour: '12:00', usage: 88 },
    { hour: '14:00', usage: 95 },
    { hour: '16:00', usage: 89 },
    { hour: '18:00', usage: 82 },
    { hour: '20:00', usage: 67 },
    { hour: '22:00', usage: 34 }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Gate Utilization Analysis</h1>
            <p className="text-muted-foreground">Detailed gate performance metrics and optimization insights</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Time Period
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Gate Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {gatePerformance.map((gate, index) => (
          <Card key={index} className="mission-control-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Gate {gate.gate}</CardTitle>
                <Badge variant={
                  gate.efficiency === 'Excellent' ? 'default' : 
                  gate.efficiency === 'Good' ? 'secondary' : 
                  gate.efficiency === 'Average' ? 'outline' : 'destructive'
                }>
                  {gate.efficiency}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Utilization</span>
                    <span className="font-medium">{gate.utilization}%</span>
                  </div>
                  <Progress value={gate.utilization} className="h-2" />
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <p className="text-muted-foreground">Turnaround</p>
                    <p className="font-medium">{gate.avgTurnaround}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Flights</p>
                    <p className="font-medium">{gate.flights}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-muted-foreground">Daily Revenue</p>
                    <p className="font-medium text-success">{gate.revenue}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Utilization Heatmap */}
      <Card className="mission-control-card">
        <CardHeader>
          <CardTitle>Hourly Utilization Heatmap</CardTitle>
          <CardDescription>Gate usage patterns throughout the day</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {hourlyUtilization.map((slot, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-16 text-sm font-medium text-muted-foreground">
                  {slot.hour}
                </div>
                <div className="flex-1">
                  <Progress value={slot.usage} className="h-6" />
                </div>
                <div className="w-16 text-sm font-medium text-right">
                  {slot.usage}%
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Optimization Recommendations */}
      <Card className="mission-control-card">
        <CardHeader>
          <CardTitle>Optimization Recommendations</CardTitle>
          <CardDescription>AI-powered suggestions to improve gate efficiency</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-success/10">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <p className="font-medium text-success">High Impact Recommendation</p>
              </div>
              <p className="text-sm text-foreground mb-3">
                Redistribute peak hour flights from Gates A1-A3 to B7-B8 to reduce congestion
              </p>
              <div className="text-xs text-muted-foreground mb-3">
                Expected improvement: +12% overall efficiency, -8 min average turnaround
              </div>
              <Button size="sm" variant="outline">Implement Strategy</Button>
            </div>

            <div className="p-4 rounded-lg border bg-warning/10">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <p className="font-medium text-warning">Medium Impact Recommendation</p>
              </div>
              <p className="text-sm text-foreground mb-3">
                Schedule maintenance for Gate B8 during low-utilization hours (22:00-06:00)
              </p>
              <div className="text-xs text-muted-foreground mb-3">
                Expected improvement: +5% Gate B8 efficiency, minimal disruption
              </div>
              <Button size="sm" variant="outline">Schedule Maintenance</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GateUtilizationDetail;