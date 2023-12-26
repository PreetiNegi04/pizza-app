import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  template: `
    <div *ngFor="let message of messages">
      {{ message }}
    </div>
  `,
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  messages: string[] = [];

  ngOnInit(): void {
    const eventSource = new EventSource('http://localhost:3000');
    
    // Add event listeners to update messages array
    eventSource.addEventListener('order-processed', (event: any) => {
      this.messages.push('Order Processed');
    });

    eventSource.addEventListener('you-get-fries', (event: any) => {
      this.messages.push('You get fries');
    });
  }
}