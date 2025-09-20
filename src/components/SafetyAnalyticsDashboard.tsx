import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  Fuel, 
  AlertTriangle, 
  Activity,
  TrendingUp,
  TrendingDown,
  Users,
  Wrench,
  Timer,
  Gauge,
  ArrowLeft
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const SafetyAnalyticsDashboard = () => {
  const navigate = useNavigate();

  const detailedMetrics = [
    { 
      label: 'Fuel Health Index', 
      value: 92, 
      trend: '+5%',
      lastWeek: 87,
      target: 95,
      incidents: 2,
      riskLevel: 'Low'
    },
    { 
      label: 'Crew Fatigue Score', 
      value: 68, 
      trend: '-3%',
      lastWeek: 71,
      target: 85,
      incidents: 8,
      riskLevel: 'Medium'
    },
    { 
      label: 'Mechanical Risk Index', 
      value: 85, 
      trend: '+2%',
      lastWeek: 83,
      target: 90,
      incidents: 3,
      riskLevel: 'Low'
    }
  ];

  const safetyTrends = [
    { month: 'Jan', fuelHealth: 88, crewFatigue: 72, mechanical: 82 },
    { month: 'Feb', fuelHealth: 90, crewFatigue: 70, mechanical: 84 },
    { month: 'Mar', fuelHealth: 92, crewFatigue: 68, mechanical: 85 }
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
            <h1 className="text-4xl font-bold text-foreground mb-2">Safety Analytics Dashboard</h1>
            <p className="text-muted-foreground">Detailed safety metrics and trend analysis</p>
          </div>
        </div>
      </div>

      {/* Detailed Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {detailedMetrics.map((metric, index) => (
          <Card key={index} className="mission-control-card">
            <CardHeader>
              <CardTitle className="text-lg">{metric.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">{metric.value}%</div>
                <Progress value={metric.value} className="h-2" />
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Weekly Change</p>
                    <p className={`font-medium ${metric.trend.startsWith('+') ? 'text-success' : 'text-warning'}`}>
                      {metric.trend}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Target</p>
                    <p className="font-medium">{metric.target}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Incidents</p>
                    <p className="font-medium">{metric.incidents}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Risk Level</p>
                    <Badge variant={metric.riskLevel === 'Low' ? 'default' : 'secondary'}>
                      {metric.riskLevel}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trend Analysis */}
      <Card className="mission-control-card">
        <CardHeader>
          <CardTitle>Historical Safety Trends</CardTitle>
          <CardDescription>3-month safety performance overview</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
            <div className="text-center">
              <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Interactive Safety Trends Chart</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Incident Log */}
      <Card className="mission-control-card">
        <CardHeader>
          <CardTitle>Recent Safety Incidents</CardTitle>
          <CardDescription>Detailed incident reports and resolutions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: '2024-03-15', type: 'Fuel System', severity: 'Low', status: 'Resolved' },
              { date: '2024-03-14', type: 'Crew Fatigue', severity: 'Medium', status: 'Monitoring' },
              { date: '2024-03-12', type: 'Mechanical', severity: 'Low', status: 'Resolved' }
            ].map((incident, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-medium text-foreground">{incident.type}</p>
                    <p className="text-sm text-muted-foreground">{incident.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={incident.severity === 'Low' ? 'default' : 'secondary'}>
                    {incident.severity}
                  </Badge>
                  <Badge variant={incident.status === 'Resolved' ? 'default' : 'outline'}>
                    {incident.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyAnalyticsDashboard;