import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  CheckCircle, 
  ArrowLeft,
  Calendar,
  Moon,
  Activity,
  Badge as BadgeIcon
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const CrewProfileDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock crew data - in real app this would come from API
  const crewMember = {
    id: 1,
    name: 'Captain Sarah Mitchell',
    role: 'Pilot',
    employeeId: 'ZA-P-001',
    licenseNumber: 'ATP-2019-0847',
    experience: '12 years',
    totalFlightHours: 8450,
    dutyTime: '08:30',
    location: 'Terminal A - Gate 15',
    status: 'active',
    sleepScore: 85,
    fatigueScore: 23,
    weeklyHours: 38.5,
    maxHours: 60,
    nextFlight: 'ZA451 - 14:30',
    violations: 0,
    certifications: ['ATP', 'Type Rating - B737', 'Type Rating - B777', 'IFR'],
    recentFlights: [
      { flight: 'ZA451', route: 'LAX-SFO', date: '2024-01-15', duration: '1h 25m', status: 'completed' },
      { flight: 'ZA203', route: 'SFO-SEA', date: '2024-01-14', duration: '2h 10m', status: 'completed' },
      { flight: 'ZA128', route: 'SEA-DEN', date: '2024-01-13', duration: '2h 45m', status: 'completed' },
    ],
    fatigueHistory: [
      { date: '2024-01-15', score: 23 },
      { date: '2024-01-14', score: 31 },
      { date: '2024-01-13', score: 18 },
      { date: '2024-01-12', score: 42 },
      { date: '2024-01-11', score: 28 },
    ],
    sleepHistory: [
      { date: '2024-01-15', score: 85, hours: 7.5 },
      { date: '2024-01-14', score: 78, hours: 6.8 },
      { date: '2024-01-13', score: 92, hours: 8.2 },
      { date: '2024-01-12', score: 65, hours: 5.9 },
      { date: '2024-01-11', score: 88, hours: 7.8 },
    ]
  };

  const getFatigueLevel = (score: number) => {
    if (score < 30) return { level: 'Low', color: 'text-success' };
    if (score < 60) return { level: 'Moderate', color: 'text-warning' };
    return { level: 'High', color: 'text-destructive' };
  };

  const fatigue = getFatigueLevel(crewMember.fatigueScore);
  const dutyProgress = (crewMember.weeklyHours / crewMember.maxHours) * 100;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => navigate('/crew')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Crew Hub
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{crewMember.name}</h1>
            <p className="text-muted-foreground">{crewMember.role} • Employee ID: {crewMember.employeeId}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Edit Schedule
          </Button>
          <Button>
            <BadgeIcon className="mr-2 h-4 w-4" />
            Update Status
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Experience</p>
                <p className="text-2xl font-bold text-foreground">{crewMember.experience}</p>
                <p className="text-sm text-muted-foreground">{crewMember.totalFlightHours} flight hours</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Sleep Score</p>
                <p className="text-2xl font-bold text-primary">{crewMember.sleepScore}/100</p>
                <p className="text-sm text-success">Above average</p>
              </div>
              <Moon className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Fatigue Level</p>
                <p className={`text-2xl font-bold ${fatigue.color}`}>{fatigue.level}</p>
                <p className="text-sm text-muted-foreground">Score: {crewMember.fatigueScore}</p>
              </div>
              <Activity className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="mission-control-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Weekly Hours</p>
                <p className="text-2xl font-bold text-foreground">{crewMember.weeklyHours}h</p>
                <p className="text-sm text-muted-foreground">of {crewMember.maxHours}h limit</p>
              </div>
              <Clock className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Crew Details */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Crew Member Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Personal Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Employee ID:</span>
                        <span className="font-medium">{crewMember.employeeId}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">License Number:</span>
                        <span className="font-medium">{crewMember.licenseNumber}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experience:</span>
                        <span className="font-medium">{crewMember.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Flight Hours:</span>
                        <span className="font-medium">{crewMember.totalFlightHours}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Current Status</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{crewMember.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>On duty since {crewMember.dutyTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="default" className="bg-success text-success-foreground">
                          {crewMember.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {crewMember.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline">{cert}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-2">Duty Hours</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Weekly Hours:</span>
                        <span className="font-medium">{crewMember.weeklyHours}h / {crewMember.maxHours}h</span>
                      </div>
                      <Progress value={dutyProgress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {(crewMember.maxHours - crewMember.weeklyHours).toFixed(1)}h remaining this week
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-foreground mb-3">Recent Flight History</h4>
                <div className="space-y-3">
                  {crewMember.recentFlights.map((flight, index) => (
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

        {/* Analytics */}
        <div className="space-y-6">
          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Fatigue Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{crewMember.fatigueScore}</p>
                  <p className="text-sm text-muted-foreground">Current fatigue score</p>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-sm">5-Day History</h5>
                  {crewMember.fatigueHistory.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{entry.date}</span>
                      <span className={`font-medium ${getFatigueLevel(entry.score).color}`}>
                        {entry.score}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mission-control-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5 text-primary" />
                Sleep Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{crewMember.sleepScore}/100</p>
                  <p className="text-sm text-muted-foreground">Current sleep score</p>
                </div>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-sm">Recent Sleep Data</h5>
                  {crewMember.sleepHistory.slice(0, 3).map((entry, index) => (
                    <div key={index} className="flex items-center justify-between text-sm p-2 rounded border bg-card/50">
                      <span className="text-muted-foreground">{entry.date}</span>
                      <div className="text-right">
                        <p className="font-medium">{entry.score}/100</p>
                        <p className="text-xs text-muted-foreground">{entry.hours}h sleep</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full" size="sm">
                  View Detailed Sleep Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CrewProfileDetail;