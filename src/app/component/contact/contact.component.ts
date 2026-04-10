import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  email: string = 'nicohernanbecco@gmail.com';
  cvPath: string = 'doc/CV_Becco_Nicolas_Desarrollador_Software.pdf';

  enviarMail() {
  console.log('Botón clickeado');
  const subject = encodeURIComponent('Contacto desde tu Portafolio');
  const mailtoLink = `mailto:${this.email}?subject=${subject}`;
  
  window.location.href = mailtoLink;
  }
}