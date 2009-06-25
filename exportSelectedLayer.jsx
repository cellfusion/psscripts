
main();

function main() {
	
	var doc = activeDocument;
	var targetName = doc.activeLayer.name;
	var targetLayer = doc.activeLayer.duplicate().merge();
	
	targetLayer.copy();
	
	var newDocRef = app.documents.add(doc.width, doc.height, doc.resolution, targetName, NewDocumentMode.RGB, DocumentFill.TRANSPARENT);
	newDocRef.paste();
	
	newDocRef.trim(TrimType.TRANSPARENT, true, true, true, true);	
}