import {AfterContentInit, Component, ComponentFactoryResolver, ComponentRef, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {User} from './auth-form/interfaces/user';
import {CustomDynamicComponent} from './auth-form/components/custom-dynamic/custom-dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {

  viewIndex = 0;

  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('tmpl', {read: TemplateRef}) tmpl: TemplateRef<any>;

  remember = false;

  component: ComponentRef<CustomDynamicComponent>;

  obj: { [key: string]: number | string } = {a: 1, b: 2, c: 3};

  constructor(private resolver: ComponentFactoryResolver) {

  }


  onRemember(value: boolean) {
    this.remember = value;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.remember);
  }

  ngAfterContentInit(): void {
    const customDynamicFactory = this.resolver.resolveComponentFactory(CustomDynamicComponent);
    this.entry.createComponent(customDynamicFactory);
    this.component = this.entry.createComponent(customDynamicFactory, 0);
    this.component.instance.text = 'La la la!';
    this.component.instance.clickEvt.subscribe((val) => console.log(val));

    this.entry.createEmbeddedView(this.tmpl, {$implicit: 'Max', greet: 'Hello'});
  }

  destroyCmp() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  changeObj() {
    this.obj = {a: 'a', b: 'b', c: 'c'};
  }

  changeProp() {
    this.obj.a = 'asd';
  }

}
