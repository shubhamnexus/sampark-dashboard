"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  ComposedChart,
} from "recharts"
import {
  Search,
  Filter,
  Download,
  Home,
  BarChart2,
  Users,
  Activity,
  FileText,
  CheckSquare,
  Box,
  Tv,
  User,
  School,
  List,
  Flag,
} from "lucide-react"

// Sample data based on the provided requirements
const programData = {
  overview: {
    title: "Uttarakhand Program",
    duration: "April 2024 - February 2025",
    totalSchoolsInState: 15620,
    baselineSchoolCount: 12800,
    schoolsImpacted: 12538,
    studentsInState: 328450,
    studentsImpacted: 268230,
    kitsDistributed: 54891,
    samparkTVs: 3337,
    teachersTrained: 83171,
    teachersToTrain: 100000,
    sparksAllocated: 1000,
    activeYears: 9,
    enrollmentCount: 268230,
    enrollmentGoal: 290000,
    enrollmentTrend: [
      { month: "Apr", actual: 215400, planned: 224000 },
      { month: "May", actual: 225600, planned: 232000 },
      { month: "Jun", actual: 231200, planned: 240000 },
      { month: "Jul", actual: 238400, planned: 248000 },
      { month: "Aug", actual: 245600, planned: 256000 },
      { month: "Sep", actual: 250300, planned: 264000 },
      { month: "Oct", actual: 256400, planned: 272000 },
      { month: "Nov", actual: 261200, planned: 280000 },
      { month: "Dec", actual: 264800, planned: 284000 },
      { month: "Jan", actual: 266900, planned: 288000 },
      { month: "Feb", actual: 268230, planned: 290000 },
    ],
    programExpensesLakhs: 824.56,
    annualBudgetLakhs: 1200,
    expensesByCategory: [
      { category: "Teacher Training", amount: 320.45, percentage: 38.9 },
      { category: "Content Development", amount: 205.67, percentage: 24.9 },
      { category: "Infrastructure", amount: 156.78, percentage: 19.0 },
      { category: "Operations", amount: 98.34, percentage: 11.9 },
      { category: "Monitoring", amount: 43.32, percentage: 5.3 },
    ],
    expensesTrend: [
      { month: "Apr", amount: 68.5, percentage: 5.7 },
      { month: "May", amount: 142.3, percentage: 11.9 },
      { month: "Jun", amount: 221.6, percentage: 18.5 },
      { month: "Jul", amount: 298.2, percentage: 24.9 },
      { month: "Aug", amount: 376.5, percentage: 31.4 },
      { month: "Sep", amount: 455.8, percentage: 38.0 },
      { month: "Oct", amount: 534.2, percentage: 44.5 },
      { month: "Nov", amount: 612.8, percentage: 51.1 },
      { month: "Dec", amount: 691.3, percentage: 57.6 },
      { month: "Jan", amount: 758.9, percentage: 63.2 },
      { month: "Feb", amount: 824.56, percentage: 68.7 },
    ],
  },
  regions: ["Uttarakhand", "Haryana", "Rajasthan", "Maharashtra"],
  districts: [
    { state: "Uttarakhand", name: "Almora", schoolCount: 1306, studentCount: 78420, teacherCount: 4250 },
    { state: "Uttarakhand", name: "Dehradun", schoolCount: 1120, studentCount: 68250, teacherCount: 3860 },
    { state: "Uttarakhand", name: "Haridwar", schoolCount: 1050, studentCount: 65780, teacherCount: 3520 },
    { state: "Uttarakhand", name: "Nainital", schoolCount: 980, studentCount: 58780, teacherCount: 3120 },
  ],
  blocks: ["Hawalbag", "Lamgarah", "Dhauladevi", "Tarikhet", "Chakrata", "Vikasnagar", "Doiwala"],
  periods: ["YTD", "Q1", "Q2", "Q3", "Q4", "Monthly", "Weekly", "Custom"],

  assetManagement: {
    samparkTVDistribution: {
      total: 3337,
      byDistrict: [
        { district: "Almora", count: 1100, installed: 1078, synced: 764 },
        { district: "Dehradun", count: 890, installed: 876, synced: 642 },
        { district: "Haridwar", count: 740, installed: 732, synced: 521 },
        { district: "Nainital", count: 607, installed: 598, synced: 435 },
      ],
      installTrend: [
        { month: "Apr", installed: 2950, synced: 2100 },
        { month: "May", installed: 3020, synced: 2150 },
        { month: "Jun", installed: 3080, synced: 2200 },
        { month: "Jul", installed: 3120, synced: 2240 },
        { month: "Aug", installed: 3180, synced: 2280 },
        { month: "Sep", installed: 3210, synced: 2320 },
        { month: "Oct", installed: 3250, synced: 2350 },
        { month: "Nov", installed: 3280, synced: 2380 },
        { month: "Dec", installed: 3300, synced: 2400 },
        { month: "Jan", installed: 3320, synced: 2420 },
        { month: "Feb", installed: 3337, synced: 2440 },
      ],
      usageTrend: [
        { week: "W1", hours: 450 },
        { week: "W2", hours: 480 },
        { week: "W3", hours: 460 },
        { week: "W4", hours: 490 },
        { week: "W5", hours: 510 },
        { week: "W6", hours: 490 },
        { week: "W7", hours: 520 },
        { week: "W8", hours: 540 },
      ],
    },
    sssKitsDistribution: {
      total: 54891,
      byDistrict: [
        { district: "Almora", count: 15680, registered: 14250 },
        { district: "Dehradun", count: 14560, registered: 13200 },
        { district: "Haridwar", count: 13450, registered: 12100 },
        { district: "Nainital", count: 11201, registered: 10450 },
      ],
      usageTrend: [
        { week: "W1", sessions: 2450 },
        { week: "W2", sessions: 2580 },
        { week: "W3", sessions: 2620 },
        { week: "W4", sessions: 2690 },
        { week: "W5", sessions: 2710 },
        { week: "W6", sessions: 2780 },
        { week: "W7", sessions: 2820 },
        { week: "W8", sessions: 2870 },
      ],
    },
  },

  programEvaluation: {
    teacherTraining: {
      overall: 83.17, // percentage of target
      byDistrict: [
        { district: "Almora", count: 23450, target: 28000, percentage: 83.75 },
        { district: "Dehradun", count: 21650, target: 25000, percentage: 86.6 },
        { district: "Haridwar", count: 19250, target: 23000, percentage: 83.7 },
        { district: "Nainital", count: 18821, target: 24000, percentage: 78.42 },
      ],
      byBlock: [
        { district: "Almora", block: "Hawalbag", count: 6840, target: 7800, percentage: 87.69 },
        { district: "Almora", block: "Lamgarah", count: 5920, target: 7200, percentage: 82.22 },
        { district: "Almora", block: "Dhauladevi", count: 5420, target: 6500, percentage: 83.38 },
        { district: "Almora", block: "Tarikhet", count: 5270, target: 6500, percentage: 81.08 },
      ],
      trend: [
        { month: "Apr", count: 58200 },
        { month: "May", count: 61450 },
        { month: "Jun", count: 65280 },
        { month: "Jul", count: 68940 },
        { month: "Aug", count: 72100 },
        { month: "Sep", count: 75230 },
        { month: "Oct", count: 78100 },
        { month: "Nov", count: 80250 },
        { month: "Dec", count: 81620 },
        { month: "Jan", count: 82540 },
        { month: "Feb", count: 83171 },
      ],
    },
    sparkAllocation: {
      total: 1000,
      active: 856,
      resourceUsage: [
        { district: "Almora", sparks: 290, resourcesUsed: 12450, schoolsVisited: 980 },
        { district: "Dehradun", sparks: 245, resourcesUsed: 10240, schoolsVisited: 845 },
        { district: "Haridwar", sparks: 220, resourcesUsed: 8950, schoolsVisited: 760 },
        { district: "Nainital", sparks: 195, resourcesUsed: 7840, schoolsVisited: 680 },
      ],
    },
    topPerformers: {
      teachers: [
        { name: "Rajesh Kumar", school: "P.S. MAIGARIDHANLEKH", block: "Hawalbag", district: "Almora", score: 98 },
        { name: "Sunita Devi", school: "P.S. FALSEEMA NEW", block: "Hawalbag", district: "Almora", score: 96 },
        { name: "Anil Joshi", school: "P.S. BIRAURA", block: "Hawalbag", district: "Almora", score: 95 },
        { name: "Pankaj Singh", school: "J.H.S. NATHUAKHAN", block: "Lamgarah", district: "Almora", score: 94 },
        { name: "Meena Bisht", school: "P.S. TOLI", block: "Dhauladevi", district: "Almora", score: 92 },
        { name: "Suman Negi", school: "P.S. DHAMAS", block: "Dehradun", district: "Dehradun", score: 91 },
        { name: "Deepak Rawat", school: "P.S. RANIPOKHARI", block: "Dehradun", district: "Dehradun", score: 90 },
        { name: "Kavita Sharma", school: "P.S. RISHIKESH", block: "Haridwar", district: "Haridwar", score: 89 },
        { name: "Mohan Bhatt", school: "P.S. BHIMTAL", block: "Nainital", district: "Nainital", score: 88 },
        { name: "Neha Joshi", school: "P.S. HALDWANI", block: "Nainital", district: "Nainital", score: 87 },
      ],
      schools: [
        { name: "P.S. MAIGARIDHANLEKH", block: "Hawalbag", district: "Almora", rating: 4.9, utilization: 98 },
        { name: "P.S. FALSEEMA NEW", block: "Hawalbag", district: "Almora", rating: 4.85, utilization: 97 },
        { name: "P.S. BIRAURA", block: "Hawalbag", district: "Almora", rating: 4.82, utilization: 96 },
        { name: "J.H.S. NATHUAKHAN", block: "Lamgarah", district: "Almora", rating: 4.75, utilization: 94 },
        { name: "P.S. TOLI", block: "Dhauladevi", district: "Almora", rating: 4.7, utilization: 93 },
        { name: "P.S. DHAMAS", block: "Dehradun", district: "Dehradun", rating: 4.68, utilization: 92 },
        { name: "P.S. RANIPOKHARI", block: "Dehradun", district: "Dehradun", rating: 4.65, utilization: 91 },
        { name: "P.S. RISHIKESH", block: "Haridwar", district: "Haridwar", rating: 4.62, utilization: 90 },
        { name: "P.S. BHIMTAL", block: "Nainital", district: "Nainital", rating: 4.6, utilization: 89 },
        { name: "P.S. HALDWANI", block: "Nainital", district: "Nainital", rating: 4.58, utilization: 88 },
      ],
    },
  },

  schoolTeacherImpact: {
    schoolsWithTrainedTeachers: {
      tillDate: { count: 10088, total: 12538, percentage: 80.46 },
      thisYear: { count: 2120, total: 12538, percentage: 16.91 },
      byDistrict: [
        { district: "Almora", count: 1088, total: 1306, percentage: 83.31 },
        { district: "Dehradun", count: 965, total: 1120, percentage: 86.16 },
        { district: "Haridwar", count: 875, total: 1050, percentage: 83.33 },
        { district: "Nainital", count: 789, total: 980, percentage: 80.51 },
      ],
    },
    lessonsCompleted: {
      overall: { fiveOrMore: 4825, total: 12538, percentage: 38.48 },
      byGradeRange: [
        { range: "Class 1-5", fiveOrMore: 3240, total: 8100, percentage: 40 },
        { range: "Class 6-8", fiveOrMore: 1585, total: 4438, percentage: 35.71 },
      ],
      byDistrict: [
        { district: "Almora", class1to5: 40, class6to8: 25 },
        { district: "Dehradun", class1to5: 38, class6to8: 27 },
        { district: "Haridwar", class1to5: 42, class6to8: 23 },
        { district: "Nainital", class1to5: 36, class6to8: 26 },
      ],
    },
    teacherFeedback: {
      overall: 4.63,
      smsCount: 8420,
      byDistrict: [
        { district: "Almora", rating: 4.63, smsCount: 2420, reviewsBeforeClass: 24.49 },
        { district: "Dehradun", rating: 4.58, smsCount: 2250, reviewsBeforeClass: 22.32 },
        { district: "Haridwar", rating: 4.52, smsCount: 2050, reviewsBeforeClass: 20.15 },
        { district: "Nainital", rating: 4.55, smsCount: 1700, reviewsBeforeClass: 21.84 },
      ],
      reviewsBeforeClass: { count: 7890, total: 83171, percentage: 9.48 },
      trend: [
        { month: "Apr", rating: 4.2, smsCount: 540 },
        { month: "May", rating: 4.3, smsCount: 620 },
        { month: "Jun", rating: 4.35, smsCount: 680 },
        { month: "Jul", rating: 4.4, smsCount: 720 },
        { month: "Aug", rating: 4.5, smsCount: 780 },
        { month: "Sep", rating: 4.55, smsCount: 820 },
        { month: "Oct", rating: 4.6, smsCount: 870 },
        { month: "Nov", rating: 4.6, smsCount: 920 },
        { month: "Dec", rating: 4.58, smsCount: 840 },
        { month: "Jan", rating: 4.61, smsCount: 780 },
        { month: "Feb", rating: 4.63, smsCount: 850 },
      ],
    },
    resourcesUsed: {
      total: 36540,
      bySubject: [
        { subject: "English", count: 12450, percentage: 34.1 },
        { subject: "Math", count: 14280, percentage: 39.1 },
        { subject: "Science", count: 7850, percentage: 21.5 },
        { subject: "Others", count: 1960, percentage: 5.3 },
      ],
      byGrade: [
        { grade: "Grade 1", count: 5840, percentage: 16 },
        { grade: "Grade 2", count: 5240, percentage: 14.3 },
        { grade: "Grade 3", count: 6120, percentage: 16.7 },
        { grade: "Grade 4", count: 6350, percentage: 17.4 },
        { grade: "Grade 5", count: 5980, percentage: 16.4 },
        { grade: "Grade 6", count: 2760, percentage: 7.6 },
        { grade: "Grade 7", count: 2250, percentage: 6.2 },
        { grade: "Grade 8", count: 2000, percentage: 5.4 },
      ],
      trend: [
        { month: "Apr", count: 2150 },
        { month: "May", count: 2620 },
        { month: "Jun", count: 2840 },
        { month: "Jul", count: 3150 },
        { month: "Aug", count: 3450 },
        { month: "Sep", count: 3680 },
        { month: "Oct", count: 3950 },
        { month: "Nov", count: 4120 },
        { month: "Dec", count: 3850 },
        { month: "Jan", count: 3280 },
        { month: "Feb", count: 3450 },
      ],
    },
  },

  monitoringGovernance: {
    sparkMonitoring: {
      schoolVisitsTotal: 12650,
      meetingsHeld: 1240,
      visitAssessments: 8750,
      visitABC: 4250,
      gpsTrackedVisits: 7850,
      visitsByMonth: [
        { month: "Apr", count: 850, assessments: 580, abc: 270 },
        { month: "May", count: 920, assessments: 620, abc: 300 },
        { month: "Jun", count: 1050, assessments: 710, abc: 340 },
        { month: "Jul", count: 1120, assessments: 760, abc: 360 },
        { month: "Aug", count: 1180, assessments: 800, abc: 380 },
        { month: "Sep", count: 1240, assessments: 840, abc: 400 },
        { month: "Oct", count: 1320, assessments: 890, abc: 420 },
        { month: "Nov", count: 1250, assessments: 850, abc: 400 },
        { month: "Dec", count: 1180, assessments: 800, abc: 380 },
        { month: "Jan", count: 1270, assessments: 860, abc: 410 },
        { month: "Feb", count: 1270, assessments: 860, abc: 410 },
      ],
      visitsByDistrict: [
        { district: "Almora", visits: 3250, meetings: 320, assessments: 2240, abc: 1080, gps: 2020 },
        { district: "Dehradun", visits: 3450, meetings: 340, assessments: 2380, abc: 1150, gps: 2140 },
        { district: "Haridwar", visits: 3150, meetings: 310, assessments: 2170, abc: 1050, gps: 1950 },
        { district: "Nainital", visits: 2800, meetings: 270, assessments: 1960, abc: 970, gps: 1740 },
      ],
      visitsByWeek: [
        { week: "W1 Feb", visits: 310, assessments: 210, abc: 100 },
        { week: "W2 Feb", visits: 320, assessments: 215, abc: 105 },
        { week: "W3 Feb", visits: 315, assessments: 210, abc: 105 },
        { week: "W4 Feb", visits: 325, assessments: 220, abc: 105 },
      ],
    },
    governance: {
      schoolAudits: { count: 1236, total: 12538, percentage: 9.86 },
      stateAdvocacyMeetings: 48,
      auditsByQuarter: [
        { quarter: "Q1", count: 280, percentage: 2.23 },
        { quarter: "Q2", count: 310, percentage: 2.47 },
        { quarter: "Q3", count: 342, percentage: 2.73 },
        { quarter: "Q4", count: 304, percentage: 2.42 },
      ],
      meetingsByQuarter: [
        { quarter: "Q1", count: 12 },
        { quarter: "Q2", count: 13 },
        { quarter: "Q3", count: 12 },
        { quarter: "Q4", count: 11 },
      ],
      cumulativeProgress: [
        { month: "Apr", audits: 80, meetings: 4 },
        { month: "May", audits: 180, meetings: 8 },
        { month: "Jun", audits: 280, meetings: 12 },
        { month: "Jul", audits: 380, meetings: 16 },
        { month: "Aug", audits: 490, meetings: 21 },
        { month: "Sep", audits: 590, meetings: 25 },
        { month: "Oct", audits: 700, meetings: 29 },
        { month: "Nov", audits: 820, meetings: 33 },
        { month: "Dec", audits: 932, meetings: 37 },
        { month: "Jan", audits: 1042, meetings: 41 },
        { month: "Feb", audits: 1236, meetings: 48 },
      ],
    },
  },

  sparkData: {
    designated: {
      total: 412,
      ispark: { total: 412, schoolVisits: 6420 },
      visitsByMonth: [
        { month: "Apr", visits: 480 },
        { month: "May", visits: 510 },
        { month: "Jun", visits: 540 },
        { month: "Jul", visits: 570 },
        { month: "Aug", visits: 590 },
        { month: "Sep", visits: 620 },
        { month: "Oct", visits: 640 },
        { month: "Nov", visits: 620 },
        { month: "Dec", visits: 590 },
        { month: "Jan", visits: 610 },
        { month: "Feb", visits: 650 },
      ],
      visitsByDistrict: [
        { district: "Almora", visits: 1680 },
        { district: "Dehradun", visits: 1740 },
        { district: "Haridwar", visits: 1580 },
        { district: "Nainital", visits: 1420 },
      ],
      interactionsByType: [
        { type: "Teacher Training", count: 2850 },
        { type: "Classroom Observation", count: 1950 },
        { type: "Material Distribution", count: 850 },
        { type: "Technology Support", count: 770 },
      ],
    },
  },
}

const COLORS = {
  primary: "#FF6B3D",
  secondary: "#0088FE",
  tertiary: "#00C49F",
  quaternary: "#FFBB28",
  quinary: "#8884d8",
  alert: "#FF0000",
  success: "#00C49F",
  warning: "#FFBB28",
  info: "#0088FE",
  lightPrimary: "#FFEDE5",
  lightSecondary: "#E6F4FF",
  lightTertiary: "#E6FAF7",
  lightQuaternary: "#FFF8E6",
  lightQuinary: "#EFEBFF",
  gray: "#6B7280",
  darkGray: "#374151",
  lightGray: "#F3F4F6",
}

// Chart color sets
const CHART_COLORS = [COLORS.primary, COLORS.secondary, COLORS.tertiary, COLORS.quaternary, COLORS.quinary]
const MULTI_COLORS = [
  COLORS.primary,
  COLORS.secondary,
  COLORS.tertiary,
  COLORS.quaternary,
  COLORS.quinary,
  "#FF00FF",
  "#00C49F",
  "#FF6B3D",
]

const ProgressBar = ({ value, max, color = COLORS.primary, height = 8, showValue = true, className = "" }) => {
  const percentage = (value / max) * 100

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between text-xs text-gray-500 mb-1">
        <span>{showValue ? value.toLocaleString() : `${percentage.toFixed(1)}%`}</span>
        <span>{showValue ? max.toLocaleString() : "100%"}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full overflow-hidden" style={{ height }}>
        <div
          className="rounded-full"
          style={{
            width: `${percentage}%`,
            height: "100%",
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  )
}

const ProgressCircle = ({ percentage, size = 120, strokeWidth = 10, color = COLORS.primary, label, subLabel }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold">{percentage.toFixed(1)}%</span>
          {subLabel && <span className="text-xs text-gray-500">{subLabel}</span>}
        </div>
      </div>
      {label && <div className="mt-2 text-center text-sm font-medium">{label}</div>}
    </div>
  )
}

const GaugeChart = ({ value, min = 0, max = 100, color = COLORS.primary, size = 120, label, withLegend = false }) => {
  const percentage = ((value - min) / (max - min)) * 100
  const radius = size / 2
  const strokeWidth = size / 10
  const innerRadius = radius - strokeWidth
  const circumference = innerRadius * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference
  const gradientStops = [
    { offset: "0%", color: "#F87171" },
    { offset: "50%", color: "#FBBF24" },
    { offset: "100%", color: "#34D399" },
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size / 2 }}>
        <svg width={size} height={size / 2 + 10}>
          <defs>
            <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              {gradientStops.map((stop, index) => (
                <stop key={index} offset={stop.offset} stopColor={stop.color} />
              ))}
            </linearGradient>
          </defs>
          <path
            d={`M ${strokeWidth / 2},${size / 2} 
                a ${innerRadius},${innerRadius} 0 0,1 ${size - strokeWidth},0`}
            fill="none"
            stroke="#e6e6e6"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d={`M ${strokeWidth / 2},${size / 2} 
                a ${innerRadius},${innerRadius} 0 0,1 ${size - strokeWidth},0`}
            fill="none"
            stroke={withLegend ? "url(#gauge-gradient)" : color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
          <text
            x={size / 2}
            y={size / 2 + 5}
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
            fill={COLORS.darkGray}
          >
            {value.toFixed(1)}%
          </text>
        </svg>
      </div>
      {label && <div className="mt-1 text-center text-sm font-medium">{label}</div>}
      {withLegend && (
        <div className="flex justify-between w-full text-xs mt-1">
          <span className="text-red-500">{min}%</span>
          <span className="text-yellow-500">{(max - min) / 2 + min}%</span>
          <span className="text-green-500">{max}%</span>
        </div>
      )}
    </div>
  )
}

const MetricCard = ({
  title,
  value,
  unit = "",
  icon,
  subtitle,
  change,
  trend = "up",
  color = "text-blue-600",
  className = "",
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm p-5 ${className}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-baseline mt-1">
            <p className="text-2xl font-semibold">{typeof value === "number" ? value.toLocaleString() : value}</p>
            {unit && <p className="ml-1 text-sm text-gray-500">{unit}</p>}
          </div>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        {icon && <div className={`p-2 rounded-lg ${color.replace("text", "bg").replace("600", "100")}`}>{icon}</div>}
      </div>
      {change !== undefined && (
        <div className="mt-3 flex items-center">
          {trend === "up" ? (
            <svg
              className={`w-3 h-3 ${change >= 0 ? "text-green-500" : "text-red-500"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          ) : (
            <svg
              className={`w-3 h-3 ${change <= 0 ? "text-green-500" : "text-red-500"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
          <span
            className={`text-xs ml-1 ${change >= 0 ? (trend === "up" ? "text-green-500" : "text-red-500") : trend === "up" ? "text-red-500" : "text-green-500"}`}
          >
            {Math.abs(change)}%{" "}
            {change >= 0 ? (trend === "up" ? "increase" : "decrease") : trend === "up" ? "decrease" : "increase"}
          </span>
        </div>
      )}
    </div>
  )
}

const TabButton = ({ active, label, icon, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center space-x-3 w-full p-3 rounded-lg transition-colors ${
      active ? "bg-orange-100 text-orange-600" : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    <span className="flex-shrink-0">{icon}</span>
    <span className={`${active ? "font-medium" : ""} text-sm`}>{label}</span>
  </button>
)

const StatCard = ({ title, value, icon, color = COLORS.primary, trend = null, subtitle = null }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold">{value}</h3>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <div className={`p-3 rounded-xl bg-${color.replace("#", "")}-100`} style={{ backgroundColor: color + "15" }}>
          {icon}
        </div>
      </div>
      {trend && (
        <div className={`flex items-center mt-3 text-xs ${trend.positive ? "text-green-500" : "text-red-500"}`}>
          {trend.positive ? (
            <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          ) : (
            <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          )}
          <span>
            {trend.value}% {trend.positive ? "increase" : "decrease"}
          </span>
        </div>
      )}
    </div>
  )
}

const SamparkDashboard = () => {
  const [selectedState, setSelectedState] = useState("Uttarakhand")
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts")
  const [selectedBlock, setSelectedBlock] = useState("All Blocks")
  const [selectedPeriod, setSelectedPeriod] = useState("YTD")
  const [customDateRange, setCustomDateRange] = useState({ start: "", end: "" })
  const [activeTab, setActiveTab] = useState("overview")
  const [showSidebar, setShowSidebar] = useState(true)

  // Progress calculations
  const schoolCoverage = (programData.overview.schoolsImpacted / programData.overview.totalSchoolsInState) * 100
  const baselineSchoolCoverage = (programData.overview.schoolsImpacted / programData.overview.baselineSchoolCount) * 100
  const enrollmentProgress = (programData.overview.enrollmentCount / programData.overview.enrollmentGoal) * 100
  const budgetUtilization = (programData.overview.programExpensesLakhs / programData.overview.annualBudgetLakhs) * 100
  const teachersProgress = (programData.overview.teachersTrained / programData.overview.teachersToTrain) * 100

  // Map section titles to icons
  const tabIcons = {
    overview: <Home size={20} className="text-orange-500" />,
    asset: <Box size={20} className="text-blue-500" />,
    evaluation: <BarChart2 size={20} className="text-green-500" />,
    impact: <Users size={20} className="text-purple-500" />,
    monitoring: <Activity size={20} className="text-yellow-500" />,
    spark: <Flag size={20} className="text-pink-500" />,
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="text-gray-500 p-2 rounded-md hover:bg-gray-100"
              >
                <List size={20} />
              </button>
              <div className="flex items-center">
                <span className="text-orange-500 font-bold text-xl">SAMPARK</span>
                <span className="ml-2 text-gray-700 text-lg font-medium">Partner Dashboard</span>
              </div>
            </div>
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full text-sm bg-gray-50 border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Search schools, blocks, districts..."
                />
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-white text-gray-700 border border-gray-300 rounded-md px-3 py-1.5 text-sm flex items-center hover:bg-gray-50">
                <Download size={16} className="mr-1.5" /> Export Data
              </button>
              <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-medium">
                A
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Filters */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-full mx-auto px-4 sm:px-6 py-3">
          <div className="flex flex-wrap items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label className="text-xs font-medium text-gray-500">State:</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="text-sm border border-gray-300 rounded-md py-1 pl-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {programData.regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-xs font-medium text-gray-500">District:</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="text-sm border border-gray-300 rounded-md py-1 pl-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="All Districts">All Districts</option>
                {programData.districts
                  .filter((d) => d.state === selectedState)
                  .map((district) => (
                    <option key={district.name} value={district.name}>
                      {district.name}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-xs font-medium text-gray-500">Block:</label>
              <select
                value={selectedBlock}
                onChange={(e) => setSelectedBlock(e.target.value)}
                className="text-sm border border-gray-300 rounded-md py-1 pl-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
                disabled={selectedDistrict === "All Districts"}
              >
                <option value="All Blocks">All Blocks</option>
                {programData.blocks.map((block) => (
                  <option key={block} value={block}>
                    {block}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <label className="text-xs font-medium text-gray-500">Time Period:</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="text-sm border border-gray-300 rounded-md py-1 pl-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {programData.periods.map((period) => (
                  <option key={period} value={period}>
                    {period}
                  </option>
                ))}
              </select>
            </div>

            {selectedPeriod === "Custom" && (
              <div className="flex items-center space-x-2">
                <input
                  type="date"
                  value={customDateRange.start}
                  onChange={(e) => setCustomDateRange({ ...customDateRange, start: e.target.value })}
                  className="text-sm border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <span className="text-xs">to</span>
                <input
                  type="date"
                  value={customDateRange.end}
                  onChange={(e) => setCustomDateRange({ ...customDateRange, end: e.target.value })}
                  className="text-sm border border-gray-300 rounded-md py-1 px-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            )}

            <button className="ml-auto bg-orange-500 text-white rounded-md px-3 py-1.5 text-sm flex items-center hover:bg-orange-600">
              <Filter size={16} className="mr-1.5" /> Apply Filters
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        {showSidebar && (
          <div className="w-64 bg-white shadow-md min-h-screen border-r border-gray-200">
            <div className="p-4">
              <div className="bg-orange-50 rounded-lg p-3 mb-6">
                <div className="text-sm font-medium text-gray-900">{programData.overview.title}</div>
                <div className="text-xs text-gray-500">{programData.overview.duration}</div>
              </div>

              <div className="space-y-1">
                <TabButton
                  active={activeTab === "overview"}
                  label="Program Overview"
                  icon={tabIcons.overview}
                  onClick={() => setActiveTab("overview")}
                />
                <TabButton
                  active={activeTab === "asset"}
                  label="Asset Management"
                  icon={tabIcons.asset}
                  onClick={() => setActiveTab("asset")}
                />
                <TabButton
                  active={activeTab === "evaluation"}
                  label="Program Evaluation"
                  icon={tabIcons.evaluation}
                  onClick={() => setActiveTab("evaluation")}
                />
                <TabButton
                  active={activeTab === "impact"}
                  label="School & Teacher Impact"
                  icon={tabIcons.impact}
                  onClick={() => setActiveTab("impact")}
                />
                <TabButton
                  active={activeTab === "monitoring"}
                  label="Monitoring & Governance"
                  icon={tabIcons.monitoring}
                  onClick={() => setActiveTab("monitoring")}
                />
                <TabButton
                  active={activeTab === "spark"}
                  label="Spark-Specific Data"
                  icon={tabIcons.spark}
                  onClick={() => setActiveTab("spark")}
                />
              </div>
            </div>

            {/* Quick Summary Stats */}
            <div className="p-4 border-t border-gray-200">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Quick Stats</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Schools</span>
                    <span className="font-medium">{programData.overview.schoolsImpacted.toLocaleString()}</span>
                  </div>
                  <ProgressBar
                    value={programData.overview.schoolsImpacted}
                    max={programData.overview.totalSchoolsInState}
                    color={COLORS.primary}
                    height={4}
                    showValue={false}
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Teachers</span>
                    <span className="font-medium">{programData.overview.teachersTrained.toLocaleString()}</span>
                  </div>
                  <ProgressBar
                    value={programData.overview.teachersTrained}
                    max={programData.overview.teachersToTrain}
                    color={COLORS.secondary}
                    height={4}
                    showValue={false}
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Budget</span>
                    <span className="font-medium">₹{programData.overview.programExpensesLakhs}L</span>
                  </div>
                  <ProgressBar
                    value={programData.overview.programExpensesLakhs}
                    max={programData.overview.annualBudgetLakhs}
                    color={COLORS.tertiary}
                    height={4}
                    showValue={false}
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Enrollment</span>
                    <span className="font-medium">{enrollmentProgress.toFixed(1)}%</span>
                  </div>
                  <ProgressBar
                    value={programData.overview.enrollmentCount}
                    max={programData.overview.enrollmentGoal}
                    color={COLORS.quaternary}
                    height={4}
                    showValue={false}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0 overflow-auto">
          <div className="max-w-full mx-auto px-4 sm:px-6 py-6">
            {/* Dashboard Content based on active tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Program Overview</h1>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard
                    title="Schools Covered"
                    value={programData.overview.schoolsImpacted.toLocaleString()}
                    icon={<School size={24} className="text-orange-500" />}
                    color={COLORS.primary}
                    subtitle={`${schoolCoverage.toFixed(1)}% of Total Schools`}
                    trend={{ value: 2.1, positive: true }}
                  />
                  <StatCard
                    title="Teachers Trained"
                    value={programData.overview.teachersTrained.toLocaleString()}
                    icon={<Users size={24} className="text-blue-500" />}
                    color={COLORS.secondary}
                    subtitle={`${teachersProgress.toFixed(1)}% of Target`}
                    trend={{ value: 1.8, positive: true }}
                  />
                  <StatCard
                    title="Budget Utilized"
                    value={`₹${programData.overview.programExpensesLakhs.toLocaleString()}L`}
                    icon={<FileText size={24} className="text-green-500" />}
                    color={COLORS.tertiary}
                    subtitle={`${budgetUtilization.toFixed(1)}% of Annual Budget`}
                    trend={{ value: 3.5, positive: true }}
                  />
                  <StatCard
                    title="Enrollment Progress"
                    value={`${enrollmentProgress.toFixed(1)}%`}
                    icon={<User size={24} className="text-purple-500" />}
                    color={COLORS.quinary}
                    subtitle={`${programData.overview.enrollmentCount.toLocaleString()} Students`}
                    trend={{ value: 0.8, positive: true }}
                  />
                </div>

                {/* Baseline Schools vs. Coverage */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Baseline Schools vs. Coverage</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="flex justify-center">
                          <GaugeChart
                            value={baselineSchoolCoverage}
                            color={COLORS.primary}
                            size={180}
                            withLegend={true}
                            label="Schools Covered"
                          />
                        </div>
                        <div className="mt-4 flex justify-center space-x-6">
                          <div className="text-center">
                            <div className="text-xs text-gray-500">Baseline Count</div>
                            <div className="text-lg font-semibold">
                              {programData.overview.baselineSchoolCount.toLocaleString()}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs text-gray-500">Schools Covered</div>
                            <div className="text-lg font-semibold">
                              {programData.overview.schoolsImpacted.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="h-64">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={programData.districts.filter((d) => d.state === selectedState)}>
                              <CartesianGrid strokeDasharray="3 3" vertical={false} />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip formatter={(value) => value.toLocaleString()} />
                              <Bar dataKey="schoolCount" name="Schools" fill={COLORS.primary} radius={[4, 4, 0, 0]} />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="text-center text-xs text-gray-500 mt-2">School Count by District</div>
                      </div>
                    </div>
                  </div>

                  {/* Enrollment Progress */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Enrollment Progress vs. Goal</h2>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={programData.overview.enrollmentTrend}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis yAxisId="left" />
                          <YAxis yAxisId="right" orientation="right" />
                          <Tooltip formatter={(value) => value.toLocaleString()} />
                          <Legend />
                          <Bar
                            yAxisId="left"
                            dataKey="actual"
                            name="Actual Enrollment"
                            fill={COLORS.primary}
                            barSize={20}
                          />
                          <Line
                            yAxisId="right"
                            type="monotone"
                            dataKey="planned"
                            name="Target"
                            stroke={COLORS.quaternary}
                            strokeWidth={2}
                            dot={false}
                          />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div className="bg-orange-50 rounded-lg p-3 text-center">
                        <div className="text-sm text-gray-600">Current Enrollment</div>
                        <div className="text-xl font-semibold text-gray-900">
                          {programData.overview.enrollmentCount.toLocaleString()}
                        </div>
                      </div>
                      <div className="bg-yellow-50 rounded-lg p-3 text-center">
                        <div className="text-sm text-gray-600">Goal</div>
                        <div className="text-xl font-semibold text-gray-900">
                          {programData.overview.enrollmentGoal.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Program Expenses */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Program Expenses</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="col-span-2">
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <ComposedChart data={programData.overview.expensesTrend}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis
                              yAxisId="left"
                              orientation="left"
                              label={{ value: "Amount (Lakhs)", angle: -90, position: "insideLeft" }}
                            />
                            <YAxis
                              yAxisId="right"
                              orientation="right"
                              label={{ value: "% of Budget", angle: 90, position: "insideRight" }}
                            />
                            <Tooltip
                              formatter={(value, name) => {
                                if (name === "amount") return [`₹${value.toLocaleString()}L`, "Amount"]
                                return [`${value}%`, "% of Budget"]
                              }}
                            />
                            <Legend />
                            <Bar
                              yAxisId="left"
                              dataKey="amount"
                              name="Amount (Lakhs)"
                              fill={COLORS.tertiary}
                              barSize={20}
                            />
                            <Line
                              yAxisId="right"
                              type="monotone"
                              dataKey="percentage"
                              name="% of Budget"
                              stroke={COLORS.quinary}
                              strokeWidth={2}
                              dot={{ r: 3 }}
                            />
                          </ComposedChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div>
                      <div className="mb-4">
                        <div className="flex justify-center">
                          <ProgressCircle
                            percentage={budgetUtilization}
                            size={150}
                            color={COLORS.tertiary}
                            label="Budget Utilized"
                            subLabel={`₹${programData.overview.programExpensesLakhs}L / ₹${programData.overview.annualBudgetLakhs}L`}
                          />
                        </div>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Expense Breakdown</h3>
                        <div className="space-y-2">
                          {programData.overview.expensesByCategory.map((category, idx) => (
                            <div key={idx}>
                              <div className="flex justify-between text-xs mb-1">
                                <span>{category.category}</span>
                                <span>
                                  ₹{category.amount.toLocaleString()}L ({category.percentage}%)
                                </span>
                              </div>
                              <ProgressBar
                                value={category.percentage}
                                max={100}
                                color={CHART_COLORS[idx % CHART_COLORS.length]}
                                height={6}
                                showValue={false}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "asset" && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold text-gray-900">Asset Management</h1>

                {/* Overview Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <StatCard
                    title="SSS Kits Distributed"
                    value={programData.overview.kitsDistributed.toLocaleString()}
                    icon={<Box size={24} className="text-blue-500" />}
                    color={COLORS.secondary}
                  />
                  <StatCard
                    title="Sampark TVs Distributed"
                    value={programData.assetManagement.samparkTVDistribution.total.toLocaleString()}
                    icon={<Tv size={24} className="text-orange-500" />}
                    color={COLORS.primary}
                  />
                  <StatCard
                    title="TVs Installed"
                    value={`${((programData.assetManagement.samparkTVDistribution.byDistrict.reduce((sum, d) => sum + d.installed, 0) / programData.assetManagement.samparkTVDistribution.total) * 100).toFixed(1)}%`}
                    icon={<CheckSquare size={24} className="text-green-500" />}
                    color={COLORS.tertiary}
                  />
                  <StatCard
                    title="TVs Synced Monthly"
                    value={`${((programData.assetManagement.samparkTVDistribution.byDistrict.reduce((sum, d) => sum + d.synced, 0) / programData.assetManagement.samparkTVDistribution.total) * 100).toFixed(1)}%`}
                    icon={<Activity size={24} className="text-purple-500" />}
                    color={COLORS.quinary}
                  />
                </div>

                {/* Distribution Maps (represented as bar charts for now) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-medium text-gray-900">Sampark TV Distribution</h2>
                      <div className="text-sm text-gray-500">
                        Total: {programData.assetManagement.samparkTVDistribution.total.toLocaleString()}
                      </div>
                    </div>
                    <div className="h-64 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={programData.assetManagement.samparkTVDistribution.byDistrict}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="district" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="count" name="Total" fill={COLORS.primary} />
                          <Bar dataKey="installed" name="Installed" fill={COLORS.secondary} />
                          <Bar dataKey="synced" name="Synced" fill={COLORS.tertiary} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center text-sm">TV Distribution Map by District</div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-medium text-gray-900">SSS Kits Distribution</h2>
                      <div className="text-sm text-gray-500">
                        Total: {programData.overview.kitsDistributed.toLocaleString()}
                      </div>
                    </div>
                    <div className="h-64 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={programData.assetManagement.sssKitsDistribution.byDistrict}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="district" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar dataKey="count" name="Distributed" fill={COLORS.secondary} />
                          <Bar dataKey="registered" name="Registered" fill={COLORS.tertiary} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center text-sm">SSS Kits Distribution Map by District</div>
                  </div>
                </div>

                {/* Installation/Sync Status and Usage Trends */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">TV Installation & Sync Status</h2>
                    <div className="h-64 mb-4">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={programData.assetManagement.samparkTVDistribution.installTrend}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis domain={[0, "dataMax + 500"]} />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="installed"
                            name="Installed"
                            stroke={COLORS.secondary}
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="synced"
                            name="Synced"
                            stroke={COLORS.tertiary}
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-sm text-gray-600">Installation Rate</div>
                        <div className="text-xl font-semibold text-gray-900">
                          {(
                            (programData.assetManagement.samparkTVDistribution.installTrend[
                              programData.assetManagement.samparkTVDistribution.installTrend.length - 1
                            ].installed /
                              programData.assetManagement.samparkTVDistribution.total) *
                            100
                          ).toFixed(1)}
                          %
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-lg p-3 text-center">
                        <div className="text-sm text-gray-600">Sync Rate</div>
                        <div className="text-xl font-semibold text-gray-900">
                          {(
                            (programData.assetManagement.samparkTVDistribution.installTrend[
                              programData.assetManagement.samparkTVDistribution.installTrend.length - 1
                            ].synced /
                              programData.assetManagement.samparkTVDistribution.total) *
                            100
                          ).toFixed(1)}
                          %
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Asset Usage Trends</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">Sampark TV Usage (Hours)</h3>
                        <div className="h-40">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={programData.assetManagement.samparkTVDistribution.usageTrend}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="week" />
                              <YAxis />
                              <Tooltip />
                              <Area
                                type="monotone"
                                dataKey="hours"
                                name="Hours"
                                stroke={COLORS.primary}
                                fill={COLORS.primary}
                                fillOpacity={0.2}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 mb-2">SSS Kits Usage (Sessions)</h3>
                        <div className="h-40">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={programData.assetManagement.sssKitsDistribution.usageTrend}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="week" />
                              <YAxis />
                              <Tooltip />
                              <Area
                                type="monotone"
                                dataKey="sessions"
                                name="Sessions"
                                stroke={COLORS.secondary}
                                fill={COLORS.secondary}
                                fillOpacity={0.2}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-700 mb-2">Asset Usage Insights</h3>
                      <div className="text-sm text-gray-600">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Weekly usage of Sampark TVs has increased by 20% over the last 2 months</li>
                          <li>SSS Kit engagement is highest among Grade 3-5 teachers</li>
                          <li>Hawalbag block shows highest asset utilization rate at 86%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Asset Distribution Table */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Asset Distribution by District</h2>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            District
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            SSS Kits
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Registered
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            TVs
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Installed
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Synced
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Utilization %
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {programData.districts
                          .filter((d) => d.state === selectedState)
                          .map((district, idx) => {
                            const tvData = programData.assetManagement.samparkTVDistribution.byDistrict.find(
                              (d) => d.district === district.name,
                            )
                            const kitData = programData.assetManagement.sssKitsDistribution.byDistrict.find(
                              (d) => d.district === district.name,
                            )
                            return (
                              <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                                  {district.name}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                  {kitData.count.toLocaleString()}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                  {kitData.registered.toLocaleString()} (
                                  {((kitData.registered / kitData.count) * 100).toFixed(1)}%)
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                  {tvData.count.toLocaleString()}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                  {tvData.installed.toLocaleString()} (
                                  {((tvData.installed / tvData.count) * 100).toFixed(1)}%)
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                  {tvData.synced.toLocaleString()} ({((tvData.synced / tvData.count) * 100).toFixed(1)}
                                  %)
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                                      <div
                                        className="bg-blue-600 h-2 rounded-full"
                                        style={{ width: `${((tvData.synced / tvData.count) * 100).toFixed(1)}%` }}
                                      ></div>
                                    </div>
                                    <span>{((tvData.synced / tvData.count) * 100).toFixed(1)}%</span>
                                  </div>
                                </td>
                              </tr>
                            )
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Placeholder for other tabs */}
            {activeTab !== "overview" && activeTab !== "asset" && (
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  {activeTab === "evaluation"
                    ? "Program Evaluation"
                    : activeTab === "impact"
                      ? "School & Teacher Impact"
                      : activeTab === "monitoring"
                        ? "Monitoring & Governance"
                        : activeTab === "spark"
                          ? "Spark-Specific Data"
                          : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                </h1>
                <p className="text-gray-600">
                  This section would display detailed visualizations and metrics for{" "}
                  {activeTab === "evaluation"
                    ? "teacher training progress, spark allocations, and performance tracking"
                    : activeTab === "impact"
                      ? "classroom effectiveness, teacher feedback, and resource utilization"
                      : activeTab === "monitoring"
                        ? "school visits, governance meetings, and compliance tracking"
                        : activeTab === "spark"
                          ? "spark deployment, visit activity, and interaction analysis"
                          : "relevant data"}
                  .
                </p>
                <div className="mt-6 p-8 bg-gray-50 rounded-lg inline-block">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-6 py-1">
                      <div className="h-40 bg-gray-200 rounded"></div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-8 bg-gray-200 rounded col-span-2"></div>
                          <div className="h-8 bg-gray-200 rounded col-span-1"></div>
                        </div>
                        <div className="h-8 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SamparkDashboard

