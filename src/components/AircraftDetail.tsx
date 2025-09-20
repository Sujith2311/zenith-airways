import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Plane, 
  Fuel, 
  Wrench, 
  ArrowLeft,
  MapPin,
  Clock,
  AlertTriangle,
  CheckCircle,
  Gauge,
  Battery,
  Thermometer,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const AircraftDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock aircraft data - in real app this would come from API
  const aircraft = {
    id: 'N737ZA',
    model: 'Boeing 737 MAX 8',
    status: 'ready',
    location: 'Gate A12',
    fuelLevel: 95,
    engineCondition: 94,
    systemsStatus: 98,
    lastMaintenance: '5 days ago',
    nextFlight: 'ZA451 to LAX - 14:30',
    issues: [],
    specifications: {
      manufacturer: 'Boeing',
      firstFlight: '2019-03-15',
      seatingCapacity: 189,
      maxRange: '3,550 nm',
      maxCruiseSpeed: '516 kts',
      serviceEntry: '2019-04-01'
    },
    maintenanceHistory: [
      { date: '2024-01-10', type: 'Routine Inspection', status: 'completed', technician: 'Mike Johnson' },
      { date: '2024-01-05', type: 'Engine Check', status: 'completed', technician: 'Sarah Davis' },
      { date: '2023-12-28', type: 'Avionics Update', status: 'completed', technician: 'Tom Wilson' },
    ],
    fuelHistory: [
      { date: '2024-01-15', level: 95, consumption: 12.3 },
      { date: '2024-01-14', level: 89, consumption: 11.8 },
      { date: '2024-01-13', level: 92, consumption: 12.1 },
      { date: '2024-01-12', level: 87, consumption: 13.2 },
    ],
    flightHistory: [
      { flight: 'ZA203', route: 'SFO-LAX', date: '2024-01-14', duration: '1h 25m', status: 'completed' },
      { flight: 'ZA128', route: 'LAX-DEN', date: '2024-01-13', duration: '2h 45m', status: 'completed' },
      { flight: 'ZA451', route: 'DEN-SEA', date: '2024-01-12', duration: '2h 15m', status: 'completed' },
    ],
    systemsChecklist: [
      { system: 'Navigation', status: 'operational', lastCheck: '2024-01-15' },
      { system: 'Communication', status: 'operational', lastCheck: '2024-01-15' },
      { system: 'Hydraulics', status: 'operational', lastCheck: '2024-01-14' },
      { system: 'Electrical', status: 'operational', lastCheck: '2024-01-14' },
      { system: 'Landing Gear', status: 'operational', lastCheck: '2024-01-13' },
      { system: 'Cabin Pressure', status: 'operational', lastCheck: '2024-01-13' },
    ]
  };

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

  const getSystemStatusIcon = (status: string) => {
    return status === 'operational' ? CheckCircle : AlertTriangle;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => navigate('/aircraft')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Aircraft Operations
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{aircraft.id}</h1>
            <p className="text-muted-foreground">{aircraft.model} • Currently at {aircraft.location}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Wrench className="mr-2 h-4 w-4" />
            Schedule Maintenance
          </Button>
          <Button>
            <Activity className="mr-2 h-4 w-4" />
            View Live Data
          </Button>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Aircraft Status</p>
                <Badge className={getStatusColor(aircraft.status)} variant="secondary">
                  {aircraft.status}
                </Badge>
                <p className="text-sm text-muted-foreground mt-1">Ready for departure</p>
              </div>
              <Plane className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fuel Level</p>
                <p className="text-2xl font-bold text-foreground">{aircraft.fuelLevel}%</p>
                <p className="text-sm text-success">Full capacity</p>
              </div>
              <Fuel className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Engine Condition</p>
                <p className={`text-2xl font-bold ${getConditionColor(aircraft.engineCondition)}`}>
                  {aircraft.engineCondition}%
                </p>
                <p className="text-sm text-success">Excellent</p>
              </div>
              <Gauge className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Systems Status</p>
                <p className={`text-2xl font-bold ${getConditionColor(aircraft.systemsStatus)}`}>
                  {aircraft.systemsStatus}%
                </p>
                <p className="text-sm text-success">All systems go</p>
              </div>
              <Battery className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Aircraft Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-primary" />
                Aircraft Specifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Basic Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Aircraft ID:</span>
                        <span className="font-medium">{aircraft.id}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Model:</span>
                        <span className="font-medium">{aircraft.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Manufacturer:</span>
                        <span className="font-medium">{aircraft.specifications.manufacturer}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service Entry:</span>
                        <span className="font-medium">{aircraft.specifications.serviceEntry}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Performance</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Seating Capacity:</span>
                        <span className="font-medium">{aircraft.specifications.seatingCapacity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Max Range:</span>
                        <span className="font-medium">{aircraft.specifications.maxRange}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Max Cruise Speed:</span>
                        <span className="font-medium">{aircraft.specifications.maxCruiseSpeed}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">First Flight:</span>
                        <span className="font-medium">{aircraft.specifications.firstFlight}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-foreground mb-3">Systems Checklist</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {aircraft.systemsChecklist.map((system, index) => {
                    const StatusIcon = getSystemStatusIcon(system.status);
                    return (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                        <div className="flex items-center gap-2">
                          <StatusIcon className={`h-4 w-4 ${system.status === 'operational' ? 'text-success' : 'text-destructive'}`} />
                          <span className="font-medium">{system.system}</span>
                        </div>
                        <div className="text-right text-sm">
                          <p className="text-muted-foreground">Last check:</p>
                          <p className="font-medium">{system.lastCheck}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-foreground mb-3">Recent Flight History</h4>
                <div className="space-y-3">
                  {aircraft.flightHistory.map((flight, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{flight.flight}</p>
                          <p className="text-sm text-muted-foreground">{flight.route}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{flight.date}</p>
                        <p className="text-sm text-muted-foreground">{flight.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Maintenance & Fuel Analytics */}
        <div className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                Maintenance History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aircraft.maintenanceHistory.map((maintenance, index) => (
                  <div key={index} className="p-3 rounded-lg border bg-card/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{maintenance.type}</span>
                      <Badge variant="default" className="bg-success text-success-foreground">
                        {maintenance.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Date: {maintenance.date}</p>
                      <p>Technician: {maintenance.technician}</p>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full" size="sm">
                  <Wrench className="mr-2 h-4 w-4" />
                  View Full Maintenance Log
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-5 w-5 text-primary" />
                Fuel Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{aircraft.fuelLevel}%</p>
                  <p className="text-sm text-muted-foreground">Current fuel level</p>
                  <Progress value={aircraft.fuelLevel} className="h-2 mt-2" />
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <h5 className="font-medium text-sm">Recent Fuel Data</h5>
                  {aircraft.fuelHistory.slice(0, 3).map((entry, index) => (
                    <div key={index} className="flex items-center justify-between text-sm p-2 rounded border bg-card/50">
                      <span className="text-muted-foreground">{entry.date}</span>
                      <div className="text-right">
                        <p className="font-medium">{entry.level}%</p>
                        <p className="text-xs text-muted-foreground">{entry.consumption} gal/hr</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full" size="sm">
                  View Fuel Consumption History
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Next Flight
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-2">
                <p className="font-medium text-foreground">{aircraft.nextFlight}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Currently at {aircraft.location}</span>
                </div>
                <Badge variant="default" className="bg-success text-success-foreground">
                  Ready for departure
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AircraftDetail;