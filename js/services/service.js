function getprovincies($http) {
	// var url = 'http://api-nghyf.rhcloud.com/provinces';
	var url = 'js/data.json';
	getprovincies = this;
	getprovincies.bringData = function () {
		
		return $http.get(url)
	}
}
