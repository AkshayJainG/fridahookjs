var basename = "libunity.so";
var base = Module.findBaseAddress(basename);

console.log("base: " + basename + " " + "addr: " + base.toString());

var offset = 0xFC3CF0;
var func = base.add(offset)

console.log("func addr: " + func.toString());

Interceptor.attach(func, {
    onEnter(args) {
        //console.log("hook!: " , args[0], args[1]);
        //var path = (args[0]).toString();
        //var p = new NativePointer(path);
        //console.log(p.readCString());
        //path = (args[1]).toString();
        //p = new NativePointer(path);
        //console.log(p.readCString());

        console.log("func invoke!");
    }
  });
