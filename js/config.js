define(function(){
	return {
		"canvas": {
			"id": "a",
			"width": 600,
			"height": 400,
		},
		"ball": {
			"radius": 10,
			"tailCount":10,
		},
	}; 
	var config = {
		'DEBUG': 1,
		'DEMO':true,
		'MAX_PLAYERS':2,
		'winScore': 10,
		'canvasId': "canvas#game",
		'events_alpha': {
			// 'default': 1.0,
			'rollover': 0.8,
			'pressup': 0.8,
			'mousedown': 0.6,
			// 'click': 0.6,
			'mouseout': 1.0,
		},
		'button_color':"#CCC",
		'bound_thickness': 4,
		'bound_distance': 20,
		// 'arc_radius': 10,
		'paddle': {
			'R':15,
			'speed': 8,
			'_length': 60,
			'limit_distance': 60,
		},
		'players': {//players config
			'left': {
				"controls": {
					//up=-1
					//down=1
					'Q':-1,
					'A':1
				},
				'paddle': {
					'x':10,
					'freeAxis': 'y',
				},
				'score': {
					'x':40,
					'y':40
				},
				'winLabel': {
					'x':40,
					'y':40
				}
			},
			'right': {
				"controls": {
					//up=-1
					//down=1
					'&':-1,
					'(':1//move 10 on the yAxis
				},
				'paddle': {
					'x':630,
					'freeAxis': 'y',
				},
				'score': {
					'x':580,
					'y':40
				},
				'winLabel': {
					'x':580,
					'y':40
				}
			},
			// 'top': {
			// 	"controls": {
			// 		'?':'up',
			// 		'?':'down',
			// 	},
			// 	'freeAxis': 'x',
			// },
			// 'bottom': {
			// 	"controls": {
			// 		'?':'up',
			// 		'?':'down',
			// 	},
			// 	'freeAxis': 'x',
			// },
		},
		'ball': {
			'R': 10,
			'direction': {//initial
				'x':1,
				'y':1
			},
			'alphaThresh':1,
			'speed':5
		},
	};
})
