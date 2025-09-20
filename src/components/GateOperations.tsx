import React from 'react';
import { 
  MapPin, 
  Clock, 
  AlertTriangle, 
  Shuffle,
  TrendingUp,
  Users,
  Plane
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GateOperations = () => {
  const gateUtilization = [
    { gate: 'A1', flight: 'ZA101', status: 'occupied', turnaround: '25min', next: 'ZA205' },
    { gate: 'A2', flight: null, status: 'available', turnaround: null, next: 'ZA310' },  
    { gate: 'A3', flight: 'ZA142', status: 'maintenance', turnaround: '45min', next: null },
    { gate: 'B7', flight: 'ZA089', status: 'boarding', turnaround: '15min', next: 'ZA421' },
    { gate: 'B8', flight: null, status: 'available', turnaround: null, next: 'ZA156' },
    { gate: 'C12', flight: 'ZA267', status: 'delayed', turnaround: '35min', next: 'ZA398' }
  ];

  const delayAlerts = [
    { flight: 'ZA204', gate: 'B07', delay: '45min', reason: 'Weather conditions', severity: 'high' },
    { flight: 'ZA318', gate: 'C15', delay: '15min', reason: 'Crew shortage', severity: 'medium' },
    { flight: 'ZA445', gate: 'A09', delay: '20min', reason: 'Ground equipment', severity: 'medium' }
  ];

  const reassignmentSuggestions = [
    { from: 'A12', to: 'A15', flight: 'ZA204', reason: 'Reduce taxi time', savings: '8min' },
    { from: 'B07', to: 'B12', flight: 'ZA318', reason: 'Gate availability', savings: '12min' },
    { from: 'C08', to: 'C14', flight: 'ZA445', reason: 'Terminal optimization', savings: '5min' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'occupied': return 'destructive';
      case 'available': return 'default';
      case 'maintenance': return 'secondary';
      case 'boarding': return 'outline';
      case 'delayed': return 'destructive';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Gate Operations</h1>
          <p className="text-muted-foreground">Gate assignment optimization and congestion management</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Shuffle className="mr-2 h-4 w-4" />
            Reassign Gates
          </Button>
          <Button>
            <TrendingUp className="mr-2 h-4 w-4" />
            Utilization Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Available Gates</p>
                <p className="text-3xl font-bold text-success">18/45</p>
              </div>
              <MapPin className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Turnaround</p>
                <p className="text-3xl font-bold text-foreground">28min</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Delayed Flights</p>
                <p className="text-3xl font-bold text-warning">3</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Utilization</p>
                <p className="text-3xl font-bold text-foreground">73%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="gates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="gates">Gate Status</TabsTrigger>
          <TabsTrigger value="heatmap">Congestion Heatmap</TabsTrigger>
          <TabsTrigger value="delays">Delay Management</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="gates" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Real-time Gate Status</CardTitle>
              <CardDescription>Current gate assignments and availability</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gateUtilization.map((gate) => (
                  <div key={gate.gate} className="p-4 rounded-lg border bg-card/50 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-lg">Gate {gate.gate}</span>
                      <Badge variant={getStatusColor(gate.status)}>
                        {gate.status}
                      </Badge>
                    </div>
                    
                    {gate.flight && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Plane className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{gate.flight}</span>
                        </div>
                        {gate.turnaround && (
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Turnaround: {gate.turnaround}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {gate.next && (
                      <div className="pt-2 border-t">
                        <span className="text-sm text-muted-foreground">
                          Next: {gate.next}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="heatmap" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Terminal Congestion Heatmap</CardTitle>
              <CardDescription>Visual representation of gate utilization and traffic patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted/20 rounded-lg border flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Heatmap</p>
                  <p className="text-sm text-muted-foreground">Terminal congestion visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="delays" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Delay Management</CardTitle>
              <CardDescription>Active delays and rescheduling recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {delayAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-4">
                    <div className={`h-3 w-3 rounded-full ${
                      alert.severity === 'high' ? 'bg-destructive alert-pulse' : 'bg-warning'
                    }`} />
                    <div>
                      <p className="font-medium text-foreground">
                        {alert.flight} - Gate {alert.gate}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {alert.delay} delay - {alert.reason}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Reschedule</Button>
                    <Button size="sm">Reassign Gate</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Gate Reassignment Suggestions</CardTitle>
              <CardDescription>AI-powered optimization recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {reassignmentSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center gap-4">
                    <Shuffle className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">
                        {suggestion.flight}: Gate {suggestion.from} → {suggestion.to}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {suggestion.reason} • Save {suggestion.savings}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Modify</Button>
                    <Button size="sm">Accept</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GateOperations;