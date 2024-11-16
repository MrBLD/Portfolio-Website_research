import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const completedProjects = [
  {
    title:"Integration of Variable Frequency Clock & Gated Clock Tree to Mitigate PSN in Multi-core CPU",
    points:[
        "Funding Agency: SERB Core Research Grant, DST",
        "Role: Chief Investigator",
        "Co-PI List: None",
        "Grant: ~ 3.888 Million INR",
        "Status: Completed (2020 - 2023)",
    ]
    },
    {
    title:"A Digital Design Framework of Programmable Duty Cycle Generator",
    points:[
        "Funding Agency: NIT Arunachal Pradesh (TEQIP-III Seed Grant)",
        "Role: Chief Investigator",
        "Co-PI List: None",
        "Grant: 0.2 Million INR",
        "Status: Completed (2019 - 2020)",
    ]
    },
    {
    title:"SMDP-Chip to System Design",
    points:[
        "Funding Agency: Ministry of Electronics and Information Technology, Govt. of India",
        "Role: Chief Investigator",
        "Co-PI List: Dr. S.K. Chakraborty ",
        "Grant: ~ 5.388 Million INR (Till Date) + EDA Lab Setup",
        "Status: Completed (2015 - 2021)",
    ]
    },
]

const ongoingProjects = [
  {
    title:"Rainfall-Induced Landslide Susceptibility Evaluation by Accounting the Influence of Vegetation",
    points:[
        "Funding Agency: ISRO Respond, Govt. of India",
        "Role: Principal Investigator",
        "Co-PI List: Dr. Sanjeev K Metya and Dr. Jumrik Taipodia",
        "Grant: ~  2.5 Million INR",
        "Status: Ongoing (2023 - 2026)",
    ]
    },
    {
    title:"An IoT and Analytics Based Framework of Landslide Forecast and Risk Communication for Himalayan Region of North-East India",
    points:[
        "Funding Agency: Ministry of Electronics and Information Technology, Govt. of India",
        "Role: Principal Investigator",
        "Co-PI List: Dr. Abir J Mondal and Dr. S.N. Deepa",
        "Grant: ~ 9.718 Million INR",
        "Status: Ongoing (2023 - 2028)",
    ]
    },
    {
    title:"Fund for Improvement of S&T Infrastructure (FIST)",
    points:[
        "Funding Agency: Department of Science & Technology (DST), Government of India",
        "Role: Co-Principal Investigator",
        "PI/Co-PI List: Dr. Abir J Mondal (PI), Dr. Sanjeev K. Metya (Co-PI)",
        "Grant: ~ 10.06 Million INR",
        "Status: Ongoing (2022 - 2027)",
    ]
    },    
]

export default function Projects() {
  return (
    <div className="container mx-auto py-12 bg-sky-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-sky-900">Sponsored Research Grants</h1>
      <Tabs defaultValue="completed" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="completed" className="data-[state=active]:bg-sky-200 data-[state=active]:text-sky-900">Completed Projects</TabsTrigger>
          <TabsTrigger value="ongoing" className="data-[state=active]:bg-sky-200 data-[state=active]:text-sky-900">Ongoing Projects</TabsTrigger>
        </TabsList>
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedProjects && completedProjects.length > 0 ? (
              completedProjects.map((project, index) => (
                <ProjectCard key={index} {...project} status="completed" />
              ))
            ) : (
              <p className="text-sky-800 col-span-2 text-center">No completed projects at the moment.</p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="ongoing">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ongoingProjects && ongoingProjects.length > 0 ? (
              ongoingProjects.map((project, index) => (
                <ProjectCard key={index} {...project} status="ongoing" />
              ))
            ) : (
              <p className="text-sky-800 col-span-2 text-center">No ongoing projects at the moment.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProjectCard({ title, points, status }) {
  return (
    <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-sky-100 border-b border-sky-200">
        <CardTitle className="flex justify-between items-center text-sky-900">
          {title}
          <Badge variant={status === "completed" ? "default" : "secondary"} className="bg-sky-500 hover:bg-sky-600">
            {status === "completed" ? "Completed" : "Ongoing"}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        {points && points.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {points.map((point, index) => (
              <li key={index} className="text-sky-800">{point}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sky-800">No project details available.</p>
        )}
      </CardContent>
    </Card>
  )
}