
function abstractClass(target, type) {
	// Abstract class. 
    if (new.target === type) {
      	throw new TypeError("Cannot construct Abstract instances directly");
    }
}