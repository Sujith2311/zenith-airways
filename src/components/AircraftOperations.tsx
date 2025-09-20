import React from 'react';
import { 
  Plane, 
  Fuel, 
  Wrench, 
  Thermometer,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Gauge,
  Battery,
  Wind,
  Eye
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const AircraftOperations = () => {
  const aircraftFleet = [
    {
      id: 'N747ZA',
      model: 'Boeing 747-8F',
      status: 'maintenance',
      location: 'Hangar 3',
      fuelLevel: 0,
      engineCondition: 67,
      systemsStatus: 45,
      lastMaintenance: '2 days ago',
      nextFlight: 'Grounded for maintenance',
      issues: ['Engine #2 inspection required', 'Hydraulic pressure check']
    },
    {
      id: 'N737ZA',
      model: 'Boeing 737 MAX 8',
      status: 'ready',
      location: 'Gate A12',
      fuelLevel: 95,
      engineCondition: 94,
      systemsStatus: 98,
      lastMaintenance: '5 days ago',
      nextFlight: 'ZA451 to LAX - 14:30',
      issues: []
    },
    {
      id: 'N320ZA',
      model: 'Airbus A320neo',
      status: 'flying',
      location: 'En route to SFO',
      fuelLevel: 73,
      engineCondition: 91,
      systemsStatus: 96,
      lastMaintenance: '3 days ago',
      nextFlight: 'ZA203 - Currently airborne',
      issues: []
    },
    {
      id: 'N777ZA',
      model: 'Boeing 777-300ER',
      status: 'warning',
      location: 'Gate C8',
      fuelLevel: 88,
      engineCondition: 78,
      systemsStatus: 85,
      lastMaintenance: '1 day ago',
      nextFlight: 'ZA128 to JFK - 13:15',
      issues: ['Tire pressure low', 'Minor avionics calibration needed']
    }
  ];

  const maintenanceSchedule = [
    { aircraft: 'N747ZA', type: 'Engine Inspection', priority: 'High', eta: '6 hours' },
    { aircraft: 'N777ZA', type: 'Tire Replacement', priority: 'Medium', eta: '2 hours' },
    { aircraft: 'N320ZA', type: 'Routine Check', priority: 'Low', eta: '1 day' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ready': return 'bg-success text-success-foreground';
      case 'flying': return 'bg-primary text-primary-foreground';
      case 'maintenance': return 'bg-muted text-muted-foreground';
      case 'warning': return 'bg-warning text-warning-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getConditionColor = (score: number) => {
    if (score >= 90) return 'text-success';
    if (score >= 70) return 'text-warning';
    return 'text-destructive';
  };

  const getConditionLevel = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 70) return 'Good';
    if (score >= 50) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Aircraft Operations Center</h1>
          <p className="text-muted-foreground">Real-time aircraft monitoring, maintenance tracking, and safety systems</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Wrench className="mr-2 h-4 w-4" />
            Maintenance Log
          </Button>
          <Button>
            <Plane className="mr-2 h-4 w-4" />
            Fleet Overview
          </Button>
        </div>
      </div>

      {/* Fleet Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fleet Status</p>
                <p className="text-3xl font-bold text-foreground">28</p>
                <p className="text-sm text-success font-medium">Aircraft operational</p>
              </div>
              <Plane className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Maintenance Queue</p>
                <p className="text-3xl font-bold text-warning">3</p>
                <p className="text-sm text-muted-foreground">Items pending</p>
              </div>
              <Wrench className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fuel Efficiency</p>
                <p className="text-3xl font-bold text-foreground">87%</p>
                <p className="text-sm text-success font-medium">Above target</p>
              </div>
              <Fuel className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Safety Score</p>
                <p className="text-3xl font-bold text-foreground">96%</p>
                <p className="text-sm text-success font-medium">Excellent</p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Aircraft Fleet Status */}
        <div className="lg:col-span-2">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-primary" />
                Fleet Management Dashboard
              </CardTitle>
              <CardDescription>
                Real-time monitoring of aircraft condition, fuel levels, and maintenance status
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {aircraftFleet.map((aircraft) => (
                <div key={aircraft.id} className="p-4 rounded-lg border bg-card/50 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Plane className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground">{aircraft.id}</h3>
                        <p className="text-sm text-muted-foreground">{aircraft.model}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(aircraft.status)} variant="secondary">
                        {aircraft.status}
                      </Badge>
                      {aircraft.issues.length > 0 && (
                        <Badge variant="outline" className="border-warning text-warning">
                          {aircraft.issues.length} issues
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Location:</span>
                        <span>{aircraft.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Last Maintenance:</span>
                        <span>{aircraft.lastMaintenance}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <Fuel className="h-3 w-3 text-primary" />
                            <span>Fuel Level:</span>
                          </div>
                          <span className="font-bold">{aircraft.fuelLevel}%</span>
                        </div>
                        <Progress value={aircraft.fuelLevel} className="h-1.5" />
                      </div>
                      
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <Gauge className="h-3 w-3 text-primary" />
                            <span>Engine:</span>
                          </div>
                          <span className={`font-bold ${getConditionColor(aircraft.engineCondition)}`}>
                            {getConditionLevel(aircraft.engineCondition)}
                          </span>
                        </div>
                        <Progress value={aircraft.engineCondition} className="h-1.5" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-1">
                            <Battery className="h-3 w-3 text-primary" />
                            <span>Systems:</span>
                          </div>
                          <span className={`font-bold ${getConditionColor(aircraft.systemsStatus)}`}>
                            {aircraft.systemsStatus}%
                          </span>
                        </div>
                        <Progress value={aircraft.systemsStatus} className="h-1.5" />
                      </div>
                    </div>
                  </div>

                  {aircraft.issues.length > 0 && (
                    <div className="pt-3 border-t">
                      <p className="text-sm font-medium text-destructive mb-2">Active Issues:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {aircraft.issues.map((issue, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <AlertTriangle className="h-3 w-3 text-warning mt-0.5 flex-shrink-0" />
                            {issue}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-2 border-t">
                    <p className="text-sm text-muted-foreground">
                      Next Flight: <span className="font-medium text-foreground">{aircraft.nextFlight}</span>
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button size="sm">Maintenance Log</Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Maintenance Schedule & Weather */}
        <div className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                Maintenance Schedule
              </CardTitle>
              <CardDescription>
                Upcoming maintenance tasks and priorities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {maintenanceSchedule.map((task, index) => (
                <div key={index} className="p-3 rounded-lg border bg-card/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{task.aircraft}</span>
                    <Badge 
                      variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{task.type}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    ETA: {task.eta}
                  </div>
                </div>
              ))}

              <Separator />

              <Button className="w-full" variant="outline">
                <Wrench className="mr-2 h-4 w-4" />
                View Full Schedule
              </Button>
            </CardContent>
          </Card>

          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-primary" />
                Weather & Conditions
              </CardTitle>
              <CardDescription>
                Current conditions affecting operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">72°F</p>
                  <p className="text-sm text-muted-foreground">Temperature</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Wind className="h-4 w-4 text-primary" />
                    <p className="text-2xl font-bold text-foreground">15</p>
                  </div>
                  <p className="text-sm text-muted-foreground">Wind (mph)</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3 text-primary" />
                    <span>Visibility:</span>
                  </div>
                  <span className="font-medium">10 miles</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Conditions:</span>
                  <span className="font-medium text-success">Clear skies</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Runway Status:</span>
                  <span className="font-medium text-success">All operational</span>
                </div>
              </div>

              <div className="pt-3 border-t">
                <Badge variant="default" className="bg-success text-success-foreground">
                  Optimal flying conditions
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AircraftOperations;