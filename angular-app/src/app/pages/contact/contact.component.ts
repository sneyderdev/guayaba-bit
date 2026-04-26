import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  showModal = false;

  enviarMensaje(event: Event) {
    event.preventDefault();
    this.showModal = true;
    
    // Reset form
    const form = event.target as HTMLFormElement;
    form.reset();
  }

  closeModal() {
    this.showModal = false;
  }
}