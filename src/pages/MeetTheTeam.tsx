import { Github, Linkedin, Mail, Coffee, Book, Music, Gamepad2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MeetTheTeam = () => {
  const team = [
    {
      name: "Garcia, Seth Ezekiel G. ",
      role: "Lead Researcher",
      bio: "Led the team with the creation of the idea and led in the provision of website info. Supervised the creation of the research paper.",
      funFact: "seth.garcia130155@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.15752-9/541654163_1114732806792937_7920504730320560141_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHouQ2F8xy4-86BnGKDe2SpbpalOzNTQrxulqU7M1NCvPbDQzTsIEo98pZ5JcpnuaS6Yxan4Oa-TyyVsOSQ7Sui&_nc_ohc=cqy5AereUnUQ7kNvwFduaLy&_nc_oc=AdkvBbjLqfeb5twyUDxYd3V9GXe47qUnsP8bqfOIyvITnkbV5yvAIdEYrTELwSKu05U&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&oh=03_Q7cD3QFES_DAqCSjdOZLS85cuP4MHxBu_qv8y7c1gfn4DB0gxQ&oe=68E6C632"
    },
    {
      name: "Basagre, Guenne Marie P.",
      role: "Researcher",
      bio: "Contructed the conceptual framewrok sampling method as well as the population and research questions.",
      funFact: "guenne.basagre210494@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t1.15752-9/546420252_787823943932273_4299745452184288296_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeGDji1H1IgtvVMIywfkX3Swsjwrq9NIeqSyPCur00h6pLy1QDdpywPxv6cE4BNvEG-WpY5NN4o9l2WaDQB4ftNR&_nc_ohc=LCQMQtuiWtgQ7kNvwF8ToXy&_nc_oc=AdllRU6-IboauI2WkcLxk8QDRiB4VHrPYiiF1mKu-KR7hIaJ52VGFSYnGrIOVg0v5_8&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&oh=03_Q7cD3QFU5ePy9DwxNwNLL25fW_wF0wCQ8wEcbblmxKWDpG_nUg&oe=68E6DC15"
    },
    {
      name: "Eleazar, Kaelyn Sigrid T.",
      role: "Researcher",
      bio: "Helped with the construction of the conceptual framework and the production of the ethical guidelines",
      funFact: "kaelyn.eleazar240044@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: "https://scontent.fmnl4-7.fna.fbcdn.net/v/t1.15752-9/541699900_763562023144333_7399965489715592348_n.jpg?stp=dst-jpg_p480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGoh_5gQQxjAua7XhybHNosfbvq7_PHlG19u-rv88eUbRhZkYP6qPLhiwOIfIE0YjxPq31we3b0DCqBL1t67Dsp&_nc_ohc=v4f295VDpLwQ7kNvwEVBoil&_nc_oc=AdnHYgb_u1hJFlzP7WMIqlM8IXjJ_WF0T8E8ZW6WtVLeYuCXA_Ua1-NicNQBW_ZhJkw&_nc_ad=z-m&_nc_cid=1066&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&oh=03_Q7cD3QGpCnC21QVgSKlkukwIDPVzMLT7GscNC2gKAtfTL7CkkQ&oe=68E6DA0A"
    },
    {
      name: "Flores, Juan Pablo A.",
      role: "Researcher",
      bio: "Developed the website and constucted the theoretical framework as well as the population and sampling.",
      funFact: "juan.flores240136@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: "https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.15752-9/542137651_1788554138714299_2972529726715507380_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BisorE5Jx3wQ7kNvwGPaBl7&_nc_oc=AdnNIDuxuoYaz9Piy9H_oe1GpKfVQvw_V4kUEUQCyfA85dCV58VT2BXBgMcsH05Mh48&_nc_ad=z-m&_nc_cid=1066&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&oh=03_Q7cD3QF1S3StXvIvCylq5x59WnbQsUXvsIhxIupBP4ra9XEFxA&oe=68E6F93C"
    },
    {
      name: "Lago, Juan Carlos ",
      role: "Researcher",
      bio: "Carlos mostly assisted the group in writing the research paper, providing insights and gathering relevant information for the study.",
      funFact: "Has visited all 50 US states",
      icon: <Mail className="h-4 w-4" />,
      image: "https://scontent.fmnl4-6.fna.fbcdn.net/v/t1.15752-9/541979369_1274446457235515_5157049046448902317_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeE5acoCsGsLpEAL_f1U2s9zf31kMHmdZJx_fWQweZ1knC0TGLfqSb3R_qBsQY0r5xK1owlsPYRzsepsUmk7hDaN&_nc_ohc=F1uuIdUibS0Q7kNvwG-ECqZ&_nc_oc=AdnyTHPZ1aVq-v9_YbBgU05UzKNOkT_2sl4s_dhoSDIhz5SyCQkQuvvJ3-cR7X50Xdk&_nc_zt=23&_nc_ht=scontent.fmnl4-6.fna&oh=03_Q7cD3QFmZIiMhvWh_fWRo_nlGhWv9Lq-8wwim9J1agE4ulLFEQ&oe=68E6E119"
    },
    {
      name: "Gongora, Raikko Rain M.",
      role: "Researcher",
      bio: "Constructed the significance of the study as well as the scope and delimitation of the study.",
      funFact: "raikko.gongora200508@my.lsgh.edu.ph",
      icon: <Mail className="h-4 w-4" />,
      image: "https://scontent.fmnl4-5.fna.fbcdn.net/v/t1.15752-9/541608004_1099556632323594_6988399133307739823_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_eui2=AeHQg-8L0MZP0Wq8THz7sxb15sFhn6Hy89TmwWGfofLz1BIdS11kAXC1FE8nZwuf4CfQdQqY6evOOGLrGTVKaRSj&_nc_ohc=5NCbT6Ribq8Q7kNvwFSAmHz&_nc_oc=AdnPQeD5Rjp5HTBbmZb8NgYiM2DrjIsjPMqymlWI28xah_-DomqxElt-Vl6p5b6rVCs&_nc_zt=23&_nc_ht=scontent.fmnl4-5.fna&oh=03_Q7cD3QFFNl2mmlnKJoSSNTydkaP0n7LYvYggJA-Xn6JUFNal0A&oe=68E6C5CA"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-card pt-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">Meet Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are Group-6 and provided is a short description of our members, necessarry info is given as well feel free to contact us anytime via e-mail!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 object-cover rounded-full"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="bg-muted/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    {member.icon}
                    <span className="font-medium text-primary">E-Mail:</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{member.funFact}</p>
                </div>

                <div className="flex gap-2 justify-center">
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@voteassist.com`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Us Section */}
        <section className="mt-20">
          <Card className="shadow-elegant bg-gradient-primary text-white">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl font-bold mb-4">Want to Join Our Mission?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                We're always looking for passionate individuals who want to make a difference 
                in civic engagement and democracy.
              </p>
              <Button variant="outline-white" size="lg" asChild>
                <a href="mailto:careers@voteassist.com">
                  <Mail className="mr-2 h-5 w-5" />
                  View Open Positions
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default MeetTheTeam;