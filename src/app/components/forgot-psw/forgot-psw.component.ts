import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';




@Component({
  selector: 'app-forgot-psw',
  templateUrl: './forgot-psw.component.html',
  styleUrls: ['./forgot-psw.component.scss'],
  providers: [MessageService] 

})
export class ForgotPSWComponent implements OnInit {
  msgs: Message[] = [];
  email: string = '';
  
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }


 showInfoViaToast() {
    if (this.email.trim() === '') {
      this.messageService.add({
        key: 'tst',
        severity: 'error',
        summary: 'Error Message',
        detail: 'Enter your Email to reset your password.'
      });
    } else {
      this.messageService.add({
        key: 'tst',
        severity: 'info',
        summary: 'Info Message',
        detail: 'Check Your Email'
      });
    }
  }
}









