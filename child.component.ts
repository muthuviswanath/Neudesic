import { Component} from "@angular/core";


@Component({
    selector:'child',
    templateUrl:'./child.component.html',

})

export class ChildComponent{
public info:string = "This message is from child component";
}