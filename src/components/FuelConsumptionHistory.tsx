import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Fuel, 
  ArrowLeft,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Calendar,
  Download
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const FuelConsumptionHistory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fuelData = {
    aircraft: 'N737ZA',
    model: 'Boeing 737 MAX 8',
    currentLevel: 95,
    avgConsumption: 12.1,
    efficiency: 87,
    totalCapacity: 6875, // gallons
    monthlyData: [
      { month: 'Jan 2024', consumption: 185.3, flights: 15, efficiency: 89 },
      { month: 'Dec 2023', consumption: 192.1, flights: 16, efficiency: 85 },
      { month: 'Nov 2023', consumption: 201.5, flights: 17, efficiency: 83 },
      { month: 'Oct 2023', consumption: 178.9, flights: 14, efficiency: 91 },
      { month: 'Sep 2023', consumption: 195.2, flights: 16, efficiency: 86 },
      { month: 'Aug 2023', consumption: 203.8, flights: 18, efficiency: 82 },
    ],
    weeklyData: [
      { week: 'Week 3', consumption: 48.5, flights: 4, avgPerFlight: 12.1 },
      { week: 'Week 2', consumption: 62.3, flights: 5, avgPerFlight: 12.5 },
      { week: 'Week 1', consumption: 37.2, flights: 3, avgPerFlight: 12.4 },
      { week: 'Previous', consumption: 55.8, flights: 5, avgPerFlight: 11.2 },
    ],
    dailyData: [
      { date: '2024-01-15', consumption: 11.8, flight: 'ZA451', route: 'LAX-SFO', duration: '1h 25m' },
      { date: '2024-01-14', consumption: 12.4, flight: 'ZA203', route: 'SFO-SEA', duration: '2h 10m' },
      { date: '2024-01-13', consumption: 13.1, flight: 'ZA128', route: 'SEA-DEN', duration: '2h 45m' },
      { date: '2024-01-12', consumption: 11.2, flight: 'ZA330', route: 'DEN-PHX', duration: '1h 50m' },
      { date: '2024-01-11', consumption: 12.8, flight: 'ZA451', route: 'PHX-LAX', duration: '1h 15m' },
    ],
    comparisons: [
      { metric: 'Fleet Average', value: 13.2, comparison: -8.3 },
      { metric: 'Industry Standard', value: 14.1, comparison: -14.2 },
      { metric: 'Previous Month', value: 12.8, comparison: -5.5 },
    ]
  };

  const getEfficiencyColor = (efficiency: number) => {
    if (efficiency >= 85) return 'text-success';
    if (efficiency >= 75) return 'text-warning';
    return 'text-destructive';
  };

  const getEfficiencyBadge = (efficiency: number) => {
    if (efficiency >= 85) return 'default';
    if (efficiency >= 75) return 'secondary';
    return 'destructive';
  };

  const getTrendIcon = (value: number) => {
    return value > 0 ? TrendingUp : TrendingDown;
  };

  const getTrendColor = (value: number) => {
    // For fuel consumption, negative is better (less consumption)
    return value < 0 ? 'text-success' : 'text-destructive';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => navigate(`/aircraft/${id}`)}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Aircraft Detail
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Fuel Consumption History</h1>
            <p className="text-muted-foreground">{fuelData.aircraft} • {fuelData.model}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          <Button>
            <Calendar className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Current Fuel Level</p>
                <p className="text-2xl font-bold text-foreground">{fuelData.currentLevel}%</p>
                <p className="text-sm text-muted-foreground">{Math.round(fuelData.totalCapacity * fuelData.currentLevel / 100)} gal</p>
              </div>
              <Fuel className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Consumption</p>
                <p className="text-2xl font-bold text-foreground">{fuelData.avgConsumption}</p>
                <p className="text-sm text-muted-foreground">gal/hr</p>
              </div>
              <BarChart3 className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fuel Efficiency</p>
                <p className={`text-2xl font-bold ${getEfficiencyColor(fuelData.efficiency)}`}>
                  {fuelData.efficiency}%
                </p>
                <p className="text-sm text-success">Above target</p>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Capacity</p>
                <p className="text-2xl font-bold text-foreground">{fuelData.totalCapacity.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">gallons</p>
              </div>
              <Fuel className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Consumption Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Monthly Consumption Trends
              </CardTitle>
              <CardDescription>
                Fuel consumption patterns and efficiency trends over the past 6 months
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {fuelData.monthlyData.map((month, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{month.month}</h4>
                      <p className="text-sm text-muted-foreground">{month.flights} flights</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">{month.consumption} gal/hr</p>
                      <Badge variant={getEfficiencyBadge(month.efficiency)}>
                        {month.efficiency}% efficiency
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Recent Flight Consumption
              </CardTitle>
              <CardDescription>
                Detailed fuel consumption for recent flights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {fuelData.dailyData.map((day, index) => (
                <div key={index} className="p-4 rounded-lg border bg-card/50">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{day.flight}</h4>
                      <p className="text-sm text-muted-foreground">{day.route} • {day.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">{day.consumption} gal/hr</p>
                      <p className="text-sm text-muted-foreground">{day.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Analytics Sidebar */}
        <div className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Weekly Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fuelData.weeklyData.map((week, index) => (
                <div key={index} className="p-3 rounded-lg border bg-card/50">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground">{week.week}</span>
                    <span className="text-sm font-bold">{week.consumption} gal/hr</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{week.flights} flights</span>
                    <span>{week.avgPerFlight} avg/flight</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Performance Comparison
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fuelData.comparisons.map((comparison, index) => {
                const TrendIcon = getTrendIcon(comparison.comparison);
                return (
                  <div key={index} className="p-3 rounded-lg border bg-card/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground">{comparison.metric}</span>
                      <span className="text-sm font-bold">{comparison.value} gal/hr</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendIcon className={`h-3 w-3 ${getTrendColor(comparison.comparison)}`} />
                      <span className={`text-sm font-medium ${getTrendColor(comparison.comparison)}`}>
                        {comparison.comparison > 0 ? '+' : ''}{comparison.comparison}%
                      </span>
                      <span className="text-sm text-muted-foreground">vs current</span>
                    </div>
                  </div>
                );
              })}

              <Separator />

              <div className="text-center">
                <Badge variant="default" className="bg-success text-success-foreground">
                  Above Industry Average
                </Badge>
                <p className="text-sm text-muted-foreground mt-2">
                  This aircraft performs 14.2% better than industry standards
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Fuel className="h-5 w-5 text-primary" />
                Fuel Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                <p className="text-sm font-medium text-success">Excellent Performance</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Fuel efficiency is above target. Continue current maintenance schedule.
                </p>
              </div>
              
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <p className="text-sm font-medium text-primary">Monitor Route Efficiency</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Consider optimizing routes for longer flights to improve efficiency.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FuelConsumptionHistory;