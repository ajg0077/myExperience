import { getDiffDays } from "../utils/datesUtil";
export const experiences = [
  {
    id: "166e45ce-7e7e-427c-bed5-3870b65ae8e4",
    experience: 7,
    title: "Senior Software Engineer",
    company: "EPAM Anywhere, Bengaluru, Karnataka",
    startDate: new Date("09/26/2023"),
    endDate: null,
    type: "WORK",
    relevant: true,
    experienceItems: [
      "Designed and implemented microservices architecture using Spring Boot 3 and Java 17",
      "Utilized Docker to containerize microservices and orchestrated them with Kubernetes",
      "Configured ELK stack for centralized logging and log analysis",
      "Utilized Apache Kafka for event streaming, implementing producers and consumers within microservices",
      "Implemented CRUD operations with AWS DynamoDB for data persistence within microservices"
    ],
  },
  {
    id: "926e45ce-7e7e-427c-bed5-387df65ae8e4",
    experience: 6,
    title: "Devops with Azure (Apprenticeship)",
    company: "ICT Academy of Kerala, Trivandrum, Kerala",
    startDate: new Date("01/06/2023"),
    endDate: new Date("30/07/2023"),
    type: "EDU",
    relevant: false,
    experienceItems: [
      "Architected CI\CD build, release and deploy process using Azure DevOps",
      "Set up Linux and Windows Virtual Machines for hosting applications",
      "Configured and used Git repository in Azure Repos for version controlling",
      "Utilized Apache Kafka for event streaming, implementing producers and consumers within microservices",
      "Implemented GitHub actions to synchronize with Azure Repos"
    ],
  },
  {
    id: "9d14cc36-efcb-11ed-a05b-0242ac120003",
    experience: 5,
    title: "ENGINEER L2",
    company: "IBS Software Pvt. Ltd., Technopark, Trivandrum, Kerala",
    startDate: new Date("11/19/2021"),
    endDate: new Date("04/19/2023"),
    type: "WORK",
    relevant: true,
    experienceItems: [
      "Employed Spring Boot framework for microservice development",
      "Established client-server communication through REST, gRPC, and Apache Kafka",
      "Efficiently containerized microservices via Docker and orchestrated AWS cluster deployment using Kubernetes (EKS) in conjunction with Jenkins CI/CD pipeline",
      "Proficiently utilized Git and GitHub for version control",
      "Leveraged Splunk and Datadog for error log monitoring, while also making use of distributed tracing.",
      "Thoroughly documented code logic within Confluence",
    ],
  },
  {
    id: "a14e5e8e-efcb-11ed-a05b-0242ac120003",
    experience: 4,
    title: "SOFTWARE ENGINEER",
    company:
      "Ospyn Technologies Private Limited, Technopark, Trivandrum, Kerala",
    startDate: new Date("02/19/2019"),
    endDate: new Date("11/19/2021"),
    type: "WORK",
    relevant: true,
    experienceItems: [
      "Developed Standalone applications using SpringBoot, SpringData JPA, JavaFX, mySQL, H2",
      "Developed a web-based document viewer utilizing jQuery, fabric.js, HTML, CSS",
      "Established seamless client-server interactions through REST, RabbitMQ, Feign",
      "Designed and developed a desktop application document viewer using JavaFX",
      "Worked with SVN for version control",
      "Employed Maven for streamlined builds and employed Tomcat server for application deployment"
    ],
  },
  {
    id: "a52df2da-efcb-11ed-a05b-0242ac120003",
    experience: 3,
    title: "INITIAL LEARNING PROGRAMME for Ospyn Technologies (Apprenticeship)",
    company: "Faith Infotech, Technopark, Trivandrum, Kerala",
    startDate: new Date("11/11/2018"),
    endDate: new Date("02/19/2019"),
    type: "EDU",
    experienceItems: [
      "Engaged in technology familiarization with Ospyn Technologies",
      "Contributed to projects involving Time Sheet and Expense Tracker",
    ],
  },
  {
    id: "1bd96588-efca-11ed-a05b-0242ac120003",
    experience: 2,
    title: "INTENSIVE INTERNSHIP PROGRAMME (Apprenticeship)",
    company: "Scope India, Thampanoor, Trivandrum, Kerala",
    startDate: new Date("06/01/2018"),
    endDate: new Date("11/11/2018"),
    type: "EDU",
    experienceItems: [
      "Attained technical knowledge in Java, Spring, JavaScript, Jquery, Angular JS, Node JS, MySQL,Html5, CSS3, Bootstrap",
      "Assisted in live projects. ",
    ],
  },
  {
    id: "fbd3da48-efc9-11ed-a05b-0242ac120003",
    experience: 1,
    title: "BPO Ajent",
    company: "Phoenix Technologies",
    startDate: new Date("01/01/2017"),
    endDate: new Date("05/30/2018"),
    type: "WORK",
    relevant: false,
    experienceItems: [
      "Provided quality reports, property value findings.",
      "Designing, maintaining and supporting existing applications and tools in Microsoft Office 2016",
      "Client support with queries relating to BPO",
    ],
  },
];

var totalExpCache = null;

export const getTotalExp = () => {
  console.log("getting exp")
  var currentDate = new Date();
  if (totalExpCache != null && getDiffDays(currentDate, totalExpCache.generatedDate) > 0) {
    return totalExpCache;
  }
  console.log("generating exp")
  var totalExp = { totalDays: 0, relevantDays: 0, totalYears: 0, relevantYears: 0, generatedDate: currentDate }
  experiences.forEach((item) => {
    if (item.type === "WORK") {
      var startDate = item.startDate;
      var endDate = (null != item.endDate) ? item.endDate : new Date();
      const diffDays = getDiffDays(endDate, startDate)
      totalExp.totalDays = totalExp.totalDays + diffDays;
      if (item.relevant) {
        totalExp.relevantDays = totalExp.relevantDays + diffDays;
      }
    }
  })
  totalExp.totalYears = Math.round(totalExp.totalDays / 365);
  totalExp.relevantYears = Math.round(totalExp.relevantDays / 365);
  totalExpCache = totalExp;
  return totalExp;
}