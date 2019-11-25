setImmediate(
    function()
    {
        var libname = "libandroidfw.so";
        var module = Module.load(libname);
        var exports = module.enumerateExports();

        console.log("lib: " + libname + " addr: " + module.base.toString());
        console.log("export syms lenth is " + exports.length);

        for(var i=0,len=exports.length;i<len;i++)
        {
                var sym = exports[i];
                if(sym.type == "function" && 
                ((sym.name.search("AssetManager") != -1 ) || 
                (sym.name.search("Asset") != -1))
                )
                {   try
                    {
                        Interceptor.attach(sym.address, 
                        {
                            onEnter:function(args)
                            {
                                console.log("invoke " + sym.name);
                            }
                        });
                    }
                    catch(err)
                    {
                        console.log(err.message);
                    }
                    console.log("hook function name: " + sym.name);
            
                };
        }
    }
);
