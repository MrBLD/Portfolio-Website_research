import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail } from "lucide-react";

const students = {
  phd: [
    {
      name: "Sagar Bhivsane",
      position: "PhD Scholor",
      areaOfWork: "",
    },
    {
      name: "Vinod Salunke",
      position: "PhD Scholor",
      areaOfWork: "",
    },
    {
      name: "Vipin Kumar Singh",
      position: "PhD Scholor",
      areaOfWork: "Circuit Techniques for PSN Mitigation (Ongoing)",
      coSupervisor: "NA",
      workTenure: "- -",
    },
    {
      name: "Vijay Pratap Yadav",
      position: "PhD Scholor",
      areaOfWork: "Adaptive Power Gating Circuits (Ongoing)",
      coSupervisor: "Dr. Sanjeev Kumar Metya",
      workTenure: "- -",
      image: "/images/Vijay_MTech.jpg",
    },
    {
      name: "Tika Ram Pokhrel",
      position: "PhD Scholor",
      areaOfWork: "Study of Double Gated Junction-less Transistor and its TIG configuration for Dynamic C2MOS Application (Completed)",
      coSupervisor: "NA",
      workTenure: "14th March 2024",
    },
    {
      name: "Shashank Awasthi",
      position: "PhD Scholor",
      areaOfWork: "Design Exploration of Optical Reversible Circuits using Lithium Niobate Based MZI (Completed)",
      coSupervisor: "Dr. Sanjeev Kumar Metya",
      workTenure: "21st November 2022 ",
    },
    {
      name: "Pritam Bhattacharjee",
      position: "PhD Scholor",
      areaOfWork: "Embedding of Variable Frequency Clock & Clock Gating to Mitigate Power Supply Noise in Silicon Chip (Completed)",
      coSupervisor: "Dr. Tushar Dhabal Das",
      workTenure: "25th September 2020",
    },
    {
      name: "Madhusudan Maiti",
      position: "PhD Scholor",
      areaOfWork: "Design of Power Efficient CDR Circuit Constituents for Serial Data Communication (Completed)",
      coSupervisor: "Dr. S.K. Chakraborty & Prof. Susanta Sen",
      workTenure: "15th July 2020",
    },
    {
      name: "Suraj Kumar Saw",
      position: "PhD Scholor",
      areaOfWork: "Variation Tolerant Design of PLL Constituents for High-Speed Application (Completed)",
      coSupervisor: "Dr. Preetisudha Meher (Major)",
      workTenure: "13th July 2020",
    },
  ],
  projectStaff: [
    {
      name: "Diksha Thakur",
      position: "Junior Research Fellow",
      areaOfWork: "",
      workTenure: "(March 2022 – June 2022)",
    },
    {
      name: "Shailesh Kumar",
      position: "Junior Research Fellow",
      areaOfWork: "Digital IC, Power Supply Noise",
      workTenure: "(March 2021 – December 2021)",
      image: "/images/Shailesh.jpg",
    },
    {
      name: "Jyoti Kandpal",
      position: "Research Engineer",
      areaOfWork: "Digital IC Design",
      workTenure: "(March 2021 – November 2021)",
      image: "/images/Jyoti.gif",
    },
    {
      name: "Shashank Awasthi",
      position: "Research Assistant",
      areaOfWork: "",
      workTenure: "(March 2020 – November 2021)",
    },
    {
      name: "Rituparna Paul",
      position: "Research Assistant",
      areaOfWork: "",
      workTenure: "(March 2020 – August 2020)",
    },
    {
      name: "Tika Ram Pokhrel",
      position: "Research Engineer",
      areaOfWork: "",
      workTenure: "(September 2019 – August 2020)",
    },
    {
      name: "Sandeep Kumar Yadav",
      position: "Research Assistant",
      areaOfWork: "",
      workTenure: "(September 2019 – February 2020)",
    }
  ],
  mtech: [
    {
      name: "Ashish Ranjan Kumar",
      position: "MTech. (VLSI/2021/01)",
      areaOfWork: "Dynamic Header Switch to Influence Switching Current Profile in an IC Chip",
      workTenure: "(Completed, May 2023)",
    },
    {
      name: "Vijay Pratap Yadav",
      position: "MTech. (VLSI/2020/10)",
      areaOfWork: "Multi-Mode Power Gating to Reduce Current Ramp Profile of Logic Circuit",
      workTenure: "(Completed, May 2022)",
    },
    {
      name: "Anu Singh",
      position: "MTech. (VLSI/2020/04)",
      areaOfWork: "Study of Adder Design using the 2D Double Gated Junction-less Transistor",
      workTenure: "(Completed, May 2022)",
      image: "/images/Anu_MTech.png",
    },
    {
      name: "Vikash Kumar Mishra",
      position: "MTech. (VLSI/17/02)",
      areaOfWork: "A Design Methodology for Frequency Multiplication by Factor-N",
      workTenure: "(Completed, May 2019)",
    },
    {
      name: "Pallabi Kakati",
      position: "MTech. (VLSI/16/06)",
      areaOfWork: "Current Mode Mux-Latch Based Serializer Design for Power Efficient On-Chip Data Links",
      workTenure: "(Completed, May 2018)",
      image: "/images/pallabi_M-Tech.jpg",
    },
    {
      name: "Ponkhi Borah",
      position: "MTech. (VLSI/16/03)",
      areaOfWork: "A New Circuit Configuration of Power Efficient SRAM",
      workTenure: "(Completed, May 2018) ",
    },
    {
      name: "Shubham Sharma",
      position: "MTech. (VLSI/16/04)",
      areaOfWork: "Low Swing Voltage Driver & Receiver Circuit for Energy Efficient Propagatio of Signals Between Interconnect Wires",
      workTenure: "(Completed, May 2018)",
    },
    {
      name: "Shrija Saha",
      position: "MTech. (EDM/16/03)",
      areaOfWork: "On-Chip Power Supply Noise Mitigation by Steering the Switching Pattern of Clock Tree",
      workTenure: "(Completed, May 2018)",
    },
    {
      name: "Prerna Rana",
      position: "MTech. (EDM/16/02)",
      areaOfWork: "Variable Frequency Generation for Mitigating PSN of Silicon Chip",
      workTenure: "(Completed, May 2018)",
    },
    {
      name: "Dhiraj Sarkar",
      position: "MTech. (MCC/16/03)",
      areaOfWork: "PVT Aware Configuration of Gated Clock for Low Power Sequential System",
      workTenure: "(Completed, May 2018)",
    },
    {
      name: "Monalisa Das",
      position: "MTech. (EDM/15/14)",
      areaOfWork: "Current Mode Design of Mux-Latch Architecture for Gigascale Serializer Interface Circuit",
      workTenure: "(Completed, May 2017)",
    },
    {
      name: "Bipasha Nath",
      position: "MTech. (MCC/15/02)",
      areaOfWork: "Design of Gated Clock Tree Circuit to Yield a Current Profile for Mitigating Power Supply Noise of Integrated CPU Chip",
      workTenure: "(Completed, May 2017)",
    },
    {
      name: "Sirikonda Rambabu",
      position: "MTech. (EDM/15/11)",
      areaOfWork: "Design Approaches of OTA using Positive Feedback Load for Filter Applications",
      workTenure: "(Completed, May 2017)",
    },
    {
      name: "Saranya Mohan S",
      position: "MTech. (EDM/15/09)",
      areaOfWork: "Synthesis & Verification of New OKFDD approach for Line Minimization of Reversible Circuits",
      workTenure: "(Completed, May 2017)",
    },
    {
      name: "Rahul Kaushik",
      position: "MTech. (EDM/14/06)",
      areaOfWork: "Majority Function and Adiabatic Principle Based Design Approach for Low Power VLSI",
      workTenure: "(Completed, May 2016)",
    },
    {
      name: "Prasenjit Deb",
      position: "MTech. (EDM/14/18)",
      areaOfWork: "Leakage Reduction Methodology and its application in Low Power SRAM Design",
      workTenure: "(Completed, May 2016)",
    },
    {
      name: "Shirsha Ghosh",
      position: "MTech. (MTMC/14/13)",
      areaOfWork: "Development of a Biometric Hardware Module Incorporating NFC for Peer-to peer Money Transfer and Identity Virtualization",
      workTenure: "(Completed, May 2016)",
    },
    {
      name: "Joyeeta Goswami",
      position: "MTech. (MTMC/14/08)",
      areaOfWork: "Hardware/Software Co-Design using NFC Enabled Smartphone for Biometric P2P Payment and Identity Virtualization",
      workTenure: "(Completed, May 2016)",

    },
    {
      name: "Barnali Chowdhury",
      position: "MTech. (MTMC/14/05)",
      areaOfWork: "Pulse Reconstruction & Signaling Issues in High Speed Bus",
      workTenure: "(Completed, May 2016)",
    },
    {
      name: "Prasoon Lata Singh",
      position: "MTech. (MTMC/13/01)",
      areaOfWork: "Synthesis & Realization of Optimized Reversible Logic Circuits for Novel ALU Design",
      workTenure: "(Completed, April 2015)",
    }
  ],
  btech: [
    {
      name: "Rahul Sharma",
      position: "B-Tech",
      areaOfWork: "Embedded Systems",
      coSupervisor: "NA",
      workTenure: "August 2022 - Present",
      image: "/images/rahul.jpg",
    },
    {
      name: "Priya Patel",
      position: "B-Tech",
      areaOfWork: "IoT Applications",
      coSupervisor: "NA",
      workTenure: "August 2022 - Present",
      image: "#",
    },
  ],
};

export default function Students() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Students</h1>
      <Tabs defaultValue="phd" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="phd">PhD</TabsTrigger>
          <TabsTrigger value="projectStaff">Project Staff</TabsTrigger>
          <TabsTrigger value="mtech">M.Tech</TabsTrigger>
          <TabsTrigger value="btech">B.Tech</TabsTrigger>
        </TabsList>
        {Object.entries(students).map(([category, categoryStudents]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categoryStudents.map((student, index) => (
                <StudentCard key={index} {...student} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

function StudentCard({
  name,
  position,
  areaOfWork,
  coSupervisor,
  workTenure,
  image,
}) {
  const initials = name
    ? name
      .split(" ")
      .map((n) => n[0])
      .join("")
    : "?";

  return (
    <Card className="w-full">
      <CardContent className="flex items-start space-x-4 pt-6 bg-teal-400">
        <Avatar className="w-24 h-24">
          <AvatarImage src={image} alt={name || "Student"} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                {name || "Unknown Student"}
              </h3>
              <p className="text-sm text-gray-500">
                {position || "Position not specified"}
              </p>
            </div>
            <a
              href="mailto:youremail@example.com"
              className="inline-flex items-center"
            >
              <Mail className="w-5 h-5 text-red-400 cursor-pointer" />
            </a>
          </div>
          <div className="mt-2 space-y-1">
            <p className="text-sm">
              <span className="font-semibold">Area of Work:</span>{" "}
              {areaOfWork || "Not specified"}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Co-Supervisor:</span>{" "}
              {coSupervisor || "Not specified"}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Work Tenure:</span>{" "}
              {workTenure || "Not specified"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
