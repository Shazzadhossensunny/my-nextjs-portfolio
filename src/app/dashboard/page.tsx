"use client";
import { motion } from "framer-motion";
import {
  Eye,
  ThumbsUp,
  MessageSquare,
  Users,
  ArrowUp,
  ArrowDown,
  BarChart,
  PieChart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DashboardHome = () => {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  // Sample data for charts
  const viewsData = [
    { name: "Jan", views: 400 },
    { name: "Feb", views: 300 },
    { name: "Mar", views: 500 },
    { name: "Apr", views: 280 },
    { name: "May", views: 590 },
    { name: "Jun", views: 320 },
  ];

  const stats = [
    {
      title: "Total Views",
      value: "24.8K",
      change: "+12%",
      increase: true,
      icon: <Eye className="h-4 w-4" />,
    },
    {
      title: "Total Likes",
      value: "1,429",
      change: "+8%",
      increase: true,
      icon: <ThumbsUp className="h-4 w-4" />,
    },
    {
      title: "Comments",
      value: "342",
      change: "-3%",
      increase: false,
      icon: <MessageSquare className="h-4 w-4" />,
    },
    {
      title: "Followers",
      value: "1.2K",
      change: "+18%",
      increase: true,
      icon: <Users className="h-4 w-4" />,
    },
  ];

  const recentActivity = [
    {
      type: "comment",
      user: "Alice Johnson",
      action: "commented on",
      target: "Building a Modern Web App",
      time: "2 hours ago",
    },
    {
      type: "like",
      user: "Bob Smith",
      action: "liked",
      target: "React Performance Tips",
      time: "4 hours ago",
    },
    {
      type: "follow",
      user: "Carol Williams",
      action: "started following you",
      time: "5 hours ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                {stat.icon}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs ${
                    stat.increase
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  } flex items-center`}
                >
                  {stat.increase ? (
                    <ArrowUp className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDown className="h-3 w-3 mr-1" />
                  )}
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Page Views</CardTitle>
            <CardDescription>Views over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={viewsData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="views"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest interactions with your content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    {activity.type === "comment" && (
                      <MessageSquare className="h-4 w-4 text-purple-600" />
                    )}
                    {activity.type === "like" && (
                      <ThumbsUp className="h-4 w-4 text-purple-600" />
                    )}
                    {activity.type === "follow" && (
                      <Users className="h-4 w-4 text-purple-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{" "}
                      {activity.action}{" "}
                      {activity.target && (
                        <span className="font-medium">{activity.target}</span>
                      )}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHome;
