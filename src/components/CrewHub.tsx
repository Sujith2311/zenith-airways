import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  Minus,
  TrendingDown,
  TrendingUp,
  BarChart3,
  Filter
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

const CrewHub = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const crewMembers = [
    {
      id: 1,
      name: 'Captain Sarah Mitchell',
      role: 'Pilot',
      dutyTime: '08:30',
      location: 'Terminal A - Gate 15',
      status: 'active',
      sleepScore: 85,
      fatigueScore: 23,
      weeklyHours: 38.5,
      maxHours: 60,
      nextFlight: 'ZA451 - 14:30',
      violations: 0
    },
    {
      id: 2,
      name: 'First Officer James Chen',
      role: 'Co-Pilot',
      dutyTime: '06:00',
      location: 'Flight ZA203 - Airborne',
      status: 'flying',
      sleepScore: 72,
      fatigueScore: 41,
      weeklyHours: 45.2,
      maxHours: 60,
      nextFlight: 'ZA330 - 18:45',
      violations: 1
    },
    {
      id: 3,
      name: 'Flight Attendant Emma Rodriguez',
      role: 'Cabin Crew',
      dutyTime: '05:45',
      location: 'Rest Area B',
      status: 'rest',
      sleepScore: 91,
      fatigueScore: 18,
      weeklyHours: 42.8,
      maxHours: 55,
      nextFlight: 'ZA455 - 16:20',
      violations: 0
    },
    {
      id: 4,
      name: 'Captain David Park',
      role: 'Pilot',
      dutyTime: '11:20',
      location: 'Terminal C - Gate 8',
      status: 'alert',
      sleepScore: 45,
      fatigueScore: 67,
      weeklyHours: 52.1,
      maxHours: 60,
      nextFlight: 'ZA128 - 13:15',
      violations: 2
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'flying': return 'bg-primary text-primary-foreground';
      case 'rest': return 'bg-muted text-muted-foreground';
      case 'alert': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getFatigueLevel = (score: number) => {
    if (score < 30) return { level: 'Low', color: 'text-success' };
    if (score < 60) return { level: 'Moderate', color: 'text-warning' };
    return { level: 'High', color: 'text-destructive' };
  };

  const filteredCrew = crewMembers.filter(member => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'violations') return member.violations > 0;
    if (selectedFilter === 'fatigue') return member.fatigueScore > 50;
    return member.status === selectedFilter;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Crew Management Hub</h1>
          <p className="text-muted-foreground">Monitor crew status, fatigue levels, and duty compliance</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <BarChart3 className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button>
            <Users className="mr-2 h-4 w-4" />
            Schedule Crew
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Crew</p>
                <p className="text-3xl font-bold text-foreground">340</p>
                <div className="flex items-center gap-1 text-sm text-success">
                  <TrendingUp className="h-3 w-3" />
                  +12 from yesterday
                </div>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fatigue Violations</p>
                <p className="text-3xl font-bold text-destructive">3</p>
                <div className="flex items-center gap-1 text-sm text-destructive">
                  <TrendingDown className="h-3 w-3" />
                  Requires attention
                </div>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Sleep Score</p>
                <p className="text-3xl font-bold text-foreground">78</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Minus className="h-3 w-3" />
                  Within normal range
                </div>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Duty Compliance</p>
                <p className="text-3xl font-bold text-success">94%</p>
                <div className="flex items-center gap-1 text-sm text-success">
                  <TrendingUp className="h-3 w-3" />
                  Above target
                </div>
              </div>
              <Clock className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Crew Directory */}
        <div className="lg:col-span-2">
          <Card className="mission-control-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Crew Directory & Status
                  </CardTitle>
                  <CardDescription>
                    Real-time crew monitoring with fatigue and duty compliance tracking
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={selectedFilter === 'all' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedFilter('all')}
                  >
                    All
                  </Button>
                  <Button 
                    variant={selectedFilter === 'violations' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedFilter('violations')}
                  >
                    <Filter className="h-3 w-3 mr-1" />
                    Violations
                  </Button>
                  <Button 
                    variant={selectedFilter === 'alert' ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => setSelectedFilter('alert')}
                  >
                    Alerts
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {filteredCrew.map((member) => {
                const fatigue = getFatigueLevel(member.fatigueScore);
                const dutyProgress = (member.weeklyHours / member.maxHours) * 100;
                
                return (
                  <div key={member.id} className="p-4 rounded-lg border bg-card/50 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(member.status)} variant="secondary">
                          {member.status}
                        </Badge>
                        {member.violations > 0 && (
                          <Badge variant="destructive">{member.violations} violations</Badge>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Duty Time:</span> {member.dutyTime}
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">Location:</span> {member.location}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>Sleep Score:</span>
                          <span className="font-bold text-primary">{member.sleepScore}/100</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span>Fatigue Level:</span>
                          <span className={`font-bold ${fatigue.color}`}>{fatigue.level}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span>Weekly Hours:</span>
                          <span className="font-bold">{member.weeklyHours}h / {member.maxHours}h</span>
                        </div>
                        <Progress value={dutyProgress} className="h-2" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <p className="text-sm text-muted-foreground">
                        Next Flight: <span className="font-medium text-foreground">{member.nextFlight}</span>
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">View Details</Button>
                        <Button size="sm">Manage Schedule</Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Fatigue Analysis */}
        <div className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Fatigue Analysis
              </CardTitle>
              <CardDescription>
                System-wide crew fatigue monitoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Low Risk (0-30)</span>
                  <span className="text-sm font-bold text-success">67%</span>
                </div>
                <Progress value={67} className="h-2 bg-muted" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Moderate Risk (30-60)</span>
                  <span className="text-sm font-bold text-warning">28%</span>
                </div>
                <Progress value={28} className="h-2" />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">High Risk (60+)</span>
                  <span className="text-sm font-bold text-destructive">5%</span>
                </div>
                <Progress value={5} className="h-2" />
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-medium">Recommendations</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-3 w-3 text-warning mt-0.5 flex-shrink-0" />
                    Review Captain David Park's schedule
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-success mt-0.5 flex-shrink-0" />
                    Overall fatigue levels within acceptable range
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Duty Hours Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center space-y-2">
                <p className="text-3xl font-bold text-foreground">42.3h</p>
                <p className="text-sm text-muted-foreground">Average weekly hours</p>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Pilots</span>
                  <span className="font-medium">45.2h avg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Co-Pilots</span>
                  <span className="font-medium">41.8h avg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Cabin Crew</span>
                  <span className="font-medium">39.7h avg</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CrewHub;