import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award, FileText, Users, Globe } from "lucide-react"

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
      <h1 className="text-4xl font-bold text-center mb-12">Professional Experience</h1>
      <Tabs defaultValue="employment" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
          <TabsTrigger value="employment">Work Experience</TabsTrigger>
          <TabsTrigger value="teaching">Admin & Teaching</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
          <TabsTrigger value="talks">Invited Talks</TabsTrigger>
          <TabsTrigger value="service">Professional Service</TabsTrigger>
          <TabsTrigger value="conferences">Conferences</TabsTrigger>
        </TabsList>

        <TabsContent value="employment">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Office History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">National Institute of Technology (NIT) Arunachal Pradesh, India</h3>
                  <p className="text-sm text-muted-foreground">17th April 2023 - Till Date</p>
                  <p>Assistant Professor, Grade-I, Level-12, Department of Electronics & Communication Engineering</p>
                </TimelineItem>
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">National Institute of Technology (NIT) Arunachal Pradesh, India</h3>
                  <p className="text-sm text-muted-foreground">22nd July 2022 - 16th April 2023</p>
                  <p>Assistant Professor, Grade-II, Level-11, Department of Electronics & Communication Engineering</p>
                </TimelineItem>
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">National Institute of Technology (NIT) Arunachal Pradesh, India</h3>
                  <p className="text-sm text-muted-foreground">6th Sept 2013 - 21st July 2022</p>
                  <p>Assistant Professor, Grade-II, Level-10, Department of Electronics & Communication Engineering</p>
                </TimelineItem>
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">The ICFAI University, Tripura, India</h3>
                  <p className="text-sm text-muted-foreground">19th July 2013 - 4th Sept 2013</p>
                  <p>Faculty Member (~Assistant Professor), Department of Electronics & Communication Engineering</p>
                </TimelineItem>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teaching" className="space-y-8">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Administration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">National Institute of Technology (NIT) Arunachal Pradesh, India</h3>
                  <p className="text-sm text-muted-foreground">Sept&apos; 2020 - Till Date</p>
                  <p>Nodal Officer / Faculty-in-Charge, Scholarship Cell</p>
                </TimelineItem>
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">National Institute of Technology (NIT) Arunachal Pradesh, India</h3>
                  <p className="text-sm text-muted-foreground">Aug&apos; 2020 - Till Date</p>
                  <p>Head, Social Entrepreneurship, Swachhta & Engagement, Greenery in Local Village</p>
                </TimelineItem>
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">National Institute of Technology (NIT) Arunachal Pradesh, India</h3>
                  <p className="text-sm text-muted-foreground">Feb&apos; 2018 - </p>
                  <p>Faculty-in-Charge, Associate Webmaster</p>
                </TimelineItem>
                <TimelineItem icon={<Briefcase className="h-4 w-4" />}>
                  <h3 className="font-semibold">The ICFAI University, Tripura, India</h3>
                  <p className="text-sm text-muted-foreground">Nov&apos; 2017 - Nov&apos; 2019</p>
                  <p>Warden, Siang Hostel & Rose Hostel</p>
                </TimelineItem>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Teaching Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li><b>Jan-Jun 2021:</b> VLSI System Design (M-Tech)</li>
                <li><b>Jan-Jun 2021:</b> VLSI Lab - Circuit Design (M-Tech)</li>
                <li><b>Jan-Jun 2021:</b> Electromagnetic Fields (B-Tech)</li>
                <li><b>Jul-Dec 2020:</b> Semiconductor Device Physics (M-Tech)</li>
                <li><b>Jul-Dec 2020:</b> Analog Circuit-I (B-Tech)</li>
                <li><b>Jul-Dec 2020:</b> Digital Logic Design (B-Tech)</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="awards">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Awards and Honors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">Korean Research Fellowship</h3>
                  <p className="text-sm text-muted-foreground">Selected for prestigious Korean Research Fellowship (Research Professor) in June 2020 at Inje University, South Korea.</p>
                </TimelineItem>
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">Brain Korea Post Doc researcher</h3>
                  <p className="text-sm text-muted-foreground">Selected as Brain Korea Post Doc researcher / Research Professor in August 2019 and February 2020 respectively at Sungkyunkwan University, South Korea (QS 2020 world rank = 95).</p>
                </TimelineItem>
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">Bentham Ambassador</h3>
                  <p className="text-sm text-muted-foreground">Appointed as Bentham Ambassador by Bentham Science Publishers for 2019-20.</p>
                </TimelineItem>
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">Best Research Award at Springer</h3>
                  <p className="text-sm text-muted-foreground">Best Research Award at Springer, 2nd International Conference on Computational Advancement in Communication circuit and System (ICCACCS-2018), 23 - 24th November 2018, Kolkata, India.</p>
                </TimelineItem>
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">Best Research Award at IETE</h3>
                  <p className="text-sm text-muted-foreground">Best Research Award at IETE Seminar on Advances in Smart Hardware Technologies (ASH-Tech 2018) Indore, 30th October 2018.</p>
                </TimelineItem>
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">Best Paper Award at 16th IEIE</h3>
                  <p className="text-sm text-muted-foreground">Best Paper Award at 16th IEIE International Conference on Electronics, Information, and Communication (ICEIC - 2017), Phuket, Thailand, 11-14th January 2017.</p>
                </TimelineItem>
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">B-Tech Project on Advanced Traffic Monitoring</h3>
                  <p className="text-sm text-muted-foreground">B-Tech Project on Advanced Traffic Monitoring System was awarded with Gold Medal and Best Hardware Project in May 2016.</p>
                </TimelineItem>
                <TimelineItem icon={<Award className="h-4 w-4" />}>
                  <h3 className="font-semibold">Recipient of Graduate Aptitude Test in Engineering (GATE) scholarship</h3>
                  <p className="text-sm text-muted-foreground">Recipient of Graduate Aptitude Test in Engineering (GATE) scholarship from Ministry of Human Resource & Development (MHRD), Govt. of India from July 2011 to May 2013.</p>
                </TimelineItem>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="talks">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Invited Talks</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li>Presented a talk on <strong><i>Clocking Strategies for PSN Reduction</i></strong> in an AICTE Sponsored Short Term Training Program on Mixed Signal Design approaches for Artificial Intelligence Processors at Lakireddy Bali Reddy College of Engineering, Mylavaram, Andhra Pradesh, 3rd February 2021, 2.00 - 4.00 pm.</li>
                <li>Presented a talk on <strong><i>FPGA Architecture: Art Behind it</i></strong> at a Seminar organized by Department of ECE, NIT Arunachal Pradesh, India on 20th September 2016.</li>
                <li>Presented a talk on <strong><i>Runtime Leakage Blocking and its Application to Design Low Power Memory</i></strong> at a Research Seminar at NIT Arunachal Pradesh, India on 3rd Sept&apos; 2016.</li>
                <li>Presented a talk on <strong><i>High Speed Signaling Using Copper Interconnect</i></strong> at a Research Seminar at NIT Arunachal Pradesh, India on 1st June 2015.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent className="space-y-8" value="service">
          <h1 className="text-3xl mb-8">Professional Services</h1>
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Reviewer in Journals/Magazines/Letters:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Integration, The VLSI Journal, <strong><i>Elsevier</i></strong></li>
                <li><strong><i>IEEE</i></strong> Transactions on Computer-Aided Design of Integrated Circuits and Systems (TCAD)</li>
                <li><strong><i>IEEE</i></strong> Transactions on Nanotechnology (TNANO)</li>
                <li><strong><i>IEEE</i></strong> Consumer Electronics Magazine (CEM)</li>
                <li>Microelectronics Journal, <strong><i>Elsevier</i></strong></li>
                <li>Indian Journal of Pure &amp; Applied Physics, <strong><i>CSIR-NISCAIR</i></strong></li>
                <li>Journal of Circuit, System &amp; Computers (JCSC), <strong><i>World Scientific Publishers</i></strong></li>
                <li>International Journal of Electronics (IJE), <strong><i>Taylor &amp; Francis</i></strong></li>
                <li>Applied Computing and Informatics, <strong><i>Elsevier</i></strong></li>
                <li>Journal of Low Power Electronics (JOLPE), <strong><i>American Scientific Publishers</i></strong></li>
                <li><strong><i>EURASIA</i></strong> Journal of Mathematics, Science and Technology Education</li>
                <li>Semiconductor Science &amp; Technology, <strong><i>IOP</i></strong></li>
                <li><strong><i>IEEE</i></strong> Journal of Radio Frequency Identification</li>
                <li><strong><i>IET</i></strong> Circuit Devices &amp; Systems</li>
                <li><strong><i>IEEE</i></strong> Transactions on Circuit &amp; System-II: Express Brief</li>
                <li>NETNOMICS: Economic Research and Electronic Networking, <strong><i>Springer</i></strong></li>
                <li>Indonesian Journal of Electrical Engineering and Informatics</li>
                <li>Indian Journal of Science and Technology</li>
                <li>Indonesian Journal of Electrical Engineering and Informatics</li>
                <li>Journal of Electrical Engineering and Technology, <strong><i>Springer</i></strong></li>
                <li><strong><i>IEEE</i></strong> Access Journal</li>
                <li>International Journal of Circuit Theory &amp; Applications, <strong><i>Wiley</i></strong></li>
                <li><strong><i>IET</i></strong> Computer &amp; Digital Techniques</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Reviewer in Conferences:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong><i>IEEE</i></strong> Zooming Innovation in Consumer Technologies Conference (ZINC 2020), 26-27 May 2020, Serbia.</li>
                <li>9th <strong><i>IEEE</i></strong> International Conference on Consumer Electronics (IEEE ICCE-2019) on 08-11, September 2019, Berlin, Germany.</li>
                <li> 4th <strong><i>IEEE</i></strong> International Symposium on Smart Electronic Systems (IEEE iSES- 2018) on 17-19, December 2018, Hyderabad, India.</li>
                <li><strong><i>IEEE</i></strong> Conference on Information and Communication Technology (CICT - 2017), 3-5 November 2017, ABV-IIITM, Gwalior, India.</li>
                <li><strong><i>IEEE</i></strong> International Conference on Innovations in Electronics, Signal Processing and Communication (IESC 2017), 6th - 7th April 2017, Shillong, India.</li>
                <li><strong><i>IEEE</i></strong> International Conference on Electrical, Electronics, Computers and Optimization Techniques (ICEECCOT 2016), 9th - 10th Dec 2016, Mysuru, India.</li>
                <li>23rd <strong><i>IEEE</i></strong> International Conference on Electronics Circuits and Systems (ICECS - 2016) 11-14th December 2016, Monte Carlo, Monaco, France.</li>
                <li>59th International Midwest Symposium on Circuit and System (MWSCAS - 2016), <strong><i>IEEE</i></strong>, 16th - 19th October 2016, Abu Dhabi, UAE.</li>
                <li>2nd International Conference on Recent Advances in Engineering and Computational Sciences, <strong><i>IEEE</i></strong>, Chandigarh, 21st - 22nd December 2015.</li>
                <li>2nd International Conference on Computer &amp; Communication Technologies, <strong><i>Springer AISC Series</i></strong>, Hyderabad, 24th - 26th July 2015.</li>
                <li>International Conference on Industrial Instrumentation and Control, <strong><i>IEEE</i></strong>, Pune, India 28th - 30th May 2015.</li>
                <li>2nd <strong><i>IEEE</i></strong> International Conference on Advances in Computing and Communication Engineering, Dehradun, India, 1st - 2nd May 2015.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Technical Program / Organizing Committee:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong><i>Technical Program Committee (TPC) Member</i></strong> at 3rd International Conference on Machine Intelligence and Signal Processing (MISP-2021), Springer, 23-25 September 2021, Arunachal Pradesh, India.</li>
                <li><strong><i>Technical Program Committee (TPC) Member</i></strong> at IEEE Zooming Innovation in Consumer Technologies Conference (ZINC 2021), 26-27 May 2021, Novi Sad, Serbia.,</li>
                <li><strong><i>Technical Program Committee (TPC) Member</i></strong> at International Conference on Microelectronics and Nanoelectronics (ICoMN 2021), 19-21st February 2021, Seoul, South Korea.</li>
                <li><strong><i>Technical Program Committee (TPC) Member</i></strong> at 14th IEEE International Conference on Application of Information and Communication Technologies (AICT 2020), 07-09th October 2020, Tashkent University of Information Technologies, Uzbekistan.</li>
                <li><strong><i>Chair / Secretary</i></strong> at 1st Springer International Conference on Electronics Systems &amp; Intelligent Computing (ESIC 2020), 02 - 04 March 2020, NIT Arunachal Pradesh, India.</li>
                <li><strong><i>Publicity Chair</i></strong> at 5th IEEE International Symposium on Smart Electronic Systems (IEEE iSES - 2019) on 17-19th, December 2019, NIT Rourkella, India.</li>
                <li><strong><i>Publicity Chair</i></strong> at 4th IEEE International Symposium on Smart Electronic Systems (IEEE iSES - 2018) on 17-19th, December 2018, Hyderabad, India.</li>
                <li><strong><i>Advisory Committee Member</i></strong> at 3rd IEEE International Conference on Electrical, Electronics, Communication, Computer Technologies and Optimization Techniques (ICEECCOT- 2018) on 14-15, December 2018, Mysuru, India.</li>
                <li><strong><i>Technical Program Committee (TPC) member</i></strong> at 2nd International Conference on Advanced Informatics for Computing Research (ICAICR-2018), 14th - 15th July 2018, Shimla, India.</li>
                <li><strong><i>Technical Program Committee (TPC) member</i></strong> at IFSA International Conference on Microelectronic Devices and Technologies (MicDAT&apos; 2018), UPC Barcelona, Spain, 20 - 22 June 2018.</li>
                <li><strong><i>Technical Program Committee (TPC) member</i></strong> at 14th IEEE India Council International Conference (INDICON 2017), 15-17th December 2017, IIT Roorkee, India.</li>
                <li><strong><i>Publicity Chair</i></strong> at 36th IEEE International Conference on Consumer Electronics (ICCE 2018), Las Vegas, USA.</li>
                <li><strong><i>Publicity Chair</i></strong> at 3rd IEEE International Symposium on Nano-electronic and Information Systems (<strong><i>IEEE iNIS 2017</i></strong>), Chandigarh, India.</li>
                <li><strong><i>Technical Program Committee (TPC) member</i></strong> at <strong><i>IEEE</i></strong> Conference on Information and Communication Technology (CICT - 2017), 3-5 November 2017, ABV-IIITM, Gwalior, India.</li>
                <li><strong><i>Technical Program Committee (TPC) member</i></strong> at 2nd <strong><i>IEEE</i></strong> International Symposium on Nano-electronic and Information Systems (<strong><i>IEEE</i></strong> iNIS 2016), ABV-IIITM, Guwalior, India.</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Seminar / Workshop Organized:</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>A Training / Workshop on <strong><i>Tape out Flow of ASIC</i></strong> sponsored by TEQIP-III at NIT Arunachal Pradesh from 25th to 30th June 2018. </li>
                <li>A hands-on Training cum workshop on <strong><i>Design Flow on Xilinx VIVADO</i></strong> at NIT Arunachal Pradesh in collaboration with Core-EL Technologies, Bangalore, India from 30th September to 1st October 2016.</li>
                <li>An One Week National Workshop on <strong><i>Recent Trends in VLSI Design</i></strong> sponsored by SMDP-C2SD, Govt. of India at NIT Arunachal Pradesh from 16th to 22nd September 2015.</li>
                <li>A workshop on <strong><i>VLSI Design</i></strong> at NIT Arunachal Pradesh, India in the month of November 2013.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conferences">
          <Card className="bg-blue-200">
            <CardHeader>
              <CardTitle>Conference Participation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <TimelineItem icon={<Globe className="h-4 w-4" />}>
                  <h3 className="font-semibold">IEEE International Symposium on Circuits and Systems (ISCAS 2018)</h3>
                  <p className="text-sm text-muted-foreground">27-30 May 2018, Florence, Italy</p>
                </TimelineItem>
                <TimelineItem icon={<Globe className="h-4 w-4" />}>
                  <h3 className="font-semibold">IEEE International Conference on Electronics, Information, and Communication (ICEIC 2017)</h3>
                  <p className="text-sm text-muted-foreground">11-14 January 2017, Phuket, Thailand</p>
                </TimelineItem>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}