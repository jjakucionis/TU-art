var pcs = [
	{ "modelis":"lenovo idėja", "kaina":1234, "spalva":{"raudona":1,"žalia":2} },
	{ "modelis":"hp monstras", "kaina":800, "spalva":{"juoda":2,"geltona":0} },
	{ "modelis":"toshiba sriuba", "kaina":256, "spalva":{"mėlyna":3,"žalia":1} },
	{ "modelis":"dell apskritimas", "kaina":697, "spalva":{"juoda":1,"balta":2} },
	{ "modelis":"acer peizažas", "kaina":620, "spalva":{"juoda":4,"balta":2} },
	{ "modelis":"apple 256", "kaina":2560, "spalva":{"balta":3,"juoda":1} },
	{ "modelis":"asus pokšt", "kaina":1001, "spalva":{"juoda":2,"geltona":3} }
],
    maxSuma = 1600,
    kiekis = 2,
    spalva1 = "balta",
    spalva2 = "juoda",
    i = "",
    spalvaKeys = "";
    


console.log("Galimi variantai: ");
    
for (i = 0; i <= pcs.length; i++) {
    if (pcs[i].kaina * kiekis <= maxSuma) {
        if (pcs[i].spalva.balta >= kiekis && pcs[i].spalva.juoda >= kiekis) {
            spalvaKeys = Object.keys(pcs[i].spalva);
            console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + (pcs[i].kaina * kiekis) + "\n" + "Spalvos: " + spalvaKeys[1] + " ir " + spalvaKeys[0]);
        } else if (pcs[i].spalva.juoda >= kiekis) {
            spalvaKeys = Object.keys(pcs[i].spalva);
            if (spalvaKeys[0] === spalva2) {
                console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + (pcs[i].kaina * kiekis) + "\n" + "Spalvos: " + spalvaKeys[0]);                 
            }  else {
                console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + (pcs[i].kaina * kiekis) + "\n" + "Spalvos: " + spalvaKeys[1]);                                        
            }                 
        } else if (pcs[i].spalva.balta >= kiekis) {
            spalvaKeys = Object.keys(pcs[i].spalva);
            if (spalvaKeys[0] === spalva1) {
                console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + (pcs[i].kaina * kiekis) + "\n" + "Spalvos: " + spalvaKeys[0]);                                
            }  else {
                console.log("Modelis: " + pcs[i].modelis + "\n" + "Kaina: " + (pcs[i].kaina * kiekis) + "\n" + "Spalvos: " + spalvaKeys[1]);                                                        
            }                
        } 
    }
}    
    