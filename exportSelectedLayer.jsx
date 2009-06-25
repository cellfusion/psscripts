main();
function main() {
	var doc = activeDocument;
	var layer = doc.activeLayer;
		
	var name = layer.name;
	
	var duppedLayer = layer.duplicate();
	
	var targetLayer = duppedLayer.merge();
	
	var layers = targetLayer.linkedLayers;
	
	var bounds = targetLayer.bounds;
	
	targetLayer.translate(-bounds[0], -bounds[1]);
	targetLayer.copy();
	
	var newDocRef = app.documents.add(bounds[2], bounds[3], doc.resolution, name, NewDocumentMode.RGB, DocumentFill.TRANSPARENT);
	newDocRef.paste();
	
	newDocRef.trim(TrimType.TRANSPARENT, true, true, true, true);
		
	activeDocument = doc;
	targetLayer.remove();
	
	activeDocument = newDocRef;
}