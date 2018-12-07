import {
    Injectable,
    Injector,
    ComponentFactoryResolver,
    EmbeddedViewRef,
    ApplicationRef,
} from '@angular/core';
@Injectable()
export class DomService {
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
    ) { }
    
    appendComponentToBody(component: any,nativeElement,type) {
        let componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        componentRef.instance['admin'] = type;
        this.appRef.attachView(componentRef.hostView);        
        const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
        nativeElement.appendChild(domElem);
    }
    deleteComponent(component: any){
        let componentRef = this.componentFactoryResolver
            .resolveComponentFactory(component)
            .create(this.injector);
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
    }
    
    
}