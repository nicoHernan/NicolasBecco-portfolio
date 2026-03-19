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
      company: 'Nombre de la Empresa o Freelance',
      position: 'Software Developer',
      period: 'Ene 2024 - Presente',
      description: 'Desarrollo de soluciones Full Stack enfocadas en la experiencia de usuario y escalabilidad.',
      achievements: [
        'Liderazgo de equipos: Coordinación y guía de grupos de estudiantes en el desarrollo de proyectos técnicos integrales, fomentando metodologías de trabajo colaborativo y comunicación efectiva.',
        'Mentoría técnica: Simplificación y transmisión de conceptos complejos de programación, lógica y electrónica para perfiles no técnicos, asegurando la comprensión y aplicación práctica de los mismos.',
        'Resolución de problemas: Facilitación de estrategias para el debugging y la resolución de conflictos en el desarrollo de software y hardware (Arduino/C++), orientando a los equipos hacia soluciones creativas y funcionales.',
        'Gestión de proyectos con Arduino: Supervisión del ciclo de vida de prototipos electrónicos, desde el diseño de la lógica de programación hasta la implementación física y testeo.'
      ]
    }
  ];
}