import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowed = false;
  serverCreationStatus = "New Server not yet created";
  serverName = "";
  serverCreated = false;
  servers = ["server1", "server2"];
  log=[];

  toggle = false;
  toogleButton(){
    this.toggle=!this.toggle;
    this.log.push(this.log.length+1);
  }
  constructor() {
    setTimeout(() => {
      this.allowed = true;
    }, 2000);
  }
  onCreationServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created";
  }

  onInputEvent(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {}
}
