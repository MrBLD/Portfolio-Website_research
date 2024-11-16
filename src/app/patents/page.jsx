import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const filingUnderProcess = [
  {
    topic: "A Circuit Arrangement of Gated Clock Tree for Minimizing Power Supply Noise",
    team: "A. Majumder",
    granter: "Indian Patent",
    dateFiled: "",
    applicationNumber: "",
    },
    {
    topic: "System and Method for Enhancing Vehicle Security Through Driving License Verification",
    team: "A. Kumar, S. Katiyar, A. Majumder",
    granter: "Indian Patent",
    dateFiled: "2nd November 2018",
    applicationNumber:"201831041534",
    },
    {
    topic: "Secure Payment Framework using Tokenization and Biometric Authentication",
    team:"A. Majumder, S. Ghosh, J. Goswami, A. Bibek, R. Shrivastawa, M. Kumari",
    granter: "Indian Patent",
    dateFiled: "16th December 2016",
    applicationNumber:"201631042923",
    },
    {
    topic: "A Digital Card Serving Identity & Payment Needs",
    team: "A. Majumder, S. Ghosh, J. Goswami, B.K. Bhattacharyya",
    granter: "Indian Patent",
    dateFiled: "10th February 2016",
    applicationNumber:"201631004666",
    },
    {
    topic: "A Method to  Reconstruct The Single Square Wave Pulse at the Receiving End Through the Lossy, Unmatched  and Noisy Transmission Channel",
    team: "B.K. Bhattacharyya, A. Majumder, M. Kumari, D. Baral",
    granter: "US Provisional Patent (USPTO)",
    dateFiled: "29th June 2015",
    applicationNumber:"USPS: 7015 0640 0001 3896 6158",
  }    
]

const filingCompleted = [
  {
  topic: "Voltage Keeper Based Robust Flip-flop for Low Power Applications",
  team: "A. Majumder, P. Bhattacharjee, B. Nath",
  granter: "Indian Patent",
  dateFiled: "11th December 2017",
  applicationNumber:"201731044358",
  },
  {
  topic: "System and Method for Vehicle Identification and Ticketing System",
  team: "A. Kumar, N. Mishra, A. Majumder",
  granter: "Indian Patent",
  dateFiled: "5th September 2018",
  applicationNumber:"201831033415",
  },
  {
  topic: "Motion Based Charger for a Portable Computing Device",
  team: "A. Majumder, A. Kumar, N. Mishra, A. Anand",
  granter: "Indian Patent",
  dateFiled: "3rd February 2017",
  applicationNumber:"201731003981",
  }
]

export default function Patents() {
  return (
    <div className="container mx-auto py-12 bg-sky-50">
      <h1 className="text-4xl font-bold text-center mb-12 text-sky-900">Our Patents</h1>
      <Tabs defaultValue="completed" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="completed" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">Filing Completed</TabsTrigger>
          <TabsTrigger value="under-process" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white">Filing Under Process</TabsTrigger>
        </TabsList>
        <TabsContent value="under-process">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filingUnderProcess.map((patent, index) => (
              <PatentCard key={index} {...patent} status="under-process" />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filingCompleted.map((patent, index) => (
              <PatentCard key={index} {...patent} status="completed" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function PatentCard({ topic, team, granter, dateFiled, applicationNumber, status }) {
  return (
    <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-gray-100 border-b border-sky-200">
        <CardTitle className="text-lg font-semibold text-sky-900">{topic}</CardTitle>
        <Badge 
          variant={status === "completed" ? "default" : "secondary"} 
          className={status === "completed" ? "bg-green-500" : "bg-sky-500"}
        >
          {status === "completed" ? "Filing Completed" : "Under Process"}
        </Badge>
      </CardHeader>
      <CardContent className="pt-4 space-y-2">
        <p className="text-sky-800"><span className="font-semibold">Team:</span> {team}</p>
        <p className="text-sky-800"><span className="font-semibold">Patent Granter:</span> {granter}</p>
        <p className="text-sky-800"><span className="font-semibold">Date Filed:</span> {dateFiled}</p>
        <p className="text-sky-800"><span className="font-semibold">Application Number:</span> {applicationNumber}</p>
      </CardContent>
    </Card>
  )
}

