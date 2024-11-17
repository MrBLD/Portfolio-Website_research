import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award, FileText, Users, Globe } from  "lucide-react"

interface TimelineItemProps {
  icon: React.ReactNode
  children: React.ReactNode
}

function TimelineItem({ icon, children }: TimelineItemProps) {
  return (
    <div className="flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
          {icon}
        </div>
        <div className="w-px flex-1 bg-border" />
      </div>
      <div className="flex-1 pt-1.5">
        {children}
      </div>
    </div>
  )
}

export default function ExperiencePage() {
  return (
    <div className="container mx-auto py-12 px-4">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-center mb-12">Academic Credentials</CardTitle>
            </CardHeader>
            <CardContent>
        
      <div className="space-y-8 ml-32">
        <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
          <h3 className="font-semibold">National Institute of Technology (NIT) Arunachal Pradesh, India</h3>
          <p className="text-sm text-muted-foreground">Sept 2014 - Sept 2018</p>
          <p>Doctor of Philosophy, Department of ECE</p>
          <p>Date of Defense: 28-09-2018, Date of Award: 12-12-2018</p>
          <p>Advisor: Dr. Bidyut Kr. Bhattacharyya (Fellow IEEE) and Dr. Pinaki Chakraborty</p>
          <p>Thesis:  Process Variation Aware Serializer and Data Reconstruction Architecture </p>
          <p>For ≥25 Gbit/s On-chip Data Links</p>
        </TimelineItem>
        <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
          <h3 className="font-semibold">National Institute of Technology (NIT) Arunachal Pradesh, India</h3>
          <p className="text-sm text-muted-foreground">July 2011 - May 2013</p>
          <p>M-Tech in Microelectronics & VLSI Design, Department of ECE</p>
          <p>Secured 8.56/10 (CGPA)</p>
          <p>Dissertation: Micro-strip Patch Antenna using Meta-material for UWB Application.</p>
        </TimelineItem>
        <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
          <h3 className="font-semibold">Tripura Institute of Technology Agartala, India</h3>
          <p className="text-sm text-muted-foreground">Aug 2007 - May 2011</p>
          <p>BE in Electronics & Tele-Communication Engineering</p>
          <p>Secured 7.63/10 (CGPA)</p>
          <p>Dissertation: Design of RF based Programmable Frequency Divider</p>
        </TimelineItem>
        <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
          <h3 className="font-semibold">Baikhora Higher Secondary School</h3>
          <p className="text-sm text-muted-foreground">April 2007</p>
          <p>H.S. (+2) Stage (TBSE), Secured 67.40%</p>
        </TimelineItem>
        <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
          <h3 className="font-semibold">Charakbai High School</h3>
          <p className="text-sm text-muted-foreground">April 2005</p>
          <p>Class 10, Madhyamik (TBSE), Secured 77.13%</p>
        </TimelineItem>
      </div>
        </CardContent>
          </Card>
      </div>
  )
}