import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";


interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})

export class ExperienceComponent {
  experience: Experience[] = [
    {
      company: 'Gobierno de la Ciudad de Buenos Aires (Ministerio de Educación)',
      position: 'Profesor Técnico',
      period: 'Marzo 2013 - Presente',
      description: 'Responsable de la formación y dirección técnica de alumnos, traduciendo conceptos complejos de lógica en soluciones prácticas y funcionales mediante el uso de tecnologías como C++ y Arduino.',
      achievements: [
        'Liderazgo de equipos: Coordinación y guía de grupos de estudiantes en el desarrollo de proyectos técnicos integrales, fomentando metodologías de trabajo colaborativo y comunicación efectiva.',
        'Mentoría técnica: Simplificación y transmisión de conceptos complejos de programación, lógica y electrónica para perfiles no técnicos, asegurando la comprensión y aplicación práctica de los mismos.',
        'Resolución de problemas: Facilitación de estrategias para el debugging y la resolución de conflictos en el desarrollo de software y hardware (Arduino/C++), orientando a los equipos hacia soluciones creativas y funcionales.',
        'Gestión de proyectos con Arduino: Supervisión del ciclo de vida de prototipos electrónicos, desde el diseño de la lógica de programación hasta la implementación física y testeo.'
      ]
    }
  ];
}