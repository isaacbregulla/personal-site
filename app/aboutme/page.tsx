"use client";
import { PageStyle } from "../pagestyle"

export default function AboutMe(){
  return (
      <PageStyle>
        <div className = "flex w-full h-full dark:bg-gray-800 bg-gray-300">
          <div className = "flex flex-col h-full w-full dark:bg-gray-800 bg-gray-300 text-xs sm:text-sm md:text-md lg:text-lg">
            <h2 className = "p-10"><strong className = "text-md sm:text-lg md:text-xl lg:text-2xl"> Curriculum Vitae - CV </strong></h2>
            <div>
                <div className = "xs:w-80 sm:w-96 md:w-110 lg:w-125 w-175 justify-center items-center">
                  <h3 className = "p-8 "><strong>Profile:</strong></h3>
                  <p>Graduate in Applied Computer Science with a focus on backend development and data-driven
                     applications. Experienced in Python, Java, and C/C++ through practical academic projects, with an 
                      interest in developing efficient software solutions.</p>
                </div>
                <div className = "xs:w-80 sm:w-96 md:w-110 lg:w-125 w-175">


                </div>
              </div>
          </div>
        </div> 
      </PageStyle>
    );
}


/*

Profil:
Absolvent der angewandten Informatik mit Fokus
auf Backend-Entwicklung und datengetriebene
Anwendungen. Erfahrung in Python, Java und
C/C++ durch praktische Studienprojekte, Interesse
an der Entwicklung effizienter Softwarelösungen.
Name:
Anschrift:
E-Mail:
Geburt:
Sprachen:
Isaac Bregulla
Nußanger 91, 37079 Göttingen
isaacbregulla@gmail.com
Cuxhaven, 18.04.2000
Deutsch (L1), Englisch (L1)
Berufliche Erfahrung
10/2025 – 03/2026
12/2020 – 10/2021
Ausbildung
04/2025 – 03/2026
08/2022 – 08/2025
Kenntnisse
Programmiererfahrungen:
Programmierprojekte:
Tutor Algorithmen und Datenstrukturen
Georg-August-Universität Göttingen
• Durchführung wöchentlichen Übungssitzungen
• Korrektur und Bewertung von Übungsblättern
• Korrektur und Bewertung von Klausuren
Application Manager
digital cuisine GmbH & Co. KG
• Beantworten von Rezessionen im Play- und Appstore
Angewandte Informatik (M.Sc., Universität Göttingen)
Schwerpunkt: Anwendungsorientierte Systementwicklung mit
Vertiefung Wirtschaftsinformatik (unterbrochen)
Angewandte Informatik (B.Sc., Universität Göttingen)
Schwerpunkt: Anwendungsorientierte Systementwicklung
(Regelstudienzeit)
Backend: Prolog, RISC-V, C/C++, Java, Python, Haskell
Development & Tools: Slurm, Docker, Git, Bash, Ant, CMake
Frontend: HTML
Datenbanken & -format: SQL, XML
Algorithmen für Programmierwettbewerbe (C++), Interaktives
Kartenspiel, XML-basierte Zustandsverwaltung (Java),
Umsetzung/Optimierung von drei NLP-Tasks (STS, SST, QQP) mithilfe
von PyTorch (Python), Entwicklung einer datenbankgestützten
Website mit Django (Python)
 */