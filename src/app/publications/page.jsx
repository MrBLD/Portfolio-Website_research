import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

const publicationTypes = [
  { type: "Books", count: 2 },
  { type: "Book Chapters", count: 3 },
  { type: "Journals/Letters/Magazines", count: 50 },
  { type: "Conferences", count: 45 },
]

const publications = {
  Books: [
    {
      title: "Arithmetic Circuits: Trends and Applications",
      authors: "D. Nandan, B.K. Mohanty, A. Majumder, S. Gorgin",
      publisher: "CRC Press, Taylor & Francis",
      year: 2021,
      note: "Contract Signed",
    },
    {
      title: "Electronic Systems and Intelligent Computing - Proceedings of ESIC 2020",
      authors: "P.K. Mallick, P.S. Meher, P. A. Majumder, S.K. Das",
      publisher: "Springer Nature",
      year: 2020,
      doi: "10.1007/978-981-15-7031-5",
      isbn: "978-981-15-7031-5",
    }
  ],
  "Book Chapters": [
    {
      title: "Junctionless Transistors: Evolution and Prospects",
      book: "Nanoscale Semiconductor: Materials, Devices and Circuits",
      authors: "T. Pokhrel, A. Majumder",
      publisher: "CRC Press, Taylor & Francis Group",
      year: 2022,
      isbn: "978-1-00331-137-9",
    },
    {
      title: "Understanding of On-chip Power Supply Noise: Suppression Methodologies and Challenges",
      authors: "P. Bhattacharjee, P. Rana, A. Majumder",
      book: "Recent Trends in Communication Networks",
      publisher: "InTech Open, UK",
      year: 2020,
      isbn: "978-1-83880-506-7",
    },
    {
      title: "NFC in IoT Based Payment Architecture",
      book: "The Internet of Things: Foundations for Smart City, E-Health and Ubiquitous Computing",
      authors: "A. Majumder, S. Ghosh, J. Goswami, B.K. Bhattacharyya",
      publisher: "CRC Press, Taylor & Francis Group",
      year: 2017,
      isbn: "978-1-49878-902-8",
    }
  ],
  "Journals/Letters/Magazines": [
    {
      title: "Enhancing intrusion detection using wireless sensor networks: A novel ahp-madm aggregated multiple type 3 fuzzy logic-based k-barriers prediction system",
      authors: "A. Tarafdar, A. Sheikh, P. Majumder, A. Baidya, A. Majumder, B.K Bhattacharyya, U.K. Bera",
      journal: "Peer-to-Peer Networking and Applications",
      publisher: "Springer",
      year: 2024,
      doi: "10.1007/s12083-024-01688-w",
    },
    {
      title: "Time Domain and Area Efficient Smart Temperature Sensor Exploiting Channel Length Modulation Coefficient",
      authors: "K. Chakraborty, A. Majumder, A.J Mondal",
      journal: "Journal of Circuit, Systems and Computers",
      publisher: "World Scientific Publisher",
      year: 2024,
      doi: "10.1142/S0218126624502384",


    },
    {
      title: "Configuring a Hybrid Full Adder using Strained-Si Channel DG JLT with Work Function Modulation",
      authors: "TR Pokhrel, J Kandpal, A Majumder",
      journal: "Silicon",
      publisher: "Springer",
      year: 2023,
      doi: "10.1007/s12633-023-02327-4",


    },
    {
      title: "Configuring a Reversible Full Adder using Pockels Electro-Optic Effect of Ti:LiNbO3 Based MZI",
      authors: "S Awasthi, B Chowdhury, V Janyani, SK Metya, A Majumder",
      journal: "Journal of Computational Electronics",
      publisher: "Springer",
      year: 2022,
      doi: "10.1007/s10825-022-01991-w",
    },
    {
      title: "On-chip Supply Noise in Multiprocessors: Impact and Clock Gating Inspired Mitigation Strategies",
      authors: "P Bhattacharjee, G Trivedi, A Majumder",
      journal: "International Journal of Electronics",
      publisher: "Taylor and Francis",
      year: 2022,
      doi: "10.1080/00207217.2022.2158493",
    },
    {
      title: "Pockel&apos;s Effect Inspired Toffoli Gate: An MZI Count Optimized Design and Logical Applications",
      authors: "S Awasthi, B Chowdhury, SK Metya, A Majumder",
      journal: "Optical and Quantum Electronics",
      publisher: "Springer",
      year: 2022,
      doi: "10.1007/s11082-022-04358-4",
    },
    {
      title: "A Variation Resilient Keeper Design for High Performance Domino Logic Applications",
      authors: "J Kandpal, TR Pokhrel, S Saini, A Majumder",
      journal: "Integration, The VLSI Journal",
      publisher: "Elsevier",
      year: 2022,
      doi: "10.1016/j.vlsi.2022.08.007",
    },
    {
      title: "A low power and PVT variation tolerant mux-latch for serializer interface and on-chip serial link",
      authors: "M Kumar, A Majumder, AJ Mondal, A Raychowdhury, BK Bhattacharyya",
      journal: "Integration, The VLSI Journal",
      publisher: "Elsevier",
      year: 2022,
      doi: "10.1016/j.vlsi.2022.08.008",
    },
    {
      title: "Simulation and Analysis of a Digitally Controlled Differential Delay Circuit Under Process, Voltage, Temperature and Noise due to Injection of High Current",
      authors: "M Kumar, A Majumder, AJ Mondal",
      journal: "Journal of Circuits, Systems and Computers",
      publisher: "World Scientific Publishers",
      year: 2022,
      doi: "10.1142/S0218126622502760",
    },
    {
      title: "Impact of Work Function Engineering on Strained Silicon Based Double Gated Junction-less Transistor",
      authors: "TR Pokhrel, A Majumder",
      journal: "Silicon",
      publisher: "Springer",
      year: 2022,
      doi: "10.1007/s12633-022-01661-3",
    },
    {
      title: "Exploring Reversible NOR from 4*4 Modified Fredkin Gate and its Optical Mapping using LiNbO3 Based MZI",
      authors: "S. Awasthi, B. Chowdhury, Z. Haider, J. Ali, P. Yupapin, S.K. Metya, A. Majumder",
      journal: "Journal of Computational Electronics",
      publisher: "Springer",
      year: 2022,
      doi: "10.1007/s10825-021-01850-0",


    },
    {
      title: "A Dynamic Current Mode Design Approach of 2/3 Prescaler for Phase Locked Loop Application",
      authors: "S.K. Saw, U. Nanda, N. Laskar, A. Majumder",
      journal: " Analog Integrated Circuits and Signal Processing",
      publisher: "Springer",
      year: 2021,
      doi: "10.1007/s10470-021-01966-0",
    },
    {
      title: "Clock Gated Variable Frequency Signaling to Alleviate Power Supply Noise in a Packaged IC",
      authors: "P. Bhattacharjee, P. Rana, B.K. Bhattacharyya, A. Majumder",
      journal: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems",
      publisher: "IEEE",
      year: 2021,
      doi: "10.1109/TCAD.2021.3099438",
    },
    {
      title: "Vector Controlled Delay Cell with Nearly Identical Rise/Fall Time for Processor Clock Application",
      authors: "P. Bhattacharjee, B.K. Bhattacharyya, A. Majumder",
      journal: "Informacije MIDEM - Journal of Microelectronics",
      publisher: "Electronic Components and Materials, Slovenia",
      year: 2021,
      doi: "10.33180/InfMIDEM2021.202",
    },
    {
      title: "Optical Configuration of N:2N Reversible Decoder using LiNbO3 based Mach-Zehnder Interferometer",
      authors: "S. Awasthi, B. Chowdhury, Z. Haider, J. Ali, P. Yupapin, S.K. Metya, A. Majumder",
      journal: "Applied Optics",
      publisher: "OSA",
      year: 2021,
      doi: "10.1364/AO.422790",


    },
    {
      title: "A Vector Controlled Variable Delay Circuit to Develop Near Symmetric Output Rise/Fall Time",
      authors: "P Bhattacharjee, BK Bhattacharyya, A Majumder",
      journal: "Circuits, Systems, and Signal Processing",
      publisher: "Springer",
      year: 2020,
      doi: "10.1007/s00034-020-01546-z",
    },
    {
      title: "Optical Configuration of Modified Fredkin Gate using Lithium Niobate based Mach Zehnder Interferometer",
      authors: "S Awasthi, A Biswas, SK Metya, A Majumder",
      journal: "Applied Optics",
      publsiher: "OSA",
      year: 2020,
      doi: "10.1364/AO.397451",
    },
    {
      title: "Modeling and Analysis of a Hybrid CS-CMOS Ring VCO with Wide Tuning Range",
      authors: "M. Maiti, A. Majumder, S. Chakrabartty, H. Song, B.K. Bhattacharyya",
      journal: "Microelectronics Journal",
      publisher: "Elsevier",
      year: 2020,
      doi: "10.1016/j.mejo.2020.104752",
    },
    {
      title: "Mathematical Understanding of a Data Reconstruction Methodology in Point-to-point Interconnect",
      authors: "A. Tarafdar, U.K. Bera, B.K. Bhattacharyya, A Majumder",
      journal: "IEEE VLSI Circuit & System Letter",
      publisher: "IEEE 6 (1)",
      year: 2020,


    },
    {
      title: "Passive Element free Variation Aware Decision Circuit for 40 Gb/s CDR Application",
      authors: "M Maiti, A Paul, SK Saw, A Majumder",
      journal: "Microsystem Technologies",
      publisher: "Springer",
      year: 2019,
      doi: "10.1007/s00542-019-04683-x",
    },
    {
      title: "A Hybrid Design Approach of PVT Tolerant, Power Efficient Ring VCO",
      authors: "M. Maiti, S.K. Saw, A.J. Mondal, A. Majumder",
      journal: "Ain Shams Engineering Journal",
      publisher: "Elsevier",
      year: 2019,
      doi: "10.1016/j.asej.2019.10.009",
    },
    {
      title: "A Design Approach of Higher Oscillation VCO made of CS Amplifier with Varying Active Load",
      authors: "S.K. Saw, S.K. Yadav, M. Maiti, A.J. Mondal, A. Majumder",
      journal: "Microsystem Technologies",
      publisher: "Springer",
      year: 2019,
      doi: "10.1007/s00542-019-04500-5",
    },
    {
      title: "A Power Efficient PFD-CP Architecture for High Speed Clock and Data Recovery Application",
      authors: "M. Maiti, S.K. Saw, V. Nath, A. Majumder",
      journal: "Microsystem Technologies",
      publisher: "Springer",
      year: 2019,
      doi: "10.1007/s00542-019-04458-4",
    },
    {
      title: "PVT Aware Design of a Dead-Zone Free High Speed Phase Frequency Detector in 90nm CMOS",
      authors: "S.K. Saw, M. Maiti, P. Meher, A. Majumder",
      journal: "Recent Advances in Electrical & Electronic Engineering 13 (4)",
      year: 2019,
      doi: "10.2174/2352096512666190314111752",
    },
    {
      title: "A Variation Tolerant Data Dependent Clock Gating Approach for PSN Attenuated Low Power Digital IC",
      authors: "P. Bhattacharjee, D. Sarkar, A. Majumder",
      journal: "Ain Shams Engineering Journal",
      publisher: "Elsevier",
      year: 2019,
      doi: "10.1016/j.asej.2018.11.010",


    },
    {
      title: "Variation Aware Design of 50Gbit/s, 5.027fJ/bit Serializer using Latency Combined Mux-Dual Latch for Inter-Chip Communication",
      authors: "A. Majumder, M. Das, S.K. Saw, A.J. Mondal, B.K. Bhattacharyya",
      journal: "IEEE Transactions on Circuits and Systems I: Regular Papers",
      year: 2018,
      doi: "10.1109/TCSI.2018.2877571",
    },
    {
      title: "An Energy Efficient PVT Aware Novel CML-TG based Mux-Latch Circuit Serializes High Rate Data",
      authors: "A. Majumder, M. Das, S.K. Saw, B.K. Bhattacharyya",
      journal: "Microsystem Technologies",
      publisher: "Springer",
      year: 2018,
      doi: "10.1007/s00542-018-4093-x",
    },
    {
      title: "A Variation Aware Robust Gated Flip-Flop for Power Constrained FSM Application",
      authors: "P. Bhattacharjee, A. Majumder",
      journal: "Journal of Circuit, System and Computers",
      publisher: "World Scientific Publishers, Vol-28, No-07",
      year: 2018,
      doi: "10.1142/S0218126619501081",
    },
    {
      title: "A Variation Tolerant Current Mode Low Swing Signaling Approach for Gigascale On-chip Interface Circuit",
      authors: "A. Majumder, B. Nath, M. Das, B.K. Bhattacharyya",
      journal: "AEU-International Journal of Electronics and Communications",
      publisher: "Elsevier, Vol-93, PP-140-149",
      year: 2018,
      doi: "10.1016/j.aeue.2018.05.037",
    },
    {
      title: "A Power Efficient Charge Pump Circuit Configuration for Fast Locking PLL Application",
      authors: "S.K. Saw, P. Das, M. Maiti, A. Majumder",
      journal: "Microsystem Technologies",
      publisher: "Springer",
      year: 2018,
      doi: "10.1007/s00542-018-4037-5",
    },
    {
      title: "A Novel Gating Approach to Alleviate Power and Ground Noise in Silicon Chip",
      authors: "A. Majumder, P. Bhattacharjee, T.D. Das",
      journal: "Journal of Circuits, Systems and Computers",
      publisher: "World Scientific Publishers, Vol-27, No-9, August",
      year: 2018,
      doi: "10.1142/S0218126618501463",
    },
    {
      title: "Gain Improved Design of Cascode OTA using PMOS Based Positive Feedback",
      authors: "S. Rambabu, A. Majumder",
      journal: "IEEE VLSI Circuit and System Letters Vol-4, Issue-2, May, 2018",
      publisher: "IEEE",
      year: 2018,
    },
    {
      title: "Variation Aware Intuitive Clock Gating to Mitigate On- chip Power Supply Noise",
      authors: "A. Majumder, P. Bhattacharjee",
      journal: "International Journal of Electronics, Taylor & Francis, Vol-105, No-7",
      doi: "10.1080/00207217.2018.146087",
    },
    {
      title: "A New Current Profile Determination Methodology Incorporating Gating Logic to Minimize the Noise of CPU Chip by 40%",
      authors: "N. Laskar, S. Debnath, A. Majumder and B.K. Bhattacharyya",
      journal: "Journal of Circuit, System and Computers",
      publisher: "World Scientific Publishers, Vol. 27, Issue 3, Marc",
      year: 2018,
      doi: "10.1142/S0218126618500494",
    },
    {
      title: "A graphical approach to design and optimization of MOS amplifier",
      authors: "P. Bhattcharjee, A.J. Mondal, A. Majumder",
      journal: "Journal of Engineering Science and Technology (JESTEC), Vol-13, No-01, 2018",

    },
    {
      title: "Gated Clock Tree Circuit to Reduce the Noise in Silicon Chip",
      authors: "A. Majumder",
      journal: "Journal of Low Power Electronics, American Scientific Publisher, Vol-13, No-4, Decembe",
      year: 2017,
      doi: "10.1166/jolpe.2017.1522",
    },
    {
      title: "A 65nm Design of 0.6V/8.98µW PVT Aware Dynamic Analog Comparator for High Speed Data Reconstruction Applications",
      authors: "A. Majumder, A.J. Mondal, B.K. Bhattacharyya",
      journal: "Journal of Low Power Electronics, American Scientific Publisher, Vol-13, No-3, Septembe",
      year: 2017,
      doi: "10.1166/jolpe.2017.1496",
    },
    {
      title: "Voltage Keeper Based 28.27µW New Frequency Divider Circuit in 90nm Technology for Gigascale SerDes Application",
      authors: "B. Nath, A. Majumder, M. Das, A.J. Mondal, P. Chakraborty, B.K. Bhattacharyya",
      journal: "IEEE VLSI Circuit and System Letters, Vol-3, Issue-2, June 2017",
    },
    {
      title: "A Process Aware Delay Circuit with Reduce Impact of Input Switching at GHz Frequencies",
      authors: "A. J. Mondal, A. Majumder, B.K. Bhattacharyya, P. Chakraborty",
      journal: "IEEE VLSI Circuit and System Letters Vol-3, Issue-2, June 2017",
    },
    {
      title: "A 23.52µW/0.7V Multistage Flip-flop Architecture steered by Leakage Control Transistor based Gated Clock",
      authors: "P. Bhattacharjee, A. Majumder, B. Nath",
      journal: "IEIE Transactions on Smart Processing and Computing, Vol-6, No-3, Jun",
      year: 2017,
      doi: "10.5573/IEIESPC.2017.6.3.220",
    },
    {
      title: "Mathematical Formulation to Design and Implementation of a Low voltage swing transceiver circuit",
      authors: "A. J. Mondal, A. Majumder, B.K. Bhattacharyya",
      journal: "Integration, The VLSI Journal",
      publisher: "Elsevier, Vol-58, pp. 356-368, Jun",
      year: 2017,
      doi: "10.1016/j.vlsi.2016.11.013",
    },
    {
      title: "Threshold Adjustment of Receiver Chip to Achieve a Data Rate > 66Gbit/s in Point-to-point Interconnect",
      authors: "A. Majumder, Abir J. Mondal, Bidyut K. Bhattacharyya",
      journal: "Integration, The VLSI Journal",
      publisher: "Elsevier, Vol. 58, pp. 348-355, Jun",
      year: 2017,
      doi: "10.1016/j.vlsi.2016.11.004",
    },
    {
      title: "Reconstruction of single pulse originally having 40psec width coming from a lossy and noisy channel in point to point interconnect",
      authors: "A. Majumder, B.K. Bhattacharyya",
      journal: "Turkish Journal of Electrical Engineering and Computer Sciences, Vol. 25, No. 03, PP. 2055 - 2065, Ma",
      year: 2017,
      doi: "10.3906/elk-1507-209",
    },
    {
      title: "Pay-cloak: A Biometric Back Cover for Smartphones: Facilitating Secure Contactless Payments and Identity Virtualization at Low Cost to the End Users",
      authors: "A. Majumder, J. Goswami, S. Ghosh, R. Shrivastawa, S.P. Mohanty and B.K. Bhattacharyya",
      journal: "IEEE Consumer Electronics Magazine, Vol. 6, Issue - 2, April",
      publisher: "IEEE",
      year: 2017,
      doi: "10.1109/MCE.2016.2640739",
    },
    {
      title: "Swing-Pay: One Card Meets All User Payment and Identity Needs: A Digital Card Module using NFC and Biometric Authentication for Peer-to-Peer Payment",
      authors: "S. Ghosh, A. Majumder, J. Goswami, A. Kumar, S.P. Mohanty, B.K. Bhattacharyya",
      journal: "IEEE Consumer Electronics Magazine, Vol. 6, Issue - 1, January",
      publisher: "IEEE",
      year: 2017,
      doi: "10.1109/MCE.2016.2614522",


    },
    {
      title: "Cycle in Conventional Combinational Circuits: A Comprehensive Survey",
      authors: "A. Majumder, B. Nath, D. Sarkar, M. Das",
      journal: "International Journal Advanced Science & Technology, Korea, Vol. 80, Jul",
      year: 2015,
      doi: "10.14257/ijast.2015.80.05",
    },
    {
      title: "A 43µwatt 3-bit Flash ADC designed with TMCC and Bit Referenced Encoder in 180 nm CMOS Technology",
      authors: "A. Kar, A. Majumder",
      journal: "International Journal Advanced Science & Technology, Korea, Vol. 79, Jun",
      year: 2015,
      doi: "10.14257/ijast.2015.79.05",
    },
    {
      title: "Design of an H-shaped Microstrip Patch Antenna for Bluetooth Applications",
      authors: "A. Majumder",
      journal: "International Journal of Innovation and Applied Studies, Vol. 3, no. 4, pp. 987-994, August 2013",
      year: 2013,
      DOI:"..",
    },
    {
      title: "Rectangular Microstrip Patch Antenna using Co-axial feeding technique to operate in S- Band",
      authors: "A. Majumder",
      journal: "International Journal of Engineering Trends and Technology, Vol. 4, Issue-4, pp. 1206 - 1210, April 2013",
      year: 2013,
      DOI:"..",
    },
    {
      title: "A Design of RF - Based Programmable Frequency Divider for IEEE 802.11a Wireless Access",
      authors: "A. Majumder",
      journal: "IOSR Journal, Vol. 4, Issue 1, pp. 01-10, Nov - Dec 2012",
      year: 2012,
      DOI:"..",
    },
    // Add more journal publications here...
  ],
  Conferences: [
  {
  title: "Exploring Dual threshold in a Double Gated TIG JLT for a logic Application", 
  authors:"T. Pokhrel, A. Majumder",
  conference: "8th IEEE Electron Devices Technology and Manufacturing Conference (EDTM 2024)",
  location: "Bangalore, India",
  date:"03-06 March 2023",
  },
  {
  title: "Design of VFC with Programmable Frequency Ramp to control on-chip switching current profile", 
  authors:"P Bhattacharjee, A. Majumder",
  conference: "37th IEEE International Conference on VLSI Design (VLSID 2024)",
  location: "Kolkata,", 
  location:"India (Nominated for Best Paper Award)",
  doi: "10.1109/VLSID60093.2024.00104.",
  date: "6-10 January 2024",
  },
  {
  title: "Area and Power Efficient Differential Programmable Delay Cell", 
  authors:"K Chakraborty, A. Majumder, AJ Mondal",
  conference: "IEEE 20th India Council International Conference (INDICON-2023)",
  location: "Hyderabad",
  date:"14-17 December 2023",
  },
  {
  title: "Double Gate JLT Based New TIGFET for Dynamic C2MOS Application", 
  authors:"T. Pokhrel, A. Majumder",
  conference: "19th IEEE Asia Pacific Conference on Circuits and Systems (APCCAS 2023)",
  location: "Hyderabad",
  date:"19-22 November 2023",
  },
  {
  title: "Comparative Exploration of Gate Count and Leakage Optimized D-Latch in Nanometer CMOS", 
  authors:"P Bhattacharjee, GN Goud, VK Singh, VP Yadav, AJ Mondal, A Majumder",
  conference: "IEEE 33rd International Conference RADIOELEKTRONIKA",
  location: "University of Pardubice, Czech Republic", 
  doi: "10.1109/RADIOELEKTRONIKA57919.2023.1010906",
  date:"19-20 April 2023",
  },
  {
  title: "Ti:LiNbO3 Based EO-MZI Count Optimized Design of Reversible Peres Gate", 
  authors:"B Chowdhury, S Awasthi, MA Jalil, A Majumder, SK Metya",
  conference: "IEEE 33rd International Conference RADIOELEKTRONIKA",
  location: "University of Pardubice, Czech Republic", 
  doi: "10.1109/RADIOELEKTRONIKA57919.2023.10109088",
  date:"19-20 April 2023",
  
  },
  {
  title: "Configuring Logic Operations from New Reversible Toffoli Gate Using Pockel&apos;s Effect of Ti: LiNbO3", 
  authors:"S. Awasthi, S. Sharma, B. Chowdhury, G. Singh, S.K. Metya, A. Majumder",
  conference: "IEEE Region 10 Symposium (TENSYMP 2022)",
  date: "01-03 July 2022 cation:", 
  location: "IIT Bombay, India",
  doi: "10.1109/TENSYMP54529.2022.9864374",
  },
  {
  title: "Study of Power-Delay Improved Logic Circuit Using Strained Silicon DG-JLT with Variable Gate Work Function", 
  authors:"T.R. Pokhrel, A. Majumder",
  conference: "IEEE Region 10 Symposium (TENSYMP 2022)",
  date: "01-03 July 2022 cation:", 
  location: "IIT Bombay, India",
  doi: "10.1109/TENSYMP54529.2022.9864448",
  
  },
  {
  title: "Analysis for Cost Optimized EO Design of a Reversible Boolean Function using MZIs", 
  authors:"S. Awasthi, B. Chowdhury, M.A. Ali, J. Ali, P. Yupapin, S.K. Metya, A. Majumder",
  conference: "5th International Conference on Optical & Wireless Technologies (OWT 2021), Springer",
  date:"9-10 October 2021",
  location: "Jaipur, India",
  doi: "10.1007/978-981-19-1645-8_6",
  },
  {
  title: "MZI based Electro-Optic Reversible XNOR/XOR Derived from Modified Fredkin Gate", 
  authors:"S. Awasthi, S.K. Metya, A. Majumder",
  conference: "3rd International Conference on Machine Intelligence and Signal Processing (MISP-2021), Springer",
  date:"23-25 September 2021",
  location: "Arunachal Pradesh, India",
  doi: "10.1007/978-981-19-1520-8_8",
  },
  {
  title: "Electro-optic 2:1 Reversible MUX Based on Ti diffused Lithium Niobate MZI", 
  authors:"S. Awasthi, S.K. Metya, A. Majumder",
  conference: "IEEE 35ᵗʰ Symposium on Microelectronics Technology (SBMicro-2021)",
  date:"23-27 August 2021",
  location: "Brazil",
  doi: "10.1109/SBMicro50945.2021.9585758",
  },
  {
  title: "Analysis of a Transistor Count Optimized Charge Pump for Telecommunication Application", 
  authors:"P. Das, A. Majumder",
  conference: "IEEE ZINC 2021",
  date: "6-27 May 2021",
  location: "Novi Sad, Serbia",
  doi: "10.1109/ZINC52049.2021.9499294",
  
  },
  {
  title: "Performances of a Low Power Latch due to PSN", 
  authors:"M Kumar, A Majumder, AJ Mondal",
  conference: "IEEE Electrical Design of Advanced Packaging and Systems (EDAPS-2020)",
  date: "14-16 December 2020",
  location: "Shenzhen, China",
  doi: "10.1109/EDAPS50281.2020.9312907",
  },
  {
  title: "Electro-Optic Reversible Toffoli Gate with Optimal Count of LiNbO3 Mach-Zehnder Interferometers", 
  authors:"S Awasthi, S Sharma, SK Metya, A Majumder",
  conference: "IEEE Nordic Circuits and Systems Conference (NorCAS 2020)",
  date: "27-28 October 2020",
  location: "Oslo, Norway",
  doi: "10.1109/NorCAS51424.2020.9265133",
  
  },
  {
  title: "A 90nm PVT Tolerant Current Mode Frequency Divider with Wide Locking Range", 
  authors:"M. Maiti, S. Chakrabartty, A. Al-Shidaifat, H. Song, B.K. Bhattacharyya, A. Majumder",
  conference: "IEEE Nordic Circuits and Systems Conference (NorCAS 2020)",
  date: "27-28 October 2020",
  location: "Oslo, Norway",
  doi: "10.1109/NorCAS51424.2020.9264995",
  
  },
  {
  title: "A Dynamic Current Mode D-Flipflop for High Speed Application",
  authors:"M. Maiti, A. Paul, S.K. Saw, A. Majumder",
  conference:"IEEE, 3rd International Conference on Electronics, Materials Engineering and Nano-Technology (IEMENTech - 2019)",
  date: "29 - 31st August 2019",
  location:"Kolkata, India",
  doi: "10.1109/IEMENTech48150.2019.8981081",
  
  },
  {
  title: "A Variable Delay Circuit to Develop Identical Rise/Fall Time in the Output", 
  authors:"P. Bhattacharjee, A. Majumder",
  conference: "2nd International Conference on Computational Advancement in Communication circuit and System (ICCACCS-2018), Springer (Best Paper Award)",
  date: "23 - 24th November 2018", 
  location:"Kolkata, India",
  doi: "10.1007/978-981-13-8687-9_28",
  },
  {
  title: "Data Dependent Clock Gating Approach for Low Power Sequential System", 
  authors:"D. Sarkar, P. Bhattacharjee, A. Majumder",
  conference: "5th International Conference on Microelectronics, Circuits & Systems (MICRO - 2018)",
  date: "19th - 20th May 2018",
  location: "Bhubaneswar, India",
  },
  {
  title: "Low Power Fast Locking Charge Pump Architecture for PLL Application", 
  authors:"P. Das, S.K. Saw, M. Maiti, A. Majumder",
  conference: "5th International Conference on Microelectronics, Circuits & Systems (MICRO - 2018)",
  date: "19 - 20th May 2018",
  location: "Bhubaneswar, India",
  },
  {
  title: "A Current Mode VCO Design Approach for Higher Oscillation Frequency", 
  authors:"S.K. Saw, M. Maiti, M. Jana, A.J. Mondal, A. Majumder",
  conference: "5th International Conference on Microelectronics, Circuits & Systems (MICRO - 2018)",
  date: "19 - 20th May 2018",
  location: "Bhubaneswar, India",
  doi: "10.1007/978-981-15-2854-5_33",
  },
  {
  title: "PVT Aware Design of a Dead-Zone Free High Speed Phase Frequency Detector in 90nm CMOS", 
  authors:"S.K. Saw, M. Maiti, A. Majumder",
  conference: "5th International Conference on Microelectronics, Circuits & Systems (MICRO - 2018)",
  date: "19 - 20th May 2018",
  location: "Bhubaneswar, India",
  doi: "10.2174/2352096512666190314111752",
  },
  {
  title: "A 90nm Design of Charge Pump Circuit for Perfect Current Matching", 
  authors:"S.K. Saw, P. Das, M. Maiti, A. Majumder",
  conference: "6th International Conference on Computing, Communication and Sensor (CCSN - 2017)",
  date: "30-31 December 2017",
  location: "Kolkata, India",
  },
  {
  title: "A 90nm Design of Low Power Voltage Controlled Oscillator with Wide Tuning Range", 
  authors:"M. Maiti, S.K. Saw, A. Majumder",
  conference: "6th International Conference on Computing, Communication and Sensor (CCSN - 2017)",
  date: "30-31 December 2017",
  location: "Kolkata, India",
  },
  {
  title: "Embedding of TG-CML to Design a Novel High Data Rate Multiplexer", 
  authors:"A. Majumder, M. Das, S.K. Saw, B.K. Bhattacharyya",
  conference: "6th International Conference on Computing, Communication and Sensor (CCSN - 2017)",
  date: "30-31 December 2017",
  location: "Kolkata, India",
  },
  {
  title: "A 90nm Novel Mux-Dual Latch Design Approach for Gigascale Serializer Application", 
  authors:"M. Das, A. Majumder, A.J. Mondal, B.K. Bhattacharyya",
  conference: "3rd IEEE International Symposium on Nano-electronic and Information Systems (iNIS - 2017)",
  date: "18-20th December,", 
  location:"Bhopal, India",
  doi: "10.1109/iNIS.2017.46",
  },
  {
  title: "Current Profile Generated by Gating Logic Reduces Power Supply Noise of Integrated CPU Chip", 
  authors:"A. Majumder, P. Bhattacharjee",
  conference: "3rd IEEE International Symposium on Nano-electronic and Information Systems (iNIS - 2017)",
  date: "18-20th December 2017",
  location: "Bhopal, India. (Student Travel Grant from TC-VLSI, IEEE Computer Society, USA",
  doi: "10.1109/iNIS.2017.53",
  },
  {
  title: "Binary Counter Based Gated Clock Tree for Integrated CPU Chip", 
  authors:"B. Nath, A. Majumder",
  conference: "3rd IEEE International Symposium on Nano-electronic and Information Systems (iNIS - 2017)",
  date: "18-20th December 2017",
  location: "Bhopal, India",
  doi: "10.1109/iNIS.2017.54",
  },
  {
  title: "A Design Methodology for MOS Current Mode Logic VCO", 
  authors:"A. J. Mondal, A. Majumder, B.K. Bhattacharyya",
  conference: "3rd IEEE International Symposium on Nano-electronic and Information Systems (iNIS - 2017)",
  date: "18-20th December 2017",
  location: "Bhopal, India",
  doi: "10.1109/iNIS.2017.45",
  },
  {
  title: "A 90nm Gain Enhanced Modified Cascode OTA Structure with Positive Feedback Load", 
  authors:"S. Rambabu, A. Majumder, A.J. Mondal",
  conference: "IEEE International Conference on Communication and Electronics Systems (ICCES 2017)",
  date: "19-20th October 2017",
  location: "Coimbatore, India",
  doi: "10.1109/CESYS.2017.8321266",
  },
  {
  title: "LECTOR Based Clock Gating for Low Power Multi-Stage Flip Flop Applications", 
  authors:"P. Bhattacharjee, B. Nath, A. Majumder",
  conference: "IEEE & IEIE 16th International Conference on Electronics, Information, and Communication (ICEIC - 2017)",
  date: "11-14 January 2017",
  location: "Phuket, Thailand. (Best Paper Award)",
  
  },
  {
  title: "LECTOR Based Gated Clock Approach to Design Low Power FSM for Serial Adder", 
  authors:"P. Bhattacharjee, A. Majumder",
  conference: "2nd IEEE International Symposium on Nano-electronic and Information Systems (iNIS - 2016)",
  date: "19-21st December,", 
  location:"Gwalior, India",
  doi: "10.1109/iNIS.2016.064",
  },
  {
  title: "A 90 nm Leakage Control Transistor Based Clock Gating for Low Power Flip Flop Applications", 
  authors:"P. Bhattacharjee, A. Majumder, T.D. Das",
  conference: "IEEE 59th International Midwest Symposium on Circuit and System (MWSCAS - 2016)",
  location: "AbuDhabi, UAE",
  date: "6-19 October 2016",
  doi: "10.1109/MWSCAS.2016.7870034",
  },
  {
  title: "A Constraint Driven Technique For MOS Amplifier Design", 
  authors:"P. Bhattacharjee, A.J. Mondal, A. Majumder",
  conference: "IEEE 20th International Symposium on VLSI Design and Test (VDAT-2016)",
  date: "24-27 May 2016",
  location: "IIT Guwahati, India",
  doi: "10.1109/ISVDAT.2016.8064882",
  
  },
  {
    authors:"R.P. Acharya, A.J. Mondal, A. Majumder",
  title: "A Method To Design A Comparator For Sampled Data Processing Applications", 
  conference: "IEEE 20th International Symposium on VLSI Design and Test (VDAT-2016)",
  date: "24-27 May 2016",
  location: "IIT Guwahati, India",
  doi: "10.1109/ISVDAT.2016.8064863",
  },
  {
  title: "Design of Low Noise High Speed Novel Dynamic Analog Comparator in 65nm Technology", 
  authors:"A. Majumder, M. Das, B. Nath, A.J. Mondal, B.K. Bhattacharyya",
  conference: "IEEE 26th International Conference on RADIOELEKTRONIKA 2016",
  date: "19-20 April 2016, Kosice, Slovakia",
  doi: "10.1109/RADIOELEK.2016.7477385",
  },
  {
  title: "Design and Analysis of New Energy Efficient Glitch Free Adiabatic Logic Circuits", 
  authors:"R. Kaushik, A. Majumder, A.J. Mondal",
  conference: "IEEE 26th International Conference on RADIOELECTRONIKA 2016",
  date: "19-20 April 2016, Kosice, Slovakia",
  doi: "10.1109/RADIOELEK.2016.7477387",
  },
  {
  title: "Amplifier Design and Optimization Using non-Linear Programming", 
  authors:"P. Bhattacharjee, A.J. Mondal, A. Majumder",
  conference: "IEEE 26th International Conference on RADIOELECTRONIKA 2016",
  date: "19-20 April 2016, Kosice, Slovakia",
  doi: "10.1109/RADIOELEK.2016.7477339",
  },
  {
  title: "Power and Energy Efficient Logic Design using Stacking Effect of Transistors", 
  authors:"A. Majumder, P. Deb, S.K. Yadav",
  conference: "IEEE International Conference on Electrical, Electronics and Optimization Techniques (ICEEOT 2016)",
  date: "03-05 March 2016",
  location: "Chennai, India",
  doi: "10.1109/ICEEOT.2016.7754982",
  
  },
  {
    authors:"P. Deb, A. Majumder",
  title: "Leakage Reduction Methodology of 1-bit Full Adder in 180nm CMOS Technology", 
  conference: "3rd International Conference on Devices, Circuits and Systems, IEEE",
  date:"03-05 March 2016",
  location: "Coimbatore, India, 2016",
  doi: "10.1109/ICDCSyst.2016.7570636",
  },
  {
  title: "Mathematical Modeling and Analysis of New Modified Glitch Free Adiabatic Inverter Circuit with Trapezoidal Power Supply",
  authors:"A. Majumder, R. Kaushik",
  conference: "IEEE International Conference on VLSI Systems, Architecture, Technology and Applications (VLSI SATA 2016)",
  date: "10-12 January 2016",
  location: "Bangalore, India",
  doi: "10.1109/VLSI-SATA.2016.7593062.",
  
  
  },
  {
  title: "A Methodology to Achieve Over 25Gbit/s data rate in Point-to-Point Interconnect", 
  authors:"A. Majumder, A.J. Mondal, V. Chaudhary, B.K. Bhattacharyya",
  conference: "11th International conference on Microwave, Antenna, Propagation & Remote Sensing (ICMARS 2015)",
  date: "IEEE-GRSS, 15-17 December 2015",
  location: "Jodhpur, India",
  },
  {
  title: "A Methodology of High Speed Signaling through strip-line Interconnect using Resistive Channel to Minimize ISI Noise", 
  authors:"A. Majumder, B. Chowdhury, V. Chaudhary, P. Chakraborty, B.K. Bhattacharyya",
  conference: "11th International conference on Microwave, Antenna, Propagation & Remote Sensing (ICMARS 2015) IEEE-GRSS",
  date: "15-17 December 2015",
  location:"Jodhpur, India",
  },
  {
  title: "Generation of Chaos using a Simple Electronic Circuit", 
  authors:"A. Majumder, D.T. Reddy, R. Shrivastawa",
  conference: "IEEE International Conference on Applied and Theoretical Computing and Communication Technology (ICATCCT 2015)",
  date: "29-31 October 2015",
  location: "Karnataka, India",
  },
  {
  title: "Cost Efficient Realization & Synthesis of Reversible Pre-settable Program Counter for Processor", 
  authors:"A. Majumder, P.L. Singh, B. Chowdhury, V. Kumar",
  conference: "IEEE International Conference on Applied & Theoretical Computing and Communication Technology (ICATCCT - 2015)",
  date: "29-31 October 2015",
  location: "Karnataka, India",
  },
  {
  title: "Development of a Prototype to detect Speed Limit Violation for Better Traffic Management", 
  authors:"J. Goswami, S. Ghosh, A. Majumder, S. Katiyar",
  conference: "8th IEEE International Conference on Contemporary Computing (IC3-2015)",
  date: "20-22 August 2015",
  location: "Noida, India",
  },
  {
  title: "Comparative Analysis of Low Power Novel Encoders for Flash ADC in 45nm Technology", 
  authors:"A. Kar, M. Das, B. Nath, D. Sarkar, A. Majumder",
  conference: "IEEE International Conference on Smart Technologies and Management for Computing, Communication, Controls, Energy & Materials (ICSTM - 2015)",
  location: "Chennai, India",
  date: "06-08 May 2015",
  },
  {
  title: "Design of Ultra Low Power Novel 3-Bit Flash ADC in 45nm CMOS Technology", 
  authors:"M. Das, B. Nath, D. Sarkar, A. Kar, A. Majumder",
  conference: "IEEE International Conference on Smart Technologies and Management for Computing, Communication, Controls, Energy & Materials (ICSTM - 2015)",
  location: "Chennai, India",
  date: "06-08 May 2015",
  },
  {
  title: "Issues in NFC as a form of Contactless Communication: A Comprehensive Survey", 
  authors:"S. Ghosh, J. Goswami, A. Kumar, A. Majumder",
  conference: "IEEE International Conference on Smart Technologies and Management for Computing, Communication, Controls, Energy & Materials (ICSTM - 2015)",
  location: "Chennai, India",
  date: "06-08 May 2015",
  },
  {
  title: "A Simplified Design Approach for Efficient Computation on DCT", 
  authors:"D. Muchahary, A.J. Mondal, R.S. Parmer, A.D. Borah, A. Majumder",
  conference: "5th IEEE International Conference on Communication System and Network Technologies (CSNT-2015)",
  date: "04-06 April 2015",
  location: "Gwalior, India",
  },
  {
  title: "FIR Low Pass filter design using Craziness Base Particle Swarm Optimization Technique", 
  authors:"A.J. Mondal, A.D. Borah, D. Muchahary, A. Majumder",
  conference: "IEEE International Conference on Communication and Signal Processing (ICCSP-2015)",
  date: "02-04 April 2015",
  location: "Tamilnadu, India",
  },
  {
  title: "A CORDIC Based Design Technique for Efficient Computation of DCT", 
  authors:"D. Muchahary, A.J. Mondal, A. Majumder",
  conference: "IEEE International Conference on Communication and Signal Processing (ICCSP-2015)",
  date: "02-04 April 2015",
  location: "Tamilnadu, India",
  },
  {
  title: "Generation and Performance Evaluation of Reconfigurable Random Routing Algorithm for 2D Mesh NOC", 
  authors:"A.J. Mondal, S.K. Singh, A. Majumder",
  conference: "16th IEEE Latin American Test Symposium (LATS 2015)",
  date: "25-27 March 2015",
  location: "Mexico",
  },
  {
  title: "Generation and Performance Evaluation of Reconfigurable Fault Tolerant Routing Algorithm for 2D Mesh NOC", 
  authors:"S.K. Singh, A.J. Mondal, A. Majumder",
  conference: "3rd International Conference on Recent Trends in Computing 2015, (Procedia Computer Science, Elsevier, Vol-57, pp: 232-240).",
  date:"12-13 March 2015",
  location:"SRM University, Ghaziabad, India",
  },
  {
  title: "Synthesis & Realization of N-bit Reversible Register File used in Bus Organization of Processor Architecture", 
  authors:"A. Majumder, B. Chowdhury, P.L. Singh, R. RaI",
  conference: "3rd International Conference on Recent Trends in Computing 2015 (Procedia Computer Science, Elsevier, Vol-57, pp: 305-312)",
  date: "12-13 March 2015",
  location: "SRM University, Ghaziabad, India",
  },
  {
  title: "Efficient Design & Analysis of N-bit Reversible Shift Registers", 
  authors:"A. Majumder, P.L. Singh, B. Chowdhury, A.J. Mondal, V. Anand",
  conference: "3rd International Conference on Recent Trends in Computing 2015 (Procedia Computer Science, Elsevier, Vol-57, pp: 199-208)",
  date: "12-13 March 2015",
  location: "SRM University, Ghaziabad, India",
  },
  {
  title: "Reducing Delay & Quantum Cost in the Novel Design of Reversible Memory Elements", 
  authors:"P.L. Singh, A. Majumder, B. Chowdhury, A.J. Mondal, T.S. Shekawat",
  conference: "3rd International Conference on Recent Trends in Computing 2015 (Procedia Computer Science, Elsevier, Vol-57, pp: 189-198)",
  date: "12-13 March 2015",
  location: "SRM University, Ghaziabad, India",
  },
  {
  title: "A Novel Realization of Reversible LFSR for its Application in Cryptography", 
  authors:"P.L. Singh, A. Majumder, B. Chowdhury, R. Singh, N. Mishra",
  conference: "2nd IEEE International Conference on Signal Processing and Integrated Networks (SPIN 2015)",
  date: "19-20 February 2015",
  location: "Noida, India",
  },
  {
  title: "Investigation on Quine McCluscky Method: A Decimal Manipulation Based Novel Approach for the Minimization of Boolean Function", 
  authors:"A. Majumder, B. Chowdhury, A.J. Mondal, K. Jain",
  conference: "IEEE International Conference on Electronic Design, Computer Networks & Automated Verification (EDCAV 2015)",
  date: "29-30 January 2015",
  location: "pp - 08 - 12, Shillong, India",
  },
  {
  title: "Problems Encountered in Various Arbitration Techniques used in NOC Router: A Survey", 
  authors:"K. Jain, S.K. Singh, A. Majumder, A.J. Mondal",
  conference: "IEEE International Conference on Electronic Design, Computer Networks & Automated Verification (EDCAV 2015)",
  date: "29-30 January 2015",
  location: "pp - 124 - 129, Shillong, India",
  },
  {
  title: "A Novel Delay & Quantum Cost Efficient Reversible Realization of (2i x j) Random Access Memory", 
  authors:"A. Majumder, P.L. Singh, N. Mishra, A.J. Mondal, B. Chowdhury",
  conference: "IEEE International Conference on VLSI Systems, Architecture, Technology and Applications (VLSI SATA 2015)",
  date: "08-10 January 2015",
  location: "Bangalore, India",
  },
  {
  title: "Design of Ultra Low Power Flash ADC using TMCC & Bit Referenced Encoder in 180 nm Technology", 
  authors:"A. Kar, A. Majumder, A.J. Mondal, N. Mishra",
  conference: "IEEE International Conference on VLSI Systems, Architecture, Technology and Applications (VLSI SATA 2015)",
  date: "08-10 January 2015",
  location: "Bangalore, India",
    },
    // Add more conference publications here..",
  ]
}

export default function PublicationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">Publications</h1>
      <p className="text-sm text-gray-500 text-center mb-8 italic">
        <span className="text-red-600">Disclaimer:</span> This material is presented to ensure timely dissemination of scholarly and technical work&quot;,
        Copyright and all rights therein are retained by authors or by other copyright holders. All persons
        copying this information are expected to adhere to the terms and constraints invoked by each author&apos;s
        copyright. In most cases, these works may not be reposted without the explicit permission of the
        copyright holder&quot;,
      </p>

      <Tabs defaultValue="Books" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8 ">
          {publicationTypes.map(({ type, count }) => (
            <TabsTrigger key={type} value={type}>
              {type} <Badge variant="secondary" className="ml-2">{count}</Badge>
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(publications).map(([type, items]) => (
          <TabsContent key={type} value={type}>
            <ScrollArea className="w-full rounded-md border p-4 bg-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {items.map((pub, index) => (
                  <PublicationCard key={index} publication={pub} type={type} />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function PublicationCard({ publication, type }) {
  return (
    <Card className="w-full bg-blue-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{publication.title}</CardTitle>
        <CardDescription>{publication.authors}</CardDescription>
      </CardHeader>
      <CardContent>
        {type === "Books" && (
          <>
            <p>{publication.publisher}, {publication.year}</p>
            {publication.doi && <p>DOI: {publication.doi}</p>}
            {publication.isbn && <p>ISBN: {publication.isbn}</p>}
            {publication.note && <p className="italic mt-2">{publication.note}</p>}
          </>
        )}
        {type === "Book Chapters" && (
          <>
            <p>In: {publication.book}</p>
            <p>{publication.publisher}, {publication.year}</p>
            <p>ISBN: {publication.isbn}</p>
          </>
        )}
        {type === "Journals/Letters/Magazines" && (
          <>
            <p>{publication.journal}</p>
            <p>{publication.publisher}, {publication.year}</p>
            <p>DOI: {publication.doi}</p>
          </>
        )}
        {type === "Conferences" && (
          <>
            <p>{publication.conference}</p>
            <p>{publication.location}, {publication.date}</p>
            {publication.doi && <p>DOI: {publication.doi}</p>}
            {publication.note && <p className="italic mt-2">{publication.note}</p>}
          </>
        )}
      </CardContent>
    </Card>
  )
}