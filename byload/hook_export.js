setImmediate(
	function(){
		var target_so = "libandroid.so";
		var target_func = "AAssetManager_open";

		var target_so2 = "libandroidfw.so"
		var target_func2 = "j__ZN7android12AssetManager4openEPKcNS_5Asset10AccessModeE"
		var func = Module.findExportByName(target_so2, target_func2 );
		console.log("so::" + target_so2 + " " + "func::" + target_func2 + " " + "addr::"+ func.toString());
		Interceptor.attach(func, {
			onEnter:function(args){
				var p = args[1].toString();
				var path = new NativePointer(p);
				console.log(path.readCString());
		}

	});
});

