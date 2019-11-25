Java.perform(
    function(){
        var offset = 0xFDC84;//addr of func hooked in so
        var base = Module.getBaseAddress('libcocos2dlua.so');
        var nativepointer = base.add(offset);
        Interceptor.attach(nativepointer,
            {onEnter: function(args){
                
            },
            onLeave: function(args){

            }
            });
    }
)