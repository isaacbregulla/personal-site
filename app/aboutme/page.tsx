"use client";
import { PageStyle } from "../pagestyle"

export default function AboutMe(){

  const workexp = [
    {date:"10/2025 – 03/2026", title: "Tutor Algorithmen und Datenstrukturen" ,company: "Georg-August-Universität Göttingen" , description: "- Durchführung wöchentlichen Übungssitzungen\n- Korrektur und Bewertung von Übungsblättern\n- Korrektur und Bewertung von Klausuren"},
    {date:"12/2020 – 10/2021", title: "Application Manager", company: "Digital cuisine GmbH & Co. KG", description:"- Beantworten von Rezessionen im Play- und Appstore"},
  ];
  
  const education = [
    {date: "04/2025 – 03/2026", title: "Angewandte Informatik (M.Sc., Universität Göttingen)", focus: "Schwerpunkt: Anwendungsorientierte Systementwicklung mit\nVertiefung Wirtschaftsinformatik (unterbrochen)"},
    {date:"08/2022 – 08/2025", title: "Angewandte Informatik (B.Sc., Universität Göttingen)", focus: "Schwerpunkt: Anwendungsorientierte Systementwicklung\n(Regelstudienzeit)"},
  ];

  const programming = [
    {title: "Programmiererfahrungen:", text: "Backend: Prolog, RISC-V, C/C++, Java, Python, Haskell\nDevelopment & Tools: Slurm, Docker, Git, Bash, Ant, CMake\nFrontend: HTML, TypeScript\nDatenbanken & -format: SQL, XML"},
    {title:"Programmierprojekte:", text: "Algorithmen für Programmierwettbewerbe (C++), Interaktives\nKartenspiel, XML-basierte Zustandsverwaltung (Java),\nUmsetzung/Optimierung von drei NLP-Tasks (STS, SST, QQP) mithilfe\nvon PyTorch (Python), Entwicklung einer datenbankgestützten\nWebsite mit Django (Python)"},
  ];

  return (
      <PageStyle>
        <div className = "flex w-full h-full dark:bg-gray-800 bg-gray-300">
          <div className = "flex flex-col h-full w-full dark:bg-gray-800 bg-gray-300 text-xs sm:text-xs md:text-sm lg:text-md mt-8">
            <h2 className = "p-10"><strong className = "text-md sm:text-lg md:text-xl lg:text-2xl"> Curriculum Vitae - CV </strong></h2>
            
            <div className = "flex">
              <div className = "w-80 sm:w-96 md:w-110 lg:w-125 xl:w-175 h-full justify-center items-center ml-10">
                <h3 className = ""><strong>Profile:</strong></h3>
                <p>Graduate in Applied Computer Science with a focus on backend development and data-driven
                    applications. Experienced in Python, Java, and C/C++ through practical academic projects, with an 
                    interest in developing efficient software solutions.</p>
              </div>

              <div className = "w-80 sm:w-96 md:w-110 lg:w-125 xl:w-175 h-full justify-center items-center mr-10 p-4">
                <p><strong>Name: </strong>Isaac Bregulla</p>
                <p><strong>E-Mail: </strong>isaacbregulla@gmail.com</p>
                <p><strong>Geburt: </strong>Cuxhaven, 18.04.2000</p>
                <p><strong>Name: </strong>German (L1), English (L1)</p>
              </div>
            </div>
            
            <h3 className = "p-12"> <strong className = "text-sm sm:text-md md:text-lg lg:text-xl">Berufliche Erfahrung</strong></h3>
            
            {workexp.map( (workex) => (<div className = "flex justify-center p-3 h-full" key = {workex.date}>
              <div className = "w-30 sm:w-46 md:w-60 lg:w-75 xl:w-120 h-full text-center whitespace-pre-line">
                <p className = ""><strong>{workex.date}</strong></p>
              </div>

              <div className = "w-130 sm:w-146 md:w-160 lg:w-175 xl:w-230 h-full justify-center mr-50 whitespace-pre-line">
                <p><strong>{workex.title}</strong></p>
                <p>{workex.company}</p>
                <p className = "ml-1">{workex.description}</p>
              </div>
            </div>
            ))}

            <h3 className = "p-12"> <strong className = "text-sm sm:text-md md:text-lg lg:text-xl">Ausbildung</strong></h3>
            
            {education.map( (edu) => (<div className = "flex justify-center p-3 h-full" key = {edu.date}>
              <div className = "w-30 sm:w-46 md:w-60 lg:w-75 xl:w-120 h-full text-center whitespace-pre-line">
                <p className = ""><strong>{edu.date}</strong></p>
              </div>

              <div className = "w-130 sm:w-146 md:w-160 lg:w-175 xl:w-230 h-full justify-center mr-50 whitespace-pre-line">
                <p><strong>{edu.title}</strong></p>
                <p>{edu.focus}</p>
              </div>
            </div>
            ))}

            <h3 className = "p-12"> <strong className = "text-sm sm:text-md md:text-lg lg:text-xl">Skills</strong></h3>
            
            {programming.map( (prog) => (<div className = "flex justify-center p-3 h-full" key = {prog.title}>
              <div className = "w-30 sm:w-46 md:w-60 lg:w-75 xl:w-120 h-full text-center whitespace-pre-line">
                <p className = ""><strong>{prog.title}</strong></p>
              </div>

              <div className = "w-130 sm:w-146 md:w-160 lg:w-175 xl:w-230 h-full justify-center mr-50 whitespace-pre-line">
                <p>{prog.text}</p>
              </div>
            </div>
            ))}
            <div className = "w-full h-100"></div>
          </div>
        </div> 
      </PageStyle>
    );
}