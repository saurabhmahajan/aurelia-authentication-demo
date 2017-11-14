export class App{
    constructor(){
        this.message = "Welcome to aurelia authentication";
    }

    configureRouter(config, router){
        this.router = router;

        config.map([
            {route: ['', 'login'], moduleId: PLATFORM.moduleName('account/login'), name:'login', nav:true, title:'Login'},
            {route: 'home', moduleId: PLATFORM.moduleName('admin/admin'), name:'admin', nav:true, title:'Home'},
            {route:'products', moduleId: PLATFORM.moduleName('products/list'), name: 'product-list', nav:true, title: 'Product List'}
        ]);
    }
}