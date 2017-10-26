CDctrl.login={
    __init__:function(){
        console.log('__login__')
    },
    login:function($this){
        console.log('login', $this);
        CDpages.goto('one');
    },
    init:function(){
        console.log("login init");
    }
}
CDctrl.login.init();
