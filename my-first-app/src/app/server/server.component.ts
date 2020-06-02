import { Component } from '@angular/core';

@Component({
    selector:"app-server",
    templateUrl:'./server.component.html',
    styles:[`
    .online {
        color:white
    }`]
})
export class ServerComponent{
    serverId=11;
    serverStatus='online';

    constructor(){
        this.serverStatus=Math.random()>0.5?"online":"offline";
    }

    getServerStatus(){
        return this.serverStatus;
    }
    getOnline(){
        return this.serverStatus==="online"?"green":"red";
    }
}