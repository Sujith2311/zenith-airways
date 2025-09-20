import React from 'react';
import { 
  Radar, 
  Plane, 
  Clock, 
  MapPin, 
  Activity,
  TrendingUp,
  BarChart3,
  Users
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const StationOperations = () => {
  const stationMetrics = [
    { label: 'Gate Congestion', value: '73%', status: 'warning', change: '+8%' },
    { label: 'Turnaround Time', value: '42min', status: 'success', change: '-3min' },
    { label: 'Taxi Delays', value: '12min', status: 'warning', change: '+2min' },
    { label: 'Active Aircraft', value: '89', status: 'success', change: '+5' }
  ];

  const terminals = [
    { id: 'A', name: 'Terminal A', gates: 12, occupied: 9, traffic: 'high' },
    { id: 'B', name: 'Terminal B', gates: 15, occupied: 11, traffic: 'medium' },
    { id: 'C', name: 'Terminal C', gates: 18, occupied: 8, traffic: 'low' }
  ];

  const activeFlights = [
    { id: 'ZA101', route: 'LAX → SFO', gate: 'A12', status: 'boarding', eta: '14:25' },
    { id: 'ZA204', route: 'JFK → DEN', gate: 'B07', status: 'delayed', eta: '15:40' },
    { id: 'ZA318', route: 'ORD → ATL', gate: 'C15', status: 'arrived', eta: '16:15' },
    { id: 'ZA427', route: 'DFW → SEA', gate: 'A08', status: 'departing', eta: '16:45' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Station Operations</h1>
          <p className="text-muted-foreground">Real-time aircraft tracking and station performance monitoring</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Activity className="mr-2 h-4 w-4" />
            Live Data
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Button>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stationMetrics.map((metric) => (
          <Card key={metric.label} className="mission-control-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-muted-foreground">{metric.label}</span>
                <Badge variant={metric.status === 'success' ? 'default' : 'destructive'} className="text-xs">
                  {metric.status}
                </Badge>
              </div>
              <div className="flex items-end justify-between">
                <span className="text-3xl font-bold text-foreground">{metric.value}</span>
                <span className="text-sm text-success font-medium">{metric.change}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="radar" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="radar">Radar View</TabsTrigger>
          <TabsTrigger value="terminals">Terminals</TabsTrigger>
          <TabsTrigger value="flights">Active Flights</TabsTrigger>
          <TabsTrigger value="analytics">Traffic Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="radar" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Radar className="h-5 w-5 text-primary" />
                Live Aircraft Radar
              </CardTitle>
              <CardDescription>Real-time aircraft positioning and movement tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative h-96 bg-radar-background rounded-lg border flex items-center justify-center">
                <div className="radar-sweep"></div>
                <div className="text-center">
                  <Radar className="h-12 w-12 text-primary mx-auto mb-4 animate-spin" />
                  <p className="text-muted-foreground">Radar System Active</p>
                  <p className="text-sm text-muted-foreground">Tracking 89 aircraft</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="terminals" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {terminals.map((terminal) => (
              <Card key={terminal.id} className="mission-control-card">
                <CardHeader>
                  <CardTitle>{terminal.name}</CardTitle>
                  <CardDescription>Gate utilization and traffic status</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Gates Occupied</span>
                    <span className="text-2xl font-bold">{terminal.occupied}/{terminal.gates}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(terminal.occupied / terminal.gates) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Traffic Level</span>
                    <Badge variant={terminal.traffic === 'high' ? 'destructive' : terminal.traffic === 'medium' ? 'secondary' : 'default'}>
                      {terminal.traffic}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="flights" className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle>Active Flight Operations</CardTitle>
              <CardDescription>Current flight status and gate assignments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeFlights.map((flight) => (
                  <div key={flight.id} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-foreground">{flight.id}</span>
                        <span className="text-sm text-muted-foreground">{flight.route}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Gate {flight.gate}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{flight.eta}</span>
                      </div>
                      <Badge variant={
                        flight.status === 'delayed' ? 'destructive' : 
                        flight.status === 'boarding' ? 'secondary' : 
                        'default'
                      }>
                        {flight.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Station Traffic Trends</CardTitle>
                <CardDescription>Hourly traffic patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Traffic Analytics Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mission-control-card">
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Daily operational efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
                  <div className="text-center">
                    <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Performance Dashboard</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StationOperations;