setImmediate(
	function(){

		var target_so = "libandroidfw.so"//libandroid.so
		var target_func = "_ZN7android12AssetManager4openEPKcNS_5Asset10AccessModeE"
		var target_func2 = "_ZN7android5Asset24createFromCompressedFileEPKcNS0_10AccessModeE"
		var target_func3 = "_ZN7android5Asset23createFromCompressedMapEPNS_7FileMapEjNS0_10AccessModeE"
		var target_func4 = "_ZNK7android9ZipFileRO18createEntryFileMapEPv"
		var target_func5 = "_ZN7android12AssetManager24openNonAssetInPathLockedEPKcNS_5Asset10AccessModeERKNS0_10asset_pathE"
		var target_func6 = "_ZN7android10_FileAsset4readEPvj"	
				
		var func = Module.findExportByName(target_so, target_func6 );
		console.log("so::" + target_so + " " + "func::" + target_func6 + " " + "addr::"+ func.toString());
		Interceptor.attach(func, {
			onEnter:function(args){
				console.log("invoke " + target_func)
				//var p = args[1].toString();
				//var path = new NativePointer(p);
				//console.log(path.readCString());
		}

	});
});

