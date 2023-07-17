import { Component, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Component({
  selector: 'app-change-psw',
  templateUrl: './change-psw.component.html',
  styleUrls: ['./change-psw.component.scss']
})
export class ChangePSWComponent implements OnInit {

  msgs: Message[] = [];

  
  constructor(private service: MessageService) { }

  ngOnInit(): void {
  }


  showInfoViaToast() {
    this.service.add({key: 'tst', severity: 'info', summary: 'Info Message', detail: 'Check Your Email'});
}

}
